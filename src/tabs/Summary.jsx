export default function Summary() {
  return (
    <>
      {/* Key Stats */}
      <div className="sec">
        <div className="sh"><div className="sn">01</div><div className="st">Key Numbers at a Glance</div><div className="ss">72 kg · Bengaluru · Lean muscle gain · Bioavailability-corrected</div></div>
        <div className="stat-grid">
          <div className="stat-card stat-ok">
            <div className="stat-label">Vitamin D Serum</div>
            <div className="stat-val">51.5 ng/mL</div>
            <div className="stat-ref">Optimal 40–60 · 2000 IU nano daily · This enables Ca absorption</div>
          </div>
          <div className="stat-card stat-warn">
            <div className="stat-label">B12 Serum (loading)</div>
            <div className="stat-val">204 pg/mL</div>
            <div className="stat-ref">Target &gt;600 · 1500mcg sublingual daily · Retest 3 months</div>
          </div>
          <div className="stat-card stat-ok">
            <div className="stat-label">Homocysteine</div>
            <div className="stat-val">8.8 µmol/L</div>
            <div className="stat-ref">Optimal &lt;9 · Confirms B9+B6+B12 methylation working</div>
          </div>
          <div className="stat-card stat-ok">
            <div className="stat-label">Daily Protein (egg day)</div>
            <div className="stat-val">~105g</div>
            <div className="stat-ref">Target ≤110g · ~1.46g/kg · Smoothies: 44g · Meals: ~58g</div>
          </div>
          <div className="stat-card stat-warn">
            <div className="stat-label">Calcium Absorbed</div>
            <div className="stat-val">~249–273mg</div>
            <div className="stat-ref">Borderline — saved by Vit D 32% efficiency. No ragi = –41mg vs original.</div>
          </div>
          <div className="stat-card stat-ok">
            <div className="stat-label">ALA Omega-3</div>
            <div className="stat-val">4.78g/day</div>
            <div className="stat-ref">299% AI · Flax 2.35g + Chia 1.78g + Walnut 0.64g · Fish oil covers EPA/DHA</div>
          </div>
          <div className="stat-card stat-ok">
            <div className="stat-label">Fiber</div>
            <div className="stat-val">~43g/day</div>
            <div className="stat-ref">118% AI · Excellent prebiotic base for lignan/urolithin conversion</div>
          </div>
          <div className="stat-card stat-warn">
            <div className="stat-label">Calories</div>
            <div className="stat-val">~2,100</div>
            <div className="stat-ref">TDEE ~2,700–2,900 · ~600 kcal deficit · Too large — add paneer or extra roti</div>
          </div>
        </div>
      </div>

      {/* Wins / Gaps */}
      <div className="sec">
        <div className="sh"><div className="sn">02</div><div className="st">Wins, Gaps, Watchlist</div><div className="ss">Honest assessment</div></div>
        <div className="wg-grid">
          <div className="wg-card win">
            <div className="wg-title">Major Wins</div>
            <div className="wg-text">
              <p>✓ Vit D 51.5 ng/mL — optimal. The entire calcium picture depends on this. Never stop nano drops.</p>
              <p>✓ Homocysteine 8.8 — methylation pathway confirmed functional.</p>
              <p>✓ Sodium ~1,400mg — excellent for BP prevention given family history.</p>
              <p>✓ ALA 4.78g/day — 299% AI. Fish oil covers EPA+DHA separately.</p>
              <p>✓ Fiber 43g — excellent prebiotic base for lignan/sesamin/urolithin conversion.</p>
              <p>✓ Epicatechin ~128mg — above myostatin-inhibiting dose (50mg).</p>
              <p>✓ Anti-aging compounds stack: glycine, taurine, ergothioneine, SDG lignans, sesamin, ellagitannins all at therapeutic/functional levels.</p>
            </div>
          </div>
          <div className="wg-card gap">
            <div className="wg-title">Active Gaps</div>
            <div className="wg-text">
              <p>⚠ B12 at 204 — below optimal. Loading protocol in progress. Retest 3 months.</p>
              <p>⚠ Calcium borderline (no ragi) — saved by Vit D status. Cannot drop Vit D drops.</p>
              <p>⚠ Zinc borderline — 88–95% of RDA absorbed target. Double inhibition: phytate + cocoa tannins. Lemon juice is the only lever.</p>
              <p>⚠ Choline on no-egg days — 56% AI with lecithin (vs 84% with eggs). Lecithin in S2 is non-optional on these days.</p>
              <p>⚠ Caloric deficit ~600 kcal — too large for lean muscle gain. Paneer 100g at dinner is the simplest fix.</p>
              <p>⚠ Iodine ~73–80% RDA — TSH normal, manageable, but improve via 4th egg periodically.</p>
            </div>
          </div>
          <div className="wg-card bad">
            <div className="wg-title">Never Compromise</div>
            <div className="wg-text">
              <p>✕ Lemon juice in BOTH smoothies — not optional. Amla Vit C at 8AM does NOT help smoothie Fe/Zn absorption. Only concurrent Vit C works.</p>
              <p>✕ No high-heat roasting for walnuts — ALA destroyed 30–60% at 150°C+. Air fryer 80°C drying only.</p>
              <p>✕ Flaxseed and walnut powder always from freezer, added fresh — ALA oxidizes at room temp.</p>
              <p>✕ Never stop Vit D nano drops — calcium picture collapses without the absorption efficiency boost.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bioavailability Revelations */}
      <div className="sec">
        <div className="sh"><div className="sn">03</div><div className="st">The 4 Bioavailability Revelations</div><div className="ss">Things that were wrong in all previous versions</div></div>
        <div className="callout">
          <p><strong>1. Lemon juice directly in both smoothies</strong> — Amla Vit C at 8AM was not helping smoothie iron/zinc absorption (2–8 hour gap = no concurrent GI presence). Adding 10ml lemon to S1 and S2 at blend time increases iron absorption 3–6× by providing concurrent Vit C to override cocoa tannin inhibition and reduce Fe³⁺ → Fe²⁺.</p>
        </div>
        <div className="callout" style={{marginTop:0}}>
          <p><strong>2. Never roast walnuts</strong> — ALA omega-3 (the main health reason to eat walnuts alongside ellagitannins) is destroyed 30–60% at 150°C+. Walnuts must be soaked + dried at 80°C max, stored in freezer, added fresh to S1. Ellagitannins for urolithins are heat-stable and survive.</p>
        </div>
        <div className="callout" style={{marginTop:0}}>
          <p><strong>3. Spinach calcium is essentially zero</strong> — 90mg listed Ca from spinach → ~4.5mg absorbed due to oxalic acid forming insoluble calcium oxalate crystals (Heaney et al., AJCN 1988). This error inflated calcium calculations by ~85mg/day in v1–v4. Spinach is invaluable for Vit K1, folate, nitrates, and lutein — just not calcium.</p>
        </div>
        <div className="callout" style={{marginTop:0}}>
          <p><strong>4. Almond milk (unsweetened) instead of oat milk</strong> — 54 kcal/200ml vs 97 kcal; only 1.1g carbs vs ~15g. Switches S1 from a carb-heavy base to a fat-forward base, saving ~43 kcal and ~14g carbs per smoothie without compromising protein (1.9g in both). Ca fortification form in almond milk varies by brand — check label and shake before use.</p>
        </div>
      </div>

      {/* Core Rules */}
      <div className="sec">
        <div className="sh"><div className="sn">04</div><div className="st">Core Rules of This Plan</div><div className="ss">Evidence basis for every rule</div></div>
        <div className="two-col">
          <div>
            <div className="note">
              <div className="nl">Processing Rules</div>
              <p><strong>Almonds:</strong> Blanch skins off. Tannins in skin reduce protein digestibility 10–15% and mineral absorption. Blanching is the fix.</p>
              <p><strong>Sesame:</strong> Soak 12h + air fryer 160°C. Raw sesame: 5% Ca absorption. Processed: 20–25%. The single biggest processing impact in this plan.</p>
              <p><strong>All nuts/seeds:</strong> Soak + roast. Reduces phytate 50–65%. Phytate chelates Zn, Fe, Ca, Mg from ALL foods in the same meal — not just from the seed itself.</p>
            </div>
            <div className="note" style={{marginTop:10}}>
              <div className="nl">Timing Rules</div>
              <p><strong>Amla + B12: 7:30 AM fasted.</strong> Amla tannins absorbed optimally without food competition. B12 sublingual: no food 2 min after.</p>
              <p><strong>Fish oil at lunch with fat.</strong> TG form + dietary fat = 68–73% EPA/DHA absorption vs 48–67% fasted.</p>
              <p><strong>Glycine 30 min before sleep.</strong> NMDA glycine site modulation + core temperature reduction for sleep onset.</p>
            </div>
          </div>
          <div>
            <div className="note">
              <div className="nl">Non-Negotiable Minimums</div>
              <p><strong>Flaxseed 10g/day:</strong> Clinical SDG dose is 30mg/day = 10g ground flax. Below this, lignans drop below therapeutic threshold.</p>
              <p><strong>S1 Yeast Protein 20g:</strong> Ergothioneine via OCTN1. No other food source in this diet. Remove yeast and ergothioneine goes to zero — irreversible within diet.</p>
              <p><strong>Sesame 15g/day:</strong> 195mg sesamin → 117–146mg absorbed. Anti-aromatase threshold: 100mg. Must stay at 15g.</p>
              <p><strong>Walnuts 7g/day:</strong> 24mg ellagitannins for urolithin microbiome maintenance. Below 5g and bacteria populations decline.</p>
            </div>
            <div className="note" style={{marginTop:10}}>
              <div className="nl">Protein Rules</div>
              <p><strong>Target: 100–110g/day (≤1.5g/kg).</strong> Morton et al. 2018 BJSM: protein synthesis plateaus at ~1.62g/kg. Beyond 1.5g/kg, incremental benefit is negligible for lean gain.</p>
              <p><strong>Egg days:</strong> S2 yeast 5g (reduces from 15g = saves ~8g protein).</p>
              <p><strong>No-egg days:</strong> S2 yeast restored to 15g + sunflower lecithin 8g for choline replacement.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
