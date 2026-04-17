/* Home / overview page */
function HomePage({ go }) {
  const cards = [
    { num: "01", key: "foundations", title: "Foundations", desc: "Color tokens, type scale, spacing, radius, shadow, blur, motion easings." },
    { num: "02", key: "components", title: "Components", desc: "Buttons, inputs, tiles, pills, toggles, period picker, toasts, sheets, skeletons." },
    { num: "03", key: "domain",     title: "Domain",     desc: "Card visual, transaction row, bill row, balance display, merchant icon, charts." },
    { num: "04", key: "motion",     title: "Motion",     desc: "Easings, durations, and the animation gallery from the production app." },
    { num: "05", key: "patterns",   title: "Patterns",   desc: "Layout recipes: tile grid, stacked list, empty state, detail sheet, confirm flow." },
  ];
  return (
    <>
      <PageHeader
        eyebrow="v1.0 · Dark only"
        title="Machines Design System"
        sub="The visual and interaction language used across the Machines money app. Built from the v2 prototype as source of truth, reconciled with v1, v3 and v4 explorations. Optimized for engineers implementing the UI — every token maps 1:1 to the production code."
      />

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 36 }}>
        <Badge label="Dark only" />
        <Badge label="Replica / Inter" />
        <Badge label="4px grid" />
        <Badge label="iOS motion" />
        <Badge label="Tabular numerics" />
      </div>

      <div className="home-grid">
        {cards.map(c => (
          <div key={c.key} className="home-card" onClick={() => go(c.key)}>
            <div className="home-card__num">{c.num}</div>
            <div className="home-card__title">{c.title}</div>
            <div className="home-card__desc">{c.desc}</div>
            <div className="home-card__arrow">↗</div>
          </div>
        ))}
      </div>

      <Section num="NORTH STAR" title="Design references" desc="Machines borrows density and rhythm from Linear, tactile physicality from Apple, momentum-green money affordances from Cash App, and keyboard-first polish from Raycast.">
        <div className="grid grid-4">
          {["Apple", "Cash App", "Linear", "Raycast"].map(n => (
            <div key={n} className="swatch">
              <div className="swatch__chip" style={{ background: "linear-gradient(135deg, #111, #1a1a1a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>{n}</div>
              <div className="swatch__meta">
                <div className="swatch__name">{n}</div>
                <div className="swatch__usage">
                  {n === "Apple" && "Tactile depth, spring motion, restraint."}
                  {n === "Cash App" && "Money-as-object, vivid single accent."}
                  {n === "Linear" && "Density, keyboard, tabular clarity."}
                  {n === "Raycast" && "Mono accents, command-first chrome."}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section num="PRINCIPLES" title="Five principles" desc="Rules of the road. Every design decision should be traceable to one of these.">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
          {[
            ["Money is the subject", "The largest thing on screen is always the number. Chrome recedes."],
            ["Color is a signal, not decoration", "Accents earn their place. Green = in, purple = out, orange = action."],
            ["Tactile, not flat", "Every surface has 1px of inset gloss. Press states are real. Springs are iOS."],
            ["Tabular everywhere", "Numbers never shift. Monospace for anything aligned in a column."],
            ["Dark is the canvas", "True black #000. Surfaces are translucent whites over it. No grays."],
          ].map(([t, d], i) => (
            <div key={t} className="home-card" style={{ cursor: "default", minHeight: 140 }}>
              <div className="home-card__num">0{i + 1}</div>
              <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.01em" }}>{t}</div>
              <div className="home-card__desc">{d}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

function Badge({ label }) {
  return (
    <div style={{
      padding: "5px 11px", borderRadius: 999,
      background: "rgba(255,255,255,0.045)",
      border: "1px solid rgba(255,255,255,0.07)",
      fontSize: 11, fontFamily: "var(--font-mono)",
      color: "rgba(255,255,255,0.55)",
      letterSpacing: "0.04em",
    }}>{label}</div>
  );
}

Object.assign(window, { HomePage, Badge });
