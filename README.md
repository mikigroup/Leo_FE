# 🦁 Malý Leo - Frontend

**Moderní webové řešení pro objednávkové systémy v gastronomii**

Malý Leo je pokročilá webová aplikace postavená na nejnovějších technologiích (Svelte 5 + SvelteKit), která nabízí vlastní branded objednávkové systémy jako alternativu k drahým marketplace službám.

![Version](https://img.shields.io/badge/version-1.0a-blue.svg)
![Svelte](https://img.shields.io/badge/Svelte-5.1.16-orange.svg)
![SvelteKit](https://img.shields.io/badge/SvelteKit-2.8.0-orange.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue.svg)

## 🎯 Popis projektu

Malý Leo je řešení pro restaurace a vývařovny, které chtějí:
- ✅ **Ušetřit až 30% provizí** oproti marketplace službám
- ✅ **Vlastnit svá zákaznická data** místo jejich předávání třetím stranám
- ✅ **Budovat vlastní značku** namísto cizích platforem
- ✅ **Mít plnou kontrolu** nad objednávkovým procesem

### 🏗️ Balíčky služeb

| Balíček | Cena | Funkce |
|---------|------|--------|
| **Základní** | 490 Kč/měsíc | Web s šablonou, 60 položek menu, základní podpora |
| **Rozšířený** | 990 Kč/měsíc | + Alergeny, dietní profily, integrace, prioritní podpora |
| **Business** | 1790 Kč/měsíc | + Vlastní design, platební brána, white-label, VIP podpora |

**🎁 Speciální nabídka: První měsíc ZDARMA!**

## 🚀 Technologie

### Frontend Stack
- **Svelte 5** - Moderní reaktivní framework
- **SvelteKit** - Full-stack framework s SSR
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **SCSS** - Advanced CSS preprocessing
- **Vite** - Rychlý build tool

### Pokročilé funkce
- **Enhanced Images** - Optimalizace obrázků
- **Superforms** - Pokročilé formuláře s validací
- **Zod** - Schema validation
- **GDPR Banner** - Compliance s GDPR
- **Analytics** - Vercel Analytics & Speed Insights
- **Nodemailer** - Email integrace

## 🛠️ Instalace a spuštění

### Předpoklady
- **Node.js** (verze 18 nebo vyšší)
- **npm** nebo **yarn**

### Instalace
```bash
# Klonování repositáře
git clone [repository-url]
cd Leo_FE

# Instalace závislostí
npm install
```

### Spuštění vývojového serveru
```bash
# Spuštění dev serveru
npm run dev

# Server poběží na http://localhost:5173
```

### Build pro produkci
```bash
# Build aplikace
npm run build

# Preview produkční build
npm run preview
```

## 📁 Struktura projektu

```
Leo_FE/
├── src/
│   ├── lib/
│   │   ├── component/          # Svelte komponenty
│   │   │   ├── Header.svelte   # Hlavní header s argumenty
│   │   │   ├── Nav.svelte      # Navigace
│   │   │   ├── Argumenty.svelte # Balíčky a cenová sekce
│   │   │   ├── StartBalicek.svelte # CTA sekce
│   │   │   ├── Promo.svelte    # Kalkulačka úspor
│   │   │   ├── Spoluprace.svelte # Proces spolupráce
│   │   │   ├── Form.svelte     # Kontaktní formulář
│   │   │   ├── Footer.svelte   # Patička
│   │   │   └── gdpr/           # GDPR komponenty
│   │   ├── stores/             # Svelte stores
│   │   ├── styles/             # SCSS styly a proměnné
│   │   ├── types/              # TypeScript typy
│   │   └── fonts/              # Webfonts (Rubik, Nunito)
│   ├── routes/
│   │   ├── +page.svelte        # Hlavní stránka
│   │   ├── +layout.svelte      # Layout wrapper
│   │   ├── faq/                # FAQ stránka
│   │   ├── gdpr/               # GDPR stránka
│   │   └── manifest/           # Manifest/O nás stránka
│   └── app.html                # HTML template
├── static/                     # Statické soubory
├── podklady/                   # Projektové podklady
└── config files               # Konfigurace (Svelte, Tailwind, etc.)
```

## 🎨 Design systém

### Barevná paleta
Projekt používá konzistentní barevné schéma definované v `src/lib/styles/_variables.scss`:

- **color1** - Primární barva (modrá)
- **color2** - Sekundární barva (zelená) 
- **color3** - Accent barva (oranžová)
- **color4** - Doplňková barva
- **color5** - Background barva

### Typografie
- **Primární font:** Rubik (Variable Weight)
- **Sekundární font:** Nunito
- **Responzivní velikosti** podle Tailwind breakpointů

### Komponenty
- **Moderní karty** s glassmorphism efekty
- **Smooth animace** a hover stavy
- **Responzivní grid** systém
- **Accessible forms** s validací

## 📱 Responzivní design

Aplikace je plně responzivní s breakpointy:
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** > 1024px
- **XL Desktop:** > 1440px

## 🔧 Konfigurace

### Environment proměnné
Vytvořte `.env` soubor pro lokální development:
```env
RECAPTCHA_SITE_KEY=your_recaptcha_key
EMAIL_HOST=your_smtp_host
EMAIL_USER=your_email
EMAIL_PASS=your_password
```

### GDPR Compliance
Projekt obsahuje:
- 🍪 **Cookie banner** s možností výběru
- 📝 **GDPR stránku** s podmínkami
- ✅ **Consent management** 

## 📄 Stránky a funkce

### Hlavní stránka (/)
1. **Header** - Value proposition + 3 argumenty
2. **Problem** - Definování problému s marketplace
3. **Argumenty/Balíčky** - Cenové balíčky s CTA
4. **Technologie** - Důvěryhodnost
5. **Proces** - Jak probíhá spolupráce
6. **Kalkulačka** - Výpočet úspor vs marketplace
7. **CTA** - Hlavní call-to-action
8. **Kontakt** - Formulář

### Podstránky
- **/faq** - Často kladené otázky
- **/gdpr** - GDPR a ochrana údajů  
- **/manifest** - O společnosti Malý Leo

### Funkce
- ✅ **Formulář s validací** (Superforms + Zod)
- ✅ **Email notifikace** (Nodemailer)
- ✅ **reCAPTCHA** ochrana
- ✅ **Cookie management**
- ✅ **SEO optimalizace**
- ✅ **Performance monitoring**

## 🚦 Sales Funnel logika

Stránka sleduje optimalizovaný conversion funnel:

```
🎯 Header (Hook) 
    ↓
😤 Problem (Marketplace provize)
    ↓  
💡 Solution (Naše balíčky)
    ↓
🛠️ Proof (Technologie + Proces) 
    ↓
💰 Benefit (Kalkulačka úspor)
    ↓
🎬 CTA (První měsíc zdarma)
    ↓
📞 Contact (Formulář)
```

## 📈 Performance

- ⚡ **Lighthouse Score:** 95+
- 🎨 **First Paint:** < 1s
- 📱 **Mobile Optimized**
- 🔍 **SEO Ready**
- ♿ **Accessible**

## 🤝 Contributing

1. Fork repository
2. Vytvořte feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit změny (`git commit -m 'Add some AmazingFeature'`)
4. Push do branch (`git push origin feature/AmazingFeature`)
5. Otevřete Pull Request

## 📞 Kontakt

**Malý Leo Team**
- 📧 Email: info@malyleo.cz
- 📱 Telefon: +420 733 362 418
- 🌐 Web: [malyleo.cz](https://malyleo.cz)

## 📄 Licence

Tento projekt je proprietární software společnosti Malý Leo.

---

**🦁 Postaveno s láskou v České republice** | Ver 1.0c | © 2023-2025 Malý Leo 