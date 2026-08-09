# Yogi Ananda Brata — Portfolio Website

Production-ready personal portfolio built for **IT Engineering Team Lead, Network Engineer, & Cybersecurity Specialist**.  
Designed with a modern cyber/ops aesthetic, dual-language support (ID/EN), dark/light themes, and responsive interactive cards.

---

## Key Features

- **Cyber/Ops Visual Theme**: Custom live network panel, active traffic/security widgets, and interactive spotlight cards.
- **Bilingual (ID/EN)**: Instant locale switcher saved in `localStorage`.
- **Theme Support**: Dark (default) & Light theme modes.
- **Sticky Navigation**: Smooth-scroll navigation bar pinned during scrolling.
- **Interactive Matrix**: Skill matrix grouped by domain with visual proficiency levels.
- **Case Study Ready**: Project showcases with status tags, core focus badges, and external links.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: `clsx`, `tailwind-merge`

---

## Getting Started

### Prerequisites

- Node.js >= 20.9.0
- npm >= 10.0.0

### Installation

```bash
# Clone the repository
git clone https://github.com/username/yogi-portfolio.git

# Navigate to project directory
cd yogi-portfolio

# Install dependencies
npm install
```

### Development

Start local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Create optimized production build:

```bash
npm run build
npm run start
```

---

## Project Structure

```text
.
├── public/
│   └── images/          # Assets (profile, previews)
├── src/
│   ├── app/
│   │   ├── globals.css  # Global styles & theme variables
│   │   ├── layout.tsx   # Root layout & metadata
│   │   └── page.tsx     # Main portfolio page
│   ├── components/
│   │   ├── ui/          # Spotlight and UI primitives
│   │   ├── motion-ui.tsx# Framer Motion wrapper components
│   │   └── utils.ts     # Classname merging utilities
│   └── data/
│       └── content.ts   # Bilingual content source (ID/EN)
├── tailwind.config.js
└── tsconfig.json
```

---

## Customization

1. **Personal Info**: Update `src/data/content.ts` for bio, work history, projects, and skills.
2. **Profile Image**: Replace `public/images/profile.jpg`.
3. **Metadata**: Edit `src/app/layout.tsx` for SEO titles and descriptions.

---

## License

This project is open-source under the [MIT License](LICENSE).
