# SmarterPayouts Website

**SmarterPayouts** is a modern, mobile-first website for users to self-quote their structured settlements — with no sales pressure, no personal data, and full court approval.

Originally built with HTML/CSS/JS, this site is ready for **migration into React.js** for better scalability and performance.

---

## 🚀 Live Demo

[https://ofranc1208.github.io/newSPwebsite/](https://ofranc1208.github.io/newSPwebsite/)

---

## 📁 Static HTML Structure

```
/smarterpayouts
├── index.html                          # Landing page w/ hero video
├── home.html                           # 4-step process overview
├── pricingcalculator.html              # External tool redirect
├── contactus.html                      # Contact form and support info
├── about.html                          # Company values and team
├── articles.html                       # Blog index
├── blog/
│   ├── structured-settlements-explained.html
│   ├── should-you-sell-structured-settlement.html
│   └── how-fast-is-settlement-payout.html
├── faqs.html                           # FAQ with schema markup
├── privacy.html                        # Privacy Policy
├── terms.html                          # Terms & Conditions
├── style.css                           # Global styles
├── scripts.js                          # Counters, effects
├── images/                             # Visual assets
├── assets/                             # Favicon, preview images
├── sitemap.xml                         # SEO sitemap
└── .nojekyll                           # Required for GitHub Pages
```

---

## ⚛️ React Migration Plan

### ✅ Dev Setup

```bash
npx create-react-app smarterpayouts
cd smarterpayouts
npm install react-router-dom bootstrap react-helmet
```

### ✅ Suggested Folder Structure

```
/src
├── assets/                 # Static images, videos, icons
├── components/             # Navbar, Footer, Hero, BlogCard, FAQAccordion, etc.
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── FAQs.jsx
│   ├── Articles.jsx
│   └── BlogPost.jsx
├── App.js
└── index.js
```

### ✅ Routing (React Router v6)

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/faqs" element={<FAQs />} />
  <Route path="/articles" element={<Articles />} />
  <Route path="/blog/:slug" element={<BlogPost />} />
</Routes>
```

### ✅ SEO & Metadata

- Use `react-helmet` for dynamic SEO meta tags (title, description, OG, Twitter card).
- Inject `FAQPage` and `BlogPosting` schema via `<script type="application/ld+json">`.

---

## 🧩 Features to Migrate

- ✅ Hero video section with autoplay/fallback
- ✅ Animated stat counters (React `useEffect`)
- ✅ FAQ accordion (Bootstrap or custom)
- ✅ Blog card layout with internal navigation
- ✅ Floating contact FAB (optional)

---

## 📬 Contact Info

- **Email**: support@smarterpayouts.com
- **Phone**: +1 (561) 583-1280
- **Location**: Delray Beach, FL

---

## ✅ Deployment Notes

- Static deploy: GitHub Pages, Vite + gh-pages, or Surge
- Production: Netlify or Vercel
- Use `.env` for secure keys or form integrations like Netlify Forms or Formspree

---

> Let the developer know this site is structured cleanly and is ready for modular component conversion. All files are optimized for responsive layout and mobile-first delivery.
