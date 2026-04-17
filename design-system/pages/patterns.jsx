/* Patterns: layout recipes + accessibility notes */

function PatternsPage() {
  return (
    <>
      <PageHeader
        eyebrow="05 · Core"
        title="Patterns"
        sub="Layout recipes and composition rules. How the primitives come together on real screens."
      />

      <Section num="1.1" title="Tile grid" desc="Home-screen pattern: 2-up tiles, 16px gap, each tile 18px radius. Eyebrow label → hero number → context line.">
        <Frame label="2-up">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, maxWidth: 560, margin: "0 auto" }}>
            <TileHero eyebrow="SPENT" eyebrowColor="#FF4500" value="$1,240" sub="This month" />
            <TileHero eyebrow="DEPOSITED" eyebrowColor="#00CC66" value="$3,420" sub="This month" />
          </div>
        </Frame>
      </Section>

      <Section num="1.2" title="Stacked list section" desc="Section header + 44px rows inside a single tile. The tile owns the border radius; rows own the hairline divider.">
        <Frame label="section">
          <div style={{ maxWidth: 440, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "0 4px 10px" }}>
              <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-0.01em" }}>Recent activity</div>
              <div className="mono" style={{ fontSize: 11, color: "#FF4500", fontWeight: 600, cursor: "pointer" }}>SEE ALL →</div>
            </div>
            <div style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: 14, overflow: "hidden" }}>
              <MiniRow ic={{bg:"#FF4500", t:"W"}} name="Whole Foods" sub="Yesterday" amt="−$47.20" />
              <MiniDiv />
              <MiniRow ic={{bg:"#00CC66", t:"P"}} name="Payroll" sub="Mon" amt="+$2,400" color="#34d399" />
              <MiniDiv />
              <MiniRow ic={{bg:"#7B2FFF", t:"C"}} name="Coinbase" sub="Swap" amt="−$120.00" color="#b794f6" />
            </div>
          </div>
        </Frame>
      </Section>

      <Section num="1.3" title="Detail screen" desc="Sheet that opens when a row is tapped. Eyebrow → large amount → meta rows → action buttons. Height is content-driven; min 40% of screen, max 90%.">
        <Frame label="detail">
          <DetailSheet />
        </Frame>
      </Section>

      <Section num="1.4" title="Confirm flow" desc="Destructive or high-stakes actions use a two-step confirm. First button turns into a red 'Confirm' state for ~2s, then commits. No modal.">
        <Frame label="confirm">
          <ConfirmDemo />
        </Frame>
      </Section>

      <Section num="2.1" title="Hit targets & reach" desc="Every tappable surface must be ≥44×44. Bottom bar actions should be in the bottom third of a mobile screen, not the top.">
        <div style={{ display: "grid", gap: 10 }}>
          <Callout kind="do" title="44px minimum">Rows may be visually 44px, but hit area can extend into the 12px of vertical padding — use <code>padding: 12px 14px</code> so the whole clickable area counts.</Callout>
          <Callout kind="dont" title="Don't nest independent taps inside a row">A row is one click surface. If you need a secondary action (e.g. "delete"), use swipe or a pressed state, never a second button.</Callout>
        </div>
      </Section>

      <Section num="2.2" title="Contrast & readability" desc="Muted text at 38% passes WCAG AA against pure black for ≥13px body text. Don't use muted for primary content, ever. For numbers at <11px, bump to 55%.">
        <div className="grid grid-3">
          <ContrastDemo label="AA pass" bg="#000" fg="rgba(255,255,255,0.38)" sample="Meta text 13px" />
          <ContrastDemo label="AA fail" bg="#000" fg="rgba(255,255,255,0.15)" sample="Don't use 10px body" />
          <ContrastDemo label="AAA" bg="#000" fg="#fff" sample="Primary text" />
        </div>
      </Section>

      <Section num="2.3" title="Tabular numbers" desc="Any number that sits in a column — balances, amounts, addresses, durations — uses <code>font-variant-numeric: tabular-nums</code>. Mono is preferred but not required when the font has tabular support.">
        <Code lang="css">{`.mono,
.tabular {
  font-variant-numeric: tabular-nums;
}

/* Inline */
style={{ fontVariantNumeric: "tabular-nums" }}`}</Code>
      </Section>

      <Section num="3.1" title="Screen scaffold" desc="Every screen is a vertical stack inside a 390×844 safe area. Top: sticky header (56px). Middle: scrolling content padded 16 horizontal, 14 between tiles. Bottom: tab bar (80px including home-indicator inset).">
        <Frame label="scaffold">
          <ScaffoldDiagram />
        </Frame>
      </Section>

      <Section num="4.0" title="What's missing (next version)" desc="Honest gaps that the four source prototypes leave open. Recommended additions before v1.1.">
        <ul style={{ margin: 0, paddingLeft: 20, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontSize: 13 }}>
          <li>A <strong>light theme</strong> variant for system-theme users who opt into light. Dark-only is the brand, but settings should allow override.</li>
          <li><strong>Iconography set</strong> — the prototypes draw icons inline with SVG. A documented 20px/24px stroke-width-2 set would unify weight.</li>
          <li><strong>Chart axis tokens</strong> — axis labels currently use ad-hoc opacity (0.15, 0.4). Promote to <code>--c-axis</code>, <code>--c-axis-recent</code>.</li>
          <li><strong>Form error state</strong> — inline errors on inputs are modeled in App.tsx but not v2. Adopt the App.tsx pattern: red 1px border + 11px mono red message below.</li>
          <li><strong>Confetti / reward moments</strong> — 3.tsx has a particle burst for completed goals. Worth promoting if engagement matters.</li>
        </ul>
      </Section>
    </>
  );
}

function TileHero({ eyebrow, eyebrowColor, value, sub }) {
  return (
    <div className="tile" style={{ padding: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 6 }}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: eyebrowColor }} />
        <span style={{ fontSize: 11, color: "var(--c-muted)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>{eyebrow}</span>
      </div>
      <div className="mono" style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em", color: eyebrowColor }}>{value}</div>
      <div style={{ fontSize: 11, color: "var(--c-muted)", marginTop: 4 }}>{sub}</div>
    </div>
  );
}
function MiniRow({ ic, name, sub, amt, color }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px" }}>
      <div style={{ width: 32, height: 32, borderRadius: "50%", background: ic.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700 }}>{ic.t}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 600 }}>{name}</div>
        <div style={{ fontSize: 11, color: "var(--c-muted)" }}>{sub}</div>
      </div>
      <div className="mono" style={{ fontSize: 14, fontWeight: 600, color: color || "#fff" }}>{amt}</div>
    </div>
  );
}
function MiniDiv() { return <div style={{ height: 1, background: "var(--c-hairline)", margin: "0 14px" }} />; }

function DetailSheet() {
  return (
    <div style={{ maxWidth: 340, margin: "0 auto", background: "#0a0a0a", border: "1px solid var(--c-border)", borderRadius: "22px 22px 14px 14px", overflow: "hidden", boxShadow: "0 12px 48px rgba(0,0,0,0.6)" }}>
      <div style={{ padding: "14px 16px 0", position: "relative" }}>
        <div style={{ width: 36, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.15)", position: "absolute", left: "50%", transform: "translateX(-50%)", top: 8 }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 6 }}>
          <span style={{ fontSize: 11, color: "var(--c-muted)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>transaction</span>
          <span style={{ color: "#FF4500", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Done</span>
        </div>
      </div>
      <div style={{ padding: "12px 16px 0", textAlign: "center" }}>
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#FF4500", margin: "6px auto 10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 700 }}>W</div>
        <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 2 }}>Whole Foods Market</div>
        <div className="mono" style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.025em" }}>−$47.20</div>
        <div style={{ fontSize: 11, color: "var(--c-muted)", marginTop: 4 }}>Yesterday · 4:12 PM</div>
      </div>
      <div style={{ padding: "16px", display: "grid", gap: 6 }}>
        {[["Category", "Groceries"], ["Card", "•••• 4429"], ["Status", "Posted"]].map(([l, v]) => (
          <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "8px 10px", background: "var(--c-surface)", borderRadius: 10, fontSize: 13 }}>
            <span style={{ color: "var(--c-muted)" }}>{l}</span>
            <span className={l === "Card" ? "mono" : ""}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConfirmDemo() {
  const [step, setStep] = useStateCmp(0);
  const labels = ["Delete card", "Confirm? Tap again", "Deleting…"];
  const colors = ["#ef4444", "#ef4444", "rgba(255,255,255,0.4)"];
  const onTap = () => {
    if (step === 2) return setStep(0);
    if (step === 0) { setStep(1); setTimeout(() => setStep(s => s === 1 ? 0 : s), 2500); }
    else if (step === 1) { setStep(2); setTimeout(() => setStep(0), 1500); }
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
      <button onClick={onTap} className="press-scale" style={{
        padding: "12px 22px", borderRadius: 99,
        background: step === 1 ? "#ef4444" : "transparent",
        border: `1px solid ${step === 1 ? "#ef4444" : "rgba(239,68,68,0.4)"}`,
        color: step === 1 ? "#fff" : colors[step],
        fontSize: 15, fontWeight: 700, letterSpacing: "-0.01em",
        cursor: "pointer", fontFamily: "inherit",
        animation: step === 1 ? "limitPulse 1.5s ease-in-out infinite" : "none",
      }}>{labels[step]}</button>
      <div style={{ fontSize: 11, color: "var(--c-muted)" }}>Tap {step === 2 ? "to reset" : "to advance"}</div>
    </div>
  );
}

function ContrastDemo({ label, bg, fg, sample }) {
  const pass = label === "AA pass" || label === "AAA";
  return (
    <div className="swatch">
      <div style={{ height: 72, background: bg, borderRadius: 10, border: "1px solid var(--c-border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ color: fg, fontSize: 13, fontWeight: 500 }}>{sample}</span>
      </div>
      <div className="swatch__meta">
        <div className="swatch__name" style={{ color: pass ? "#34d399" : "#ef4444" }}>{label}</div>
        <div className="swatch__val">{fg}</div>
      </div>
    </div>
  );
}

function ScaffoldDiagram() {
  return (
    <div style={{ maxWidth: 320, margin: "0 auto", border: "1px solid var(--c-border)", borderRadius: 24, overflow: "hidden", background: "#000" }}>
      <div style={{ height: 56, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px", borderBottom: "1px solid var(--c-hairline)", background: "rgba(255,255,255,0.02)" }}>
        <span className="mono" style={{ fontSize: 10, color: "var(--c-muted)", letterSpacing: "0.08em" }}>HEADER · 56</span>
        <span style={{ fontSize: 13, fontWeight: 700 }}>Home</span>
        <div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--c-surface)" }} />
      </div>
      <div style={{ padding: 14, display: "grid", gap: 10, minHeight: 240 }}>
        <div className="mono" style={{ fontSize: 10, color: "rgba(255,255,255,0.25)", letterSpacing: "0.08em" }}>CONTENT · 14 gutter, 10 gap</div>
        <div style={{ height: 90, borderRadius: 14, background: "var(--c-surface)", border: "1px solid var(--c-border)" }} />
        <div style={{ height: 120, borderRadius: 14, background: "var(--c-surface)", border: "1px solid var(--c-border)" }} />
      </div>
      <div style={{ height: 80, borderTop: "1px solid var(--c-hairline)", background: "rgba(255,255,255,0.02)", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
        {["◉","◎","◎","◎"].map((g, i) => (
          <span key={i} style={{ color: i === 0 ? "#FF4500" : "var(--c-muted)", fontSize: 18 }}>{g}</span>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { PatternsPage });
