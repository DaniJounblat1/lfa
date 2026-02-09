# Labweh Football Academy - Project Structure

## Folder Structure

```
labweh-football-academy/
├── app/
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── gallery/
│   │   └── page.tsx              # Gallery page
│   ├── players/
│   │   └── page.tsx              # Players page with FIFA cards
│   ├── programs/
│   │   └── page.tsx              # Programs page
│   ├── globals.css               # Global styles and CSS variables
│   ├── layout.tsx                # Root layout with providers
│   └── page.tsx                  # Homepage
│
├── components/
│   ├── ui/
│   │   └── button.tsx            # Shadcn button component
│   ├── fifa-card.tsx             # FIFA-style player card component
│   ├── footer.tsx                # Site footer
│   ├── language-switcher.tsx     # EN/AR language toggle
│   ├── navbar.tsx                # Navigation bar
│   ├── players-section.tsx       # Homepage players preview
│   ├── theme-provider.tsx        # Dark mode provider
│   └── whatsapp-button.tsx       # WhatsApp contact button
│
├── contexts/
│   └── language-context.tsx      # i18n translations (EN/AR)
│
├── data/
│   └── players.json              # Players and coaches data
│
├── lib/
│   └── utils.ts                  # Utility functions (cn)
│
├── public/
│   └── images/
│       ├── coaches/
│       │   ├── coach1.jpg
│       │   └── coach2.jpg
│       ├── flags/
│       │   └── lebanon.png
│       ├── players/
│       │   ├── player1.jpg
│       │   ├── player2.jpg
│       │   ├── player3.jpg
│       │   ├── player4.jpg
│       │   ├── player5.jpg
│       │   └── player6.jpg
│       ├── gallery-1.jpg
│       ├── gallery-2.jpg
│       ├── gallery-3.jpg
│       ├── hero-bg.jpg
│       ├── lfa-logo.png          # Academy logo (used as background)
│       ├── training-1.jpg
│       └── training-2.jpg
│
├── .env.local                    # Environment variables (empty - no secrets needed)
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Key Files Description

### Data Files

**`/data/players.json`** - Contains all player and coach data:
- `coaches[]` - Array of coach objects with id, name, role, image, experience, specialty
- `players[]` - Array of player objects with:
  - Basic info: id, name, position, overall rating, age
  - Stats: pace, shooting, passing, dribbling, defending, physical (or GK stats)
  - Team info: country, countryFlag, team, teamLogo
  - Association: coachId (links to coach)

### Components

**`/components/fifa-card.tsx`** - FIFA FC 26 style player card:
- Gold card design with SVG background
- Three sizes: small, medium, large
- Displays: overall rating, position, player image, name, 6 stats
- Lebanon flag and LFA logo at bottom
- Hover effects and animations

**`/components/players-section.tsx`** - Homepage preview:
- Shows 4 featured players using mini cards
- Link to full players page

### Pages

**`/app/players/page.tsx`** - Full players page:
- Hero section
- Grid of all player cards
- Coaches section with their assigned players
- Statistics summary

### Styling

**`/app/globals.css`** - Contains:
- CSS custom properties for theming
- Hero background (uses logo image)
- RTL support for Arabic
- FIFA card animations

### Translations

**`/contexts/language-context.tsx`** - i18n support:
- English and Arabic translations
- RTL/LTR switching
- localStorage persistence

## Customization Guide

### Adding New Players

Edit `/data/players.json`:

```json
{
  "id": 9,
  "name": "Player Name",
  "position": "ST",           // ST, CM, CB, GK, RW, LW, CAM, CDM, LB, RB
  "overall": 82,              // 1-99
  "image": "/images/players/player9.jpg",
  "stats": {
    "pace": 85,
    "shooting": 78,
    "passing": 72,
    "dribbling": 80,
    "defending": 35,
    "physical": 70
  },
  "country": "Lebanon",
  "countryFlag": "/images/flags/lebanon.png",
  "team": "LFA",
  "teamLogo": "/images/lfa-logo.png",
  "age": 17,
  "coachId": "coach1"
}
```

### For Goalkeepers

Use these stats instead:
```json
"stats": {
  "diving": 84,
  "handling": 82,
  "kicking": 75,
  "reflexes": 86,
  "speed": 58,
  "positioning": 80
}
```

### Adding New Coaches

```json
{
  "id": "coach3",
  "name": "Coach Name",
  "role": "Fitness Coach",
  "image": "/images/coaches/coach3.jpg",
  "experience": "8 years",
  "specialty": "Physical Training"
}
```

### Changing Theme Colors

Edit `/app/globals.css` CSS variables:
- `--primary`: Main teal/cyan color
- `--secondary`: Dark background color
- `--background`: Page background
- `--foreground`: Text color

### WhatsApp Number

Update in these files:
- `/components/whatsapp-button.tsx`
- `/components/footer.tsx`
- `/app/page.tsx`
- `/app/programs/page.tsx`

Search for `96176988681` and replace with your number.

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Environment Variables

No environment variables required. The project runs without any external APIs or secrets.
