# 🚀 [Next Ventures](https://github.com/Chitraksh-04/Venture_Verse/blob/main/README.md#-next-ventures)

**Next Ventures** is a modern web platform for entrepreneurs to **pitch their startups**, **explore innovations**, and **connect with investors and founders**.  
Built using **Next.js**, **Sanity CMS**, and **Tailwind CSS**, it offers a sleek, interactive experience with real-time content updates and stunning UI animations.

---

## 🌟 [Features](https://github.com/Chitraksh-04/Venture_Verse/blob/main/README.md#-features)

- 🧠 **Dynamic Pitch Cards** — Explore and showcase startup ideas with real-time Sanity data.  
- 🎥 **Animated Hero Section** — Interactive pitch previews and collaborative cursor effects.  
- 🧑‍💻 **Author Profiles** — View founder bios, social links, and associated startups.  
- 📊 **Sanity CMS Integration** — Manage all content (pitches, authors, categories) through Sanity’s intuitive dashboard.  
- 💬 **Search Functionality** — Instantly find startups by title, category, or author.  
- 🧭 **Responsive Design** — Fully optimized for desktop, tablet, and mobile.  
- ⚡ **Deployed on Vercel** for lightning-fast performance and scalability.

---

## 🧰 Tech Stack

| Category | Technologies |
|-----------|--------------|
| **Frontend** | Next.js 14, React, TypeScript |
| **Styling** | Tailwind CSS, Framer Motion |
| **Backend (CMS)** | Sanity.io |
| **Database** | GROQ Queries via Sanity Dataset |
| **Monitoring** | Sentry |
| **Deployment** | Vercel |
| **Version Control** | Git + GitHub |

---


## ⚙️ [Setup & Installation](https://github.com/Chitraksh-04/Venture_Verse/blob/main/README.md#️-setup--installation)

### 1️⃣ Clone the repository

git clone https://github.com/Chitraksh-04/Venture_Verse.git
cd Venture_Verse


### 2️⃣ Install dependencies
npm install

### 3️⃣ Configure Environment Variables
Copy `.env.example` to `.env.local` and fill in your environment variables:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `SANITY_TOKEN`
- `SENTRY_DSN`

### 4️⃣ Run locally
npm run dev

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🛠️ Sentry Integration

Sentry is integrated for real-time error and performance monitoring.

Install Sentry SDK for Next.js:
npm install @sentry/nextjs

Initialize Sentry by creating a `sentry.server.config.js` and `sentry.client.config.js` in your project root:

// sentry.client.config.js
import * as Sentry from "@sentry/nextjs";
Sentry.init({
dsn: process.env.SENTRY_DSN,
tracesSampleRate: 1.0,
});

Ensure your `SENTRY_DSN` is set in `.env.local`.

Refer to [Sentry Docs](https://docs.sentry.io/platforms/javascript/guides/nextjs/) for advanced configuration.

---

## 📦 Folder Structure

- `components/`: Reusable UI elements
- `pages/`: Next.js routes
- `lib/`: Utility functions and hooks
- `schemas/`: Sanity schema definitions
- `public/`: Static assets

---

## 🤝 Contributing

Pull requests, issues, and suggestions are welcome! For major changes, please open an issue first to discuss what you would like to change.


