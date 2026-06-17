# miniTrekkers Website

Built with **Next.js 14 + Tailwind CSS**.

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Add your Formspree endpoint
Open `components/Contact.jsx` and replace:
```js
const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID'
```
with your actual Formspree endpoint.

### 3. Run locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 4. Deploy to Vercel
```bash
npm install -g vercel
vercel
```
Or connect your GitHub repo at [vercel.com](https://vercel.com) for auto-deploys.

---

## Adding real gallery photos
Drop your photos into `/public/` and update the `src` values in `components/Gallery.jsx`:
```js
const photos = [
  { src: '/your-photo-1.jpg', label: 'Summit day', tall: true },
  ...
]
```

## Project Structure
```
minitrekkers/
├── app/
│   ├── layout.jsx      # Root layout, fonts, metadata
│   ├── page.jsx        # Main page (assembles all sections)
│   └── globals.css     # Tailwind base styles
├── components/
│   ├── Navbar.jsx      # Fixed nav with mobile hamburger
│   ├── Hero.jsx        # Hero section with mountain illustration
│   ├── Stats.jsx       # Stats strip (treks, kids, trails, years)
│   ├── About.jsx       # About section with photo
│   ├── Gallery.jsx     # Photo gallery + Instagram CTA
│   ├── Contact.jsx     # Form → Formspree email + WhatsApp
│   └── Footer.jsx      # Footer with logo and links
├── public/
│   ├── logo.svg        # miniTrekkers logo
│   ├── trek-kids.jpg   # About section photo
│   └── gallery-*.jpg   # Gallery photos (replace with real ones)
└── tailwind.config.js  # Brand colours and fonts
```

## Future additions
- `app/treks/page.jsx` — Trek listings page
- `app/book/[id]/page.jsx` — Booking form per trek
- Supabase for trek data + bookings
- Razorpay for payments
