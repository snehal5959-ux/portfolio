# 🎨 Neon Portfolio – Quick Reference

## 🚀 Quick Start (30 seconds)

```bash
npm run dev
# → Open http://localhost:3000
```

---

## 📝 Quick Edits

### Update Certificates
**File:** `app/data/portfolio.ts` → `certificates` array
```typescript
{
  title: "Your Cert",
  organization: "Issuer",
  date: "2024-03-15",
  credentialId: "ID-123",
  credentialLink: "#",
  icon: "🎓",
  color: "cyan"
}
```

### Update Experience
**File:** `app/data/portfolio.ts` → `experiences` array
```typescript
{
  role: "Developer",
  company: "Company",
  duration: "Jan 2024 - Now",
  responsibilities: ["Did X", "Did Y"],
  technologies: ["React", "Node.js"],
  icon: "💼",
  color: "blue"
}
```

---

## 🎨 Neon Colors

**Available:** `"cyan"` | `"blue"` | `"purple"` | `"green"`

---

## 📦 Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server (localhost:3000) |
| `npm run build` | Build for production |
| `npm start` | Run production build |
| `npm run lint` | Check code quality |

---

## 📁 Key Files

- [NeonCard.tsx](app/components/NeonCard.tsx) – Card component with glow
- [CertificatesList.tsx](app/components/CertificatesList.tsx) – Certs section
- [ExperienceList.tsx](app/components/ExperienceList.tsx) – Experience section
- [portfolio.ts](app/data/portfolio.ts) – Sample data (EDIT THIS!)
- [page.tsx](app/page.tsx) – Main page
- [globals.css](app/globals.css) – Neon animations

---

## ✅ Features

✨ Neon hover glow on cards  
📜 Certificates section  
💼 Experience timeline  
📱 Responsive design  
🌙 Dark mode ready  
♿ Accessible  
⚡ Fast (Tailwind + Framer Motion)
