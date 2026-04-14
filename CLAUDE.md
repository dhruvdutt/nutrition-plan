# Nutrition Plan App — Project Context

## What This Is
A React + Vite app (no external component libraries) that renders a personalised clinical-grade nutrition plan for a **72 kg male in Bengaluru** targeting lean muscle gain. Content is bioavailability-corrected (v6). The app was rebuilt from a monolithic 813-line `nutrition_plan.html` that kept timing out when trying to edit it.

## Stack
- React 18 + Vite 5
- No component library (all custom CSS)
- Google Fonts: Space Grotesk (headings/display) + Inter (body) + JetBrains Mono (data/labels)
- Single CSS file: `src/App.css`

## File Structure
```
nutrition-plan/             ← git repo root (github.com/dhruvdutt/nutrition-plan)
├── .github/workflows/
│   └── deploy.yml          ← GitHub Actions → builds + deploys to gh-pages
├── index.html              ← Google Fonts link here
├── vite.config.js          ← base: '/nutrition-plan/' for GitHub Pages
├── src/
│   ├── App.jsx             ← Shell: sticky header, tab nav, tab routing
│   ├── App.css             ← All styles (design tokens, components, responsive)
│   └── tabs/
│       ├── Routine.jsx     ← Daily schedule, S1/S2 recipes, supplement schedule
│       ├── BiweeklyPrep.jsx← Shopping list, air fryer step-by-step, jar setup
│       ├── Numbers.jsx     ← Macros, vitamins table, minerals table, anti-aging
│       ├── BloodReport.jsx ← Lab cards, retest schedule
│       ├── Summary.jsx     ← Key stats, wins/gaps, core rules
│       └── Actions.jsx     ← 20 action items across P1–P4 priority
└── nutrition_plan.html     ← original monolithic HTML (historical reference)
```

## Design System (CSS class reference)
- **Layout**: `.sec` `.sh` `.sn` `.st` `.ss` `.two-col`
- **Tables**: `.tw` (wrapper) > `table` > `.rcat` `.rwin` `.rwarn` `.rflag` `.rnew` `.rtot`
- **Badges**: `.badge` `.badge.ok` `.badge.low` `.badge.crit` `.badge.exc` `.badge.new`
- **Progress bars**: `.pbar-wrap` `.pbar` `.pbar-fill.ok/low/crit/exc` `.pbar-pct`
- **Alerts**: `.al.ok/warn/crit/info/gold` + `.al-t`
- **Notes/Callouts**: `.note` `.nl` · `.callout`
- **Timeline**: `.timeline` `.tl-row` `.tl-time` `.tl-content` `.tl-item` `.tl-note`
- **Recipe**: `.recipe-grid` `.recipe-card` `.rc-hdr` `.rc-title` `.rc-macros` · `.ing-row` `.ing-name` `.ing-qty` `.ing-cal` `.ing-prot` `.ing-note` `.ing-changed` `.ing-critical` `.ing-total`
- **Cards**: `.supp-grid/card` · `.jar-grid/card` · `.lab-cards/card.opt/norm/warn/load` · `.macro-grid/card.mc-ok/warn/crit` · `.stat-grid/card.stat-ok/warn/crit` · `.wg-grid/card.win/gap/bad`
- **Step blocks**: `.step-block` `.step-hdr` `.step-yield` `.step-body` `.step-warn`
- **Actions**: `.a-section` `.a-sec-title.p1-p4` `.action-item.a-item-p1-p4` `.a-num` `.a-body` `.a-lbl` `.a-title` `.a-desc`

## Nutrition Plan — Key Facts

### The Person
- 72 kg male, Bengaluru, lean muscle gain goal
- Blood: Vit D 51.5 ng/mL (optimal), B12 204 pg/mL (loading), Hcy 8.8 (optimal), Fe 133, Mg 2.0, TSH 1.32

### Current Deviations from v5 HTML
- **No ragi rotis** at the moment → calcium borderline, saved by Vit D 51.5 ng/mL (32% efficiency)
- **White unhulled sesame** (not black) — nutritionally equivalent, unhulled is what matters
- **2-week batch** at –18°C freezer (not 1-week; fridge crowded)
- **Air fryer** for all processing (80–200°C range); microwave oven only if unavoidable
- **No oat milk in S2** — too heavy pre-workout, exceeds already-met nutrients
- **Vit D**: 2000 IU nano drops after S1 daily
- **Protein target**: ≤115g/day (Morton et al. 2018: plateau at 1.62g/kg; Roti Protein addition raised egg-day total to ~111g)
- **Almond milk (unsweetened)** replaces Bagrry's oat milk in S1 — 54 kcal/200ml vs 97 kcal; 1.9g protein, 4.6g fat, 1.1g carbs per 200ml
- **Meals updated**: No paneer, no dal, no rice. 6 rotis/day (3 lunch + 3 dinner) + Roti Protein roti protein 1 scoop per 3 rotis (2 scoops total, soy+pea+brown rice isolate, ~13.5g protein per scoop). Curd ~60g/day. Eggs ×3 on egg days.
- **Egg day S2**: No yeast — Roti Protein + eggs in meals already supply enough protein. No-egg day S2 keeps 15g yeast to compensate.

### Smoothie Recipes
**S1 (10 AM)** — ~440 kcal, ~26.7g protein:
Almond milk (unsweetened) 200ml · Yeast protein 20g · S1 jar powder 20g (almond 10g + sunflower 10g) · Walnut powder 7g (freezer) · Flaxseed powder 10g (freezer) · Cocoa 4g · Coffee 2g · Banana 70g · Honey 4g · Creatine 5g · Lemon juice 10ml
→ Almond milk confirmed: 27 kcal/100ml · 0.94g protein · 2.28g fat · 0.56g carbs (Open Food Facts barcode 8901071732833)

**S2 egg day (4:30 PM)** — ~345 kcal, ~12.2g protein:
Water 200ml · S2 jar powder 25g (sesame 15g + pumpkin 10g) · PB 15g · Cocoa 4g · Banana 70g · Honey 4g · Lemon juice 10ml
→ No yeast on egg day — Roti Protein 2-scoop meals already cover protein target

**S2 no-egg day** — ~457 kcal, ~24.1g protein:
Water 200ml · Yeast protein **15g** · S2 jar 25g · PB 15g · **Sunflower lecithin 8g (choline fix)** · Cocoa 4g · Banana 70g · Honey 4g · Lemon juice 10ml

### The 4 Bioavailability Revelations (never remove from app)
1. Lemon juice 10ml in BOTH smoothies — concurrent Vit C overrides cocoa tannin inhibition of Fe+Zn (3–6× improvement)
2. Never roast walnuts above 80°C — ALA destroyed 30–60% at 150°C+
3. Spinach calcium ~4.5mg absorbed (5%) — oxalate revelation; spinach is NOT a Ca source
4. Almond milk (unsweetened) switched from Bagrry's oat milk — 54 kcal/200ml vs 97 kcal; much lower carbs (1.1g vs ~15g); Ca fortification method unknown for SOFIT, check label

### Non-Negotiables
- Flaxseed 10g/day = clinical SDG dose (30mg). Below 10g → below therapeutic threshold
- S1 yeast protein 20g — only ergothioneine source in diet (OCTN1 transporter, irreplaceable)
- Sesame 15g/day → 195mg sesamin → anti-aromatase threshold (100mg) well exceeded
- Walnuts 7g/day → 24mg ellagitannins for urolithin microbiome maintenance
- Vit D nano drops daily — calcium picture collapses without 32% absorption efficiency

### Supplement Stack
B12 methylcobalamin 1500mcg sublingual (7:30 AM fasted) · Vit D3 2000 IU nano after S1 · Fish oil 2 softgels TG form at lunch · Taurine 1000mg alternate days at lunch · Creatine 5g in S1 · Glycine 3g 30 min before sleep

## User Preferences (feedback from session)
- **No emojis** in code or UI
- Terse responses — no trailing summaries; don't restate what was just done
- Typography: serif fonts (Playfair Display, Source Serif 4) were rejected → switching to Space Grotesk + Inter + JetBrains Mono
- Responsive design required (web + mobile)
- Design: white cards on warm-gray bg, teal accent, subtle shadows — no dark heavy backgrounds
- Content should never be removed — reorganise by intent across 6 tabs only

## Responsive Breakpoints
- ≤900px tablet: 4-col → 2-col grids, section subtitles hidden
- ≤600px mobile: short tab labels, header chips hidden, `.ing-note` hidden, grids collapse
- ≤380px very small: macro/stat → 1-col

## Running the App
```bash
cd /Users/dhruvdutt/Workspace/nutrition-plan
npm run dev
```

## GitHub Pages
- Live URL: https://dhruvdutt.github.io/nutrition-plan/
- Auto-deploys on push to `main` via `.github/workflows/deploy.yml`
- Repo settings → Pages → Source must be set to **GitHub Actions**
