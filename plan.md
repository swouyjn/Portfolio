# Portfolio Plan
> Last updated: May 2026 — keep this file open in VS Code as your reference.

---

## The concept

One central idea: **you build things that solve real problems, at every layer — hardware, software, and the space between.**

The feeling you're going for: *creative, impressive, I've never seen this.*
That comes from **specificity**, not flashy effects. The fact that you can say "I built a water leak monitor for my fridge with an Arduino" and "I built an AI syllabus scanner" in the same breath — that's what makes someone stop scrolling.

---

## Visual direction

| Element | Decision |
|---|---|
| Background | Very dark, slightly warm — `#0d0d0f` |
| Accent color | Muted electric violet / purple (matches your GPA tracker) |
| Heading font | `Space Grotesk` (Google Fonts, free) |
| Body font | `Inter` (Google Fonts, free) |
| Layout | Single column, lots of breathing room |
| Animations | Subtle fade-up on scroll, 1–2 micro-interactions |
| The detail moment | One hidden easter egg / something only careful people notice |

**Rules:**
- No carousels
- No generic stock photos
- No buzzwords ("passionate", "driven") without substance
- Every pixel placed with intention — this is your NewJeans move

---

## Site structure

### 1. Hero
- Your name
- One line: *"I build at the intersection of hardware, software, and real problems."* (refine this)
- Subtle animated visual (traced line, waveform, or circuit texture)
- Two buttons: `See my work` · `About me`

### 2. About
Three short paragraphs:
1. **Origin** — Peru, path to engineering, what pulled you here
2. **How you think** — systems, layers, hardware-to-software, detail-obsessed
3. **Who you are beyond code** — aesthetics matter to you, you care how things *feel*, not just whether they work

### 3. Projects
Four cards, each a mini case study. Order:

| # | Project | Why this order |
|---|---|---|
| 1 | GPA Tracker | Biggest, most alive, leads with complexity |
| 2 | Microcontroller Water Monitor | Hardware proof — shows you're not just an app dev |
| 3 | Reps & Recipes | Collaboration + range |
| 4 | Robotic Hand | "What's next" — forward motion is compelling |

**Each card follows the same 4-beat structure:**
```
Problem → My thinking → What I built → What I learned
```
> The Robotic Hand card only has beat 1 + "coming this summer."

### 4. Now
2–3 sentences about what you're currently working on or thinking about.
Update this over time — it's what makes the site feel like a person lives there.

### 5. Contact
- One human line (e.g. "I'm always interested in interesting problems.")
- Email · GitHub · LinkedIn

---

## Project write-up guide

Use this structure for every project. Be specific. Say what went wrong.

```
TITLE
─────
Problem:   What was broken, missing, or annoying in the real world?
Thinking:  What was your approach? What did you consider?
Built:     What does it actually do? What tech?
Learned:   What surprised you? What would you do differently?
```

### GPA Tracker
- **Problem:** No app tracks grades the way a UIUC student actually needs — with syllabus logic, drops, categories, and goals
- **Built with:** [fill in your stack — Android Studio? Flutter? Swift?]
- **Highlight features:** AI syllabus scanner, goal tracker, reward system, Google sign-in, Canvas integration (in progress), dark/light mode, custom avatar
- **Story hook:** You built the app you wished existed

### Microcontroller Water Monitor
- **Problem:** Your fridge was leaking water
- **Built with:** Arduino, sensors
- **Story hook:** The most human detail — a real problem, in your real home, solved with hardware
- **Research context:** Part of ISP research paper on microcontrollers in underserved communities

### Reps & Recipes (R&R)
- **Problem:** UIUC students needed help eating well and staying active
- **Your piece:** Pushup tracker (rep counter)
- **Team:** Group of 4, you owned the reps module
- **Built with:** [fill in stack]
- **Highlight:** Collaboration, scoped ownership, shipped as a team

### Robotic Hand *(in progress)*
- **Status:** Planned for summer
- **Why include it:** Shows ambition and direction
- **Frame it as:** "What I'm building next"

---

## Tech stack

| Layer | Tool | Why |
|---|---|---|
| Structure | HTML | One file to start |
| Design | CSS | Where your aesthetic sense pays off |
| Interactions | Vanilla JavaScript | Scroll animations, card expand |
| No frameworks | ~~React~~ ~~Vue~~ | Overkill for a portfolio |
| Hosting | GitHub Pages | Free, permanent URL, looks professional |

### File structure (start simple)
```
portfolio/
├── index.html       ← everything starts here
├── style.css        ← add this on day 2
├── script.js        ← add this on day 6
└── assets/
    └── images/      ← screenshots, photos
```

---

## Week plan

| Day | Focus | Done when... |
|---|---|---|
| 1 | Setup + hero skeleton | `index.html` runs in browser, fonts load, colors set |
| 2 | Hero section | Typography and spacing feel right |
| 3 | About section | Written in your real voice, not robotic |
| 4 | GPA Tracker card | Four-beat structure written and styled |
| 5 | Remaining 3 project cards | Complete, submittable portfolio exists |
| 6 | Polish | Scroll animations, micro-interaction, hidden detail |
| 7 | Deploy | Live URL on GitHub Pages, sent to someone who knows you |

---

## Your first file — paste this into `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Name</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500&family=Inter:wght@400;500&display=swap" rel="stylesheet">
  <style>
    body {
      background: #0d0d0f;
      color: #f0f0f0;
      font-family: 'Inter', sans-serif;
      margin: 0;
      padding: 4rem 2rem;
    }
    h1 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 3rem;
      font-weight: 500;
      margin: 0 0 1rem 0;
    }
    p {
      font-size: 1.2rem;
      color: #999;
      max-width: 480px;
    }
  </style>
</head>
<body>
  <h1>Your Name</h1>
  <p>I build at the intersection of hardware, software, and real problems.</p>
</body>
</html>
```

---

## The one thing to protect

> Every generic portfolio sounds the same because students write what they think they're *supposed* to say.
>
> The version of this that stands out is the one where someone reads your About section and thinks: **"I want to meet this specific person."**
>
> That comes from specificity, not polish.

---

## Open questions to answer before Day 3

- [ ] What stack did you build the GPA Tracker in? (Android? Flutter? Swift?)
- [ ] What stack did R&R use?
- [ ] Do you have screenshots of your projects?
- [ ] What's the one-line hero statement that actually sounds like you?
- [ ] What's the hidden detail / easter egg going to be?
