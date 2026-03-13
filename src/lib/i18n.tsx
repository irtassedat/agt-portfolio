"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "tr" | "en";

const dict = {
  tr: {
    nav: [
      { href: "#hero", label: "Ana Sayfa" },
      { href: "#about", label: "Hakkımda" },
      { href: "#turkerler", label: "AGT Vizyon" },
      { href: "#market", label: "Analiz" },
      { href: "#architecture", label: "Mimari" },
      { href: "#demo", label: "Demo" },
      { href: "#projects", label: "Projeler" },
      { href: "#tech", label: "Teknolojiler" },
      { href: "#contact", label: "İletişim" },
    ],
    hero: {
      badge: "AGT Ağaç Sanayi için hazırlanmıştır",
      titleA: "42 Yıllık Üretim Gücü İçin",
      titleB: "Dijital Dönüşüm Vizyonu",
      desc: "500.000 m² fabrika alanı, 90+ ülkeye ihracat, 20 parke koleksiyonu, 49+ panel rengi ve 1.000+ çalışanı inceledim. İki ayrı web sitesinin birleştirilmesi, üretim hattı optimizasyonu ve AI tabanlı akıllı fabrika için özel çözüm modülleri tasarladım.",
      cta1: "Analiz Raporunu İncele",
      cta2: "Dashboard Prototipi",
      data: {
        header: "AGT AĞAÇ SANAYİ — TEMEL VERİLER",
        metrics: [
          { label: "Yıllık Ciro", value: "698M TL", sub: "Capital 500 #333" },
          { label: "İhracat", value: "$72.7M", sub: "5 kıtaya ihracat" },
          { label: "Fabrika Alanı", value: "500K m²", sub: "Antalya OSB" },
          { label: "MDF Kapasitesi", value: "1M m³/yıl", sub: "2 üretim hattı" },
        ],
        sub: [
          { label: "İhracat Ülkeleri", value: "90+" },
          { label: "Çalışan", value: "1,000+" },
          { label: "Satış Noktası", value: "1,000+" },
        ],
        ipo: {
          title: "YATIRIM: 120M EUR",
          desc: "2019'da tamamlanan ikinci MDF hattı yatırımı. Üretim kapasitesi 2 katına çıktı. Biyokütle enerji santrali (5.37 MWe) ile kendi enerjisini üretiyor.",
        },
        source: "Kaynak: Capital 500, AOSB, AGT Kurumsal",
      },
    },
    about: {
      section: "HAKKIMDA",
      titleA: "Teknolojiyi ",
      titleB: "Üretime Dönüştürüyorum",
      bio1: "Full-stack yazılımcı olarak React/Next.js ekosistemi, Node.js/Express backend ve modern AI teknolojileri konusunda üretim seviyesinde deneyime sahibim. Özellikle ",
      bio1_s1: "birleşik dijital platformlar",
      bio1_s2: "gerçek zamanlı üretim dashboardları",
      bio1_s3: "otonom ajan mimarileri",
      bio1_end: " alanında çözümler geliştiriyorum.",
      bio2: "Multi-tenant SaaS sistemleri, çok kaynaklı veri toplama ve otomasyon konularında geliştirdiğim projeler, büyük ölçekli operasyonlarda dijital dönüşüm aracı olarak kullanılmaktadır. Bu deneyimi AGT Ağaç Sanayi'nin 42 yıllık üretim gücüne uyarlayarak, iki ayrı web sitesini birleştiren, üretim hattını optimize eden ve bayi ağını dijitalleştiren bir platform öneriyorum.",
      journey: "YOLCULUK",
      timeline: [
        { year: "2024", title: "Workintech Full-Stack Bootcamp", desc: "React, Java/Spring Boot, veritabanı yönetimi" },
        { year: "2024-25", title: "QR Menu Platform", desc: "176+ endpoint, 8+ marka, multi-tenant SaaS" },
        { year: "2025", title: "E-Commerce Platform", desc: "React + Spring Boot full-stack proje" },
        { year: "2025-26", title: "AI Ajan & Otomasyon Sistemleri", desc: "60+ AI ajan, Telegram botları, veri işleme platformları" },
      ],
      highlights: [
        { icon: "\u26A1", title: "Full-Stack Geliştirici", desc: "React, Next.js, Node.js, TypeScript, PostgreSQL ile 13+ üretim seviyesinde proje. Multi-tenant SaaS deneyimi." },
        { icon: "\uD83E\uDD16", title: "AI & Otonom Sistemler", desc: "60+ AI ajan orkestrasyonu, Claude API, MCP Server, gerçek zamanlı veri işleme ve karar destek sistemleri." },
        { icon: "\uD83D\uDCCA", title: "Veri & Dashboard Platformları", desc: "Çok kaynaklı veri toplama, real-time dashboard, üretim metrikleri izleme ve otomatik raporlama." },
        { icon: "\uD83D\uDE80", title: "Otomasyon & DevOps", desc: "Docker containerization, CI/CD, Telegram bot altyapıları, self-healing sistemler ve 7/24 izleme." },
      ],
    },
    turkerler: {
      section: "AGT AĞAÇ SANAYİ — DERİNLEMESİNE ANALİZ",
      titleA: "1984'ten Bugüne: ",
      titleB: "Ahşabı Geliştiren Teknoloji",
      subtitle: "AGT'nin 500.000 m² fabrika alanı, 2 MDF üretim hattı, 20 parke koleksiyonu, 49+ panel rengi, 90+ ihracat ülkesi ve biyokütle enerji santralini inceledim. Dijital dönüşüm için özel çözüm modülleri tasarladım.",
      portfolio: "ÜRÜN PORTFÖYÜ",
      wind: "Laminat Parke",
      hydro: "Dekoratif Panel",
      geothermal: "MDF / HDF",
      growth: "BÜYÜME YOL HARİTASI — 42 YILLIK EVRİM",
      megaTitle: "Dijital Dönüşüm ",
      megaTitleB: "Fırsat Alanları",
      aiContribution: "DİJİTAL ÇÖZÜM:",
      vedasTitle: "İKİ WEB SİTESİ BİRLEŞTİRME — agt.com.tr + agtwood.com",
      healthcareTitle: "Bayi Ağı Dijitalleştirme — 1,000+ Satış Noktası",
      healthcareAi: "1,000+ satış noktasında: bayi portal sistemi, sipariş takibi, stok yönetimi, kampanya yönetimi, performans dashboardı. 90+ ülkedeki distribütörler için çok dilli B2B platform. Hardwoods ve Richelieu gibi partnerlere özel entegrasyon.",
      problemsTitle: "Tespit Edilen Sorunlar & ",
      problemsTitleB: "Dijital Çözüm Modülleri",
      currentIssues: "MEVCUT SORUNLAR",
      aiSolution: "DİJİTAL ÇÖZÜM MODÜLÜ",
      labels: {
        capacity: "Kapasite",
        area: "Alan",
        investment: "Yatırım",
        status: "Durum",
      },
    },
    market: {
      section: "PAZAR ARAŞTIRMASI & VERİ ANALİZİ",
      titleA: "Verilerle ",
      titleB: "Derinlemesine Analiz",
      subtitle: "ISO 500, Capital 500, sektör raporları ve global benchmarklardan derlenen verilerle AGT'nin konumu.",
      financial: "AGT AĞAÇ SANAYİ — FİNANSAL PERFORMANS",
      financialSource: "Kaynak: Capital 500, AOSB Verileri",
      revenue: "Ciro",
      grossProfit: "İhracat",
      grossMargin: "İhracat Oranı",
      vedasTitle: "ÜRÜN KATEGORİLERİ — PAZAR PAYI ANALİZİ",
      lossRate: "pazar payı",
      competitorTitle: "SEKTÖR KONUMLANDIRMA — RAKİP KARŞILAŞTIRMA",
      competitorSource: "Türkiye Ahşap Panel Sektörü 2025",
      tableHeaders: { company: "Şirket", currentMW: "Kapasite", targetMW: "İhracat", growth: "Pazar Payı", revenue: "Ciro" },
      competitorNote: "Kritik farklılaşma: AGT, tasarım odaklı premium konumlandırmasıyla sektörde benzersiz. Defne Koz işbirliği ve SUPRAMAT teknolojisi ile marka değeri yüksek. Ancak Kastamonu Entegre (%30 pazar payı) ve Yıldız Entegre (global 11.) ile rekabette dijital dönüşüm zorunlu. İki ayrı web sitesi, parçalanmış SEO ve dijital bayi yönetimi eksikliği acil çözülmeli.",
      aiTitle: "GLOBAL BENCHMARK — ENDÜSTRİ 4.0 ETKİSİ",
      aiSource: "McKinsey, Deloitte, WEF 2024-2025",
      projectionTitle: "AGT İÇİN PROJEKSİYON",
      projectionText: "500.000 m² fabrikada global benchmarkların alt sınırı uygulandığında: AI üretim optimizasyonu ile %8-12 verimlilik artışı, prediktif bakım ile %25 plansız duruş azalması, birleşik dijital platform ile %30 online sipariş artışı, akıllı stok yönetimi ile %15 fire azalması. İki web sitesinin birleştirilmesi ile SEO gücü 2 katına çıkar.",
      aiFocusHakkari: "DİJİTAL FIRSAT ANALİZİ — WEB BİRLEŞTİRME ODAK",
      hakkariText: "AGT'nin agt.com.tr (Türkçe) ve agtwood.com (İngilizce) siteleri arasında 10 kritik tutarsızlık tespit edildi: fabrika alanı 400K-500K m², ihracat ülkeleri 90-100+ arası çelişkili veriler. Birleşik platform ile SEO fragmentasyonu çözülür, tek domain otoritesi sağlanır, HomeDesign aracı ve bayi portalı tüm pazarlara sunulur.",
    },
    architecture: {
      section: "// SİSTEM MİMARİSİ",
      titleA: "AGT ",
      titleB: "Dijital Platform Mimarisi",
      subtitle: "Üretim, satış, bayi ağı ve müşteri deneyimini tek bir dijital platformda birleştiren katmanlı mimari.",
      techTitle: "Kullanılacak Teknolojiler",
      layers: [
        { title: "Veri Kaynakları", items: [
          { name: "MDF Üretim Hattı 1-2", desc: "1M m³/yıl kapasite verileri" },
          { name: "Panel Üretim", desc: "49+ renk, SUPRAMAT, High Gloss" },
          { name: "Parke Üretim", desc: "20 koleksiyon, AC3-AC5 kalite" },
          { name: "Biyokütle Santral", desc: "5.37 MWe enerji üretimi" },
          { name: "Bayi Ağı", desc: "1,000+ satış noktası verileri" },
        ]},
        { title: "Veri Pipeline", items: [
          { name: "SAP HANA Bridge", desc: "ERP veri entegrasyonu" },
          { name: "IoT Sensörler", desc: "Üretim hattı izleme" },
          { name: "CRM Data", desc: "Bayi & müşteri verileri" },
          { name: "Web Analytics", desc: "Birleşik platform metrikleri" },
        ]},
        { title: "AI & Otomasyon Katmanı", items: [
          { name: "Üretim Optimizasyon Ajanı", desc: "AI ile MDF/panel kalite kontrolü" },
          { name: "Stok & Talep Tahmin Ajanı", desc: "90+ ülke için talep forecasting" },
          { name: "Prediktif Bakım Ajanı", desc: "Üretim hattı arıza tahmini" },
          { name: "Bayi Performans Ajanı", desc: "1,000+ satış noktası analizi" },
          { name: "Tasarım Trend Ajanı", desc: "Pazar trend analizi & koleksiyon önerisi" },
        ]},
        { title: "Çıktı Katmanı", items: [
          { name: "Birleşik Web Platformu", desc: "agt.com.tr + agtwood.com tek çatı" },
          { name: "Bayi Portal", desc: "B2B sipariş & stok yönetimi" },
          { name: "Üretim Dashboard", desc: "Gerçek zamanlı fabrika izleme" },
          { name: "HomeDesign Pro", desc: "AI destekli oda tasarım aracı" },
        ]},
      ],
    },
    demo: {
      section: "CANLI PROTOTİP",
      titleA: "AGT Dijital Hub ",
      titleB: "Dashboard",
      subtitle: "2 MDF hattı, panel ve parke üretimi, 90+ ülke ihracat durumu, bayi performansı ve AI optimizasyon önerileri — tek ekranda.",
      kpis: [
        { label: "Günlük MDF Üretim", sub: "2 hat aktif çalışıyor" },
        { label: "Aktif Sipariş", sub: "32 ülkeden gelen talepler" },
        { label: "Bayi Performans", sub: "1,000+ satış noktası" },
        { label: "Enerji Üretimi", sub: "Biyokütle 5.37 MWe" },
      ],
      plantStatus: "ÜRETİM HATTI DURUMU",
      aiAlerts: "AI OPTİMİZASYON ÖNERİLERİ",
      vedasDist: "İHRACAT DAĞILIMI",
      projectProgress: "DİJİTAL DÖNÜŞÜM İLERLEME",
      live: "Canlı",
      statusLabels: { online: "Aktif", maintenance: "Bakım", warning: "Uyarı" },
      disclaimer: "* Simüle edilmiş verilerle prototip. Gerçek uygulamada SAP HANA, IoT sensörleri, bayi portali ve üretim SCADA verileriyle canlı veri akışı sağlanır.",
    },
    github: {
      section: "PROJELER & DENEYİM",
      titleA: "Geliştirdiğim ",
      titleB: "Sistemler",
      syncLabel: "GitHub ile senkronize",
      viewAll: "Tüm Projeleri Gör",
      openSource: "Açık Kaynak Projeler",
      dataAnalysis: "Veri Analiz & Otomasyon Sistemleri",
      projectMeta: {
        latestv2: { title: "QR Menu Frontend", desc: "8+ marka, 10+ şubelik multi-tenant restoran yönetim sistemi. 27 component, 20 sayfa." },
        "qrmenu-backend": { title: "QR Menu Backend API", desc: "176+ endpoint, 21 API modülü, RBAC yetkilendirme, sadakat programı." },
        ecommerce: { title: "E-Commerce Frontend", desc: "Tam kapsamlı e-ticaret platformu. Ürün katalog, sepet yönetimi, ödeme entegrasyonu." },
        "ecommerce-backendAPI": { title: "E-Commerce Backend API", desc: "Spring Boot tabanlı e-ticaret API. Ürün yönetimi, stok takibi, sipariş işlemleri." },
        "web-sayfam": { title: "Portföy Web Sitesi", desc: "Next.js 16 + TypeScript + Framer Motion ile kişisel portföy sitesi." },
        "turkerler-portfolio": { title: "Türkerler Enerji Portfolyosu", desc: "Türkerler Holding için AI tabanlı enerji yönetim vizyonu. Canlı dashboard prototipi." },
      },
      achievements: [
        { title: "Multi-Tenant SaaS Platform", desc: "8+ marka ve 10+ şubeyi tek panelden yöneten restoran sistemi. React/Vite frontend, Express.js backend, PostgreSQL veritabanı.", metric: "176+ API endpoint" },
        { title: "AI Ajan Orkestrasyon Sistemi", desc: "60+ uzman ajanın koordineli çalışmasını sağlayan enterprise orkestrasyon platformu. Self-learning, fault-tolerant consensus.", metric: "60+ AI ajan" },
        { title: "Gerçek Zamanlı Veri İşleme", desc: "20+ kaynaktan yüksek hacimli veri toplama, normalizasyon ve anlık anomali tespit sistemi.", metric: "10K+ veri/dk" },
        { title: "Topluluk Yönetim Platformu", desc: "12K+ satır Python, 4 Docker microservice, FastAPI admin dashboard, adaptif ML skorlama motoru.", metric: "12K+ satır kod" },
      ],
    },
    tech: {
      section: "// TEKNOLOJİ YIĞINI",
      titleA: "Teknik ",
      titleB: "Yetkinlikler",
      categories: ["Frontend", "Backend", "AI & Otomasyon", "DevOps & Altyapı"],
    },
    contact: {
      section: "SONRAKİ ADIMLAR",
      titleA: "Birlikte ",
      titleB: "Başaralım",
      subtitle: "AGT'nin 42 yıllık üretim deneyimini dijital platformlarla güçlendirmek için önerdiğim yol haritası.",
      steps: [
        { step: "01", title: "Teknik Görüşme", desc: "Mevcut web siteleri, SAP altyapısı, bayi sistemi ve üretim verilerinin detaylı analizi." },
        { step: "02", title: "Web Birleştirme", desc: "agt.com.tr ve agtwood.com tek platformda birleştirme. SEO, içerik ve UX optimizasyonu." },
        { step: "03", title: "Bayi Portal & Dashboard", desc: "B2B bayi portal sistemi, üretim izleme dashboardı ve HomeDesign Pro aracı geliştirme." },
        { step: "04", title: "AI Entegrasyonu", desc: "SAP HANA entegrasyonu, üretim hattı optimizasyonu, talep tahmini ve akıllı stok yönetimi." },
      ],
      stepLabel: "Adım",
      emailLabel: "E-posta",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      linkedinName: "Sedat İrtaş",
      ctaText: "Bu portföy, AGT Ağaç Sanayi'nin dijital dönüşümü için özel olarak hazırlanmıştır. Tüm teknik detaylar, mimari tasarım ve prototip kodları incelemeye açıktır.",
      viewSource: "Kaynak Kodunu İncele",
      backToVision: "Vizyona Dön",
    },
    footer: {
      name: "Sedat İrtaş",
      tagline: "AGT Ağaç Sanayi dijital dönüşüm vizyonu — Ahşabı geliştiren teknoloji",
      sync: "GitHub ile senkronize",
    },
  },

  en: {
    nav: [
      { href: "#hero", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#turkerler", label: "AGT Vision" },
      { href: "#market", label: "Analysis" },
      { href: "#architecture", label: "Architecture" },
      { href: "#demo", label: "Demo" },
      { href: "#projects", label: "Projects" },
      { href: "#tech", label: "Technologies" },
      { href: "#contact", label: "Contact" },
    ],
    hero: {
      badge: "Prepared for AGT Agac Sanayi",
      titleA: "Digital Transformation Vision",
      titleB: "For 42 Years of Manufacturing Power",
      desc: "I've analyzed the 500,000 m² factory complex, exports to 90+ countries, 20 flooring collections, 49+ panel colors, and 1,000+ employees. I've designed custom solution modules for unifying two websites, optimizing production lines, and building an AI-powered smart factory.",
      cta1: "Review Analysis Report",
      cta2: "Dashboard Prototype",
      data: {
        header: "AGT AGAC SANAYI — KEY DATA",
        metrics: [
          { label: "Annual Revenue", value: "698M TL", sub: "Capital 500 #333" },
          { label: "Exports", value: "$72.7M", sub: "5 continents" },
          { label: "Factory Area", value: "500K m²", sub: "Antalya OIZ" },
          { label: "MDF Capacity", value: "1M m³/yr", sub: "2 production lines" },
        ],
        sub: [
          { label: "Export Countries", value: "90+" },
          { label: "Employees", value: "1,000+" },
          { label: "Sales Points", value: "1,000+" },
        ],
        ipo: {
          title: "INVESTMENT: 120M EUR",
          desc: "Second MDF line completed in 2019. Production capacity doubled. Biomass power plant (5.37 MWe) generates own energy from production waste.",
        },
        source: "Source: Capital 500, AOSB, AGT Corporate",
      },
    },
    about: {
      section: "ABOUT ME",
      titleA: "Turning Technology ",
      titleB: "Into Manufacturing",
      bio1: "As a full-stack developer, I have production-level experience with the React/Next.js ecosystem, Node.js/Express backend, and modern AI technologies. I specialize in ",
      bio1_s1: "unified digital platforms",
      bio1_s2: "real-time production dashboards",
      bio1_s3: "autonomous agent architectures",
      bio1_end: ".",
      bio2: "My projects in multi-tenant SaaS systems, multi-source data collection, and automation serve as digital transformation tools in large-scale operations. I'm proposing a platform for AGT that unifies two separate websites, optimizes production lines, and digitizes the dealer network — leveraging 42 years of manufacturing expertise.",
      journey: "JOURNEY",
      timeline: [
        { year: "2024", title: "Workintech Full-Stack Bootcamp", desc: "React, Java/Spring Boot, database management" },
        { year: "2024-25", title: "QR Menu Platform", desc: "176+ endpoints, 8+ brands, multi-tenant SaaS" },
        { year: "2025", title: "E-Commerce Platform", desc: "React + Spring Boot full-stack project" },
        { year: "2025-26", title: "AI Agent & Automation Systems", desc: "60+ AI agents, Telegram bots, data processing platforms" },
      ],
      highlights: [
        { icon: "\u26A1", title: "Full-Stack Developer", desc: "13+ production projects with React, Next.js, Node.js, TypeScript, PostgreSQL. Multi-tenant SaaS experience." },
        { icon: "\uD83E\uDD16", title: "AI & Autonomous Systems", desc: "60+ AI agent orchestration, Claude API, MCP Server, real-time data processing and decision support." },
        { icon: "\uD83D\uDCCA", title: "Data & Dashboard Platforms", desc: "Multi-source data collection, real-time dashboards, production metrics monitoring, automated reporting." },
        { icon: "\uD83D\uDE80", title: "Automation & DevOps", desc: "Docker containerization, CI/CD, Telegram bots, self-healing systems, 24/7 monitoring." },
      ],
    },
    turkerler: {
      section: "AGT AGAC SANAYI — IN-DEPTH ANALYSIS",
      titleA: "Since 1984: ",
      titleB: "Technology Developing Wood",
      subtitle: "I've analyzed AGT's 500,000 m² factory, 2 MDF production lines, 20 flooring collections, 49+ panel colors, 90+ export countries, and biomass power plant. I've designed custom digital transformation modules.",
      portfolio: "PRODUCT PORTFOLIO",
      wind: "Laminate Flooring",
      hydro: "Decorative Panels",
      geothermal: "MDF / HDF",
      growth: "GROWTH ROADMAP — 42 YEARS OF EVOLUTION",
      megaTitle: "Digital Transformation ",
      megaTitleB: "Opportunity Areas",
      aiContribution: "DIGITAL SOLUTION:",
      vedasTitle: "TWO WEBSITES UNIFICATION — agt.com.tr + agtwood.com",
      healthcareTitle: "Dealer Network Digitization — 1,000+ Sales Points",
      healthcareAi: "Across 1,000+ sales points: dealer portal system, order tracking, inventory management, campaign management, performance dashboard. Multi-language B2B platform for distributors in 90+ countries. Custom integration for partners like Hardwoods and Richelieu.",
      problemsTitle: "Identified Problems & ",
      problemsTitleB: "Digital Solution Modules",
      currentIssues: "CURRENT PROBLEMS",
      aiSolution: "DIGITAL SOLUTION MODULE",
      labels: {
        capacity: "Capacity",
        area: "Area",
        investment: "Investment",
        status: "Status",
      },
    },
    market: {
      section: "MARKET RESEARCH & DATA ANALYSIS",
      titleA: "In-Depth Analysis ",
      titleB: "With Data",
      subtitle: "AGT's positioning based on ISO 500, Capital 500, industry reports, and global benchmarks.",
      financial: "AGT AGAC SANAYI — FINANCIAL PERFORMANCE",
      financialSource: "Source: Capital 500, AOSB Data",
      revenue: "Revenue",
      grossProfit: "Exports",
      grossMargin: "Export Ratio",
      vedasTitle: "PRODUCT CATEGORIES — MARKET SHARE ANALYSIS",
      lossRate: "market share",
      competitorTitle: "SECTOR POSITIONING — COMPETITOR COMPARISON",
      competitorSource: "Turkey Wood Panel Sector 2025",
      tableHeaders: { company: "Company", currentMW: "Capacity", targetMW: "Exports", growth: "Market Share", revenue: "Revenue" },
      competitorNote: "Critical differentiation: AGT holds a unique position with its design-oriented premium branding. The Defne Koz collaboration and SUPRAMAT technology create high brand value. However, competing with Kastamonu Entegre (30% market share) and Yildiz Entegre (11th globally) requires digital transformation. Two separate websites, fragmented SEO, and lack of digital dealer management need urgent resolution.",
      aiTitle: "GLOBAL BENCHMARK — INDUSTRY 4.0 IMPACT",
      aiSource: "McKinsey, Deloitte, WEF 2024-2025",
      projectionTitle: "PROJECTION FOR AGT",
      projectionText: "Applying global benchmark minimums to a 500,000 m² factory: AI production optimization yields 8-12% efficiency gain, predictive maintenance reduces unplanned downtime by 25%, unified digital platform increases online orders by 30%, smart inventory management cuts waste by 15%. Unifying two websites doubles SEO authority.",
      aiFocusHakkari: "DIGITAL OPPORTUNITY — WEBSITE UNIFICATION FOCUS",
      hakkariText: "10 critical inconsistencies found between agt.com.tr (Turkish) and agtwood.com (English): factory area quoted as 400K-500K m², export countries 90-100+ with conflicting data. A unified platform resolves SEO fragmentation, establishes single domain authority, and brings HomeDesign tool and dealer portal to all markets.",
    },
    architecture: {
      section: "// SYSTEM ARCHITECTURE",
      titleA: "AGT ",
      titleB: "Digital Platform Architecture",
      subtitle: "Layered architecture unifying production, sales, dealer network, and customer experience on a single digital platform.",
      techTitle: "Technologies to be Used",
      layers: [
        { title: "Data Sources", items: [
          { name: "MDF Lines 1-2", desc: "1M m³/yr capacity data" },
          { name: "Panel Production", desc: "49+ colors, SUPRAMAT, High Gloss" },
          { name: "Flooring Production", desc: "20 collections, AC3-AC5 quality" },
          { name: "Biomass Plant", desc: "5.37 MWe energy generation" },
          { name: "Dealer Network", desc: "1,000+ sales point data" },
        ]},
        { title: "Data Pipeline", items: [
          { name: "SAP HANA Bridge", desc: "ERP data integration" },
          { name: "IoT Sensors", desc: "Production line monitoring" },
          { name: "CRM Data", desc: "Dealer & customer data" },
          { name: "Web Analytics", desc: "Unified platform metrics" },
        ]},
        { title: "AI & Automation Layer", items: [
          { name: "Production Optimization Agent", desc: "AI-powered MDF/panel quality control" },
          { name: "Demand Forecasting Agent", desc: "90+ country demand forecasting" },
          { name: "Predictive Maintenance Agent", desc: "Production line failure prediction" },
          { name: "Dealer Performance Agent", desc: "1,000+ sales point analytics" },
          { name: "Design Trend Agent", desc: "Market trend analysis & collection suggestions" },
        ]},
        { title: "Output Layer", items: [
          { name: "Unified Web Platform", desc: "agt.com.tr + agtwood.com under one roof" },
          { name: "Dealer Portal", desc: "B2B ordering & inventory" },
          { name: "Production Dashboard", desc: "Real-time factory monitoring" },
          { name: "HomeDesign Pro", desc: "AI-powered room design tool" },
        ]},
      ],
    },
    demo: {
      section: "LIVE PROTOTYPE",
      titleA: "AGT Digital Hub ",
      titleB: "Dashboard",
      subtitle: "2 MDF lines, panel and flooring production, 90+ country export status, dealer performance, and AI optimization suggestions — on a single screen.",
      kpis: [
        { label: "Daily MDF Production", sub: "2 active lines" },
        { label: "Active Orders", sub: "From 32 countries" },
        { label: "Dealer Performance", sub: "1,000+ sales points" },
        { label: "Energy Generation", sub: "Biomass 5.37 MWe" },
      ],
      plantStatus: "PRODUCTION LINE STATUS",
      aiAlerts: "AI OPTIMIZATION SUGGESTIONS",
      vedasDist: "EXPORT DISTRIBUTION",
      projectProgress: "DIGITAL TRANSFORMATION PROGRESS",
      live: "Live",
      statusLabels: { online: "Active", maintenance: "Maintenance", warning: "Warning" },
      disclaimer: "* Prototype with simulated data. In production, live data flows via SAP HANA, IoT sensors, dealer portal, and production SCADA.",
    },
    github: {
      section: "PROJECTS & EXPERIENCE",
      titleA: "Systems I've ",
      titleB: "Built",
      syncLabel: "Synced with GitHub",
      viewAll: "View All Projects",
      openSource: "Open Source Projects",
      dataAnalysis: "Data Analysis & Automation Systems",
      projectMeta: {
        latestv2: { title: "QR Menu Frontend", desc: "Multi-tenant restaurant management for 8+ brands, 10+ branches. 27 components, 20 pages." },
        "qrmenu-backend": { title: "QR Menu Backend API", desc: "176+ endpoints, 21 API modules, RBAC authorization, loyalty program." },
        ecommerce: { title: "E-Commerce Frontend", desc: "Full-scope e-commerce platform. Product catalog, cart, payments." },
        "ecommerce-backendAPI": { title: "E-Commerce Backend API", desc: "Spring Boot e-commerce API. Product management, inventory, order processing." },
        "web-sayfam": { title: "Portfolio Website", desc: "Personal portfolio with Next.js 16 + TypeScript + Framer Motion." },
        "turkerler-portfolio": { title: "Turkerler Energy Portfolio", desc: "AI-powered energy management vision for Turkerler Holding. Live dashboard prototype." },
      },
      achievements: [
        { title: "Multi-Tenant SaaS Platform", desc: "Restaurant system managing 8+ brands and 10+ branches from a single panel. React/Vite frontend, Express.js backend, PostgreSQL.", metric: "176+ API endpoints" },
        { title: "AI Agent Orchestration", desc: "Enterprise orchestration platform coordinating 60+ specialized agents. Self-learning, fault-tolerant consensus.", metric: "60+ AI agents" },
        { title: "Real-Time Data Processing", desc: "High-volume data collection from 20+ sources with normalization and real-time anomaly detection.", metric: "10K+ data/min" },
        { title: "Community Management Platform", desc: "12K+ lines Python, 4 Docker microservices, FastAPI admin dashboard, adaptive ML scoring engine.", metric: "12K+ lines of code" },
      ],
    },
    tech: {
      section: "// TECH STACK",
      titleA: "Technical ",
      titleB: "Expertise",
      categories: ["Frontend", "Backend", "AI & Automation", "DevOps & Infrastructure"],
    },
    contact: {
      section: "NEXT STEPS",
      titleA: "Let's ",
      titleB: "Build Together",
      subtitle: "My proposed roadmap for empowering AGT's 42 years of manufacturing expertise with digital platforms.",
      steps: [
        { step: "01", title: "Technical Meeting", desc: "Detailed analysis of current websites, SAP infrastructure, dealer systems, and production data." },
        { step: "02", title: "Web Unification", desc: "Merging agt.com.tr and agtwood.com into a single platform. SEO, content, and UX optimization." },
        { step: "03", title: "Dealer Portal & Dashboard", desc: "B2B dealer portal, production monitoring dashboard, and HomeDesign Pro tool development." },
        { step: "04", title: "AI Integration", desc: "SAP HANA integration, production line optimization, demand forecasting, and smart inventory management." },
      ],
      stepLabel: "Step",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      linkedinName: "Sedat Irtas",
      ctaText: "This portfolio was specifically prepared for AGT Agac Sanayi's digital transformation. All technical details, architectural designs, and prototype code are available for review.",
      viewSource: "View Source Code",
      backToVision: "Back to Vision",
    },
    footer: {
      name: "Sedat Irtas",
      tagline: "AGT Agac Sanayi digital transformation vision — Technology developing wood",
      sync: "Synced with GitHub",
    },
  },
};

type Dict = typeof dict;
type Translations = Dict[Lang];

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangContextType>({
  lang: "tr",
  setLang: () => {},
  t: dict.tr,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("tr");

  useEffect(() => {
    const saved = localStorage.getItem("agt-lang") as Lang | null;
    if (saved && dict[saved]) setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("agt-lang", l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
