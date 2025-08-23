<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg"
     width="700" height="110" viewBox="0 0 700 110" role="img" aria-label="Typing banner">
  <style><![CDATA[
    @font-face{
      font-family: 'FiraCodeLocal';
      src: local('Fira Code'), local('FiraCode');
    }
    text { font-family: FiraCodeLocal, "Fira Code", "Segoe UI", Roboto, monospace; font-weight: 600; fill:#e6eef8; font-size:18px; }
    .muted { fill: #b8c9dd; font-weight:500; }
    .cursor { fill: #7dd3fc; }
  ]]></style>

  <!-- background (transparent) and subtle rounded rectangle -->
  <rect x="6" y="6" width="688" height="98" rx="12" ry="12" fill="transparent" stroke="rgba(255,255,255,0.03)" />

  <!-- Definitions for masking (used to reveal text as if it's typed) -->
  <defs>
    <!-- Cursor (visible/hidden) animation -->
    <rect id="cursor-rect" x="0" y="0" width="8" height="22" class="cursor" rx="2" ry="2" />

    <!-- Masks for three lines. Each mask reveals the line by animating a rect width -->
    <mask id="m1" maskUnits="userSpaceOnUse">
      <rect x="0" y="0" width="700" height="110" fill="black"/>
      <rect id="m1r" x="10" y="18" width="0" height="28" fill="white">
        <animate attributeName="width" from="0" to="680" dur="2.6s" begin="0s" fill="freeze" />
      </rect>
    </mask>

    <mask id="m2" maskUnits="userSpaceOnUse">
      <rect x="0" y="0" width="700" height="110" fill="black"/>
      <rect id="m2r" x="10" y="48" width="0" height="28" fill="white">
        <!-- starts after line1 types and a tiny pause -->
        <animate attributeName="width" from="0" to="680" dur="3.0s" begin="3.2s" fill="freeze" />
      </rect>
    </mask>

    <mask id="m3" maskUnits="userSpaceOnUse">
      <rect x="0" y="0" width="700" height="110" fill="black"/>
      <rect id="m3r" x="10" y="78" width="0" height="28" fill="white">
        <!-- starts after line2 -->
        <animate attributeName="width" from="0" to="680" dur="3.0s" begin="6.6s" fill="freeze" />
      </rect>
    </mask>
  </defs>

  <!-- Line 1 (visible via mask m1) -->
  <g mask="url(#m1)">
    <text x="12" y="40">Hi there 👋, I'm <tspan style="fill:#7dd3fc">Wajahat Baig</tspan>!</text>
  </g>

  <!-- Line 2 (visible via mask m2) -->
  <g mask="url(#m2)">
    <text x="12" y="70" class="muted">Frontend Developer • React • Next.js</text>
  </g>

  <!-- Line 3 (visible via mask m3) -->
  <g mask="url(#m3)">
    <text x="12" y="100" class="muted">E-Commerce Specialist • Shopify • Medusa.js • Supabase</text>
  </g>

  <!-- Cursor: it's positioned and animated to blink, and also moves along with the typing effect -->
  <!-- For moving cursor, we animate its x attribute in sync with each line's animation -->
  <g>
    <!-- Cursor for line 1 -->
    <rect x="12" y="18" width="8" height="22" rx="2" ry="2" class="cursor">
      <!-- Blink -->
      <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" begin="0s" />
      <!-- Move to end of line1 after it types (approx) -->
      <animate attributeName="x" from="12" to="420" dur="2.6s" begin="0s" fill="freeze" />
      <!-- move down to line 2 at 3.3s -->
      <animate attributeName="y" from="18" to="48" begin="3.3s" dur="0.01s" fill="freeze" />
      <!-- move to approximate end of line2 while typing -->
      <animate attributeName="x" from="12" to="420" dur="3.0s" begin="3.3s" fill="freeze" />
      <!-- move down to line 3 at 6.7s -->
      <animate attributeName="y" from="48" to="78" begin="6.7s" dur="0.01s" fill="freeze" />
      <!-- move to approximate end of line3 while typing -->
      <animate attributeName="x" from="12" to="540" dur="3.0s" begin="6.7s" fill="freeze" />
    </rect>
  </g>

  <!-- Make sure the accessibility label is present for screen readers -->
  <title>Typing banner for Wajahat Baig — Frontend Developer</title>
</svg>


---

# 👨‍💻 About Me  

🔹 **Frontend Developer** specializing in **React.js & Next.js**  
🔹 Passionate about **design systems, animations, and accessibility**  
🔹 Experienced with **e-commerce development** (Shopify, Medusa.js, Supabase auth flows)  
🔹 Always exploring new tools to make web apps **faster, cleaner, and more delightful**  

🌱 Currently learning: **Edge functions, Server Components, and advanced animations**  
💬 Ask me about: **Frontend performance, UI/UX best practices, and e-commerce setups**  

---

## 🚀 Tech Arsenal  

### 🖥️ Frontend
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black&style=for-the-badge)
![Next.js](https://img.shields.io/badge/-Next.js-000000?logo=next.js&logoColor=white&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white&style=for-the-badge)
![Shadcn/UI](https://img.shields.io/badge/-Shadcn%2FUI-000000?style=for-the-badge)
![Framer Motion](https://img.shields.io/badge/-Framer_Motion-0055FF?logo=framer&logoColor=white&style=for-the-badge)

### ⚡ Full-Stack Tools
![Supabase](https://img.shields.io/badge/-Supabase-3ECF8E?logo=supabase&logoColor=white&style=for-the-badge)
![NextAuth](https://img.shields.io/badge/-NextAuth-000000?style=for-the-badge)
![Medusa.js](https://img.shields.io/badge/-Medusa.js-1A202C?style=for-the-badge)
![Vercel](https://img.shields.io/badge/-Vercel-000000?logo=vercel&logoColor=white&style=for-the-badge)

### 🛍️ E-Commerce
![Shopify](https://img.shields.io/badge/-Shopify-96BF48?logo=shopify&logoColor=white&style=for-the-badge)
![Medusa](https://img.shields.io/badge/-Medusa.js-00A6FB?style=for-the-badge)

### 🔧 Tools & Workflow
![Git](https://img.shields.io/badge/-Git-F05032?logo=git&logoColor=white&style=for-the-badge)
![GitHub](https://img.shields.io/badge/-GitHub-181717?logo=github&logoColor=white&style=for-the-badge)
![Figma](https://img.shields.io/badge/-Figma-F24E1E?logo=figma&logoColor=white&style=for-the-badge)
![VS Code](https://img.shields.io/badge/-VS_Code-0078d7?logo=visual-studio-code&logoColor=white&style=for-the-badge)

---

## 💡 What I Build  

✅ **Modern Frontends** — React & Next.js apps with TypeScript, Tailwind, and smooth animations  
✅ **E-Commerce Experiences** — Shopify stores, Medusa.js storefronts, and secure checkout flows  
✅ **Authentication Systems** — Supabase Auth + NextAuth with role-based access  
✅ **Scalable UI Systems** — Shadcn/UI + Tailwind design systems for reusable components  
✅ **Performance & Accessibility** — Optimized, SEO-friendly, and inclusive applications  

---

## 📊 GitHub Analytics  

<div align="center">
  
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=YOUR_USERNAME&show_icons=true&theme=radical&hide_border=true)  
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=YOUR_USERNAME&layout=compact&theme=radical&hide_border=true)  
![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=YOUR_USERNAME&theme=radical&hide_border=true)  
![Trophy](https://github-profile-trophy.vercel.app/?username=YOUR_USERNAME&theme=radical&no-frame=true&row=1&column=6)

</div>

---

## 📬 Connect with Me  

<p align="left">
  <a href="https://linkedin.com/in/YOUR_LINK" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-0A66C2?logo=linkedin&logoColor=white&style=for-the-badge" /></a>
  <a href="https://YOUR_PORTFOLIO.com" target="_blank"><img src="https://img.shields.io/badge/-Portfolio-000000?logo=vercel&logoColor=white&style=for-the-badge" /></a>
  <a href="mailto:YOUR_EMAIL"><img src="https://img.shields.io/badge/-Email-D14836?logo=gmail&logoColor=white&style=for-the-badge" /></a>
</p>

---

⭐️ From [Wajahat Baig](https://github.com/YOUR_USERNAME)
