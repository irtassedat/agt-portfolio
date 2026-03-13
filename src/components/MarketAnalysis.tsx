"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

/* Wood panel market regions / production */
const vedasProvincesTR = [
  { province: "Antalya (Ana Fabrika)", loss: 35, subscribers: "1.5M m\u00B3/y\u0131l", color: "#22c55e", note: "T\u00FCrkiye'nin en b\u00FCy\u00FCk entegre tesisi" },
  { province: "\u0130\u00E7 Pazar", loss: 35, subscribers: "%35+", color: "#3b82f6", note: "Yurt i\u00E7i lider" },
  { province: "Avrupa \u0130hracat", loss: 28, subscribers: "40+ \u00FClke", color: "#f59e0b", note: "AB standartlar\u0131nda \u00FCretim" },
  { province: "Ortado\u011Fu & Afrika", loss: 20, subscribers: "30+ \u00FClke", color: "#a855f7", note: "B\u00FCy\u00FCyen ihracat pazar\u0131" },
];

const vedasProvincesEN = [
  { province: "Antalya (Main Plant)", loss: 35, subscribers: "1.5M m\u00B3/yr", color: "#22c55e", note: "Turkey's largest integrated facility" },
  { province: "Domestic Market", loss: 35, subscribers: "35%+", color: "#3b82f6", note: "Domestic leader" },
  { province: "Europe Exports", loss: 28, subscribers: "40+ countries", color: "#f59e0b", note: "EU-standard production" },
  { province: "Middle East & Africa", loss: 20, subscribers: "30+ countries", color: "#a855f7", note: "Growing export market" },
];

/* Competitor positioning — Turkish wood panel manufacturers */
const competitorsTR = [
  { name: "AGT A\u011Fa\u00E7 Sanayi", current: "1.5M m\u00B3/y\u0131l", target: "80+ \u00FClke", revenue: "12B TL", growth: "%35+", highlight: true },
  { name: "Kastamonu Entegre", current: "1.2M m\u00B3/y\u0131l", target: "70+ \u00FClke", revenue: "Hayat Holding", growth: "%30", highlight: false },
  { name: "Y\u0131ld\u0131z Entegre", current: "800K m\u00B3/y\u0131l", target: "50+ \u00FClke", revenue: "Karacasu tesisi", growth: "%18", highlight: false },
  { name: "\u00C7amsan Entegre", current: "500K m\u00B3/y\u0131l", target: "30+ \u00FClke", revenue: "Trabzon \u00FCretimi", growth: "%10", highlight: false },
];

const competitorsEN = [
  { name: "AGT Agac Sanayi", current: "1.5M m\u00B3/yr", target: "80+ countries", revenue: "12B TL", growth: "35%+", highlight: true },
  { name: "Kastamonu Entegre", current: "1.2M m\u00B3/yr", target: "70+ countries", revenue: "Hayat Holding", growth: "30%", highlight: false },
  { name: "Yildiz Entegre", current: "800K m\u00B3/yr", target: "50+ countries", revenue: "Karacasu plant", growth: "18%", highlight: false },
  { name: "Camsan Entegre", current: "500K m\u00B3/yr", target: "30+ countries", revenue: "Trabzon production", growth: "10%", highlight: false },
];

/* Wood panel manufacturing AI benchmarks */
const aiBenchmarksTR = [
  { metric: "\u00DCretim Hata Azalma", value: "%35-50", source: "Deloitte Manufacturing", detail: "AI g\u00F6r\u00FCnt\u00FC analizi ile y\u00FCzey kalite kontrol" },
  { metric: "Hammadde Optimizasyonu", value: "%12-18", source: "McKinsey Forest Products", detail: "AI ile odun kar\u0131\u015F\u0131m optimizasyonu" },
  { metric: "Enerji Verimlili\u011Fi", value: "%15-25", source: "IEEE Industrial 2024", detail: "Presleme ve kurutma s\u00FCre\u00E7lerinde AI" },
  { metric: "Tedarik Zinciri", value: "%20-30", source: "Gartner Supply Chain", detail: "Stok ve lojistik tahminleme" },
  { metric: "Pazar B\u00FCy\u00FCkl\u00FC\u011F\u00FC", value: "$180B", source: "Grand View Research", detail: "Global ah\u015Fap panel pazar\u0131 2030" },
  { metric: "Dijital D\u00F6n\u00FC\u015F\u00FCm", value: "$12B", source: "Industry 4.0 Report", detail: "Ah\u015Fap sekt\u00F6r\u00FCnde dijitalle\u015Fme yat\u0131r\u0131m\u0131" },
];

const aiBenchmarksEN = [
  { metric: "Production Defect Reduction", value: "35-50%", source: "Deloitte Manufacturing", detail: "AI image analysis for surface quality control" },
  { metric: "Raw Material Optimization", value: "12-18%", source: "McKinsey Forest Products", detail: "AI-powered wood mix optimization" },
  { metric: "Energy Efficiency", value: "15-25%", source: "IEEE Industrial 2024", detail: "AI in pressing and drying processes" },
  { metric: "Supply Chain", value: "20-30%", source: "Gartner Supply Chain", detail: "Inventory and logistics forecasting" },
  { metric: "Market Size", value: "$180B", source: "Grand View Research", detail: "Global wood panel market 2030" },
  { metric: "Digital Transformation", value: "$12B", source: "Industry 4.0 Report", detail: "Digitalization investment in wood sector" },
];

/* AGT Financial highlights (public company) */
const financialsTR = [
  { year: "2022", revenue: "8.5", grossProfit: "2.8", margin: "33", unit: "milyar TL" },
  { year: "2023", revenue: "12", grossProfit: "4.2", margin: "35", unit: "milyar TL" },
  { year: "2024T", revenue: "15", grossProfit: "5.7", margin: "38", unit: "milyar TL" },
];

const financialsEN = [
  { year: "2022", revenue: "8.5", grossProfit: "2.8", margin: "33", unit: "B TL" },
  { year: "2023", revenue: "12", grossProfit: "4.2", margin: "35", unit: "B TL" },
  { year: "2024E", revenue: "15", grossProfit: "5.7", margin: "38", unit: "B TL" },
];

/* Financial summary cards */
const financialSummaryTR = [
  { label: "\u00DCretim Kapasitesi", value: "1.5M m\u00B3/y\u0131l", sub: "MDF + Laminat + Melamin" },
  { label: "\u0130hracat", value: "80+ \u00FClke", sub: "5 k\u0131tada m\u00FC\u015Fteri a\u011F\u0131" },
  { label: "YoY B\u00FCy\u00FCme", value: "+25%", sub: "2023 \u2192 2024 has\u0131lat" },
  { label: "BIST AGT", value: "Y\u0131ld\u0131z Pazar", sub: "Borsa \u0130stanbul" },
];

const financialSummaryEN = [
  { label: "Production Capacity", value: "1.5M m\u00B3/yr", sub: "MDF + Laminate + Melamine" },
  { label: "Exports", value: "80+ countries", sub: "Customer network on 5 continents" },
  { label: "YoY Growth", value: "+25%", sub: "2023 \u2192 2024 revenue" },
  { label: "BIST AGT", value: "Star Market", sub: "Borsa Istanbul" },
];

export default function MarketAnalysis() {
  const { lang, t } = useLang();

  const vedasProvinces = lang === "tr" ? vedasProvincesTR : vedasProvincesEN;
  const competitors = lang === "tr" ? competitorsTR : competitorsEN;
  const aiBenchmarks = lang === "tr" ? aiBenchmarksTR : aiBenchmarksEN;
  const financials = lang === "tr" ? financialsTR : financialsEN;
  const financialSummary = lang === "tr" ? financialSummaryTR : financialSummaryEN;

  const subscriberLabel = lang === "tr" ? "kapasite" : "capacity";
  const focusLabel = lang === "tr" ? "Odak" : "Focus";
  const vedasSubtitle = lang === "tr" ? "T\u00FCrkiye ah\u015Fap panel pazar\u0131 2025" : "Turkey wood panel market 2025";

  return (
    <section id="market" className="py-24 px-4 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-secondary tracking-wider">
            {t.market.section}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 tracking-tight">
            {t.market.titleA}
            <span className="text-gradient">{t.market.titleB}</span>
          </h2>
          <p className="text-foreground/40 mt-3 text-sm max-w-2xl mx-auto">
            {t.market.subtitle}
          </p>
        </motion.div>

        {/* ───── FINANCIAL PERFORMANCE ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-6 rounded-xl bg-surface border border-border"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-mono text-foreground/30 tracking-wider">
              {t.market.financial}
            </h3>
            <span className="text-[9px] text-foreground/20">{t.market.financialSource}</span>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-5">
            {financials.map((f, i) => (
              <motion.div
                key={f.year}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-lg bg-background/40 border border-border/30"
              >
                <div className="text-xs font-mono text-primary mb-3">{f.year}</div>
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[10px] text-foreground/25">{t.market.revenue}</span>
                    <span className="text-sm font-bold text-foreground/70">{f.revenue} {f.unit}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-[10px] text-foreground/25">{t.market.grossProfit}</span>
                    <span className="text-sm font-bold text-primary">{f.grossProfit} {f.unit}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-[10px] text-foreground/25">{t.market.grossMargin}</span>
                    <span className="text-sm font-bold text-accent">%{f.margin}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid sm:grid-cols-4 gap-3">
            {financialSummary.map((m) => (
              <div key={m.label} className="p-3 rounded-lg bg-background/30 border border-border/20 text-center">
                <div className="text-[8px] text-foreground/15 uppercase tracking-wider">{m.label}</div>
                <div className="text-xs font-bold text-foreground/60 mt-1">{m.value}</div>
                <div className="text-[8px] text-foreground/15 mt-0.5">{m.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ───── MARKET REGIONS / PRODUCTION ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-6 rounded-xl bg-surface border border-border"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-mono text-foreground/30 tracking-wider">
              {t.market.vedasTitle}
            </h3>
            <span className="text-[9px] text-foreground/20">{vedasSubtitle}</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
            {vedasProvinces.map((p, i) => (
              <motion.div
                key={p.province}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-4 rounded-lg bg-background/40 border border-border/30"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-sm">{p.province}</span>
                  <span className="text-xs text-foreground/25">{p.subscribers}</span>
                </div>
                <div className="mb-2">
                  <div className="text-2xl font-bold" style={{ color: p.color }}>
                    %{p.loss}
                  </div>
                  <div className="text-[9px] text-foreground/20">{t.market.lossRate}</div>
                </div>
                <div className="h-2 bg-surface-light rounded-full overflow-hidden mb-1.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${p.loss}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: p.color }}
                  />
                </div>
                <div className="text-[9px] text-foreground/20">{p.note}</div>
              </motion.div>
            ))}
          </div>

          <div className="p-4 rounded-lg bg-yellow-500/5 border border-yellow-500/10">
            <div className="text-[10px] font-mono text-yellow-500/50 mb-1.5">{t.market.aiFocusHakkari}</div>
            <p className="text-xs text-foreground/40 leading-relaxed">
              {t.market.hakkariText}
            </p>
          </div>
        </motion.div>

        {/* ───── COMPETITOR POSITIONING ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-6 rounded-xl bg-surface border border-border"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-mono text-foreground/30 tracking-wider">
              {t.market.competitorTitle}
            </h3>
            <span className="text-[9px] text-foreground/20">{t.market.competitorSource}</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="text-left py-2 text-[10px] text-foreground/25 font-normal">{t.market.tableHeaders.company}</th>
                  <th className="text-right py-2 text-[10px] text-foreground/25 font-normal">{t.market.tableHeaders.currentMW}</th>
                  <th className="text-right py-2 text-[10px] text-foreground/25 font-normal">{t.market.tableHeaders.targetMW}</th>
                  <th className="text-right py-2 text-[10px] text-foreground/25 font-normal">{t.market.tableHeaders.growth}</th>
                  <th className="text-right py-2 text-[10px] text-foreground/25 font-normal">{t.market.tableHeaders.revenue}</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((c) => (
                  <tr
                    key={c.name}
                    className={`border-b border-border/10 ${c.highlight ? "bg-primary/3" : ""}`}
                  >
                    <td className={`py-2.5 ${c.highlight ? "text-primary font-semibold" : "text-foreground/50"}`}>
                      {c.name}
                      {c.highlight && <span className="ml-1.5 text-[8px] px-1.5 py-0.5 rounded bg-primary/10 text-primary">{focusLabel}</span>}
                    </td>
                    <td className="text-right py-2.5 text-foreground/50">{c.current}</td>
                    <td className="text-right py-2.5 font-medium" style={{ color: c.highlight ? "#10b981" : undefined }}>
                      {c.target}
                    </td>
                    <td className="text-right py-2.5">
                      <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                        c.highlight ? "bg-primary/10 text-primary font-bold" : "text-foreground/30"
                      }`}>
                        {c.growth}
                      </span>
                    </td>
                    <td className="text-right py-2.5 text-foreground/40">{c.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-3 rounded-lg bg-primary/3 border border-primary/10">
            <p className="text-[10px] text-foreground/35 leading-relaxed">
              <strong className="text-primary/70">
                {lang === "tr" ? "Kritik farkl\u0131la\u015Fma:" : "Critical differentiation:"}
              </strong>{" "}
              {t.market.competitorNote.split(lang === "tr" ? "Kritik farkl\u0131la\u015Fma: " : "Critical differentiation: ")[1] || t.market.competitorNote}
            </p>
          </div>
        </motion.div>

        {/* ───── GLOBAL AI BENCHMARKS ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-xl bg-surface border border-border"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-mono text-foreground/30 tracking-wider">
              {t.market.aiTitle}
            </h3>
            <span className="text-[9px] text-foreground/20">{t.market.aiSource}</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {aiBenchmarks.map((b, i) => (
              <motion.div
                key={b.metric}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-4 rounded-lg bg-background/40 border border-border/30"
              >
                <div className="text-xl font-bold text-gradient mb-1">{b.value}</div>
                <div className="text-xs font-medium text-foreground/60 mb-1">{b.metric}</div>
                <div className="text-[9px] text-foreground/25 mb-1.5">{b.detail}</div>
                <div className="text-[8px] text-foreground/15 italic">{b.source}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 p-4 rounded-lg bg-accent/5 border border-accent/10">
            <div className="text-[10px] font-mono text-accent/50 mb-1.5">{t.market.projectionTitle}</div>
            <p className="text-xs text-foreground/40 leading-relaxed">
              {t.market.projectionText}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
