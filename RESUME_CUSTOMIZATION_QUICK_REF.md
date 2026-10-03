# 🎨 Resume Customization Quick Reference

## Fastest Customizations (Do This First!)

### 1. Update Your Profile Data (5 min)
Edit: `app/data/resume.ts`

```typescript
// Personal Info
personal: {
  name: "YOUR NAME HERE",
  title: "YOUR TITLE | YOUR SPECIALTY",
  description: "YOUR UNIQUE VALUE PROPOSITION",
  email: "your@email.com",
  phone: "+91 YOUR PHONE",
  location: "Your City, Country",
  resumePdf: "/resume.pdf",
}

// Add YOUR experience
experience: [
  {
    role: "YOUR JOB TITLE",
    company: "COMPANY NAME",
    duration: "START - END",
    description: "YOUR DESCRIPTION",
    highlights: [
      "Your achievement 1",
      "Your achievement 2",
      "Your achievement 3",
    ],
    skills: ["Skill 1", "Skill 2", "Skill 3"],
  }
]

// Add YOUR skills
skills: [
  {
    category: "Frontend",
    proficiency: 95,
    skills: [
      { name: "React", level: 95 },
      { name: "YOUR SKILL", level: YOUR_LEVEL },
    ],
  }
]
```

### 2. Add Your Profile Image (2 min)
1. Find your best professional photo (200x200px or larger)
2. Compress to <200KB (use [tinypng.com](https://tinypng.com))
3. Save as: `/public/image/profile.jpg`

**Note:** If image fails to load, your initials (SG) will display automatically.

### 3. Upload Your Resume PDF (1 min)
1. Save your resume as PDF
2. Place at: `/public/resume.pdf`
3. Done! Download button will work automatically.

---

## Color Customization (3 min)

### Change Primary Color (Purple → Your Color)

Find & replace in all component files:

```
FROM:  "from-purple-"  "to-purple-"  "purple-"
TO:    "from-YOUR-"    "to-YOUR-"    "YOUR-"

Popular options:
- "blue"     → Professional blue
- "pink"     → Bold & creative
- "emerald"  → Growth & nature
- "amber"    → Warm & energetic
- "indigo"   → Calm & focused
```

**Example:** Change purple to blue in `ResumeHero.tsx`:
```typescript
// BEFORE
bg-gradient-to-r from-purple-400 to-cyan-400

// AFTER
bg-gradient-to-r from-blue-400 to-cyan-400
```

### Change Accent Color (Cyan → Your Color)

Replace all instances of:
```
"cyan-" → "YOUR-COLOR-"
"06b6d4" → "YOUR-HEX-CODE"
```

---

## Text Customization (5 min)

### Update Hero Headline
File: `app/components/ResumeHero.tsx` (line ~85)

```typescript
// BEFORE
<h2 className="text-2xl md:text-3xl text-slate-300 font-light mb-6">
  {resumeData.personal.title}
</h2>

// AFTER (if you want custom text)
<h2 className="text-2xl md:text-3xl text-slate-300 font-light mb-6">
  Building scalable applications that make a difference
</h2>
```

### Update About Section
File: `app/data/resume.ts`

```typescript
about: {
  summary: "YOUR 500-CHARACTER BIO HERE",
  stats: [
    { label: "Your Stat 1", value: "10+" },
    { label: "Your Stat 2", value: "5+" },
    { label: "Your Stat 3", value: "100+" },
    { label: "Your Stat 4", value: "50+" },
  ],
}
```

### Update Section Titles
Each section has a title. To customize:

File example: `app/components/ResumeAbout.tsx` (line ~15)
```typescript
<ResumeSectionTitle
  title="About Me"              // ← Customize this
  subtitle="Who I am and what I do"  // ← And this
/>
```

---

## Social Links Setup (5 min)

File: `app/data/resume.ts`

```typescript
socialLinks: {
  github: "https://github.com/YOUR-USERNAME",
  linkedin: "https://linkedin.com/in/YOUR-PROFILE",
  twitter: "https://twitter.com/YOUR-HANDLE",
  email: "your@email.com",
}
```

---

## Project Showcase Customization (10 min)

File: `app/data/resume.ts`

```typescript
projects: [
  {
    id: 1,
    title: "Your Project Name",
    description: "Your project description",
    image: "/projects/YOUR-IMAGE.jpg",  // Add image to /public/projects/
    technologies: ["React", "Node.js", "MongoDB"],
    highlights: [
      "Achievement 1: Result/Impact",
      "Achievement 2: Result/Impact",
      "Achievement 3: Result/Impact",
    ],
    github: "https://github.com/YOUR-USERNAME/repo",
    live: "https://yourdomain.com",
  },
]
```

**Quick Reference for Project Stats:**
- Min projects: 1
- Max displayed: 3 (fits in grid)
- Can add more; scroll shows all

---

## Skills Ring Customization (15 min)

### Add New Skill Category
File: `app/data/resume.ts`

```typescript
skills: [
  // ... existing categories
  {
    category: "Mobile Development",  // New category
    proficiency: 85,
    skills: [
      { name: "React Native", level: 90 },
      { name: "Flutter", level: 80 },
      { name: "Swift", level: 75 },
    ],
  }
]
```

### Adjust Skill Levels
```typescript
// Scale: 0-100 (percentage proficiency)
{ name: "React", level: 95 },  // 95% proficiency
{ name: "Python", level: 80 }, // 80% proficiency
```

---

## Contact Form Customization (5 min)

### Update Form Placeholders
File: `app/components/ResumeContact.tsx`

```typescript
<input
  placeholder="you@example.com"      // ← Change this
  // ... rest of input
/>

<input
  placeholder="Let's collaborate..."  // ← Or this
/>

<textarea
  placeholder="Tell me about your project..."  // ← Or this
/>
```

### Customize Success Message
File: `app/components/ResumeContact.tsx` (line ~70)

```typescript
// BEFORE
<h3 className="text-2xl font-bold text-slate-100">Thank you!</h3>
<p className="text-slate-400">
  I'll get back to you as soon as possible.
</p>

// AFTER
<h3 className="text-2xl font-bold text-slate-100">Got it! 🎉</h3>
<p className="text-slate-400">
  I'll review your message and respond within 24 hours.
</p>
```

---

## Footer Customization (5 min)

File: `app/components/ResumeFooter.tsx`

### Update Footer Links
```typescript
const footerLinks = [
  { label: "Home", href: "#" },
  { label: "Resume", href: "/resume.pdf" },
  { label: "Blog", href: "/blog" },  // Add new link
  { label: "Contact", href: "#contact" },
];
```

### Update Footer Text
```typescript
// Around line 70
<p>
  © {currentYear} Your Name Here. All rights reserved.
</p>

// Around line 80
<p>
  Built with{" "}
  <span className="text-purple-400">Next.js</span> &{" "}
  <span className="text-cyan-400">Tailwind CSS</span>
</p>
```

---

## Component-Level Customizations (Advanced)

### Hide/Show Sections
Edit: `app/resume/page.tsx`

```typescript
// BEFORE (All sections enabled)
export default function ResumePage() {
  return (
    <main>
      <ResumeHero />
      <ResumeAbout />
      <ResumeExperience />
      {/* ... all sections */}
    </main>
  );
}

// AFTER (Hide sections you don't need)
export default function ResumePage() {
  return (
    <main>
      <ResumeHero />
      <ResumeAbout />
      {/* <ResumeExperience /> */}  // Uncomment to hide
      {/* <ResumeSkills /> */}      // Uncomment to hide
      <ResumeProjects />
      <ResumeContact />
    </main>
  );
}
```

### Reorder Sections
Simply reorder the component imports:

```typescript
// Change from this order:
<ResumeHero />
<ResumeAbout />
<ResumeExperience />
<ResumeSkills />

// To this order:
<ResumeHero />
<ResumeSkills />
<ResumeExperience />
<ResumeAbout />
```

---

## Style Tweaks (Advanced)

### Change Section Spacing
File: `app/components/ResumeSectionContainer.tsx`

```typescript
// BEFORE (80px padding)
className="relative max-w-6xl mx-auto px-6 py-20"

// AFTER (120px padding - more spacious)
className="relative max-w-6xl mx-auto px-6 py-32"
```

### Change Max Width
```typescript
// BEFORE (1152px max-width)
className="max-w-6xl"

// AFTER (wider layout)
className="max-w-7xl"

// OR narrower
className="max-w-5xl"
```

### Adjust Font Sizes
Find in your component:
```typescript
// Larger text
className="text-5xl"    // From 5xl to 6xl or 7xl

// Smaller text
className="text-lg"     // From lg to md or sm
```

---

## Animation Tweaks (Advanced)

### Slow Down Animations
File: Any component using Framer Motion

```typescript
// BEFORE (0.6s duration)
transition={{ duration: 0.6 }}

// AFTER (slower)
transition={{ duration: 1.0 }}

// Or faster
transition={{ duration: 0.3 }}
```

### Change Animation Type
```typescript
// Bouncy animation
transition={{ type: "spring", bounce: 0.5 }}

// Smooth easing
transition={{ ease: "easeInOut" }}

// Linear
transition={{ ease: "linear" }}
```

---

## Common Mistakes to Avoid ❌

| ❌ Don't | ✅ Do |
|---------|--------|
| Leave `resumeData.ts` unchanged | Update with YOUR actual info |
| Use placeholder images | Add your real profile photo |
| Keep generic descriptions | Add YOUR achievements |
| Forget to commit changes | Git commit after edits |
| Deploy without testing | Test mobile/desktop first |
| Break HTML/JSX structure | Only edit content strings |
| Change TypeScript types | Only edit data values |

---

## One-Command Customization Checklist

```bash
# 1. Edit your data
nano app/data/resume.ts        # Update personal info & content

# 2. Add your images
cp ~/profile.jpg public/image/  # Add profile photo
cp ~/resume.pdf public/         # Add resume PDF

# 3. Test locally
npm run dev                     # Start dev server

# 4. Build & verify
npm run build                   # Check for errors

# 5. Deploy
vercel                          # Deploy to Vercel (or your platform)
```

---

## Quick Color Palette Swapper

Instead of manually replacing colors, here's a reference:

```css
/* Current (Purple + Cyan) */
Primary:   #7C3AED (purple-600)
Secondary: #06B6D4 (cyan-500)

/* Option 1: Blue + Pink */
Primary:   #3B82F6 (blue-500)
Secondary: #EC4899 (pink-500)

/* Option 2: Green + Orange */
Primary:   #10B981 (emerald-500)
Secondary: #F97316 (orange-500)

/* Option 3: Indigo + Violet */
Primary:   #4F46E5 (indigo-600)
Secondary: #9333EA (violet-600)
```

---

## Need Help?

- Check the [RESUME_DESIGN_SYSTEM.md](./RESUME_DESIGN_SYSTEM.md) for design specs
- Review [RESUME_IMPLEMENTATION_GUIDE.md](./RESUME_IMPLEMENTATION_GUIDE.md) for features
- Check component comments in code
- Run `npm run build` to spot TypeScript errors

---

**Last Updated:** April 5, 2026  
**Time to Customize:** 30 minutes (basic) or 2 hours (comprehensive)
