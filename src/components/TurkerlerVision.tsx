"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

/* ───── PRODUCT PORTFOLIO ───── */
const productLinesTr = {
  wind: [
    { name: "MOOD XLarge", capacity: "12mm", location: "AC5-33", status: "Premium" },
    { name: "PERA Collection", capacity: "12mm", location: "AC4-32", status: "Koleksiyon" },
    { name: "EFFECT Elegance", capacity: "12mm", location: "AC4-32", status: "Koleksiyon" },
    { name: "MARCO POLO", capacity: "10-12mm", location: "AC4-AC5", status: "Premium" },
    { name: "YOGA Collection", capacity: "10-12mm", location: "AC4-AC5", status: "Koleksiyon" },
    { name: "FORESTA XLarge", capacity: "12mm", location: "AC5-33", status: "XLarge" },
    { name: "CONCEPT Neo", capacity: "10mm", location: "AC4-32", status: "Modern" },
    { name: "NATURA Line", capacity: "8mm", location: "AC3-AC4", status: "Doğal" },
    { name: "LUNA / BELLA", capacity: "8mm", location: "AC3-31", status: "Giriş" },
  ],
  hydro: [
    { name: "SUPRAMAT Panel", capacity: "49+ renk", location: "Soft-Touch", status: "Premium" },
    { name: "High Gloss Panel", capacity: "Parlak", location: "Dekoratif", status: "Aktif" },
    { name: "3D Duvar Kaplama", capacity: "Tekstür", location: "3 Boyutlu", status: "Yeni" },
    { name: "MDF Lam", capacity: "Çeşitli", location: "Mobilya", status: "Aktif" },
    { name: "Akrilik Panel", capacity: "Premium", location: "Dekoratif", status: "Aktif" },
  ],
  geothermal: [
    { name: "MDF Hat 1", capacity: "500K m³", location: "Orijinal", status: "Aktif" },
    { name: "MDF Hat 2", capacity: "500K m³", location: "120M EUR", status: "Aktif" },
    { name: "Biyokütle Santral", capacity: "5.37 MWe", location: "65 MWt", status: "Aktif" },
  ],
};

const productLinesEn = {
  wind: [
    { name: "MOOD XLarge", capacity: "12mm", location: "AC5-33", status: "Premium" },
    { name: "PERA Collection", capacity: "12mm", location: "AC4-32", status: "Collection" },
    { name: "EFFECT Elegance", capacity: "12mm", location: "AC4-32", status: "Collection" },
    { name: "MARCO POLO", capacity: "10-12mm", location: "AC4-AC5", status: "Premium" },
    { name: "YOGA Collection", capacity: "10-12mm", location: "AC4-AC5", status: "Collection" },
    { name: "FORESTA XLarge", capacity: "12mm", location: "AC5-33", status: "XLarge" },
    { name: "CONCEPT Neo", capacity: "10mm", location: "AC4-32", status: "Modern" },
    { name: "NATURA Line", capacity: "8mm", location: "AC3-AC4", status: "Natural" },
    { name: "LUNA / BELLA", capacity: "8mm", location: "AC3-31", status: "Entry" },
  ],
  hydro: [
    { name: "SUPRAMAT Panel", capacity: "49+ colors", location: "Soft-Touch", status: "Premium" },
    { name: "High Gloss Panel", capacity: "Glossy", location: "Decorative", status: "Active" },
    { name: "3D Wall Covering", capacity: "Texture", location: "3D", status: "New" },
    { name: "MDF Lam", capacity: "Various", location: "Furniture", status: "Active" },
    { name: "Acrylic Panel", capacity: "Premium", location: "Decorative", status: "Active" },
  ],
  geothermal: [
    { name: "MDF Line 1", capacity: "500K m³", location: "Original", status: "Active" },
    { name: "MDF Line 2", capacity: "500K m³", location: "120M EUR", status: "Active" },
    { name: "Biomass Plant", capacity: "5.37 MWe", location: "65 MWt", status: "Active" },
  ],
};

/* ───── DIGITAL TRANSFORMATION OPPORTUNITIES ───── */
const megaProjectsTr = [
  {
    name: "Birleşik Web Platformu",
    capacity: "2 Site → 1",
    investment: "Acil Öncelik",
    status: "Teklif",
    color: "#22c55e",
    details: [
      "agt.com.tr ve agtwood.com tek platformda birleştirme",
      "10 kritik veri tutarsızlığının giderilmesi",
      "SEO fragmentasyonunun çözülmesi — tek domain otoritesi",
      "HomeDesign aracının tüm pazarlara sunulması",
      "Çok dilli içerik yönetimi (TR/EN + potansiyel diller)",
    ],
    aiValue:
      "Birleşik platform ile SEO gücü 2 katına çıkar. Kullanıcı davranış analiziyle kişiselleştirilmiş ürün önerileri ve AI destekli arama.",
  },
  {
    name: "B2B Bayi Portal Sistemi",
    capacity: "1,000+ Bayi",
    investment: "Yüksek ROI",
    status: "Teklif",
    color: "#b45309",
    details: [
      "1,000+ satış noktası için dijital sipariş sistemi",
      "Gerçek zamanlı stok görüntüleme ve otomatik sipariş",
      "Hardwoods & Richelieu partner entegrasyonu",
      "Bayi performans dashboardı ve kampanya yönetimi",
    ],
    aiValue:
      "AI tabanlı talep tahmini ile bayilere otomatik stok önerisi. Bölgesel satış trendleri analizi ve kampanya optimizasyonu.",
  },
  {
    name: "Akıllı Fabrika (Endüstri 4.0)",
    capacity: "500K m²",
    investment: "Stratejik",
    status: "Vizyon",
    color: "#3b82f6",
    details: [
      "2 MDF hattında IoT sensör entegrasyonu",
      "AI ile kalite kontrol ve fire azaltma",
      "Prediktif bakım — plansız duruş azaltma",
      "Enerji tüketim optimizasyonu (biyokütle entegrasyonu)",
    ],
    aiValue:
      "Üretim hattında AI optimizasyonu ile %8-12 verimlilik artışı. Prediktif bakımla %25 plansız duruş azalması. Yıllık tasarruf potansiyeli: milyonlarca TL.",
  },
  {
    name: "HomeDesign Pro — AI Tasarım Aracı",
    capacity: "B2C",
    investment: "İnovasyon",
    status: "Teklif",
    color: "#a855f7",
    details: [
      "Mevcut HomeDesign aracının AI ile güçlendirilmesi",
      "Oda fotoğrafından otomatik ürün önerisi",
      "20 parke + 49 panel koleksiyonunun 3D görselleştirmesi",
      "Bayilere lead generation — doğrudan satış kanalı",
    ],
    aiValue:
      "Computer vision ile oda analizi, stil tespiti ve otomatik ürün eşleştirme. Müşteri dönüşüm oranında %40 artış potansiyeli.",
  },
  {
    name: "İhracat & Lojistik Optimizasyonu",
    capacity: "90+ Ülke",
    investment: "Operasyonel",
    status: "Teklif",
    color: "#06b6d4",
    details: [
      "90+ ülkeye ihracat lojistiğinin dijitalleştirilmesi",
      "Konteyner optimizasyonu ve rota planlama",
      "Gümrük belge otomasyonu ve regülasyon takibi",
      "Para birimi ve fiyatlandırma yönetimi",
    ],
    aiValue:
      "AI ile lojistik rota optimizasyonu: %15 nakliye maliyeti azalma. Talep tahmini ile doğru zamanda doğru ürün, doğru ülkede.",
  },
  {
    name: "Sürdürülebilirlik & ESG Platformu",
    capacity: "7 ISO + FSC",
    investment: "Marka Değeri",
    status: "Teklif",
    color: "#10b981",
    details: [
      "Biyokütle santralinin çevresel etki dashboardı",
      "100K ton/yıl atık geri dönüşüm takibi",
      "FSC/PEFC/Blue Angel sertifika yönetimi",
      "Otomatik ESG raporlama ve karbon ayak izi hesabı",
    ],
    aiValue:
      "Otomatik sürdürülebilirlik metrikleri: CO₂ tasarrufu, su kullanımı, enerji verimliliği. ESG skoru ile uluslararası yatırımcı güveni artışı.",
  },
];

const megaProjectsEn = [
  {
    name: "Unified Web Platform",
    capacity: "2 Sites → 1",
    investment: "Urgent Priority",
    status: "Proposal",
    color: "#22c55e",
    details: [
      "Merge agt.com.tr and agtwood.com into single platform",
      "Resolve 10 critical data inconsistencies",
      "Fix SEO fragmentation — single domain authority",
      "Bring HomeDesign tool to all markets",
      "Multi-language content management (TR/EN + potential languages)",
    ],
    aiValue:
      "Unified platform doubles SEO power. Personalized product recommendations and AI-powered search through user behavior analysis.",
  },
  {
    name: "B2B Dealer Portal System",
    capacity: "1,000+ Dealers",
    investment: "High ROI",
    status: "Proposal",
    color: "#b45309",
    details: [
      "Digital ordering system for 1,000+ sales points",
      "Real-time inventory viewing and auto-ordering",
      "Hardwoods & Richelieu partner integration",
      "Dealer performance dashboard and campaign management",
    ],
    aiValue:
      "AI-based demand forecasting with automatic inventory suggestions for dealers. Regional sales trend analysis and campaign optimization.",
  },
  {
    name: "Smart Factory (Industry 4.0)",
    capacity: "500K m²",
    investment: "Strategic",
    status: "Vision",
    color: "#3b82f6",
    details: [
      "IoT sensor integration on 2 MDF lines",
      "AI quality control and waste reduction",
      "Predictive maintenance — reduce unplanned downtime",
      "Energy consumption optimization (biomass integration)",
    ],
    aiValue:
      "AI optimization on production lines yields 8-12% efficiency gain. Predictive maintenance reduces unplanned downtime by 25%. Annual savings potential: millions of TL.",
  },
  {
    name: "HomeDesign Pro — AI Design Tool",
    capacity: "B2C",
    investment: "Innovation",
    status: "Proposal",
    color: "#a855f7",
    details: [
      "Enhance existing HomeDesign tool with AI",
      "Automatic product suggestion from room photos",
      "3D visualization of 20 flooring + 49 panel collections",
      "Lead generation for dealers — direct sales channel",
    ],
    aiValue:
      "Computer vision for room analysis, style detection, and automatic product matching. 40% increase potential in customer conversion rate.",
  },
  {
    name: "Export & Logistics Optimization",
    capacity: "90+ Countries",
    investment: "Operational",
    status: "Proposal",
    color: "#06b6d4",
    details: [
      "Digitize export logistics to 90+ countries",
      "Container optimization and route planning",
      "Customs document automation and regulation tracking",
      "Currency and pricing management",
    ],
    aiValue:
      "AI route optimization: 15% shipping cost reduction. Right product, right country, right time through demand forecasting.",
  },
  {
    name: "Sustainability & ESG Platform",
    capacity: "7 ISO + FSC",
    investment: "Brand Value",
    status: "Proposal",
    color: "#10b981",
    details: [
      "Environmental impact dashboard for biomass plant",
      "100K tons/year waste recycling tracking",
      "FSC/PEFC/Blue Angel certification management",
      "Automated ESG reporting and carbon footprint calculation",
    ],
    aiValue:
      "Automated sustainability metrics: CO₂ savings, water usage, energy efficiency. ESG score boosts international investor confidence.",
  },
];

/* ───── WEBSITE UNIFICATION ───── */
const vedasDataTr = {
  coverage: "agt.com.tr + agtwood.com",
  subscribers: "10 Tutarsızlık",
  population: "2 Ayrı Domain",
  area: "SEO Fragmentasyonu",
  investment2025: "Acil Çözüm",
  lossRate: "Parçalanmış dijital varlık",
  smartMeters: "Birleşik platform ile çözüm",
  labels: {
    investment: "Öncelik",
    subscribers: "Tespit",
    lossTarget: "Sorun",
    servicePopulation: "Durum",
  },
  aiModule: "DİJİTAL ÇÖZÜM MODÜLÜ:",
  aiText:
    "İki ayrı web sitesi arasında fabrika alanı (400K-500K m²), ihracat ülkeleri (90-100+) ve ürün verileri tutarsız. Birleşik Next.js platformu ile: tek SEO domain otoritesi, HomeDesign aracı tüm pazarlara, bayi portalı global erişim, çok dilli içerik yönetimi. Birleştirme sonrası organik trafikte %50+ artış beklenir.",
};

const vedasDataEn = {
  coverage: "agt.com.tr + agtwood.com",
  subscribers: "10 Inconsistencies",
  population: "2 Separate Domains",
  area: "SEO Fragmentation",
  investment2025: "Urgent Solution",
  lossRate: "Fragmented digital presence",
  smartMeters: "Unified platform solution",
  labels: {
    investment: "Priority",
    subscribers: "Findings",
    lossTarget: "Issue",
    servicePopulation: "Status",
  },
  aiModule: "DIGITAL SOLUTION MODULE:",
  aiText:
    "Inconsistencies between two websites: factory area (400K-500K m²), export countries (90-100+), and product data conflicts. Unified Next.js platform delivers: single SEO domain authority, HomeDesign tool for all markets, dealer portal with global access, multi-language content management. Expected 50%+ organic traffic increase after unification.",
};

/* ───── DEALER NETWORK ───── */
const healthcareProjectsTr = [
  {
    name: "Türkiye Bayi Ağı",
    beds: "800+ satış noktası",
    area: "81 İl",
    investment: "Mevcut Ağ",
    status: "Dijitalleşme Bekliyor",
    note: "Bayi portalı ile sipariş/stok/kampanya yönetimi",
  },
  {
    name: "Kuzey Amerika Dağıtım",
    beds: "30 merkez (Hardwoods)",
    area: "ABD + Kanada",
    investment: "Stratejik Pazar",
    status: "Partner Entegrasyonu",
    note: "SUPRAMAT, High Gloss, Akrilik panel dağıtımı",
  },
  {
    name: "Uluslararası İhracat",
    beds: "90+ ülke",
    area: "5 Kıta",
    investment: "$72.7M/yıl",
    status: "Büyüme Potansiyeli",
    note: "Doğu Avrupa, Balkanlar, MENA, Rusya ana pazarlar",
  },
];

const healthcareProjectsEn = [
  {
    name: "Turkey Dealer Network",
    beds: "800+ sales points",
    area: "81 Provinces",
    investment: "Existing Network",
    status: "Awaiting Digitization",
    note: "Dealer portal for order/inventory/campaign management",
  },
  {
    name: "North America Distribution",
    beds: "30 centers (Hardwoods)",
    area: "USA + Canada",
    investment: "Strategic Market",
    status: "Partner Integration",
    note: "SUPRAMAT, High Gloss, Acrylic panel distribution",
  },
  {
    name: "International Exports",
    beds: "90+ countries",
    area: "5 Continents",
    investment: "$72.7M/year",
    status: "Growth Potential",
    note: "Eastern Europe, Balkans, MENA, Russia key markets",
  },
];

/* ───── PROBLEMS & DIGITAL SOLUTIONS ───── */
const criticalProblemsTr = [
  {
    area: "Web Sitesi Fragmentasyonu",
    icon: "\uD83C\uDF10",
    severity: "Kritik",
    problems: [
      "agt.com.tr ve agtwood.com — iki ayrı domain, parçalanmış SEO",
      "Fabrika alanı 400K-500K m² arası tutarsız veriler",
      "Türkçe sitede HomeDesign aracı var, İngilizce sitede yok",
      "İngilizce site içerik derinliği çok yetersiz",
    ],
    solutions: [
      "Next.js ile birleşik, çok dilli tek platform geliştirme",
      "Tüm verilerin tek kaynaktan yönetimi — tutarsızlık sıfır",
      "HomeDesign Pro aracının tüm pazarlara sunulması",
      "SEO: tek domain otoritesi, organik trafik 2x artış",
    ],
    roi: "Organik trafikte %50+ artış + marka tutarlılığı",
  },
  {
    area: "Bayi Yönetimi & B2B",
    icon: "\uD83C\uDFEA",
    severity: "Yüksek",
    problems: [
      "1,000+ satış noktasında dijital sipariş sistemi yok",
      "Stok bilgisi anlık paylaşılmıyor — telefon/e-posta bazlı",
      "Hardwoods, Richelieu gibi global partnerlerle entegrasyon yok",
      "Bayi performans takibi ve kampanya yönetimi manuel",
    ],
    solutions: [
      "B2B bayi portalı: anlık stok, online sipariş, fatura takibi",
      "Partner API entegrasyonu: Hardwoods 30 merkez ile otomatik veri akışı",
      "AI tabanlı talep tahmini ile bayilere otomatik stok önerisi",
      "Performans dashboardı: satış trendleri, kampanya ROI analizi",
    ],
    roi: "Online sipariş oranında %30 artış + lojistik maliyet azalma",
  },
  {
    area: "Üretim Hattı Optimizasyonu",
    icon: "\uD83C\uDFED",
    severity: "Yüksek",
    problems: [
      "2 MDF hattında IoT sensör verisi tam analiz edilmiyor",
      "Kalite kontrol büyük oranda manuel — tutarsızlık riski",
      "Plansız makine duruşları — bakım reaktif, prediktif değil",
      "Biyokütle santral verimliliği optimize edilmemiş",
    ],
    solutions: [
      "IoT sensör verisiyle gerçek zamanlı üretim izleme dashboardı",
      "AI tabanlı otomatik kalite kontrol — fire %15 azalma",
      "Prediktif bakım: vibrasyon, sıcaklık, basınç trend analizi",
      "Biyokütle santral optimizasyonu: 100K ton atık dönüşüm verimliliği",
    ],
    roi: "%8-12 üretim verimliliği artışı + %25 plansız duruş azalma",
  },
  {
    area: "Marka & Dijital Pazarlama",
    icon: "\uD83C\uDFA8",
    severity: "Orta-Yüksek",
    problems: [
      "Defne Koz işbirliği ve ödüller yeterince dijitalde öne çıkmıyor",
      "'Türkiye'nin En İtibarlı Markası' başarısı dijitale yansımamış",
      "Sosyal medya (@agtworld) ile web sitesi arasında kopukluk",
      "Rakipler (Kastamonu %30 pazar payı) dijital alanda daha agresif",
    ],
    solutions: [
      "Tasarım odaklı interaktif web deneyimi — ödüller & işbirlikleri öne çıkaran",
      "Sosyal medya entegrasyonu: Instagram/@agtworld feed, video galeri",
      "AI destekli içerik üretimi: blog, trend analizi, ürün hikayeleri",
      "Dijital reklam optimizasyonu: hedef kitle segmentasyonu, A/B test",
    ],
    roi: "Marka bilinirliği %40 artış + dijital lead generation",
  },
];

const criticalProblemsEn = [
  {
    area: "Website Fragmentation",
    icon: "\uD83C\uDF10",
    severity: "Critical",
    problems: [
      "agt.com.tr and agtwood.com — two separate domains, fragmented SEO",
      "Factory area data inconsistent between 400K-500K m²",
      "HomeDesign tool exists on Turkish site but not English",
      "English site content depth severely lacking",
    ],
    solutions: [
      "Build unified, multi-language platform with Next.js",
      "Single source of truth for all data — zero inconsistency",
      "Deploy HomeDesign Pro across all markets",
      "SEO: single domain authority, 2x organic traffic increase",
    ],
    roi: "50%+ increase in organic traffic + brand consistency",
  },
  {
    area: "Dealer Management & B2B",
    icon: "\uD83C\uDFEA",
    severity: "High",
    problems: [
      "No digital ordering system for 1,000+ sales points",
      "Inventory not shared in real-time — phone/email-based",
      "No integration with global partners like Hardwoods, Richelieu",
      "Dealer performance tracking and campaign management is manual",
    ],
    solutions: [
      "B2B dealer portal: real-time inventory, online ordering, invoice tracking",
      "Partner API integration: automatic data flow with Hardwoods 30 centers",
      "AI-based demand forecasting with automatic inventory suggestions",
      "Performance dashboard: sales trends, campaign ROI analysis",
    ],
    roi: "30% increase in online ordering + logistics cost reduction",
  },
  {
    area: "Production Line Optimization",
    icon: "\uD83C\uDFED",
    severity: "High",
    problems: [
      "IoT sensor data on 2 MDF lines not fully analyzed",
      "Quality control largely manual — inconsistency risk",
      "Unplanned machine downtime — maintenance reactive, not predictive",
      "Biomass plant efficiency not optimized",
    ],
    solutions: [
      "Real-time production monitoring dashboard with IoT sensor data",
      "AI-based automatic quality control — 15% waste reduction",
      "Predictive maintenance: vibration, temperature, pressure trend analysis",
      "Biomass plant optimization: 100K ton waste conversion efficiency",
    ],
    roi: "8-12% production efficiency gain + 25% unplanned downtime reduction",
  },
  {
    area: "Brand & Digital Marketing",
    icon: "\uD83C\uDFA8",
    severity: "Medium-High",
    problems: [
      "Defne Koz collaboration and awards not highlighted digitally",
      "'Turkey's Most Reputable Brand' achievement not reflected online",
      "Disconnect between social media (@agtworld) and website",
      "Competitors (Kastamonu 30% market share) more aggressive digitally",
    ],
    solutions: [
      "Design-oriented interactive web experience highlighting awards & collaborations",
      "Social media integration: Instagram/@agtworld feed, video gallery",
      "AI-powered content generation: blog, trend analysis, product stories",
      "Digital ad optimization: audience segmentation, A/B testing",
    ],
    roi: "40% brand awareness increase + digital lead generation",
  },
];

/* ───── GROWTH ROADMAP ───── */
const growthPhasesTr = [
  { label: "Kuruluş", mw: 1984, pct: 10, color: "#166534", detail: "AGT Antalya OSB'de kuruldu" },
  { label: "MDF Hat 1", mw: 2000, pct: 25, color: "#22c55e", detail: "İlk MDF üretim hattı faaliyete geçti" },
  { label: "Global İhracat", mw: 2010, pct: 45, color: "#b45309", detail: "50+ ülkeye ihracat, ISO sertifikaları" },
  { label: "120M EUR Yatırım", mw: 2019, pct: 65, color: "#3b82f6", detail: "MDF Hat 2 + Biyokütle santral" },
  { label: "Defne Koz & Ödüller", mw: 2022, pct: 80, color: "#a855f7", detail: "2 Uluslararası Tasarım Ödülü" },
  { label: "Bugün & Gelecek", mw: 2026, pct: 100, color: "#f59e0b", detail: "698M TL ciro, 90+ ülke, dijital dönüşüm" },
];

const growthPhasesEn = [
  { label: "Founded", mw: 1984, pct: 10, color: "#166534", detail: "AGT established in Antalya OIZ" },
  { label: "MDF Line 1", mw: 2000, pct: 25, color: "#22c55e", detail: "First MDF production line operational" },
  { label: "Global Exports", mw: 2010, pct: 45, color: "#b45309", detail: "50+ country exports, ISO certifications" },
  { label: "120M EUR Investment", mw: 2019, pct: 65, color: "#3b82f6", detail: "MDF Line 2 + Biomass plant" },
  { label: "Defne Koz & Awards", mw: 2022, pct: 80, color: "#a855f7", detail: "2 International Design Awards" },
  { label: "Today & Future", mw: 2026, pct: 100, color: "#f59e0b", detail: "698M TL revenue, 90+ countries, digital transformation" },
];

export default function TurkerlerVision() {
  const { lang, t } = useLang();

  const operationalPlants = lang === "tr" ? productLinesTr : productLinesEn;
  const megaProjects = lang === "tr" ? megaProjectsTr : megaProjectsEn;
  const vedasData = lang === "tr" ? vedasDataTr : vedasDataEn;
  const healthcareProjects = lang === "tr" ? healthcareProjectsTr : healthcareProjectsEn;
  const criticalProblems = lang === "tr" ? criticalProblemsTr : criticalProblemsEn;
  const growthPhases = lang === "tr" ? growthPhasesTr : growthPhasesEn;

  const totalOperational = "20 Koleksiyon + 49 Renk + 2 MDF Hattı";

  return (
    <section id="turkerler" className="py-24 px-4 relative bg-grid">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary tracking-wider">
            {t.turkerler.section}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 tracking-tight">
            {t.turkerler.titleA}
            <span className="text-gradient">{t.turkerler.titleB}</span>
          </h2>
          <p className="text-foreground/50 mt-4 max-w-3xl mx-auto text-sm">
            {t.turkerler.subtitle}
          </p>
        </motion.div>

        {/* ───── PRODUCT PORTFOLIO ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-6 rounded-xl bg-surface border border-border"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-mono text-foreground/40 tracking-wider">
              {t.turkerler.portfolio} &mdash; {totalOperational}
            </h3>
            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
              500K m²
            </span>
          </div>

          {/* Flooring */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-xs font-semibold text-green-400">
                {t.turkerler.wind} &mdash; 20 {lang === "tr" ? "Koleksiyon" : "Collections"}
              </span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2">
              {operationalPlants.wind.map((p) => (
                <div key={p.name} className="p-2 rounded-lg bg-green-500/5 border border-green-500/10 text-center">
                  <div className="text-[10px] font-medium truncate">{p.name}</div>
                  <div className="text-xs font-bold text-green-400">{p.capacity}</div>
                  <div className="text-[9px] text-foreground/25">{p.location}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Panels */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-xs font-semibold text-amber-400">
                {t.turkerler.hydro} &mdash; 49+ {lang === "tr" ? "Renk" : "Colors"}
              </span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {operationalPlants.hydro.map((p) => (
                <div key={p.name} className="p-2 rounded-lg bg-amber-500/5 border border-amber-500/10 text-center">
                  <div className="text-[10px] font-medium">{p.name}</div>
                  <div className="text-xs font-bold text-amber-400">{p.capacity}</div>
                  <div className="text-[9px] text-foreground/25">{p.location}</div>
                </div>
              ))}
            </div>
          </div>

          {/* MDF / Energy */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              <span className="text-xs font-semibold text-blue-400">
                {t.turkerler.geothermal} &mdash; 1M m³/{lang === "tr" ? "yıl" : "year"}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {operationalPlants.geothermal.map((p) => (
                <div key={p.name} className="p-2 rounded-lg bg-blue-500/5 border border-blue-500/10 text-center">
                  <div className="text-[10px] font-medium">{p.name}</div>
                  <div className="text-xs font-bold text-blue-400">{p.capacity}</div>
                  <div className="text-[9px] text-foreground/25">{p.location}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ───── GROWTH ROADMAP ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-6 rounded-xl bg-surface border border-border"
        >
          <h3 className="text-sm font-mono text-foreground/40 mb-6 tracking-wider">
            {t.turkerler.growth}
          </h3>
          <div className="space-y-3">
            {growthPhases.map((g, i) => (
              <motion.div
                key={g.label}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3"
              >
                <div className="w-36 shrink-0 text-right">
                  <span className="text-xs text-foreground/30">{g.label}</span>
                </div>
                <div className="flex-1 h-7 bg-surface-light rounded overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${g.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                    className="h-full rounded flex items-center px-2 min-w-[60px]"
                    style={{ backgroundColor: g.color + "25" }}
                  >
                    <span className="text-[11px] font-bold whitespace-nowrap" style={{ color: g.color }}>
                      {g.mw}
                    </span>
                  </motion.div>
                </div>
                <div className="w-48 shrink-0 text-[10px] text-foreground/25 hidden lg:block">
                  {g.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ───── DIGITAL TRANSFORMATION OPPORTUNITIES ───── */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8">
            {t.turkerler.megaTitle}
            <span className="text-gradient">{t.turkerler.megaTitleB}</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {megaProjects.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-5 rounded-xl bg-surface border border-border hover:border-opacity-50 transition-all"
                style={{ borderColor: p.color + "00" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = p.color + "40";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "";
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: p.color + "15", color: p.color }}>
                    {p.capacity}
                  </span>
                  <span className="text-[10px] text-foreground/30">{p.status}</span>
                </div>
                <h4 className="font-semibold text-sm mb-2">{p.name}</h4>
                <ul className="space-y-1 mb-3">
                  {p.details.slice(0, 3).map((d) => (
                    <li key={d} className="text-[11px] text-foreground/40 flex items-start gap-1.5">
                      <span className="text-foreground/20 mt-0.5 shrink-0">&bull;</span>
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-border">
                  <div className="text-[10px] font-mono text-primary/60 mb-1">{t.turkerler.aiContribution}</div>
                  <p className="text-[10px] text-foreground/35 leading-relaxed">{p.aiValue}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ───── WEBSITE UNIFICATION ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-6 rounded-xl bg-gradient-to-br from-green-500/5 to-amber-500/5 border border-green-500/20"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="text-2xl">{"\uD83C\uDF10"}</span>
            <div>
              <h3 className="font-bold">{t.turkerler.vedasTitle}</h3>
              <p className="text-xs text-foreground/40">
                {vedasData.coverage} &middot; {vedasData.subscribers} &middot; {vedasData.area}
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
            {[
              { label: vedasData.labels.investment, value: vedasData.investment2025, color: "#22c55e" },
              { label: vedasData.labels.subscribers, value: vedasData.subscribers, color: "#b45309" },
              { label: vedasData.labels.lossTarget, value: vedasData.lossRate, color: "#ef4444" },
              { label: vedasData.labels.servicePopulation, value: vedasData.population, color: "#3b82f6" },
            ].map((m) => (
              <div key={m.label} className="p-3 rounded-lg bg-surface/50 border border-border/50 text-center">
                <div className="text-[10px] text-foreground/30 uppercase tracking-wider">{m.label}</div>
                <div className="text-sm font-bold mt-1" style={{ color: m.color }}>{m.value}</div>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-lg bg-surface/50 border border-border/50">
            <div className="text-[10px] font-mono text-green-500/60 mb-2">{vedasData.aiModule}</div>
            <p className="text-xs text-foreground/50 leading-relaxed">
              {vedasData.aiText}
            </p>
          </div>
        </motion.div>

        {/* ───── DEALER NETWORK ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span>{"\uD83C\uDFEA"}</span> {t.turkerler.healthcareTitle}
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {healthcareProjects.map((h, i) => (
              <motion.div
                key={h.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 rounded-xl bg-surface border border-border"
              >
                <h4 className="font-semibold text-sm mb-3">{h.name}</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between"><span className="text-foreground/30">{t.turkerler.labels.capacity}</span><span className="font-medium">{h.beds}</span></div>
                  <div className="flex justify-between"><span className="text-foreground/30">{t.turkerler.labels.area}</span><span className="font-medium">{h.area}</span></div>
                  <div className="flex justify-between"><span className="text-foreground/30">{t.turkerler.labels.investment}</span><span className="font-medium">{h.investment}</span></div>
                  <div className="flex justify-between"><span className="text-foreground/30">{t.turkerler.labels.status}</span><span className="text-primary font-medium">{h.status}</span></div>
                </div>
                <div className="mt-3 pt-3 border-t border-border text-[10px] text-foreground/30">{h.note}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 p-4 rounded-lg bg-surface border border-border">
            <div className="text-[10px] font-mono text-foreground/30 mb-1">{t.turkerler.aiContribution}</div>
            <p className="text-xs text-foreground/40">
              {t.turkerler.healthcareAi}
            </p>
          </div>
        </motion.div>

        {/* ───── CRITICAL PROBLEMS & SOLUTIONS ───── */}
        <div>
          <h3 className="text-xl font-bold text-center mb-8">
            {t.turkerler.problemsTitle}
            <span className="text-gradient">{t.turkerler.problemsTitleB}</span>
          </h3>
          <div className="space-y-4">
            {criticalProblems.map((item, i) => (
              <motion.div
                key={item.area}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-xl bg-surface border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">{item.icon}</span>
                  <h4 className="font-bold text-sm flex-1">{item.area}</h4>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    item.severity === "Kritik" || item.severity === "Critical" ? "bg-red-500/10 text-red-400" : "bg-yellow-500/10 text-yellow-400"
                  }`}>
                    {item.severity}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-[10px] font-mono text-red-400/50 mb-2 tracking-wider">{t.turkerler.currentIssues}</div>
                    <ul className="space-y-1.5">
                      {item.problems.map((p) => (
                        <li key={p} className="text-[11px] text-foreground/40 flex items-start gap-2">
                          <span className="text-red-400/40 shrink-0">&times;</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-primary/50 mb-2 tracking-wider">{t.turkerler.aiSolution}</div>
                    <ul className="space-y-1.5">
                      {item.solutions.map((s) => (
                        <li key={s} className="text-[11px] text-foreground/50 flex items-start gap-2">
                          <span className="text-primary/60 shrink-0">&check;</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-border flex items-center gap-2">
                  <span className="text-[10px] font-mono text-accent/50">ROI:</span>
                  <span className="text-xs text-accent font-medium">{item.roi}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
