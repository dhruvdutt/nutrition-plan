export default function BiweeklyPrep() {
  return (
    <>
      {/* Overview */}
      <div className="sec">
        <div className="sh"><div className="sn">01</div><div className="st">2-Week Batch System</div><div className="ss">~60 min once per fortnight · Everything at –18°C</div></div>
        <div className="al info">
          <div className="al-t">Why This Process Exists — Bioavailability Numbers</div>
          <p>Raw nuts and seeds have high mineral content on paper but most of it is locked behind phytic acid (phytate), tannins, and intact cell walls. The entire prep sequence exists to close the gap between what you consume and what you absorb. Without processing, you would be eating 40–60% less of every mineral in this plan than the numbers show.</p>
        </div>
        <div className="tw" style={{marginTop:12}}>
          <table>
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Processing</th>
                <th>Absorption — Raw → Processed</th>
                <th>What changes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="rwin">
                <td className="bold">Almonds</td>
                <td className="mono" style={{fontSize:'11px'}}>Blanch + soak 16h + roast 150°C</td>
                <td className="mono" style={{fontSize:'11px'}}>Ca 5%→15–20% · Zn 10%→18% · protein 85%→95%</td>
                <td style={{fontSize:'11px'}}>Skin tannins (blanching) block 10–15% protein + reduce Ca/Zn. Phytate −35–50% from soaking. Protein digestibility climbs to near-egg levels after both steps.</td>
              </tr>
              <tr className="rwin">
                <td className="bold">Sunflower</td>
                <td className="mono" style={{fontSize:'11px'}}>Soak 16h + roast 155°C</td>
                <td className="mono" style={{fontSize:'11px'}}>Mg 20%→32–35% (+60%) · Zn 12%→20–22% (+75%)</td>
                <td style={{fontSize:'11px'}}>Phytate reduced 50–60%. Becomes the largest processed-Mg source in S1. Temperature capped at 155°C to protect linoleic acid (PUFA oxidises above 175°C).</td>
              </tr>
              <tr className="rwin">
                <td className="bold">Walnuts</td>
                <td className="mono" style={{fontSize:'11px'}}>Soak 16h + 80°C dry only</td>
                <td className="mono" style={{fontSize:'11px'}}>ALA retained 95–98% vs 40–70% loss at 150°C+ · Mg 20%→28–32%</td>
                <td style={{fontSize:'11px'}}>The 80°C ceiling is non-negotiable. ALA (omega-3) is a PUFA — roasting destroys 30–60% at standard temperatures. Soaking reduces phytate 25–35% without heat risk.</td>
              </tr>
              <tr className="rwin">
                <td className="bold">Sesame</td>
                <td className="mono" style={{fontSize:'11px'}}>Soak 16h + roast 160°C</td>
                <td className="mono" style={{fontSize:'11px'}}>Ca 5%→20–25% (4–5×) · Mg 20%→35–40% (+80%)</td>
                <td style={{fontSize:'11px'}}>The biggest transformation in the premix. Phytate reduced 55–65%. Sesamin absorption improves from ~50% whole seed → ~65–75% ground. The 15g/day sesamin anti-aromatase threshold depends entirely on this processing chain.</td>
              </tr>
              <tr className="rwin">
                <td className="bold">Pumpkin</td>
                <td className="mono" style={{fontSize:'11px'}}>Soak 16h + roast 155°C</td>
                <td className="mono" style={{fontSize:'11px'}}>Zn 12%→20–22% (+75%) · Mg 20%→30–35% (+60%)</td>
                <td style={{fontSize:'11px'}}>Phytate reduced 40–55%. Main zinc contributor in S2. Without processing, pumpkin's zinc barely clears baseline — after processing it meaningfully closes the zinc gap.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="al info" style={{marginTop:16}}>
          <div className="al-t">Design Principle</div>
          <p>All phytate-reduction processing (soaking, roasting, grinding) done once every 2 weeks — ~60 min total active time. Daily smoothie prep: scoop powders → add fresh items → blend 60 sec. Under 4 minutes per smoothie.</p>
          <p><strong>Everything stored at –18°C</strong> (freezer) since fridge is crowded. Walnut and flaxseed are non-negotiable freezer items (ALA oxidizes). All other powders also benefit from –18°C for 2-week storage window.</p>
        </div>

        <div className="callout">
          <p><strong>Air Fryer Settings Used:</strong> You have an air fryer with 80–200°C range. All roasting below uses air fryer. The convection microwave is only needed for blanching almonds (stovetop is actually better — see below). Electrically, air fryer wins for small batches (1400–1800W for 8–12 min vs oven preheating 2000W+ for 20+ min).</p>
        </div>
      </div>

      {/* Shopping List */}
      <div className="sec">
        <div className="sh"><div className="sn">02</div><div className="st">2-Week Shopping List</div><div className="ss">Exact grams to buy</div></div>
        <div className="tw">
          <table>
            <thead>
              <tr>
                <th>Ingredient</th>
                <th className="r">Daily Use</th>
                <th className="r">14-Day Qty</th>
                <th>Buy</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="rcat"><td colSpan={5}>S1 Ingredients (dry)</td></tr>
              <tr>
                <td className="bold">Raw Almonds</td>
                <td className="r mono">10g</td>
                <td className="r mono">140g</td>
                <td>150g (1 pack)</td>
                <td>Whole raw, skin-on. Blanch during prep.</td>
              </tr>
              <tr>
                <td className="bold">Sunflower Seeds (raw)</td>
                <td className="r mono">10g</td>
                <td className="r mono">140g</td>
                <td>150g</td>
                <td>Raw, hulled. Roast in air fryer.</td>
              </tr>
              <tr>
                <td className="bold">Walnuts (raw)</td>
                <td className="r mono">7g</td>
                <td className="r mono">98g</td>
                <td>100g</td>
                <td>Raw halves/pieces. Low-temp dry only — NO air fryer roasting.</td>
              </tr>
              <tr>
                <td className="bold">Flaxseed (ground)</td>
                <td className="r mono">10g</td>
                <td className="r mono">140g</td>
                <td>200g pack</td>
                <td>Buy whole raw flaxseed and grind biweekly in dry mixer jar — freshest ALA. Or buy pre-ground (any reputed brand). Store in freezer immediately after opening.</td>
              </tr>
              <tr className="rcat"><td colSpan={5}>S2 Ingredients (dry)</td></tr>
              <tr>
                <td className="bold">White Sesame (unhulled, raw)</td>
                <td className="r mono">15g</td>
                <td className="r mono">210g</td>
                <td>250g</td>
                <td>White unhulled = same as black sesame nutritionally. Unhulled = the key requirement (hull contains sesamin+Ca).</td>
              </tr>
              <tr>
                <td className="bold">Pumpkin Seeds (raw)</td>
                <td className="r mono">10g</td>
                <td className="r mono">140g</td>
                <td>150g</td>
                <td>Raw, hulled.</td>
              </tr>
              <tr className="rcat"><td colSpan={5}>Daily Fresh Items</td></tr>
              <tr>
                <td className="bold">Banana (ripe)</td>
                <td className="r mono">2 (140g)</td>
                <td className="r mono">28 bananas</td>
                <td>3–4 kg bunch</td>
                <td>Ripe (spotted). Buy in 2 batches — bananas ripen fast.</td>
              </tr>
              <tr>
                <td className="bold">Lemons</td>
                <td className="r mono">2 squeezes (20ml)</td>
                <td className="r mono">14–16 lemons</td>
                <td>1 kg bag</td>
                <td>Squeeze fresh daily into both S1 and S2. Store lemons in fridge.</td>
              </tr>
              <tr className="rcat"><td colSpan={5}>Pantry (restock as needed)</td></tr>
              <tr>
                <td className="bold">Yeast Protein Unflavoured</td>
                <td className="r mono">20–25g (25g no-egg days)</td>
                <td className="r mono">280–350g</td>
                <td>1 kg tub</td>
                <td>—</td>
              </tr>
              <tr>
                <td className="bold">Almond milk (unsweetened)</td>
                <td className="r mono">200ml</td>
                <td className="r mono">2.8 L</td>
                <td>3 × 1L cartons</td>
                <td>Unsweetened only. Shake before use — calcium fortification settles. 27 kcal/100ml · 4.6g fat · 1.1g carbs.</td>
              </tr>
              <tr>
                <td className="bold">Sunflower Lecithin</td>
                <td className="r mono">8g (no-egg days only)</td>
                <td className="r mono">~4–8 days use</td>
                <td>200g pack</td>
                <td>For no-egg days only. Choline replacement for eggs.</td>
              </tr>
              <tr>
                <td className="bold">Peanut Butter</td>
                <td className="r mono">15g</td>
                <td className="r mono">210g</td>
                <td>250–500g jar</td>
                <td>100% peanuts only — no added sugar, salt, or oil.</td>
              </tr>
              <tr>
                <td className="bold">Cocoa Powder</td>
                <td className="r mono">8g (4g × 2)</td>
                <td className="r mono">112g</td>
                <td>200g pack</td>
                <td>Raw/dark, unsweetened.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Prep Sequence */}
      <div className="sec">
        <div className="sh"><div className="sn">03</div><div className="st">Prep Day Sequence</div><div className="ss">~60 min active · Do on Sunday evening</div></div>

        <div className="step-block">
          <div className="step-hdr">
            <span>STEP 1 — Start soaks (2 min active · 16h minimum in fridge)</span>
            <span className="step-yield">Evening before prep day</span>
          </div>
          <div className="step-body">
            <ol>
              <li>Get 4 bowls. Label them: Almonds, Sunflower, Walnuts, Pumpkin.</li>
              <li><strong>Almonds bowl:</strong> Add 150g almonds + cover generously with water.</li>
              <li><strong>Sunflower bowl:</strong> Add 150g sunflower seeds + cover with water.</li>
              <li><strong>Walnut bowl:</strong> Add 100g walnuts + cover with water.</li>
              <li><strong>Pumpkin bowl:</strong> Add 150g pumpkin seeds + cover with water.</li>
              <li><strong>Sesame bowl (separate timing):</strong> Add 250g sesame + cover with water. Sesame soaks 12h — start with almonds or separately.</li>
              <li>
                <strong>Soak in fridge — 16h minimum.</strong> Start 6 PM → take out 10 AM next morning. At 4°C, phytase slows down so you compensate with time — 16h fridge = equivalent phytate reduction to 12h at room temp. 18–20h is fine too, nothing degrades.
                <span className="step-warn" style={{display:'block', marginTop:6}}>Do NOT soak overnight at room temperature above 28°C (Bengaluru summer) — aflatoxin risk for almonds, bacterial growth in water, ALA oxidation in walnuts.</span>
              </li>
            </ol>
          </div>
        </div>

        <div className="step-block">
          <div className="step-hdr">
            <span>STEP 2 — Blanch & Process Almonds (15 min)</span>
            <span className="step-yield">Yields ~120g almond powder</span>
          </div>
          <div className="step-body">
            <div className="callout" style={{marginBottom:10}}>
              <strong>Bioavailability impact:</strong> Skin tannins (removed by blanching) block 10–15% of protein and reduce Ca/Zn absorption. Soaking 16h cuts phytate 35–50%. Combined: Ca 5%→15–20%, Zn 10%→18%, protein digestibility 85%→95%. Without blanching, this would be the lowest-value ingredient in S1.
            </div>
            <ol>
              <li>Drain soaked almonds. Rinse.</li>
              <li><strong>Stovetop only (not air fryer):</strong> Boil 500ml water in a pot. Add almonds, blanch for exactly 60 seconds. Drain immediately.</li>
              <li>While still warm, peel skins off — they slide off easily (3–4 min for 150g). <span className="step-warn">This step is non-negotiable — skin tannins reduce protein and mineral absorption by 10–15%.</span></li>
              <li>Spread peeled almonds on air fryer basket/tray in a single layer.</li>
              <li><strong>Air fryer: 80°C for 20 min</strong> to dry out moisture from soaking.</li>
              <li>Then <strong>air fryer: 150°C for 8 min</strong> until lightly golden. Do NOT over-roast.</li>
              <li>Cool completely (15 min) before grinding.</li>
              <li>Grind in dry mixer to fine powder. Store in labeled jar — goes into FREEZER.</li>
            </ol>
          </div>
        </div>

        <div className="step-block">
          <div className="step-hdr">
            <span>STEP 3 — Roast & Powder Sunflower Seeds (12 min)</span>
            <span className="step-yield">Yields ~130g sunflower powder</span>
          </div>
          <div className="step-body">
            <div className="callout" style={{marginBottom:10}}>
              <strong>Bioavailability impact:</strong> Phytate reduced 50–60% by soaking + roasting. Mg absorption 20%→32–35% (+60%). Zn absorption 12%→20–22% (+75%). Becomes the largest single processed-Mg source in S1. Temperature capped at 155°C — linoleic acid (the dominant PUFA in sunflower) oxidises above 175°C, destroying its nutritional value.
            </div>
            <ol>
              <li>Drain soaked sunflower seeds. Pat dry with clean cloth.</li>
              <li>Spread in single layer on air fryer basket.</li>
              <li><strong>Air fryer: 155°C for 9 min.</strong> Shake basket halfway through. <span className="step-warn">Do NOT exceed 160°C — linoleic acid (PUFA in sunflower) oxidizes above 175°C. Stay at 155°C.</span></li>
              <li>Cool completely. Grind to powder.</li>
              <li><strong>Combine in S1 JAR with almond powder.</strong> Label: "S1 Powder — almond+sunflower". Store in FREEZER.</li>
              <li>Daily scoop: 20g from this jar (= 10g almond powder + 10g sunflower powder).</li>
            </ol>
          </div>
        </div>

        <div className="step-block">
          <div className="step-hdr">
            <span>STEP 4 — Low-Temp Dry Walnuts (2–3 hours · hands-off)</span>
            <span className="step-yield">Yields ~90g walnut powder · FREEZER ONLY</span>
          </div>
          <div className="step-body">
            <div className="callout" style={{marginBottom:10}}>
              <strong>Bioavailability impact:</strong> 80°C is the ceiling — not a preference. At 150°C+ roasting, ALA (omega-3) is destroyed 30–60%; at 80°C, 95–98% is retained. Soaking reduces phytate 25–35%, improving Mg absorption 20%→28–32%. The ellagitannins (→urolithins for mitophagy) are heat-stable and survive both soaking and low-temp drying intact.
            </div>
            <ol>
              <li>Drain soaked walnuts. Pat dry.</li>
              <li><strong>Air fryer: 80°C (lowest setting) for 25–30 min</strong>, shaking every 10 min. Goal: dry out the water from soaking without any roasting. Walnuts should not darken at all.</li>
              <li><span className="step-warn">CRITICAL: No high-heat roasting. ALA omega-3 is destroyed 30–60% at 150°C+. Air fryer at 80°C is the minimum safe drying temperature.</span></li>
              <li>Cool completely. Grind to rough powder (slightly coarser than other powders — fine).</li>
              <li>Store in small jar — <strong>FREEZER only, separate from S1 jar.</strong></li>
              <li>Daily: scoop 7g from freezer directly into S1 blender. Do not pre-mix into S1 jar.</li>
            </ol>
          </div>
        </div>

        <div className="step-block">
          <div className="step-hdr">
            <span>STEP 5 — Roast & Powder Sesame (15 min · do in 2 batches)</span>
            <span className="step-yield">Yields ~210g sesame powder</span>
          </div>
          <div className="step-body">
            <div className="callout" style={{marginBottom:10}}>
              <strong>Bioavailability impact:</strong> The biggest transformation in the premix. Raw sesame calcium absorption is ~5% (phytate + oxalate double-lock). After 16h soak + 160°C roast: phytate reduced 55–65%, Ca absorption rises to 20–25% — a 4–5× improvement. Mg absorption goes from 20% raw to 35–40% (+80%). Sesamin absorption also improves: ~50% from whole seeds → ~65–75% from ground powder (cell wall rupture releases bound sesamin). The entire anti-aromatase benefit (100mg sesamin/day threshold) depends on this processing chain.
            </div>
            <ol>
              <li>Drain soaked sesame (12h soak). Spread to dry for 10 min on a clean cloth.</li>
              <li><span className="step-warn">Important: Do in 2 batches of ~125g each</span> — sesame must roast in a thin single layer or it steams instead of roasts.</li>
              <li><strong>Air fryer: 160°C for 10–12 min per batch.</strong> Shake halfway. Seeds should be golden-brown, not black.</li>
              <li>Cool completely between batches.</li>
              <li>Grind to fine powder. Store in jar — goes into FREEZER.</li>
              <li>This is the S2 sesame component — keep separate from pumpkin until you combine for the S2 jar (next step).</li>
            </ol>
          </div>
        </div>

        <div className="step-block">
          <div className="step-hdr">
            <span>STEP 6 — Roast & Powder Pumpkin Seeds (12 min)</span>
            <span className="step-yield">Yields ~130g pumpkin powder</span>
          </div>
          <div className="step-body">
            <div className="callout" style={{marginBottom:10}}>
              <strong>Bioavailability impact:</strong> Phytate reduced 40–55% by soaking + roasting. Zn absorption 12%→20–22% (+75%). Mg absorption 20%→30–35% (+60%). Pumpkin is the main zinc contributor in S2 — without processing, its zinc content barely moves the needle. After processing it meaningfully closes the zinc gap that this diet otherwise struggles with.
            </div>
            <ol>
              <li>Drain soaked pumpkin seeds. Pat dry.</li>
              <li>Spread in single layer. <strong>Air fryer: 155°C for 10 min.</strong> Shake halfway.</li>
              <li>Cool completely. Grind to powder.</li>
              <li><strong>Combine sesame powder + pumpkin powder into S2 JAR.</strong> Label: "S2 Powder — sesame+pumpkin". Store in FREEZER.</li>
              <li>Daily scoop: 25g from this jar (= ~15g sesame + 10g pumpkin based on weight ratio).</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Jar Setup */}
      <div className="sec">
        <div className="sh"><div className="sn">04</div><div className="st">Final Jar Setup</div><div className="ss">3 jars in freezer · clear labels</div></div>
        <div className="jar-grid">
          <div className="jar-card">
            <div className="jar-name">JAR 1 — S1 Powder</div>
            <div className="jar-scoop">20g</div>
            <div className="jar-unit">Daily scoop → S1</div>
            <div className="jar-contents">
              <strong>Contents:</strong> Blanched almond powder (120g) + Sunflower powder (130g)<br/>
              <strong>Storage:</strong> Freezer –18°C<br/>
              <strong>Lasts:</strong> 2 weeks exactly<br/>
              <strong>Note:</strong> Scoop 20g daily = ~10g almond + 10g sunflower
            </div>
          </div>
          <div className="jar-card">
            <div className="jar-name">JAR 2 — S2 Powder</div>
            <div className="jar-scoop">25g</div>
            <div className="jar-unit">Daily scoop → S2</div>
            <div className="jar-contents">
              <strong>Contents:</strong> Sesame powder (210g) + Pumpkin powder (130g)<br/>
              <strong>Storage:</strong> Freezer –18°C<br/>
              <strong>Lasts:</strong> 2 weeks exactly<br/>
              <strong>Note:</strong> Scoop 25g daily ≈ 15g sesame + 10g pumpkin ratio
            </div>
          </div>
          <div className="jar-card">
            <div className="jar-name">JAR 3 — Walnut Powder</div>
            <div className="jar-scoop">7g</div>
            <div className="jar-unit">Daily scoop → S1 only</div>
            <div className="jar-contents">
              <strong>Contents:</strong> Low-temp dried walnut powder (90g)<br/>
              <strong>Storage:</strong> Freezer –18°C (ALA oxidizes at room temp)<br/>
              <strong>Lasts:</strong> ~13 days<br/>
              <strong>Note:</strong> NEVER mix into S1 jar. Always add fresh from freezer.
            </div>
          </div>
        </div>

        <div className="note">
          <div className="nl">Flaxseed — Separate Freezer Item (Not a Jar)</div>
          <p>Buy whole raw flaxseed and grind biweekly in dry mixer jar (freshest ALA), or buy pre-ground from any reputed brand. Store in freezer immediately after opening. Take out daily, scoop 10g into S1. Do NOT mix into S1 jar. ALA in ground flaxseed oxidizes rapidly at room temp — freezer is the only acceptable storage.</p>
        </div>
      </div>

      {/* Time Summary */}
      <div className="sec">
        <div className="sh"><div className="sn">05</div><div className="st">Prep Day Timeline Summary</div><div className="ss">Sunday evening plan</div></div>
        <div className="timeline">
          <div className="tl-row">
            <div className="tl-time">6:00 PM</div>
            <div className="tl-content">
              <div className="tl-item">Start all soaks (5 min active) → straight into fridge</div>
              <div className="tl-note">5 bowls straight into fridge. Soak 16h minimum (6 PM → 10 AM). 18–20h is fine.</div>
            </div>
          </div>
          <div className="tl-row">
            <div className="tl-time">Next morning</div>
            <div className="tl-content">
              <div className="tl-item">Drain all bowls → Begin processing</div>
              <div className="tl-note">Takes ~60 min total with parallel steps. Sesame may need extra time if you started soaking late.</div>
            </div>
          </div>
          <div className="tl-row">
            <div className="tl-time">+0 min</div>
            <div className="tl-content">
              <div className="tl-item">Start walnut drying (air fryer 80°C, 25 min hands-off)</div>
              <div className="tl-note">Lowest temp, longest time — start first so it runs in the background.</div>
            </div>
          </div>
          <div className="tl-row">
            <div className="tl-time">+5 min</div>
            <div className="tl-content">
              <div className="tl-item">Blanch almonds (stovetop, 2 min) → peel skins (4 min)</div>
              <div className="tl-note">While walnuts dry. Peeling is the only manual-intensive step.</div>
            </div>
          </div>
          <div className="tl-row">
            <div className="tl-time">+15 min</div>
            <div className="tl-content">
              <div className="tl-item">Air fryer: Almonds 80°C 20 min to dry → then 150°C 8 min to roast</div>
              <div className="tl-note">Run sunflower in second round while almonds roast.</div>
            </div>
          </div>
          <div className="tl-row">
            <div className="tl-time">+30 min</div>
            <div className="tl-content">
              <div className="tl-item">Air fryer: Sunflower 155°C 9 min → Sesame batch 1: 160°C 12 min</div>
              <div className="tl-note">Alternate batches. Each needs full cool-down before grinding.</div>
            </div>
          </div>
          <div className="tl-row">
            <div className="tl-time">+50 min</div>
            <div className="tl-content">
              <div className="tl-item">Air fryer: Pumpkin 155°C 10 min → Sesame batch 2: 160°C 12 min</div>
              <div className="tl-note">Final batches. Let everything cool fully.</div>
            </div>
          </div>
          <div className="tl-row">
            <div className="tl-time">+60–75 min</div>
            <div className="tl-content">
              <div className="tl-item">Grind all cooled batches → Combine into 3 jars → Freezer</div>
              <div className="tl-note">S1 jar: almond+sunflower. S2 jar: sesame+pumpkin. Walnut jar: separate. Label with date.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
