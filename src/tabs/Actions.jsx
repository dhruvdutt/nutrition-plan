function ActionItem({ num, priority, label, title, description }) {
  return (
    <div className={`action-item a-item-p${priority}`}>
      <div className="a-num">{num}</div>
      <div className="a-body">
        <span className="a-lbl">{label}</span>
        <div className="a-title">{title}</div>
        <div className="a-desc">{description}</div>
      </div>
    </div>
  )
}

export default function Actions() {
  return (
    <>
      <div className="sec">
        <div className="sh"><div className="sn">—</div><div className="st">Action Items by Priority</div><div className="ss">P1 Critical → P4 Optional · Evidence-based</div></div>

        {/* P1 Critical */}
        <div className="a-section">
          <div className="a-sec-title p1">P1 — Critical (Do Immediately / Every Day)</div>
          <ActionItem
            num={1} priority={1} label="P1 · Daily habit"
            title="Add 10ml fresh lemon juice to BOTH S1 and S2 smoothies"
            description="The single highest-ROI action in this plan. Provides concurrent Vit C at the moment of smoothie consumption — overrides cocoa tannin inhibition of iron and zinc absorption from ALL nuts/seeds in both smoothies. Net effect: Fe absorption 3–6× improvement, Zn absorption meaningfully improved. Amla at 8AM does NOT substitute for this — 2–8 hour gap means no concurrent GI presence. Squeeze ½ lemon per smoothie. Takes 5 seconds."
          />
        </div>

        {/* P2 High */}
        <div className="a-section">
          <div className="a-sec-title p2">P2 — High Priority (Important for the Plan to Work)</div>
          <ActionItem
            num={2} priority={2} label="P2 · Urgent test"
            title="Get serum zinc tested — no baseline exists"
            description="Zinc is the most bioavailability-challenged mineral in this diet. Double inhibition: phytate from seeds (primary) + cocoa tannins from both smoothies (secondary). Estimated absorbed zinc: 2.9–4.1mg/day (borderline for 11mg RDA). Yet no zinc test has been done. This is a critical blind spot. Test: serum zinc (normal 70–120 µg/dL). Symptoms to watch now: poor taste/smell acuity, slow wound healing, white spots on nails, dry skin."
          />
        </div>

        {/* P3 Medium */}
        <div className="a-section">
          <div className="a-sec-title p3">P3 — Medium Priority (Meaningful Improvements)</div>
          <ActionItem
            num={3} priority={3} label="P3 · Supplement addition"
            title="Add 1 tbsp wheat germ to roti dough for spermidine"
            description="Spermidine from dietary sources is ~1–3mg/day — below the autophagy induction threshold from RCTs. Adding 1 tbsp wheat germ (available at any Bengaluru grocery store) to roti dough adds 3–5mg spermidine/day, crossing the autophagy induction threshold. Wheat germ is the most concentrated food source of spermidine. This is the only current anti-aging gap not being addressed."
          />
          <ActionItem
            num={4} priority={3} label="P3 · Test addition"
            title="Add ferritin and serum calcium to next blood panel"
            description="Serum iron (133 µg/dL) is a snapshot, not a reserve. Ferritin reflects iron stores — much more clinically informative. Similarly, serum calcium has never been tested despite calcium being borderline in this plan. Both tests cost under ₹300 together and resolve the two most important dietary mineral gaps with objective data."
          />
          <ActionItem
            num={5} priority={3} label="P3 · Retest"
            title="Retest B12 at 3 months — if <400 pg/mL, escalate loading"
            description="Current loading: 1500mcg sublingual methylcobalamin daily. Target at 3-month retest: >600 pg/mL. If still below 400: (a) switch to hydroxocobalamin sublingual (longer half-life, may be better for some individuals), or (b) add second daily dose. If above 600: taper to 3×/week maintenance. B12 affects nerve function, DNA synthesis, red blood cell formation, methylation cycle — all active issues at 204 pg/mL."
          />
          <ActionItem
            num={6} priority={3} label="P3 · Meals"
            title="Add lemon juice to dal/curry at lunch and dinner"
            description="The lemon juice fix for smoothies is already implemented. But meals (wheat rotis + dal) represent a significant non-heme iron source (~4.2mg from wheat alone). Adding lemon juice or tomato (Vit C) to meals would improve iron absorption from lunch and dinner similarly. This is especially relevant since wheat phytate reduces zinc and iron absorption to 10–14% — concurrent Vit C partially overrides this."
          />
          <ActionItem
            num={7} priority={3} label="P3 · Occasional addition"
            title="4th egg 2–3 times per week for choline"
            description="Current choline on egg days: ~425mg (84% of 550mg AI). The gap is a quantity issue, not absorption. Adding a 4th egg 2–3×/week adds ~25mg choline/day average, closing the gap to ~91% AI."
          />
        </div>

        {/* P4 Low */}
        <div className="a-section">
          <div className="a-sec-title p4">P4 — Low Priority (Nice to Have / Long-term)</div>
          <ActionItem
            num={8} priority={4} label="P4 · Occasional"
            title="1 small piece of nori seaweed weekly for iodine"
            description="Iodine intake is ~73–80% of RDA (110–120mcg vs 150mcg target). TSH is confirmed normal (1.32) so this is not urgent. But 1g of nori = 330mcg iodine — a weekly piece of nori would easily close this gap. Nori is available in most supermarkets in Bengaluru. Alternative: increase to 4 eggs on 2–3 days per week (each egg adds ~25mcg iodine)."
          />
          <ActionItem
            num={9} priority={4} label="P4 · Consider"
            title="Consider sourdough or fermented ragi rotis if you return to ragi"
            description="If ragi rotis come back to the routine, traditional fermentation or sourdough ragi preparation reduces phytate 50–80% (vs simple ragi roti which reduces ~20%). Fermented ragi would improve Ca absorption from 12–15% to 18–22%, delivering ~37–45mg absorbed Ca per 60g flour vs ~25mg without fermentation. With Vit D at 51.5 ng/mL, fermented ragi rotis would comprehensively close the calcium gap."
          />
          <ActionItem
            num={10} priority={4} label="P4 · Watch"
            title="Monitor biotin — borderline at 93–120% AI"
            description="Biotin is near but not below the 30mcg AI. Key sources: eggs (10mcg, 90% absorbed), yeast (7.9mcg, 88%), wheat (4mcg). If you notice winter dry skin or hair shedding persisting beyond 8 weeks of following this plan, add a 50mcg biotin supplement (available as standalone, very cheap). More eggs and continued yeast protein both improve biotin without supplementation."
          />
          <ActionItem
            num={11} priority={4} label="P4 · Optional"
            title="Consider RBC magnesium test for more accurate intracellular status"
            description="Serum magnesium (currently 2.0 mg/dL) is the least sensitive marker for magnesium status — serum Mg is tightly homeostically regulated and only drops when depletion is severe. RBC magnesium (normal: 4.2–6.8 mg/dL) reflects intracellular/functional status. With serum at 2.0 (low edge of normal), RBC Mg would confirm whether you're functionally replete or subtly depleted. Test available at most labs for ~₹400."
          />
          <ActionItem
            num={12} priority={4} label="P4 · Knowledge"
            title="Consistent walnut intake daily — do not skip even on busy days"
            description="Urolithin production (from ellagitannins → Gordonibacter gut bacteria → urolithins A+B for mitophagy) requires consistent daily input to maintain the specific gut bacteria populations. Skipping walnuts for more than 2–3 days disrupts the bacterial colony. 7g walnut powder from the freezer jar takes 10 seconds to add to S1 — there is no practical reason to skip it."
          />
        </div>
      </div>
    </>
  )
}
