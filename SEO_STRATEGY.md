# Long-Term SEO Strategy: Aman Kulariya Portfolio

This document outlines a 12-month ethical (white-hat) SEO strategy focusing on **Content SEO**, **Semantic Relevance**, and **Backlinks** to rank for keywords like "MERN Stack Developer," "React Developer," and "Aman Kulariya Portfolio."

## 1. Content Strategy (On-Page & Semantic SEO)
Google rewards sites demonstrating high **E-E-A-T** (Experience, Expertise, Authoritativeness, Trustworthiness).

### A. Pillar & Cluster Content Model
Instead of writing generic blog posts, organize your blog (which currently exists as the "Blog Drawer") into a comprehensive knowledge base:
- **Pillar Page Idea:** "The Ultimate Guide to Building Scalable Web Apps with the MERN Stack."
- **Cluster Posts:** 
  - "State Management in React using Redux vs Context API."
  - "Building Secure RESTful APIs with Node.js and Express."
  - "MongoDB Indexing Strategies for Performance."
*(All cluster posts internally link back to the pillar page.)*

### B. Project Case Studies
Don't just link to GitHub repositories in your Portfolio Drawer. For each project, write a dedicated case study detailing:
1. **The Problem:** What issue did the app solve?
2. **The Tech Stack (Keywords):** Why did you choose React, Node.js, and MongoDB?
3. **The Solution:** Architecture diagrams and specific code snippets you wrote.
4. **The Impact:** Performance metrics (e.g., "reduced load time by 30%").
*Actionable Step: Expand the `PortfolioDrawer.jsx` to open detailed modals or separate pages for each case study.*

## 2. Backlink Strategy (Off-Page SEO)
Backlinks are "votes of confidence" from other websites. As a developer, you have unique ways to acquire high-quality, relevant links.

### A. Developer Profiles & Directories (High Domain Authority)
Ensure your portfolio link (`https://amankulariya-portfolio.vercel.app/`) is featured prominently on:
- **GitHub:** In your profile bio and in the `README.md` of every repository you own.
- **LinkedIn:** In your About section and "Featured" section.
- **Developer Platforms:** Hashnode, Dev.to, Medium, Stack Overflow, and CodePen.

### B. Open Source Contributions
When you contribute to open-source projects on GitHub, occasionally you can add your name and website link to the "Contributors" list or documentation (if permitted). Google heavily values links from authoritative repositories.

### C. Content Syndication (Guest Posting)
Publish technical tutorials on platforms like **Dev.to** or **Hashnode**. In the article, state: *"Originally published on my portfolio..."* and include a `rel="canonical"` link back to your portfolio if you host the blog there, or simply link back naturally in your author bio (e.g., *"Aman Kulariya is a MERN Stack Developer. View more of his work at [Your Portfolio Link]."*).

### D. Local SEO (Bikaner, Rajasthan)
Since you mention your location:
- Create a **Google Business Profile** (if you operate as a freelance entity) and link to your website.
- Get listed in local Indian developer directories or startup hubs.

## 3. Technical Maintenance
- **Monthly Audits:** Run Google Lighthouse audits every month to ensure Core Web Vitals remain in the green (Performance, Accessibility, SEO).
- **Search Console:** Register your site on **Google Search Console** and submit your newly generated `sitemap.xml`. Monitor which queries drive traffic and optimize for them.
- **Custom Domain:** Migrating from `.vercel.app` to a custom domain (e.g., `amankulariya.com`) should be your highest priority to establish long-term brand authority.
