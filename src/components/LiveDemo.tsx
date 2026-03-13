"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/i18n";

function useAnimatedNumber(target: number, duration: number = 2000) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, target, duration]);

  return { value, start: () => setStarted(true) };
}

const plants = [
  { name: "MDF Hat 1", type: "MDF \u00DCretim", cap: "800K m\u00B3/y\u0131l", status: "online" as const, eff: 92, color: "#22c55e" },
  { name: "MDF Hat 2", type: "HDF \u00DCretim", cap: "400K m\u00B3/y\u0131l", status: "online" as const, eff: 88, color: "#22c55e" },
  { name: "Laminat Hatt\u0131", type: "Laminat Parke", cap: "30M m\u00B2/y\u0131l", status: "online" as const, eff: 85, color: "#3b82f6" },
  { name: "Melamin Hatt\u0131", type: "Melamin Kaplama", cap: "45M m\u00B2/y\u0131l", status: "online" as const, eff: 90, color: "#a855f7" },
  { name: "Kapak Hatt\u0131", type: "Kap\u0131 Paneli", cap: "5M adet/y\u0131l", status: "online" as const, eff: 87, color: "#06b6d4" },
  { name: "Boya Hatt\u0131", type: "UV Boyama", cap: "10M m\u00B2/y\u0131l", status: "warning" as const, eff: 71, color: "#f59e0b" },
  { name: "Enerji Santrali", type: "Biyok\u00FCtle", cap: "35 MW", status: "online" as const, eff: 94, color: "#10b981" },
  { name: "Kalite Lab", type: "Test & QC", cap: "24/7", status: "online" as const, eff: 98, color: "#8b5cf6" },
];

const alertsTr = [
  { time: "14:32", type: "warning", msg: "MDF Hat 1 \u2014 y\u00FCzey kalite sens\u00F6r\u00FC sapma tespit etti. AI g\u00F6r\u00FCnt\u00FC analizi: kal\u0131nl\u0131k tolerans\u0131 \u00FCst s\u0131n\u0131ra yakla\u015F\u0131yor. Presleme bas\u0131nc\u0131 ayar\u0131 \u00F6nerisi." },
  { time: "14:28", type: "info", msg: "Laminat hatt\u0131 \u2014 verimlilik %85.3, \u00FCretim h\u0131z\u0131 optimal. Son 4 saatte s\u0131f\u0131r fire ile \u00E7al\u0131\u015F\u0131yor." },
  { time: "14:15", type: "success", msg: "Odun yonga nem seviyesi \u2014 AI \u00F6l\u00E7\u00FCm: %11.2 (optimal aral\u0131k %10-12). Kurutma f\u0131r\u0131n\u0131 ayars\u0131z m\u00FCdahale gerekmiyor." },
  { time: "13:58", type: "warning", msg: "Melamin hatt\u0131 \u2014 AI y\u00FCzey tarama: 3 panelde mikro \u00E7izik tespit edildi. Kalite kontrol hatt\u0131na y\u00F6nlendirildi." },
  { time: "13:42", type: "info", msg: "Biyok\u00FCtle enerji santrali \u2014 verimlilik %94, 35 MW \u00FCretim stabil. At\u0131k odun t\u00FCketimi optimize edildi." },
  { time: "13:30", type: "success", msg: "\u0130hracat sevkiyat \u2014 bug\u00FCn 18 TIR y\u00FCklendi: Almanya (4), Fransa (3), Polonya (3), M\u0131s\u0131r (2), BAE (2), di\u011Fer (4). Konteyner optimizasyonu tamamland\u0131." },
];

const alertsEn = [
  { time: "14:32", type: "warning", msg: "MDF Line 1 \u2014 surface quality sensor detected deviation. AI image analysis: thickness tolerance approaching upper limit. Press pressure adjustment suggested." },
  { time: "14:28", type: "info", msg: "Laminate line \u2014 efficiency at 85.3%, production speed optimal. Zero waste in last 4 hours." },
  { time: "14:15", type: "success", msg: "Wood chip moisture level \u2014 AI measurement: 11.2% (optimal range 10-12%). Drying kiln adjustment not needed." },
  { time: "13:58", type: "warning", msg: "Melamine line \u2014 AI surface scan: micro-scratches detected on 3 panels. Routed to quality control line." },
  { time: "13:42", type: "info", msg: "Biomass power plant \u2014 efficiency 94%, 35 MW production stable. Waste wood consumption optimized." },
  { time: "13:30", type: "success", msg: "Export shipment \u2014 18 trucks loaded today: Germany (4), France (3), Poland (3), Egypt (2), UAE (2), other (4). Container optimization complete." },
];

const vedasMetricsTr = [
  { label: "G\u00FCnl\u00FCk \u00DCretim", value: "4,200 m\u00B3", trend: "+80 m\u00B3 hedefe g\u00F6re" },
  { label: "Y\u00FCzey Kalitesi", value: "%99.2", trend: "AI g\u00F6r\u00FCnt\u00FC analizi" },
  { label: "Enerji Verimlili\u011Fi", value: "%92", trend: "Biyok\u00FCtle santrali" },
  { label: "\u0130hracat Sevkiyat", value: "18 TIR/g\u00FCn", trend: "Bu hafta 12 \u00FClke" },
];

const vedasMetricsEn = [
  { label: "Daily Production", value: "4,200 m\u00B3", trend: "+80 m\u00B3 vs target" },
  { label: "Surface Quality", value: "99.2%", trend: "AI image analysis" },
  { label: "Energy Efficiency", value: "92%", trend: "Biomass plant" },
  { label: "Export Shipment", value: "18 trucks/day", trend: "12 countries this week" },
];

const kpiColors = ["#10b981", "#3b82f6", "#06b6d4", "#8b5cf6"];

export default function LiveDemo() {
  const { lang, t } = useLang();

  const totalCapacity = useAnimatedNumber(1500000);
  const activeLines = useAnimatedNumber(7);
  const dailyOutput = useAnimatedNumber(4200);
  const exportCountries = useAnimatedNumber(82);

  const alerts = lang === "tr" ? alertsTr : alertsEn;
  const vedasMetrics = lang === "tr" ? vedasMetricsTr : vedasMetricsEn;

  const kpiValues = [
    `${totalCapacity.value.toLocaleString()} m\u00B3`,
    `${activeLines.value}/8`,
    `${dailyOutput.value.toLocaleString()} m\u00B3/${lang === "tr" ? "g\u00FCn" : "day"}`,
    `${exportCountries.value} ${lang === "tr" ? "\u00FClke" : "countries"}`,
  ];

  return (
    <section id="demo" className="py-24 px-4 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-mono text-accent tracking-wider">
            {t.demo.section}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 tracking-tight">
            {t.demo.titleA}
            <span className="text-gradient">{t.demo.titleB}</span>
          </h2>
          <p className="text-foreground/50 mt-3 text-sm max-w-3xl mx-auto">
            {t.demo.subtitle}
          </p>
        </motion.div>

        {/* Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => {
            totalCapacity.start();
            activeLines.start();
            dailyOutput.start();
            exportCountries.start();
          }}
          viewport={{ once: true }}
          className="rounded-2xl bg-surface border border-border overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-border bg-surface-light/30">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white text-[9px] font-bold">AGT</span>
              </div>
              <span className="text-sm font-semibold">AGT \u00DCretim AI Hub</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                v1.0 Prototip
              </span>
            </div>
            <div className="flex items-center gap-4 text-[10px] text-foreground/30">
              <span>13 Mar 2026 14:35</span>
              <span className="flex items-center gap-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                </span>
                {t.demo.live}
              </span>
            </div>
          </div>

          <div className="p-5">
            {/* Top KPIs */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
              {t.demo.kpis.map((kpi, i) => (
                <div key={kpi.label} className="p-3 rounded-lg bg-background/50 border border-border/30">
                  <div className="text-[9px] text-foreground/25 uppercase tracking-wider">{kpi.label}</div>
                  <div className="text-lg font-bold mt-1" style={{ color: kpiColors[i] }}>{kpiValues[i]}</div>
                  <div className="text-[9px] text-foreground/20 mt-0.5">{kpi.sub}</div>
                </div>
              ))}
            </div>

            {/* Three Columns */}
            <div className="grid lg:grid-cols-12 gap-4">
              {/* Plants Grid - 5 cols */}
              <div className="lg:col-span-5">
                <div className="text-[10px] font-mono text-foreground/25 mb-2 tracking-wider">
                  {t.demo.plantStatus}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {plants.slice(0, 8).map((p, i) => {
                    const statusCfg = {
                      online: { dot: "bg-green-400", label: t.demo.statusLabels.online },
                      maintenance: { dot: "bg-yellow-400", label: t.demo.statusLabels.maintenance },
                      warning: { dot: "bg-red-400", label: t.demo.statusLabels.warning },
                    };
                    const s = statusCfg[p.status];
                    return (
                      <motion.div
                        key={p.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04 }}
                        className="p-2.5 rounded-lg bg-background/50 border border-border/30"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-medium truncate">{p.name}</span>
                          <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                        </div>
                        <div className="text-[9px] text-foreground/20 mb-1.5">
                          {p.type} &middot; {p.cap}
                        </div>
                        <div className="h-1 bg-surface-light rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${p.eff}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * 0.05 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: p.color }}
                          />
                        </div>
                        <div className="text-[8px] text-foreground/15 mt-0.5">{p.eff > 0 ? `${p.eff}%` : s.label}</div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* AI Alerts - 4 cols */}
              <div className="lg:col-span-4">
                <div className="text-[10px] font-mono text-foreground/25 mb-2 tracking-wider">
                  {t.demo.aiAlerts}
                </div>
                <div className="space-y-1.5 max-h-[420px] overflow-y-auto pr-1">
                  {alerts.map((a, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 5 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.06 }}
                      className="p-2.5 rounded-lg bg-background/50 border border-border/30"
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-[9px] text-foreground/15 font-mono">{a.time}</span>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          a.type === "warning" ? "bg-yellow-400" : a.type === "success" ? "bg-green-400" : "bg-blue-400"
                        }`} />
                      </div>
                      <div className="text-[10px] text-foreground/45 leading-relaxed">{a.msg}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Production Metrics Panel - 3 cols */}
              <div className="lg:col-span-3">
                <div className="text-[10px] font-mono text-foreground/25 mb-2 tracking-wider">
                  {t.demo.vedasDist}
                </div>
                <div className="space-y-2">
                  {vedasMetrics.map((m, i) => (
                    <motion.div
                      key={m.label}
                      initial={{ opacity: 0, x: 5 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      className="p-2.5 rounded-lg bg-background/50 border border-border/30"
                    >
                      <div className="text-[9px] text-foreground/20 uppercase">{m.label}</div>
                      <div className="text-sm font-bold text-yellow-400 mt-0.5">{m.value}</div>
                      <div className="text-[9px] text-foreground/15">{m.trend}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Construction Progress */}
                <div className="mt-3">
                  <div className="text-[10px] font-mono text-foreground/25 mb-2 tracking-wider">
                    {t.demo.projectProgress}
                  </div>
                  {[
                    { name: "Yeni Laminat Hatt\u0131", pct: 68, color: "#3b82f6" },
                    { name: "AI Kalite Kontrol Sistemi", pct: 85, color: "#22c55e" },
                    { name: "Depo Otomasyon", pct: 42, color: "#f59e0b" },
                  ].map((p) => (
                    <div key={p.name} className="mb-2">
                      <div className="flex justify-between text-[9px] mb-0.5">
                        <span className="text-foreground/30">{p.name}</span>
                        <span style={{ color: p.color }}>{p.pct}%</span>
                      </div>
                      <div className="h-1 bg-surface-light rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${p.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: p.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[10px] text-foreground/15 mt-4"
        >
          {t.demo.disclaimer}
        </motion.p>
      </div>
    </section>
  );
}
