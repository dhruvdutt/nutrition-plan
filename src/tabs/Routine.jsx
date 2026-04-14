export default function Routine() {
  return (
    <>
      {/* Daily Timeline */}
      <div className="sec">
        <div className="sh"><div className="sn">01</div><div className="st">Daily Schedule</div><div className="ss">Timing · Sequence · Logic</div></div>
        <div className="timeline">
          <div className="tl-row">
            <div className="tl-time">9:00 AM</div>
            <div className="tl-content">
              <div className="tl-item">Amla → Chia Seeds → Sublingual B12</div>
              <div className="tl-note">In sequence on empty stomach. (1) ½ fresh amla — Vit C absorbed 85% fasted. (2) Soaked chia seeds — mucilage gel improves mineral absorption. ~49 kcal, 1.7g protein, 3.4g fiber, 1.78g ALA. (3) B12 sublingual — hold under tongue 90 sec, no food/drink 2 min after.</div>
            </div>
          </div>
          <div className="tl-row">
            <div className="tl-time">10:30 AM</div>
            <div className="tl-content">
              <div className="tl-item">S1 Smoothie · 2000 IU Nano Vit D drops</div>
              <div className="tl-note">Blend 60 sec. Vit D nano drops after S1 (fat in smoothie aids absorption even though nano bypasses fat dependency). ~440 kcal, ~27g protein.</div>
            </div>
          </div>
          <div className="tl-row">
            <div className="tl-time">Lunch 1 PM</div>
            <div className="tl-content">
              <div className="tl-item">Egg Bhurji (3 eggs) · 3 Rotis · Sabzi · Curd · Fish Oil · Taurine (alt days)</div>
              <div className="tl-note">Eggs always cooked (bhurji) — neutralizes avidin, improves protein digestibility 91→94%. Add 4th egg 2×/week for choline boost. Fish oil with dietary fat = peak EPA/DHA absorption (68–73%). Taurine 1000mg alternate days.</div>
            </div>
          </div>
          <div className="tl-row">
            <div className="tl-time">6:00 PM</div>
            <div className="tl-content">
              <div className="tl-item">S2 Smoothie — pre-workout</div>
              <div className="tl-note">~30–45 min before workout. Lighter than S1. See recipes below for egg-day vs no-egg-day variants.</div>
            </div>
          </div>
          <div className="tl-row">
            <div className="tl-time">Dinner 8:30 PM</div>
            <div className="tl-content">
              <div className="tl-item">3 Rotis · Sabzi · Curd</div>
              <div className="tl-note">3 rotis + sabzi + curd ~30g. Completes daily roti count (6 total) and second Roti Protein scoop.</div>
            </div>
          </div>
          <div className="tl-row">
            <div className="tl-time">Before Bed</div>
            <div className="tl-content">
              <div className="tl-item">Glycine 3g in warm water</div>
              <div className="tl-note">Dissolved in ~100ml warm water. No food after. Acts at NMDA glycine site + lowers core body temp for sleep onset. 91% absorbed as free amino acid.</div>
            </div>
          </div>
        </div>
      </div>

      {/* S1 Recipe */}
      <div className="sec">
        <div className="sh"><div className="sn">02</div><div className="st">Smoothie S1 — Morning (10:30 AM)</div><div className="ss">Heavier · ~440 kcal · ~27g protein</div></div>
        <div className="recipe-grid">
          <div className="recipe-card">
            <div className="rc-hdr">
              <div className="rc-title">S1 Smoothie</div>
              <div className="rc-macros">~440 kcal · ~26.7g protein · ~22g fat · ~35g carbs · Blend 60 sec</div>
            </div>
            <div className="ing-row" style={{background:'var(--cream)',fontFamily:"'JetBrains Mono',monospace",fontSize:'7px',letterSpacing:'.08em',textTransform:'uppercase',color:'var(--rule)'}}>
              <div className="ing-name">Ingredient</div><div className="ing-qty">Qty</div><div className="ing-cal">Kcal</div><div className="ing-prot">Protein</div><div className="ing-note">Source</div>
            </div>
            <div className="ing-row">
              <div className="ing-name">Almond milk (unsweetened)</div>
              <div className="ing-qty">200 ml</div>
              <div className="ing-cal">54</div>
              <div className="ing-prot">1.9g</div>
              <div className="ing-note">Carton. 27 kcal/100ml · 0.94g protein · 2.28g fat · 0.56g carbs per 100ml. Very low carb vs oat milk.</div>
            </div>
            <div className="ing-row">
              <div className="ing-name">Yeast Protein Unflavoured</div>
              <div className="ing-qty">20 g</div>
              <div className="ing-cal">79.7</div>
              <div className="ing-prot">15.9g</div>
              <div className="ing-note">Powder jar. Non-negotiable — ergothioneine source via OCTN1.</div>
            </div>
            <div className="ing-row">
              <div className="ing-name">S1 Nut Powder (almond 10g + sunflower 10g)</div>
              <div className="ing-qty">20 g</div>
              <div className="ing-cal">115.9</div>
              <div className="ing-prot">4.1g</div>
              <div className="ing-note">Combined S1 jar (fridge). Scoop 20g.</div>
            </div>
            <div className="ing-row">
              <div className="ing-name">Walnut powder</div>
              <div className="ing-qty">7 g</div>
              <div className="ing-cal">45.9</div>
              <div className="ing-prot">1.1g</div>
              <div className="ing-note">Freezer jar. Scoop 7g. ALA + ellagitannins.</div>
            </div>
            <div className="ing-row">
              <div className="ing-name">Flaxseed powder</div>
              <div className="ing-qty">10 g</div>
              <div className="ing-cal">53.4</div>
              <div className="ing-prot">1.8g</div>
              <div className="ing-note">Freezer jar. 10g = clinical SDG dose (30mg). Non-negotiable.</div>
            </div>
            <div className="ing-row">
              <div className="ing-name">Cocoa Powder</div>
              <div className="ing-qty">4 g</div>
              <div className="ing-cal">9</div>
              <div className="ing-prot">0.8g</div>
              <div className="ing-note">Pantry. 160mg epicatechin/day total.</div>
            </div>
            <div className="ing-row">
              <div className="ing-name">Coffee (instant or filter)</div>
              <div className="ing-qty">2 g</div>
              <div className="ing-cal">5</div>
              <div className="ing-prot">0.3g</div>
              <div className="ing-note">Chlorogenic acids for G6Pase inhibition.</div>
            </div>
            <div className="ing-row">
              <div className="ing-name">Banana (ripe)</div>
              <div className="ing-qty">70 g</div>
              <div className="ing-cal">63</div>
              <div className="ing-prot">0.8g</div>
              <div className="ing-note">Fresh. Creatine insulin-mediated uptake.</div>
            </div>
            <div className="ing-row">
              <div className="ing-name">Honey</div>
              <div className="ing-qty">4 g</div>
              <div className="ing-cal">12</div>
              <div className="ing-prot">0g</div>
              <div className="ing-note">Optional.</div>
            </div>
            <div className="ing-row">
              <div className="ing-name">Creatine Monohydrate</div>
              <div className="ing-qty">5 g</div>
              <div className="ing-cal">0</div>
              <div className="ing-prot">0g</div>
              <div className="ing-note">99% absorbed. Banana carbs aid muscle uptake.</div>
            </div>
            <div className="ing-row ing-changed">
              <div className="ing-name"><strong>Lemon juice (fresh squeeze)</strong></div>
              <div className="ing-qty">10 ml</div>
              <div className="ing-cal">3</div>
              <div className="ing-prot">0g</div>
              <div className="ing-note">Critical — concurrent Vit C overrides cocoa tannin inhibition of Fe+Zn. Absorption 3–6× improvement.</div>
            </div>
            <div className="ing-row ing-total">
              <div className="ing-name">S1 TOTAL</div>
              <div className="ing-qty">Blend 60 sec</div>
              <div className="ing-cal">~440</div>
              <div className="ing-prot">~26.7g</div>
              <div className="ing-note">Take Vit D nano drops after.</div>
            </div>
          </div>

          <div>
            <div className="al info">
              <div className="al-t">S1 Daily Prep — Under 3 Minutes</div>
              <p>1. Pour 200ml Almond milk (unsweetened)</p>
              <p>2. Scoop 20g from S1 jar (fridge)</p>
              <p>3. Scoop 7g walnut from freezer jar</p>
              <p>4. Scoop 10g flaxseed from freezer jar</p>
              <p>5. Add 20g yeast protein, 4g cocoa, 2g coffee, 5g creatine</p>
              <p>6. Add 70g banana (peeled)</p>
              <p>7. Squeeze ½ lemon directly into blender</p>
              <p>8. Blend 60 sec. Done.</p>
            </div>
            <div className="al gold" style={{marginTop:10}}>
              <div className="al-t">Why These 3 Cannot Be Pre-mixed</div>
              <p><strong>Walnut powder:</strong> ALA omega-3 oxidizes rapidly at room temp. Freezer storage is non-negotiable. Take out fresh daily.</p>
              <p><strong>Flaxseed powder:</strong> Same — ALA oxidizes. Always frozen, always fresh.</p>
              <p><strong>Lemon juice:</strong> Squeeze fresh. Concurrent Vit C only works at point of consumption — not if squeezed hours before.</p>
            </div>
          </div>
        </div>
      </div>

      {/* S2 Recipes */}
      <div className="sec">
        <div className="sh"><div className="sn">03</div><div className="st">Smoothie S2 — Pre-Workout (6:00 PM)</div><div className="ss">Lighter · Egg-day vs No-egg-day variants</div></div>

        <div className="recipe-grid">
          {/* Egg Day S2 */}
          <div className="recipe-card">
            <div className="rc-hdr" style={{background:'var(--green)'}}>
              <div className="rc-title">S2 — Egg Day</div>
              <div className="rc-macros">~345 kcal · ~12.2g protein · No yeast — meals cover target</div>
            </div>
            <div className="ing-row" style={{background:'var(--cream)',fontFamily:"'JetBrains Mono',monospace",fontSize:'7px',letterSpacing:'.08em',textTransform:'uppercase',color:'var(--rule)'}}>
              <div className="ing-name">Ingredient</div><div className="ing-qty">Qty</div><div className="ing-cal">Kcal</div><div className="ing-prot">Protein</div>
            </div>
            <div className="ing-row">
              <div className="ing-name">Water</div>
              <div className="ing-qty">200 ml</div>
              <div className="ing-cal">0</div>
              <div className="ing-prot">0g</div>
            </div>
            <div className="ing-row">
              <div className="ing-name">S2 Seed Powder (sesame 15g + pumpkin 10g)</div>
              <div className="ing-qty">25 g</div>
              <div className="ing-cal">169.7</div>
              <div className="ing-prot">7.1g</div>
            </div>
            <div className="ing-row">
              <div className="ing-name">Peanut Butter</div>
              <div className="ing-qty">15 g</div>
              <div className="ing-cal">88.4</div>
              <div className="ing-prot">3.8g</div>
            </div>
            <div className="ing-row">
              <div className="ing-name">Cocoa Powder</div>
              <div className="ing-qty">4 g</div>
              <div className="ing-cal">9</div>
              <div className="ing-prot">0.8g</div>
            </div>
            <div className="ing-row">
              <div className="ing-name">Banana (ripe)</div>
              <div className="ing-qty">70 g</div>
              <div className="ing-cal">63</div>
              <div className="ing-prot">0.8g</div>
            </div>
            <div className="ing-row">
              <div className="ing-name">Honey</div>
              <div className="ing-qty">4 g</div>
              <div className="ing-cal">12</div>
              <div className="ing-prot">0g</div>
            </div>
            <div className="ing-row ing-changed">
              <div className="ing-name"><strong>Lemon juice (fresh)</strong></div>
              <div className="ing-qty">10 ml</div>
              <div className="ing-cal">3</div>
              <div className="ing-prot">0g</div>
            </div>
            <div className="ing-row ing-total">
              <div className="ing-name">S2 TOTAL (Egg Day)</div>
              <div className="ing-qty">Blend 60s</div>
              <div className="ing-cal">~345</div>
              <div className="ing-prot">~12.2g</div>
            </div>
          </div>

          {/* No-Egg Day S2 */}
          <div className="recipe-card">
            <div className="rc-hdr" style={{background:'var(--amber)'}}>
              <div className="rc-title">S2 — No-Egg Day</div>
              <div className="rc-macros">~420 kcal · ~24g protein · Yeast 15g + Lecithin</div>
            </div>
            <div className="ing-row" style={{background:'var(--cream)',fontFamily:"'JetBrains Mono',monospace",fontSize:'7px',letterSpacing:'.08em',textTransform:'uppercase',color:'var(--rule)'}}>
              <div className="ing-name">Ingredient</div><div className="ing-qty">Qty</div><div className="ing-cal">Kcal</div><div className="ing-prot">Protein</div>
            </div>
            <div className="ing-row">
              <div className="ing-name">Water</div>
              <div className="ing-qty">200 ml</div>
              <div className="ing-cal">0</div>
              <div className="ing-prot">0g</div>
            </div>
            <div className="ing-row ing-critical">
              <div className="ing-name">Yeast Protein Unflavoured <span className="badge ok">Restored</span></div>
              <div className="ing-qty">15 g</div>
              <div className="ing-cal">59.8</div>
              <div className="ing-prot">11.9g</div>
            </div>
            <div className="ing-row">
              <div className="ing-name">S2 Seed Powder (sesame 15g + pumpkin 10g)</div>
              <div className="ing-qty">25 g</div>
              <div className="ing-cal">169.7</div>
              <div className="ing-prot">7.1g</div>
            </div>
            <div className="ing-row">
              <div className="ing-name">Peanut Butter</div>
              <div className="ing-qty">15 g</div>
              <div className="ing-cal">88.4</div>
              <div className="ing-prot">3.8g</div>
            </div>
            <div className="ing-row ing-critical">
              <div className="ing-name"><strong>Sunflower Lecithin</strong> <span className="badge exc">Choline fix</span></div>
              <div className="ing-qty">8 g (1 tbsp)</div>
              <div className="ing-cal">52</div>
              <div className="ing-prot">0g</div>
            </div>
            <div className="ing-row">
              <div className="ing-name">Cocoa Powder</div>
              <div className="ing-qty">4 g</div>
              <div className="ing-cal">9</div>
              <div className="ing-prot">0.8g</div>
            </div>
            <div className="ing-row">
              <div className="ing-name">Banana (ripe)</div>
              <div className="ing-qty">70 g</div>
              <div className="ing-cal">63</div>
              <div className="ing-prot">0.8g</div>
            </div>
            <div className="ing-row">
              <div className="ing-name">Honey</div>
              <div className="ing-qty">4 g</div>
              <div className="ing-cal">12</div>
              <div className="ing-prot">0g</div>
            </div>
            <div className="ing-row ing-changed">
              <div className="ing-name"><strong>Lemon juice (fresh)</strong></div>
              <div className="ing-qty">10 ml</div>
              <div className="ing-cal">3</div>
              <div className="ing-prot">0g</div>
            </div>
            <div className="ing-row ing-total">
              <div className="ing-name">S2 TOTAL (No-Egg Day)</div>
              <div className="ing-qty">Blend 60s</div>
              <div className="ing-cal">~457</div>
              <div className="ing-prot">~24.4g</div>
            </div>
          </div>
        </div>

        <div className="al warn">
          <div className="al-t">No-Egg Day — Choline Collapse</div>
          <p>3 eggs provide <strong>~350mg choline</strong> (92% absorbed). Without eggs, choline drops to ~112mg — only ~20% of the 550mg AI. This is significant because choline is needed for acetylcholine synthesis, liver fat metabolism, and cell membrane integrity.</p>
          <p><strong>Fix: 1 tbsp sunflower lecithin (8g) in S2.</strong> Provides ~195mg phosphatidylcholine → total choline on no-egg day: ~307mg (56% AI). Not perfect but prevents collapse. Sunflower lecithin mixes well in smoothies (fat-emulsifier).</p>
        </div>
      </div>

      {/* Supplement Schedule */}
      <div className="sec">
        <div className="sh"><div className="sn">04</div><div className="st">Supplement Schedule</div><div className="ss">Timing matters for each</div></div>
        <div className="supp-grid">
          <div className="supp-card">
            <div className="supp-name">B12 Methylcobalamin</div>
            <div className="supp-dose">1500 mcg</div>
            <div className="supp-when">7:30 AM — fasted, sublingual</div>
            <div className="supp-why">Hold under tongue 90 sec. No food/drink for 2 min. Sublingual bypasses intrinsic factor — 25–50% absorption vs 1–2% oral. Serum 204 → loading to 600+.</div>
          </div>
          <div className="supp-card">
            <div className="supp-name">Vit D3 Nano Drops</div>
            <div className="supp-dose">2000 IU</div>
            <div className="supp-when">After S1 (10:30 AM)</div>
            <div className="supp-why">Nano delivery: 88% absorbed (vs 60% standard). Fat in S1 further aids absorption. Serum 51.5 ng/mL confirmed optimal — never stop.</div>
          </div>
          <div className="supp-card">
            <div className="supp-name">Fish Oil (TG form)</div>
            <div className="supp-dose">2 softgels</div>
            <div className="supp-when">Lunch</div>
            <div className="supp-why">TG form: 68–73% EPA/DHA absorption. With fat at lunch: +50% vs fasted. Provides 1500mg EPA+DHA — frees flaxseed/chia ALA from conversion duty.</div>
          </div>
          <div className="supp-card">
            <div className="supp-name">Taurine</div>
            <div className="supp-dose">1000 mg</div>
            <div className="supp-when">Lunch — alternate days</div>
            <div className="supp-why">Alternate-day = ~500mg/day avg. 2023 Cell paper: taurine decline drives aging. Well tolerated, no interactions. ~87% absorbed.</div>
          </div>
          <div className="supp-card">
            <div className="supp-name">Creatine Monohydrate</div>
            <div className="supp-dose">5 g</div>
            <div className="supp-when">In S1 smoothie</div>
            <div className="supp-why">99% absorbed. Banana in S1 provides insulin spike for muscle creatine uptake. Drink extra 250ml water on creatine days.</div>
          </div>
          <div className="supp-card">
            <div className="supp-name">Glycine</div>
            <div className="supp-dose">3 g</div>
            <div className="supp-when">30 min before sleep</div>
            <div className="supp-why">Dissolve in 100ml warm water. NMDA glycine-site modulation + reduces core body temp for sleep onset. 91% absorbed free amino acid. 30 min window is important.</div>
          </div>
        </div>
      </div>
    </>
  )
}
