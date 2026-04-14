import { useState } from 'react'
import Routine from './tabs/Routine'
import BiweeklyPrep from './tabs/BiweeklyPrep'
import Numbers from './tabs/Numbers'
import BloodReport from './tabs/BloodReport'
import Summary from './tabs/Summary'
import Actions from './tabs/Actions'

const TABS = [
  { id: 'numbers', label: 'Nutrition',   short: 'Nutrition' },
  { id: 'routine', label: 'Routine',     short: 'Routine'   },
  { id: 'prep',    label: 'Premix',      short: 'Premix'    },
  { id: 'summary', label: 'Summary',     short: 'Summary'   },
  { id: 'actions', label: 'Actions',     short: 'Actions'   },
  { id: 'blood',   label: 'Report',      short: 'Report'    },
]

export default function App() {
  const [active, setActive] = useState('numbers')
  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <div className="header-brand">
            <h1 className="app-title">Dhruvdutt's Nutrition<span className="title-accent"> Plan</span></h1>
          </div>
          <div className="header-chips">
            <span className="hchip">72 kg</span>
            <span className="hchip">Bengaluru</span>
            <span className="hchip accent">Lean Muscle Gain</span>
          </div>
        </div>
      </header>

      <nav className="app-nav">
        <div className="nav-inner">
          {TABS.map(t => (
            <button
              key={t.id}
              className={`nav-btn${active === t.id ? ' active' : ''}`}
              onClick={() => setActive(t.id)}
            >
              <span className="nav-label-full">{t.label}</span>
              <span className="nav-label-short">{t.short}</span>
            </button>
          ))}
        </div>
      </nav>

      <main className="app-main">
        <div className="plan-summary">
          A precision nutrition plan targeting optimal vitamins, minerals, and anti-aging antioxidants — formulated from clinically researched Randomized Controlled Trials (RCTs). All nutrient values are bioavailability-corrected: what the body absorbs, not just what is consumed.
        </div>
        {active === 'routine'  && <Routine />}
        {active === 'prep'     && <BiweeklyPrep />}
        {active === 'numbers'  && <Numbers />}
        {active === 'blood'    && <BloodReport />}
        {active === 'summary'  && <Summary />}
        {active === 'actions'  && <Actions />}
      </main>
    </div>
  )
}
