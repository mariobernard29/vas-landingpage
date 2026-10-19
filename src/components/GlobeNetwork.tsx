import { useEffect, useRef, useState } from 'react';

type Cities = Record<'mia' | 'mad' | 'hou' | 'par' | 'bue' | 'was' | 'ccs', string>;

const CCS = { id: 'ccs', lat: 10.6012, lng: -66.9912 }; // CCS Maiquetía
const ORIGINS = [
  { id: 'mia', code: 'MIA', lat: 25.7617, lng: -80.1918 },
  { id: 'was', code: 'IAD', lat: 38.9072, lng: -77.0369 },
  { id: 'hou', code: 'IAH', lat: 29.7604, lng: -95.3698 },
  { id: 'bue', code: 'AEP', lat: -34.6037, lng: -58.3816 },
  { id: 'mad', code: 'MAD', lat: 40.4168, lng: -3.7038 },
  { id: 'par', code: 'LBG', lat: 48.8566, lng: 2.3522 },
] as const;

export default function GlobeNetwork({ cities, hub }: { cities: Cities; hub: string }) {
  const box = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    let globe: any;
    let ro: ResizeObserver | undefined;
    let io: IntersectionObserver | undefined;
    let disposed = false;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const start = async () => {
      const [{ default: Globe }, THREE, { default: flat }] = await Promise.all([
        import('globe.gl'),
        import('three'),
        import('../globe-dots.json'),
      ]);
      if (disposed) return;

      // Malla de puntos sobre tierra firme, precalculada con scripts/globe-dots.mjs
      const dots: any[] = [];
      for (let i = 0; i < flat.length; i += 2) dots.push({ lat: flat[i], lng: flat[i + 1], kind: 'land' });

      const arcs = ORIGINS.map((o, i) => ({
        startLat: o.lat, startLng: o.lng, endLat: CCS.lat, endLng: CCS.lng, delay: i * 420,
      }));
      const cityPts = [
        ...ORIGINS.map((o) => ({ lat: o.lat, lng: o.lng, label: cities[o.id], kind: 'city' })),
        { lat: CCS.lat, lng: CCS.lng, label: hub, kind: 'hub' },
      ];
      const points = [...dots, ...cityPts];
      const labels = cityPts;

      globe = new (Globe as any)(el, { animateIn: true })
        .backgroundColor('rgba(0,0,0,0)')
        .showAtmosphere(true)
        .atmosphereColor('#9fb3cf')
        .atmosphereAltitude(0.08)
        .globeMaterial(new THREE.MeshPhongMaterial({ color: new THREE.Color(0x15191f), emissive: new THREE.Color(0x07090c), shininess: 12 }))
        .arcsData(arcs)
        .arcColor(() => ['rgba(255,255,255,0.04)', 'rgba(255,255,255,0.95)'])
        .arcStroke(0.6)
        .arcAltitudeAutoScale(0.3)
        .arcDashLength(0.5)
        .arcDashGap(0.9)
        .arcDashInitialGap((d: any) => (d.delay / 2600) * 1.35)
        .arcDashAnimateTime(reduce ? 0 : 2600)
        .pointsMerge(true)
        .pointsData(points)
        .pointColor((d: any) => (d.kind === 'hub' ? '#ffffff' : d.kind === 'city' ? '#e2e8f0' : 'rgba(214,222,234,0.75)'))
        .pointAltitude((d: any) => (d.kind === 'hub' ? 0.05 : d.kind === 'city' ? 0.02 : 0.003))
        .pointRadius((d: any) => (d.kind === 'hub' ? 0.6 : d.kind === 'city' ? 0.42 : 0.26))
        .labelsData(labels)
        .labelText((d: any) => d.label)
        .labelSize((d: any) => (d.kind === 'hub' ? 1.7 : 1.25))
        .labelDotRadius(0)
        .labelColor((d: any) => (d.kind === 'hub' ? '#ffffff' : 'rgba(226,232,240,0.85)'))
        .labelAltitude(0.03)
        .labelResolution(3)
        .ringsData([CCS])
        .ringColor(() => (t: number) => `rgba(255,255,255,${1 - t})`)
        .ringMaxRadius(6)
        .ringPropagationSpeed(1.4)
        .ringRepeatPeriod(2600);

      // Iluminación: luz suave fría
      const scene = globe.scene();
      scene.children.filter((c: any) => c.type?.includes('Light')).forEach((l: any) => scene.remove(l));
      scene.add(new THREE.AmbientLight(0xffffff, 0.9));
      const dir = new THREE.DirectionalLight(0xffffff, 0.8);
      dir.position.set(-1, 1, 1);
      scene.add(dir);

      const c = globe.controls();
      c.autoRotate = !reduce;
      c.autoRotateSpeed = 0.35;
      c.enableZoom = false;
      c.enablePan = false;
      globe.pointOfView({ lat: 14, lng: -62, altitude: 1.95 }, 0);

      const fit = () => globe.width(el.clientWidth).height(el.clientHeight);
      fit();
      ro = new ResizeObserver(fit);
      ro.observe(el);
      setReady(true);
    };

    // Carga diferida, con margen amplio para que el globo esté listo al llegar a él.
    io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io?.disconnect();
          start();
        }
      },
      { rootMargin: '1200px 0px' },
    );
    io.observe(el);

    return () => {
      disposed = true;
      io?.disconnect();
      ro?.disconnect();
      if (globe) {
        globe.pauseAnimation?.();
        globe._destructor?.();
      }
    };
  }, [cities, hub]);

  return (
    <div className="relative aspect-square w-full">
      <div
        ref={box}
        className={`absolute inset-0 cursor-grab transition-opacity duration-1000 active:cursor-grabbing ${ready ? 'opacity-100' : 'opacity-0'}`}
        aria-label="Interactive globe showing routes to Caracas"
        role="img"
      />
      {/* Silueta del globo mientras carga, en el mismo lugar: nada se mueve debajo */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${ready ? 'opacity-0' : 'opacity-100'}`}
      >
        <div className="aspect-square w-[68%] rounded-full bg-[radial-gradient(circle_at_35%_30%,#1d232b,#111418_70%)] shadow-[0_0_60px_6px_rgba(159,179,207,0.12)]" />
      </div>
    </div>
  );
}
