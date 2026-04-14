function PBar({ pct, status }) {
  const w = Math.min(pct, 100)
  return (
    <div className="pbar-wrap">
      <div className="pbar"><div className={`pbar-fill ${status}`} style={{ width: `${w}%` }} /></div>
      <span className="pbar-pct">{pct}%</span>
    </div>
  )
}

// Assumes egg day (3 eggs) as the standard daily reality.
// No-egg day S2 variant is documented in the Routine tab.
//
// All absorbed values are bioavailability-corrected:
// - Seeds (sesame, pumpkin, sunflower, flax) are air-fryer processed (80–120°C) — phytate
//   partially broken down, Mg absorption +30–40% vs raw
// - Flaxseed is ground fresh (10g) — ALA intact, SDG lignans fully available
// - Walnuts stored at –18°C, never roasted above 80°C — ALA preserved
// - Lemon juice 10ml in both smoothies — concurrent Vit C overrides cocoa tannin
//   inhibition of Fe+Zn (3–6× improvement)
// - Vit D 51.5 ng/mL → 32% Ca absorption efficiency (vs 25% average)
// - Almond milk (unsweetened) 200ml: 54 kcal · 1.9g protein · 4.6g fat · 1.1g carbs
// - Roti Protein Roti Protein: soy + pea + brown rice isolate · ~90% protein · ~64 kcal / 15g scoop

const PROT = {
  total: 111,
  groups: [
    { name: 'S1 Smoothie', time: '10:30 AM', sub: 26.7, items: [
      { n: 'Yeast protein',       qty: '20g',        g: 16.0 },
      { n: 'Almond milk',   qty: '200ml',      g: 1.9  },
      { n: 'Sunflower seeds',     qty: '10g',  g: 2.5  },
      { n: 'Almond',              qty: '10g',  g: 2.1  },
      { n: 'Flaxseed',            qty: '10g',        g: 1.8  },
      { n: 'Walnut',              qty: '7g',         g: 1.1  },
      { n: 'Banana + misc',       qty: '70g+',       g: 1.3  },
    ]},
    { name: 'Chia', time: '9 AM', sub: 1.7, items: [
      { n: 'Chia seeds',          qty: '12g',        g: 1.7  },
    ]},
    { name: 'S2 Smoothie', time: '6:00 PM', sub: 12.2, items: [
      { n: 'Peanut butter',       qty: '15g',        g: 3.9  },
      { n: 'Sesame',              qty: '15g',  g: 3.0  },
      { n: 'Pumpkin seeds',       qty: '10g',  g: 3.0  },
      { n: 'Banana + misc',       qty: '70g+',       g: 2.3  },
    ]},
    { name: 'Meals', time: 'Lunch + Dinner', sub: 66.7, items: [
      { n: 'Roti Protein',              qty: '2 scoops 30g', g: 27.0 },
      { n: 'Eggs ×3',               qty: '~165g',         g: 18.6 },
      { n: 'Roti ×6 (wheat)',        qty: '~180g atta',    g: 18.0 },
      { n: 'Curd',                   qty: '~60g',          g: 2.1  },
      { n: 'Vegetables',             qty: 'mixed',         g: 1.0  },
    ]},
    { name: 'Supplements', time: 'Pre-sleep', sub: 3.5, items: [
      { n: 'Glycine',               qty: '3g',            g: 3.0  },
      { n: 'Creatine (N)',           qty: '5g',            g: 0.5  },
    ]},
  ]
}

const CALS = {
  total: 1890,
  groups: [
    { name: 'S1 Smoothie', kcal: 440  },
    { name: 'Chia 9AM',    kcal: 49   },
    { name: 'S2 Smoothie', kcal: 345  },
    { name: 'Meals',       kcal: 1041 },
    { name: 'Supplements', kcal: 15   },
  ]
}

const FAT_TOP = [
  { n: 'Eggs ×3',          qty: '~165g',      g: 15.0 },
  { n: 'Peanut butter',    qty: '15g',        g: 7.5  },
  { n: 'Sesame',           qty: '15g',        g: 6.8  },
  { n: 'Fish oil',         qty: '2 softgels', g: 6.0  },
  { n: 'Almond',           qty: '10g',        g: 5.0  },
  { n: 'Walnut',           qty: '7g',         g: 4.9  },
  { n: 'Almond milk',qty: '200ml',      g: 4.6  },
  { n: 'Sunflower seeds',  qty: '10g',        g: 4.6  },
]

const CARB_TOP = [
  { n: 'Roti ×6 (wheat)',   qty: '~180g atta', g: 120 },
  { n: 'Banana ×2',         qty: '140g',       g: 36  },
  { n: 'Honey ×2',          qty: '8g',         g: 6   },
  { n: 'Curd',              qty: '~60g',       g: 4   },
  { n: 'Peanut butter',     qty: '15g',        g: 4   },
  { n: 'Almond milk', qty: '200ml',      g: 1   },
]

// Fat type breakdown — per 1,890 kcal base
// Targets for lean muscle gain (per ISSN/ACSM sports nutrition guidelines):
//   Total fat:  25–35% kcal · Saturated: <10% kcal · MUFA: 10–15% kcal
//   PUFA: 6–10% kcal minimum · Omega-3: ≥2.5g/day (ALA+EPA/DHA) · Omega-6:Omega-3 ≤4:1
const FAT_QUALITY = [
  { type: 'MUFA',         g: 26, pct: '12.4%', target: '10–15% of kcal',        ind: false, st: 'ok'  },
  { type: 'PUFA (total)', g: 32, pct: '15.2%', target: '≥6% of kcal',           ind: false, st: 'ok'  },
  { type: '↳ Omega-3',   g: 7,  pct: '3.3%',  target: 'EPA/DHA 1.5g + ALA 5.5g', ind: true,  st: 'ok'  },
  { type: '↳ Omega-6',   g: 25, pct: '11.9%', target: 'ω-6:ω-3 ratio = 3.6:1 ✓', ind: true,  st: 'ok'  },
  { type: 'Saturated',   g: 16, pct: '7.6%',  target: '<10% of kcal (<21g)',    ind: false, st: 'ok'  },
]

// Carb type breakdown — targets from ISSN position stand on nutrient timing + muscle gain:
//   Total carbs: 45–65% kcal · Complex/starch ≥70% of carbs · Sugars ≤20% of carbs
//   Total fiber: 38g/day (DRI male) · Soluble: ≥10g/day · Insoluble: ≥25g/day
const CARB_QUALITY = [
  { type: 'Complex (starch)', g: 150, pct: '70%', target: '≥70% of total carbs', ind: false, st: 'ok'  },
  { type: 'Sugars (simple)',  g: 26,  pct: '12%', target: '≤20% of total carbs', ind: false, st: 'ok'  },
  { type: 'Dietary fiber',    g: 39,  pct: '18%', target: '38g/day (DRI male)',   ind: false, st: 'ok'  },
  { type: '↳ Soluble',       g: 10,  pct: '—',   target: '≥10g/day',             ind: true,  st: 'ok'  },
  { type: '↳ Insoluble',     g: 29,  pct: '—',   target: '≥25g/day',             ind: true,  st: 'ok'  },
]

// Anti-aging compound thresholds from published RCTs/intervention studies
// pct = absorbed dose / clinical threshold × 100
// Spermidine uses autophagy RCT threshold (~5mg/day), not the lower 1.2mg maintenance dose
const ANTIAGING = [
  { c: 'Glycine',                      daily: '~5.1g food + 3g supplement · 91% absorbed',                        mech: 'Collagen precursor. NMDA receptor modulation (sleep). Anti-glycation via competitive inhibition.',                                                                       thr: '>3g supplement',              pct: 100, st: 'ok',  badge: 'ok',  bdg: '✓✓ Active'                      },
  { c: 'Taurine',                      daily: '~150mg dietary + 1000mg supplement (alt days) = ~565mg/day avg',   mech: '2023 Cell paper: taurine decline drives multi-system aging. Mitochondrial support, bile acid conjugation, calcium signaling, anti-inflammatory.',                       thr: '>500mg/day supplement',       pct: 113, st: 'ok',  badge: 'ok',  bdg: '✓✓ Most significant addition'   },
  { c: 'Epicatechin (cocoa)',           daily: '~160mg intake · ~128mg absorbed (80%)',                            mech: 'Myostatin inhibition (muscle growth). Mitophagy induction. NRF2 activation. VEGF upregulation (angiogenesis). Dedicated membrane transporter.',                        thr: '50mg/day myostatin inhibition',pct: 256, st: 'ok',  badge: 'ok',  bdg: '✓✓ 2.5× threshold'              },
  { c: 'Ergothioneine (yeast)',         daily: '~2–5mg · 75–80% via OCTN1 = ~1.5–4mg absorbed',                   mech: 'Dedicated OCTN1 mitochondrial transporter. Concentrates in tissues with highest oxidative stress. No dietary alternative — irreplaceable if yeast protein removed.',    thr: '~1–2mg/day dietary reference',pct: 183, st: 'ok',  badge: 'ok',  bdg: '✓✓ S1 yeast non-negotiable'     },
  { c: 'SDG Lignans → Enterolactone',  daily: '~80mg SDG · 40–60% bacterial conversion = ~32–48mg enterolactone',mech: 'Phytoestrogen: E2 normalization. Aromatase modulation. Anti-cancer (breast/prostate). Requires gut bacteria (2–5 weeks to establish Clostridium scindens).',                  thr: '30mg SDG/day (10g ground flax)',pct: 267, st: 'ok', badge: 'ok',  bdg: '✓✓ Clinical dose maintained'   },
  { c: 'Sesamin + Sesamolin',          daily: '~195mg sesamin (15g sesame) · ~60–75% = ~117–146mg absorbed',      mech: 'Anti-aromatase (reduces testosterone→estrogen conversion). NF-κB inhibition. Liver enzyme induction. Fat-soluble — PB fat in S2 enhances absorption.',               thr: '100mg sesamin/day',           pct: 131, st: 'ok',  badge: 'ok',  bdg: '✓✓ Well above threshold'       },
  { c: 'Ellagitannins → Urolithins',   daily: '~24mg ellagitannins (7g walnuts) · 25–75% gut conversion',         mech: 'Urolithins A+B: mitophagy induction (clearing damaged mitochondria). Requires consistent daily intake to maintain Gordonibacter + Eggerthella colonisation.',           thr: '15–20mg/day (microbiome)',    pct: 137, st: 'ok',  badge: 'ok',  bdg: '✓ Minimum maintenance dose'    },
  { c: 'Amla Emblicanins A+B',         daily: '~80mg intake · ~70–75% absorbed (fasted 8 AM)',                    mech: 'Highest ORAC of any food compound. Anti-inflammatory, hepatoprotective. Tannin matrix stabilises Vit C (unique to amla). Empty stomach eliminates competition.',     thr: 'Daily consistent intake',     pct: 100, st: 'ok',  badge: 'ok',  bdg: '✓✓ Optimal timing'             },
  { c: 'Chlorogenic Acids (coffee)',   daily: '~70mg from 2g coffee · ~45.5mg absorbed (65%)',                    mech: 'G6Pase inhibition → reduces hepatic glucose output. Mild GLUT4 upregulation. Anti-inflammatory via NRF2. Concurrent with S1 fat for absorption.',                    thr: '~40mg absorbed (G6Pase)',     pct: 114, st: 'ok',  badge: 'ok',  bdg: '✓ At minimum effective dose'   },
  { c: 'Spermidine',                   daily: '~1–3mg · ~70% absorbed = ~0.7–2.1mg',                              mech: 'Autophagy induction via PI3K/mTOR pathway. Strongest evidence from wheat germ. RCT maintenance dose 1.2mg/day met — but autophagy studies use ~5mg+.',                thr: '~5mg/day (autophagy RCTs)',   pct: 28,  st: 'low', badge: 'low', bdg: 'Below autophagy threshold'     },
]

// Essential amino acid targets for 72kg athlete, 3–4×/week mixed cardio+weights
// Source: WHO/FAO/UNU 2007 base × 1.5× ISSN athlete factor
// Leucine threshold: ≥2.5–3g per meal to trigger MPS (ISSN Position Stand 2017)
// BCAA daily target for hypertrophy: ≥9–10g/day (Stokes et al. 2018 meta-analysis)
const EAA = [
  { aa: 'Leucine ⭐⭐',    role: 'Primary MPS trigger · BCAA · mTORC1 activation',                    g: 8.5, tgt: '4.5g',  pct: 189, st: 'ok'  },
  { aa: 'Isoleucine',     role: 'BCAA · glucose uptake via GLUT4 · immune function',                 g: 5.1, tgt: '2.2g',  pct: 232, st: 'ok'  },
  { aa: 'Valine',         role: 'BCAA · energy during exercise · muscle glycogen sparing',           g: 5.9, tgt: '2.8g',  pct: 211, st: 'ok'  },
  { aa: 'Lysine',         role: 'Carnitine synthesis · collagen cross-linking · Ca absorption',       g: 6.5, tgt: '3.2g',  pct: 203, st: 'ok'  },
  { aa: 'Phenylalanine',  role: 'Tyrosine precursor → dopamine/noradrenaline/thyroid',              g: 5.5, tgt: '1.7g',  pct: 324, st: 'ok'  },
  { aa: 'Threonine',      role: 'Gut lining integrity · mucin synthesis · immune function',          g: 4.5, tgt: '1.6g',  pct: 281, st: 'ok'  },
  { aa: 'Methionine',     role: 'SAM cycle (methylation) · creatine synthesis · GSH precursor',      g: 2.2, tgt: '1.0g',  pct: 220, st: 'ok'  },
  { aa: 'Histidine',      role: 'Carnosine synthesis (muscle buffer) · hemoglobin · histamine',      g: 2.7, tgt: '1.1g',  pct: 245, st: 'ok'  },
  { aa: 'Tryptophan',     role: 'Serotonin/melatonin precursor · niacin synthesis (backup)',         g: 1.4, tgt: '0.4g',  pct: 350, st: 'ok'  },
]

// Non-essential and conditionally essential AAs — functional thresholds for athletes (best-estimate)
// pct targets: conditionally essential use published athlete functional thresholds;
// non-essential capped at 100% since endogenous synthesis is primary (dietary is supplemental)
const NEAA = [
  { aa: 'Glutamate',    type: 'Non-essential',           g: 22.3, pct: 100, st: 'ok', tgt: '>5g dietary',   cond: false, note: 'Largest AA by mass. Highly synthesized endogenously — dietary intake supplemental. Neurotransmitter precursor; TCA cycle anaplerosis; glutathione component with Gly+Cys.' },
  { aa: 'Aspartate',    type: 'Non-essential',           g: 10.8, pct: 100, st: 'ok', tgt: '>2g dietary',   cond: false, note: 'Malate-aspartate shuttle (key mitochondrial energy pathway). Nucleotide (DNA/RNA) synthesis. Urea cycle substrate. Synthesis from OAA via transamination.' },
  { aa: 'Glycine ⭐',  type: 'Conditionally essential',  g: 7.9,  pct: 158, st: 'ok', tgt: '5g/day',        cond: true,  note: '4.9g food + 3g supplement. 1/3 of all collagen by weight — rate-limiting for tendon/ligament repair at 3-4×/week training. Athlete target ≥5g/day. ✓ 7.9g well exceeds.' },
  { aa: 'Arginine ⭐', type: 'Conditionally essential',  g: 7.0,  pct: 233, st: 'ok', tgt: '3g/day',        cond: true,  note: 'Nitric oxide synthesis (eNOS substrate) → vasodilation + O₂ delivery to working muscle. Creatine synthesis (with Met+Gly). Growth hormone secretagogue. Athlete target ≥3g/day. ✓ 7g exceeds.' },
  { aa: 'Proline',      type: 'Conditionally essential',  g: 6.1,  pct: 203, st: 'ok', tgt: '~3g/day',       cond: true,  note: 'Rate-limiting step in collagen triple-helix formation (Pro→Hydroxyproline via Vit C). Critical for tendon/cartilage remodeling at 3-4×/week load. Largest sources: wheat (2.5g) and eggs (0.7g).' },
  { aa: 'Serine',       type: 'Non-essential',           g: 5.8,  pct: 100, st: 'ok', tgt: '>2g (synth)',   cond: false, note: 'Phospholipid (phosphatidylserine) synthesis — cell membrane integrity. Serine/threonine kinase substrate. Gluconeogenic precursor. Endogenous synthesis from 3-PG (glycolysis intermediate).' },
  { aa: 'Alanine',      type: 'Non-essential',           g: 5.4,  pct: 100, st: 'ok', tgt: '>2g (cycle)',   cond: false, note: 'Glucose-alanine cycle: muscle exports alanine during exercise, liver converts to glucose (gluconeogenesis). β-alanine (non-protein form) → carnosine → intracellular muscle pH buffer.' },
  { aa: 'Tyrosine',     type: 'Conditionally essential',  g: 4.0,  pct: 200, st: 'ok', tgt: '~2g/day',       cond: true,  note: 'Catecholamine precursor (DOPA→dopamine→noradrenaline→adrenaline). Thyroid hormone (T3/T4) synthesis. Synthesized from Phe — demand spikes under training stress, potentially exceeding synthesis capacity.' },
  { aa: 'Cysteine',     type: 'Conditionally essential',  g: 1.9,  pct: 190, st: 'ok', tgt: '~1g/day',       cond: true,  note: 'Rate-limiting GSH precursor (glutathione = Glu+Cys+Gly). Antioxidant demand rises sharply with training frequency. Taurine precursor. Synthesized from Met via transsulfuration — adequate Met (2.2g) supports this.' },
]

export default function Numbers() {
  return (
    <>
      {/* Macro Cards */}
      <div className="sec">
        <div className="sh"><div className="sn">01</div><div className="st">Daily Macros</div><div className="ss">Assumes 3 eggs — the standard daily target</div></div>

        <div className="macro-grid">
          <div className="macro-card mc-ok">
            <div className="mc-label">Calories</div>
            <div className="mc-val">~1,890</div>
            <div className="mc-sub">kcal / day</div>
            <div className="mc-target">Target 2,700–2,900 kcal · deficit ~900 kcal</div>
            <div className="mc-breakdown">
              <div className="mc-brow"><span className="mc-brow-lbl">TDEE</span><span className="mc-brow-val">~2,700–2,900</span></div>
              <div className="mc-brow"><span className="mc-brow-lbl">Gap to close</span><span className="mc-brow-val">~900 kcal</span></div>
              <div className="mc-brow"><span className="mc-brow-lbl">Best lever</span><span className="mc-brow-val">↑ carbs (rotis)</span></div>
            </div>
          </div>
          <div className="macro-card mc-ok">
            <div className="mc-label">Protein</div>
            <div className="mc-val">~111g</div>
            <div className="mc-sub">g / day</div>
            <div className="mc-target">1.54g/kg · ISSN athlete range 1.4–2.0g/kg ✓</div>
            <div className="mc-breakdown">
              <div className="mc-brow"><span className="mc-brow-lbl">Roti Protein</span><span className="mc-brow-val">27g · 24%</span></div>
              <div className="mc-brow"><span className="mc-brow-lbl">Eggs ×3</span><span className="mc-brow-val">18.6g · 17%</span></div>
              <div className="mc-brow"><span className="mc-brow-lbl">Roti ×6 (wheat)</span><span className="mc-brow-val">18g · 16%</span></div>
              <div className="mc-brow"><span className="mc-brow-lbl">Yeast protein</span><span className="mc-brow-val">16g · 14%</span></div>
            </div>
          </div>
          <div className="macro-card mc-ok">
            <div className="mc-label">Fat</div>
            <div className="mc-val">~74g</div>
            <div className="mc-sub">g / day</div>
            <div className="mc-target">35% of kcal · EPA+DHA 1500mg ✓</div>
            <div className="mc-breakdown">
              <div className="mc-brow"><span className="mc-brow-lbl">MUFA</span><span className="mc-brow-val">26g · 35%</span></div>
              <div className="mc-brow"><span className="mc-brow-lbl">PUFA</span><span className="mc-brow-val">32g · 43%</span></div>
              <div className="mc-brow"><span className="mc-brow-lbl">Saturated</span><span className="mc-brow-val">16g · 22%</span></div>
            </div>
          </div>
          <div className="macro-card mc-ok">
            <div className="mc-label">Carbs</div>
            <div className="mc-val">~215g</div>
            <div className="mc-sub">g / day</div>
            <div className="mc-target">6 rotis dominant · No rice/dal</div>
            <div className="mc-breakdown">
              <div className="mc-brow"><span className="mc-brow-lbl">Fiber total</span><span className="mc-brow-val">39g · 18%</span></div>
              <div className="mc-brow"><span className="mc-brow-lbl">↳ Soluble</span><span className="mc-brow-val">10g · 26%</span></div>
              <div className="mc-brow"><span className="mc-brow-lbl">↳ Insoluble</span><span className="mc-brow-val">29g · 74%</span></div>
            </div>
          </div>
        </div>

        <div className="al info" style={{marginTop:14}}>
          <div className="al-t">No-egg days</div>
          <p>Switch to S2 no-egg recipe (15g yeast + 8g lecithin in S2 instead of 0g yeast). Protein drops to ~104g, calories to ~1,768 kcal. See Routine tab for exact S2 no-egg recipe.</p>
        </div>

        <div className="tw" style={{marginTop:16}}>
          <table>
            <thead>
              <tr>
                <th>Component</th>
                <th className="r">S1</th>
                <th className="r">Chia 9AM</th>
                <th className="r">S2</th>
                <th className="r">Meals</th>
                <th className="r">Supps</th>
                <th className="r">Daily Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bold">Calories</td>
                <td className="r mono">440</td>
                <td className="r mono">49</td>
                <td className="r mono">345</td>
                <td className="r mono">~1,041</td>
                <td className="r mono">~15</td>
                <td className="r mono bold">~1,890</td>
              </tr>
              <tr>
                <td className="bold">Protein</td>
                <td className="r mono">26.7g</td>
                <td className="r mono">1.7g</td>
                <td className="r mono">12.2g</td>
                <td className="r mono">~66.7g</td>
                <td className="r mono">3.5g</td>
                <td className="r mono bold">~110.8g</td>
              </tr>
              <tr>
                <td className="bold">ALA ω-3</td>
                <td className="r mono">3.0g</td>
                <td className="r mono">1.78g</td>
                <td className="r mono">—</td>
                <td className="r mono">trace</td>
                <td className="r mono">—</td>
                <td className="r mono bold">~4.78g</td>
              </tr>
              <tr>
                <td className="bold">Fiber</td>
                <td className="r mono">8.7g</td>
                <td className="r mono">3.4g</td>
                <td className="r mono">4.5g</td>
                <td className="r mono">~22g</td>
                <td className="r mono">—</td>
                <td className="r mono bold">~39g</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Macro Sources */}
      <div className="sec">
        <div className="sh"><div className="sn">02</div><div className="st">Macro Sources</div><div className="ss">Every gram mapped to its ingredient — intake quantity and % of daily total</div></div>

        {/* Protein breakdown */}
        <div className="msrc-block">
          <div className="msrc-ttl">
            <span>Protein</span>
            <span className="msrc-total">~{PROT.total}g / day</span>
          </div>
          <div className="msrc-col-hdr">
            <span className="mch-name">Ingredient</span>
            <span className="mch-qty">Intake</span>
            <span className="mch-g">Protein</span>
            <span className="mch-pct">% of {PROT.total}g</span>
          </div>
          {PROT.groups.map((grp, gi) => (
            <div key={gi} className="msrc-group">
              <div className="msrc-ghdr">
                <span className="msrc-gname">{grp.name}</span>
                <span className="msrc-gtime">{grp.time}</span>
                <span className="msrc-gsub">{grp.sub}g</span>
                <span className="msrc-gpct">{((grp.sub / PROT.total) * 100).toFixed(0)}%</span>
              </div>
              {grp.items.map((item, ii) => (
                <div key={ii} className="msrc-item">
                  <span className="msrc-iname">{item.n}</span>
                  <span className="msrc-iqty">{item.qty}</span>
                  <span className="msrc-ig">{item.g}g</span>
                  <span className="msrc-ipct">{((item.g / PROT.total) * 100).toFixed(1)}%</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Calorie breakdown */}
        <div className="msrc-block" style={{marginTop: 20}}>
          <div className="msrc-ttl">
            <span>Calories</span>
            <span className="msrc-total">~{CALS.total.toLocaleString()} kcal / day</span>
          </div>
          {CALS.groups.map((grp, gi) => (
            <div key={gi} className="cal-row">
              <span className="cal-name">{grp.name}</span>
              <span className="cal-kcal mono">{grp.kcal} kcal</span>
              <span className="cal-pct mono">{(grp.kcal / CALS.total * 100).toFixed(1)}%</span>
            </div>
          ))}
        </div>

        {/* Fat + Carbs top sources */}
        <div className="two-col" style={{marginTop: 20, gap: 16}}>
          <div>
            <div className="msrc-ttl msrc-ttl-standalone">
              <span>Fat — Top Sources</span>
              <span className="msrc-total">~74g / day</span>
            </div>
            <div className="tw">
              <table>
                <thead>
                  <tr><th>Source</th><th>Qty</th><th className="r">Fat (g)</th></tr>
                </thead>
                <tbody>
                  {FAT_TOP.map((r, i) => (
                    <tr key={i}>
                      <td>{r.n}</td>
                      <td className="mono" style={{color:'var(--ink-4)'}}>{r.qty}</td>
                      <td className="r mono">{r.g}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="msrc-ttl msrc-ttl-standalone">
              <span>Carbs — Top Sources</span>
              <span className="msrc-total">~215g / day</span>
            </div>
            <div className="tw">
              <table>
                <thead>
                  <tr><th>Source</th><th>Qty</th><th className="r">Carbs (g)</th></tr>
                </thead>
                <tbody>
                  {CARB_TOP.map((r, i) => (
                    <tr key={i}>
                      <td>{r.n}</td>
                      <td className="mono" style={{color:'var(--ink-4)'}}>{r.qty}</td>
                      <td className="r mono">{r.g}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Fat quality + Carb+Fiber quality */}
        <div className="two-col" style={{marginTop: 20, gap: 16}}>
          <div>
            <div className="msrc-ttl msrc-ttl-standalone">
              <span>Fat Quality Breakdown</span>
              <span className="msrc-total">~74g · 35% of kcal</span>
            </div>
            <div className="tw">
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th className="r">Amount</th>
                    <th className="r">% Kcal</th>
                    <th>Target (lean muscle)</th>
                  </tr>
                </thead>
                <tbody>
                  {FAT_QUALITY.map((r, i) => (
                    <tr key={i} className={`rwin${r.ind ? ' rind' : ''}`}>
                      <td>{r.type}</td>
                      <td className="r mono">{r.g}g</td>
                      <td className="r mono">{r.pct}</td>
                      <td className="mono" style={{color:'var(--ink-3)', fontSize:'10px'}}>{r.target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="msrc-ttl msrc-ttl-standalone">
              <span>Carb + Fiber Breakdown</span>
              <span className="msrc-total">~215g carbs · ~39g fiber</span>
            </div>
            <div className="tw">
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th className="r">Amount</th>
                    <th className="r">% Carbs</th>
                    <th>Target (lean muscle)</th>
                  </tr>
                </thead>
                <tbody>
                  {CARB_QUALITY.map((r, i) => (
                    <tr key={i} className={`rwin${r.ind ? ' rind' : ''}`}>
                      <td>{r.type}</td>
                      <td className="r mono">{r.g}g</td>
                      <td className="r mono">{r.pct}</td>
                      <td className="mono" style={{color:'var(--ink-3)', fontSize:'10px'}}>{r.target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Vitamins */}
      <div className="sec">
        <div className="sh"><div className="sn">03</div><div className="st">Vitamins — Absorbed Audit</div><div className="ss">Intake · % RDA · Peak performance target · All values bioavailability-corrected</div></div>
        <div className="tw">
          <table>
            <thead>
              <tr>
                <th>Vitamin</th>
                <th>% RDA</th>
                <th>Intake/Day</th>
                <th className="r">RDA/AI</th>
                <th>Peak Target</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="rwin">
                <td className="bold">Vit A (RAE)</td>
                <td><PBar pct={123} status="ok" /></td>
                <td className="mono">~1,110 mcg</td>
                <td className="r mono">900 mcg</td>
                <td className="mono">1,000–1,500 mcg</td>
                <td><span className="badge ok">Optimal</span></td>
              </tr>
              <tr className="rwin">
                <td className="bold">Vit D3</td>
                <td><PBar pct={100} status="ok" /></td>
                <td className="mono">~2,216 IU (55 mcg) + nano drops</td>
                <td className="r mono">600 IU</td>
                <td className="mono">40–60 ng/mL serum → 51.5 confirmed ✓</td>
                <td><span className="badge ok">Confirmed optimal</span></td>
              </tr>
              <tr className="rwin">
                <td className="bold">Vit E (α-TE)</td>
                <td><PBar pct={106} status="ok" /></td>
                <td className="mono">~15.9 mg (~80% absorbed with fat)</td>
                <td className="r mono">15 mg</td>
                <td className="mono">15–20 mg</td>
                <td><span className="badge ok">Sunflower fixed this</span></td>
              </tr>
              <tr className="rwin">
                <td className="bold">Vit K1 + K2</td>
                <td><PBar pct={129} status="ok" /></td>
                <td className="mono">~155 mcg K1 + 15 mcg K2</td>
                <td className="r mono">120 mcg AI</td>
                <td className="mono">K2 MK-7: consider natto</td>
                <td><span className="badge ok">Adequate</span></td>
              </tr>
              <tr className="rwin">
                <td className="bold">Vit C</td>
                <td><PBar pct={100} status="ok" /></td>
                <td className="mono">~340 mg (~80–85% absorbed)</td>
                <td className="r mono">90 mg</td>
                <td className="mono">200–500 mg · amla + lemon deploys it correctly</td>
                <td><span className="badge ok">Excellent</span></td>
              </tr>
              <tr className="rwin">
                <td className="bold">B1 Thiamine</td>
                <td><PBar pct={100} status="ok" /></td>
                <td className="mono">~2.88 mg (~88% absorbed)</td>
                <td className="r mono">1.2 mg</td>
                <td className="mono">1.5–2× RDA</td>
                <td><span className="badge ok">✓✓</span></td>
              </tr>
              <tr className="rwin">
                <td className="bold">B2 Riboflavin</td>
                <td><PBar pct={100} status="ok" /></td>
                <td className="mono">~4.52 mg (~95% absorbed)</td>
                <td className="r mono">1.3 mg</td>
                <td className="mono">2× RDA for athletes</td>
                <td><span className="badge ok">✓✓ Excellent</span></td>
              </tr>
              <tr className="rwin">
                <td className="bold">B3 Niacin NE</td>
                <td><PBar pct={100} status="ok" /></td>
                <td className="mono">~24.0 mg NE (~88% absorbed)</td>
                <td className="r mono">16 mg (UL 35)</td>
                <td className="mono">20–25 mg NE</td>
                <td><span className="badge ok">✓✓</span></td>
              </tr>
              <tr className="rwin">
                <td className="bold">B5 Pantothenic</td>
                <td><PBar pct={100} status="ok" /></td>
                <td className="mono">~10.3 mg (~87% absorbed)</td>
                <td className="r mono">5 mg AI</td>
                <td className="mono">8–10 mg</td>
                <td><span className="badge ok">✓✓</span></td>
              </tr>
              <tr className="rwin">
                <td className="bold">B6 Pyridoxine</td>
                <td><PBar pct={100} status="ok" /></td>
                <td className="mono">~2.60 mg (~85% absorbed)</td>
                <td className="r mono">1.3 mg (UL 100)</td>
                <td className="mono">2–3× RDA for high protein intake</td>
                <td><span className="badge ok">✓✓</span></td>
              </tr>
              <tr>
                <td className="bold">B7 Biotin</td>
                <td><PBar pct={93} status="low" /></td>
                <td className="mono">~28–36 mcg (~90% absorbed)</td>
                <td className="r mono">30 mcg AI</td>
                <td className="mono">30–100 mcg</td>
                <td><span className="badge low">Near AI</span></td>
              </tr>
              <tr className="rwin">
                <td className="bold">B9 Folate</td>
                <td><PBar pct={100} status="ok" /></td>
                <td className="mono">~479 mcg (~70% food folate absorbed)</td>
                <td className="r mono">400 mcg DFE</td>
                <td className="mono">Hcy 8.8 lab confirmed ✓</td>
                <td><span className="badge ok">Lab confirmed</span></td>
              </tr>
              <tr className="rwin">
                <td className="bold">B12 Cobalamin</td>
                <td><PBar pct={100} status="ok" /></td>
                <td className="mono">~3.1 mcg food + 1500 mcg sublingual (25–50% absorbed)</td>
                <td className="r mono">2.4 mcg</td>
                <td className="mono">Loading protocol → expect 600+ at 3-month retest</td>
                <td><span className="badge ok">Loading ongoing</span></td>
              </tr>
              <tr>
                <td className="bold">Choline</td>
                <td><PBar pct={84} status="low" /></td>
                <td className="mono">~462 mg egg days (~92% absorbed)</td>
                <td className="r mono">550 mg AI</td>
                <td className="mono">550 mg · 4th egg 2×/week · No-egg days: lecithin 8g in S2 raises to 56% AI</td>
                <td><span className="badge low">84% AI</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Minerals */}
      <div className="sec">
        <div className="sh"><div className="sn">04</div><div className="st">Minerals — Absorbed Values</div><div className="ss">The critical table — absorption matters more than intake here</div></div>
        <div className="tw">
          <table>
            <thead>
              <tr>
                <th>Mineral</th>
                <th>% of Target</th>
                <th>Intake/Day</th>
                <th className="r">RDA/AI</th>
                <th>Key Notes</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="rwarn">
                <td className="bold">Calcium ⭐⭐</td>
                <td><PBar pct={87} status="low" /></td>
                <td className="mono">~780–820 mg (no ragi) → ~249–273 mg absorbed (Vit D 32% efficiency)</td>
                <td className="r mono">1,000 mg</td>
                <td>Vit D 51.5 ng/mL → 32% absorption efficiency vs 25% avg. Ca from spinach: ~4.5mg (5% — oxalate). Not a Ca source. <strong>Never stop Vit D drops.</strong></td>
                <td><span className="badge low">Borderline — Vit D saves it</span></td>
              </tr>
              <tr className="rwin">
                <td className="bold">Magnesium ⭐⭐</td>
                <td><PBar pct={100} status="ok" /></td>
                <td className="mono">~580 mg → ~203–232 mg absorbed (35–40%)</td>
                <td className="r mono">420 mg</td>
                <td>Air-fryer processed seeds improve Mg absorption 30–40% vs raw (phytate breakdown). Serum Mg 2.0 mg/dL confirmed optimal. Main sources: pumpkin, sesame, flax, wheat.</td>
                <td><span className="badge ok">Lab confirmed ✓</span></td>
              </tr>
              <tr className="rwin">
                <td className="bold">Iron</td>
                <td><PBar pct={100} status="ok" /></td>
                <td className="mono">~19.5 mg → ~1.9–3.8 mg absorbed (lemon juice: 3–6× boost)</td>
                <td className="r mono">8 mg</td>
                <td>Lemon juice in both smoothies (concurrent Vit C) raises non-heme iron absorption from 3–8% to 8–18%. Serum Fe 133 confirmed adequate.</td>
                <td><span className="badge ok">Lab confirmed ✓</span></td>
              </tr>
              <tr>
                <td className="bold">Zinc ⭐</td>
                <td><PBar pct={88} status="low" /></td>
                <td className="mono">~16.2 mg → ~2.9–4.1 mg absorbed (phytate + cocoa tannins)</td>
                <td className="r mono">11 mg</td>
                <td><strong>Most bioavailability-challenged mineral.</strong> Double inhibition: phytate from seeds + cocoa tannins. Lemon juice partially overrides cocoa tannin block. Yeast protein (20g S1) = best-absorbed Zn source.</td>
                <td><span className="badge low">Borderline — lemon juice essential</span></td>
              </tr>
              <tr className="rwin">
                <td className="bold">Selenium</td>
                <td><PBar pct={100} status="ok" /></td>
                <td className="mono">~130 mcg → ~110 mcg absorbed (85% selenomethionine)</td>
                <td className="r mono">55 mcg</td>
                <td>Wheat Se (selenomethionine 82%): 50mcg. Eggs (80%): 37mcg. Far exceeds need. Do NOT supplement Se. UL is 400mcg intake.</td>
                <td><span className="badge ok">✓✓ Excellent</span></td>
              </tr>
              <tr className="rwin">
                <td className="bold">Copper</td>
                <td><PBar pct={100} status="ok" /></td>
                <td className="mono">~2.0 mg → ~0.74 mg absorbed (37%)</td>
                <td className="r mono">0.9 mg</td>
                <td>SOD1 (Cu-Zn superoxide dismutase) fully supported. Cocoa provides 0.29mg — main source alongside wheat and yeast.</td>
                <td><span className="badge ok">✓ 222% RDA</span></td>
              </tr>
              <tr>
                <td className="bold">Potassium</td>
                <td><PBar pct={90} status="low" /></td>
                <td className="mono">~3,050 mg → ~2,593 mg absorbed (85%)</td>
                <td className="r mono">3,400 mg AI</td>
                <td>Good for BP prevention (family history of hypertension). Add tomato/avocado to meals to close K+ gap. Banana (504mg × 2) is largest single source.</td>
                <td><span className="badge low">90% AI — adequate</span></td>
              </tr>
              <tr>
                <td className="bold">Iodine</td>
                <td><PBar pct={77} status="low" /></td>
                <td className="mono">~110–120 mcg → ~96–105 mcg absorbed (87%)</td>
                <td className="r mono">150 mcg</td>
                <td>TSH 1.32 confirmed normal thyroid. Intake gap (not absorption gap). 4th egg 2–3×/week adds +25mcg/day avg. Or 1 piece nori/week (330mcg/g).</td>
                <td><span className="badge low">Below RDA — thyroid normal</span></td>
              </tr>
              <tr className="rwin">
                <td className="bold">Sodium</td>
                <td><PBar pct={61} status="ok" /></td>
                <td className="mono">~1,397 mg → ~1,300 mg absorbed (93%)</td>
                <td className="r mono">&lt;2,300 mg limit</td>
                <td>Excellent. Well within DASH diet recommendations. Critical given father's hypertension history. 61% of limit = significant headroom.</td>
                <td><span className="badge ok">✓✓ Best-in-plan</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Amino Acids */}
      <div className="sec">
        <div className="sh"><div className="sn">05</div><div className="st">Amino Acid Profile</div><div className="ss">Essential + conditionally essential · Athlete targets (72kg · 3–4×/week mixed training)</div></div>

        <div className="al ok" style={{marginBottom:16}}>
          <div className="al-t">BCAA Summary</div>
          <p><strong>BCAA total ~19.5g/day</strong> (Leu 8.5 + Ile 5.1 + Val 5.9g) — well above the 9–10g/day threshold for optimal hypertrophy. <strong>Leucine alone 8.5g</strong> (~2.8g/meal across 3 meals) clears the 2.5–3g/meal MPS trigger per ISSN 2017. All 9 EAAs exceed athlete-adjusted targets by 2–3.5×.</p>
        </div>

        <div className="msrc-ttl msrc-ttl-standalone" style={{marginBottom:8}}>
          <span>Essential Amino Acids (EAAs)</span>
          <span className="msrc-total">Targets: WHO/FAO base × 1.5× ISSN athlete factor</span>
        </div>
        <div className="tw">
          <table>
            <thead>
              <tr>
                <th>Amino Acid</th>
                <th>% Athlete Target</th>
                <th className="r">Daily</th>
                <th className="r">Target</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {EAA.map((r, i) => (
                <tr key={i} className="rwin">
                  <td className="bold">{r.aa}</td>
                  <td><PBar pct={r.pct} status={r.st} /></td>
                  <td className="r mono">{r.g}g</td>
                  <td className="r mono" style={{color:'var(--ink-3)', fontSize:'11px'}}>{r.tgt}</td>
                  <td style={{fontSize:'11px', color:'var(--ink-2)'}}>{r.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="msrc-ttl msrc-ttl-standalone" style={{marginTop:20, marginBottom:8}}>
          <span>Non-Essential &amp; Conditionally Essential</span>
          <span className="msrc-total">No strict RDA — functional thresholds for athletes</span>
        </div>
        <div className="tw">
          <table>
            <thead>
              <tr>
                <th>Amino Acid</th>
                <th>% Target</th>
                <th className="r">Daily</th>
                <th className="r">Target</th>
                <th>Type</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {NEAA.map((r, i) => (
                <tr key={i} className="rwin">
                  <td className="bold">{r.aa}</td>
                  <td><PBar pct={r.pct} status={r.st} /></td>
                  <td className="r mono">{r.g}g</td>
                  <td className="r mono" style={{color:'var(--ink-3)', fontSize:'11px'}}>{r.tgt}</td>
                  <td style={{fontSize:'11px'}}><span className={`badge ${r.cond ? 'low' : 'ok'}`}>{r.cond ? 'Cond. ess.' : 'Non-ess.'}</span></td>
                  <td style={{fontSize:'11px', color:'var(--ink-2)'}}>{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Anti-Aging */}
      <div className="sec">
        <div className="sh"><div className="sn">06</div><div className="st">Anti-Aging Compounds</div><div className="ss">Absorbed active · Mechanism · Threshold met?</div></div>
        <div className="tw">
          <table>
            <thead>
              <tr>
                <th>Compound</th>
                <th>% Threshold</th>
                <th>Daily Active Amount</th>
                <th>Clinical Threshold</th>
                <th>Mechanism</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {ANTIAGING.map((r, i) => (
                <tr key={i} className="rwin">
                  <td className="bold">{r.c}</td>
                  <td><PBar pct={r.pct} status={r.st} /></td>
                  <td className="mono" style={{fontSize:'11px'}}>{r.daily}</td>
                  <td className="mono" style={{color:'var(--ink-3)', fontSize:'11px'}}>{r.thr}</td>
                  <td style={{fontSize:'11px', color:'var(--ink-2)'}}>{r.mech}</td>
                  <td><span className={`badge ${r.badge}`}>{r.bdg}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="note" style={{marginTop:10}}>
          <div className="nl">Spermidine Gap Fix</div>
          <p>Add 1 tbsp wheat germ to roti dough (available at any Bengaluru grocery store) = +3–5mg spermidine/day → crosses autophagy induction threshold from published RCTs. This is the single easiest remaining anti-aging gap to close.</p>
        </div>
      </div>
    </>
  )
}
