export default function BloodReport() {
  return (
    <>
      <div className="sec">
        <div className="sh"><div className="sn">01</div><div className="st">Blood Report — Lab Values</div><div className="ss">Latest results · Context · What to watch</div></div>

        <div className="lab-cards">
          {/* Vit D */}
          <div className="lab-card opt">
            <div className="lab-marker">Vitamin D3 (25-OH)</div>
            <div className="lab-value" style={{color:'var(--green)'}}>51.5</div>
            <div className="lab-unit">ng/mL</div>
            <div className="lab-range">Deficient: &lt;20 · Insufficient: 20–30 · Optimal: 40–60 · Toxic: &gt;100</div>
            <div className="lab-note">
              <strong>Optimal range confirmed.</strong> This is the single most important number in your plan. At 51.5 ng/mL, calcitriol → VDR → TRPV6/Calbindin-D9k/PMCA1b pathway is maximally active → calcium absorption efficiency ~32% vs ~21% population average. This is what bridges the calcium gap created by removing ragi and spinach oxalate blocking Ca.
            </div>
          </div>

          {/* B12 */}
          <div className="lab-card warn">
            <div className="lab-marker">B12 (Cobalamin)</div>
            <div className="lab-value" style={{color:'var(--amber)'}}>204</div>
            <div className="lab-unit">pg/mL</div>
            <div className="lab-range">Deficient: &lt;200 · Low: 200–300 · Normal: 300–900 · Optimal: 600–900</div>
            <div className="lab-note">
              <strong>Low — loading protocol initiated.</strong> Sublingual methylcobalamin 1500mcg daily. Hold under tongue 90 sec. Expect 600+ at 3-month retest. Food B12 mainly from eggs (~1.5mcg, 78% absorbed = 1.17mcg) — almond milk contributes minimal B12 (check label). Food total ~1.2mcg/day — adequate maintenance but not building reserves. Sublingual supplement is essential.
            </div>
          </div>

          {/* Serum Iron */}
          <div className="lab-card opt">
            <div className="lab-marker">Serum Iron</div>
            <div className="lab-value" style={{color:'var(--green)'}}>133</div>
            <div className="lab-unit">µg/dL</div>
            <div className="lab-range">Low: &lt;60 · Normal: 60–170 · Optimal: 80–150 · High: &gt;170</div>
            <div className="lab-note">
              <strong>Normal-optimal range.</strong> Despite plant-forward diet with significant non-heme iron (lower bioavailability), serum iron is adequate. Confirmed lemon juice in smoothies (concurrent Vit C) approach is correct and sufficient. Iron at 276% of RDA intake but low bioavailability — this is expected and manageable.
            </div>
          </div>

          {/* Homocysteine */}
          <div className="lab-card opt">
            <div className="lab-marker">Homocysteine</div>
            <div className="lab-value" style={{color:'var(--green)'}}>8.8</div>
            <div className="lab-unit">µmol/L</div>
            <div className="lab-range">Optimal: &lt;9 · Normal: 9–15 · Elevated: &gt;15 · High CVD risk: &gt;20</div>
            <div className="lab-note">
              <strong>Optimal.</strong> Homocysteine is the single best proxy for B9 + B6 + B12 methylation status. At 8.8, folate (479mcg/day), B6 (2.6mg/day), and B12 (loading) are working correctly. This confirms the entire methylation pathway is functional. Target: keep below 9.
            </div>
          </div>

          {/* Magnesium */}
          <div className="lab-card opt">
            <div className="lab-marker">Serum Magnesium</div>
            <div className="lab-value" style={{color:'var(--green)'}}>2.0</div>
            <div className="lab-unit">mg/dL</div>
            <div className="lab-range">Deficient: &lt;1.7 · Low-normal: 1.7–2.0 · Optimal: 2.0–2.5 · High: &gt;2.7</div>
            <div className="lab-note">
              <strong>Normal-optimal.</strong> Confirms processed seeds (soaking + roasting) improving Mg absorption is working. Diet provides ~580mg Mg intake, ~203–232mg absorbed. Serum Mg confirms sufficiency. Note: serum Mg is a late marker — cellular Mg can be depleted before serum drops. At 2.0, you're at the lower edge of optimal.
            </div>
          </div>

          {/* TSH */}
          <div className="lab-card opt">
            <div className="lab-marker">TSH (Thyroid)</div>
            <div className="lab-value" style={{color:'var(--green)'}}>1.32</div>
            <div className="lab-unit">mIU/L</div>
            <div className="lab-range">Hypothyroid: &gt;4.5 · Normal: 0.4–4.5 · Optimal: 1.0–2.5 · Hyperthyroid: &lt;0.4</div>
            <div className="lab-note">
              <strong>Optimal range.</strong> Thyroid is functioning well despite borderline iodine intake (~73–80% of RDA). Cruciferous vegetables (if eating broccoli/cauliflower) can mildly compete with iodine uptake — but TSH confirms this is not clinically significant. Retest in 1 year.
            </div>
          </div>
        </div>
      </div>

      {/* Retest Schedule */}
      <div className="sec">
        <div className="sh"><div className="sn">02</div><div className="st">Retest Schedule</div><div className="ss">What to monitor · When</div></div>
        <div className="tw">
          <table>
            <thead>
              <tr>
                <th>Test</th>
                <th>Current Value</th>
                <th>Retest In</th>
                <th>Target at Retest</th>
                <th>Why</th>
              </tr>
            </thead>
            <tbody>
              <tr className="rwarn">
                <td className="bold">B12 (Cobalamin)</td>
                <td className="mono">204 pg/mL</td>
                <td className="mono bold" style={{color:'var(--amber)'}}>3 months</td>
                <td className="mono">&gt;600 pg/mL</td>
                <td>Loading protocol with 1500mcg sublingual daily. Low B12 affects nerve function, DNA synthesis, methylation. Priority retest.</td>
              </tr>
              <tr>
                <td className="bold">Vitamin D3</td>
                <td className="mono">51.5 ng/mL ✓</td>
                <td className="mono">6 months</td>
                <td className="mono">40–60 ng/mL maintained</td>
                <td>Currently optimal. Confirm 2000 IU nano drops maintaining level through seasons. Bengaluru has good sun exposure year-round but indoor work reduces synthesis.</td>
              </tr>
              <tr>
                <td className="bold">Serum Iron + Ferritin</td>
                <td className="mono">Fe: 133 µg/dL</td>
                <td className="mono">6 months</td>
                <td className="mono">Fe: 80–150 · Ferritin: 30–100</td>
                <td>Currently adequate. With lemon juice additions to both smoothies, iron absorption should improve. Ferritin not tested — add to next panel. Ferritin is the storage form and better long-term indicator.</td>
              </tr>
              <tr>
                <td className="bold">Homocysteine</td>
                <td className="mono">8.8 µmol/L ✓</td>
                <td className="mono">12 months</td>
                <td className="mono">&lt;9 µmol/L</td>
                <td>Currently optimal. Retest annually as proxy for methylation health. If rises above 10, increase folate-rich foods or add 400mcg folate supplement.</td>
              </tr>
              <tr>
                <td className="bold">Zinc</td>
                <td className="mono">Not tested</td>
                <td className="mono bold" style={{color:'var(--red)'}}>Get tested</td>
                <td className="mono">70–120 µg/dL serum</td>
                <td>Zinc is the most bioavailability-challenged mineral in this diet. No serum zinc baseline exists. Test to confirm dietary zinc (borderline adequate at 88–95% absorbed target) is sufficient. Symptoms to watch: poor taste/smell, slow wound healing, white lines on nails.</td>
              </tr>
              <tr>
                <td className="bold">Calcium (serum + urinary)</td>
                <td className="mono">Not tested</td>
                <td className="mono">6 months</td>
                <td className="mono">Serum Ca: 8.5–10.5 mg/dL</td>
                <td>With ragi removed and calcium borderline, serum Ca confirms if Vit D-enhanced absorption is compensating. Add to next panel.</td>
              </tr>
              <tr>
                <td className="bold">TSH</td>
                <td className="mono">1.32 mIU/L ✓</td>
                <td className="mono">12 months</td>
                <td className="mono">1.0–2.5 mIU/L</td>
                <td>Currently optimal. Borderline iodine intake — annual monitoring sufficient. Add FT3/FT4 if TSH changes.</td>
              </tr>
              <tr>
                <td className="bold">Magnesium (RBC)</td>
                <td className="mono">Serum: 2.0 mg/dL</td>
                <td className="mono">6 months</td>
                <td className="mono">RBC Mg: 4.2–6.8 mg/dL</td>
                <td>Serum Mg is a late/insensitive marker. RBC magnesium is more accurate for cellular status. At serum 2.0 (low edge of optimal), RBC test confirms true intracellular status.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Nutrient-Lab Connections */}
      <div className="sec">
        <div className="sh"><div className="sn">03</div><div className="st">What Labs Confirm in This Plan</div><div className="ss">Lab-to-diet feedback loop</div></div>
        <div className="two-col">
          <div>
            <div className="al ok">
              <div className="al-t">What These Labs Validate</div>
              <p><strong>Hcy 8.8:</strong> Confirms folate (479mcg), B6 (2.6mg), and B12 loading are working together correctly. The methylation cycle is functional.</p>
              <p><strong>Vit D 51.5:</strong> Confirms nano drops + sun exposure is maintaining optimal serum status. The 2000 IU dose is calibrated correctly for your biology.</p>
              <p><strong>Fe 133 + Mg 2.0:</strong> Confirms soaking+roasting+lemon juice protocol is sufficient to absorb meaningful minerals despite plant-forward diet.</p>
            </div>
          </div>
          <div>
            <div className="al warn">
              <div className="al-t">What Still Needs Investigation</div>
              <p><strong>No zinc baseline:</strong> The most critical missing test. Zinc is your most bioavailability-challenged mineral with double inhibition (phytate + cocoa tannins).</p>
              <p><strong>B12 at 204:</strong> Loading is the right move. Confirm at 3 months — if not reaching 400+, increase to 2× daily sublingual or consider hydroxocobalamin form (longer half-life).</p>
              <p><strong>No ferritin tested:</strong> Serum iron is a snapshot. Ferritin is your iron reserve — add to next panel.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
