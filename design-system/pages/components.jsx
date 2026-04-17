/* Components: buttons, inputs, tiles, pills, toggles, segmented, toast, sheet, skeleton */
const { useState: useStateCmp } = React;

function ComponentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="02 · Core"
        title="Components"
        sub="Primitive building blocks. Each has fixed sizes, fixed tokens, and a single job. Prefer composing these over rolling new ones."
      />

      <Section num="1.1" title="Buttons" desc="Three buttons total. Primary is pill-shaped and solid, secondary is pill outline, ghost is the list-row-style tap target.">
        <Frame label="buttons">
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <BtnPrimary>Send</BtnPrimary>
            <BtnPrimary tone="green">Deposit</BtnPrimary>
            <BtnSecondary>Cancel</BtnSecondary>
            <BtnGhost>More options</BtnGhost>
            <BtnPrimary disabled>Disabled</BtnPrimary>
          </div>
        </Frame>
        <PropTable rows={[
          ["tone",     "'orange' | 'green' | 'red'", "'orange'", "Accent. Green for deposits, red for destructive."],
          ["size",     "'md' | 'sm'",                "'md'",     "sm is 32px, md is 44px (hit target)."],
          ["disabled", "boolean",                    "false",    "Opacity 0.4, no press-scale."],
        ]}/>
        <Code lang="jsx">{`<button className="press-scale" style={{
  padding: "12px 22px", borderRadius: 99,
  background: C.orange, color: "#fff",
  fontSize: 15, fontWeight: 700, letterSpacing: "-0.01em",
  border: "none", cursor: "pointer",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2), 0 6px 28px rgba(255,69,0,0.4)",
}}>Send</button>`}</Code>
        <Callout kind="do" title="Press-scale every tappable surface">Buttons, rows, tiles, cards — apply <code>.press-scale</code> or <code>:active {'{'} transform: scale(0.97) {'}'}</code>. Non-negotiable.</Callout>
      </Section>

      <Section num="1.2" title="FAB" desc="One floating action per screen, maximum. Green for compose, orange for money-action.">
        <Frame label="fab">
          <div style={{ display: "flex", gap: 20 }}>
            <Fab tone="green" glyph="＋" />
            <Fab tone="orange" glyph="↗" />
          </div>
        </Frame>
      </Section>

      <Section num="2.1" title="Input" desc="Full-width, tile-styled, 44px min. Placeholder is muted; focused state uses focus ring.">
        <Frame label="inputs">
          <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
            <Input placeholder="Search merchants…" />
            <Input prefix="$" placeholder="0.00" mono />
            <Input placeholder="Disabled" disabled />
          </div>
        </Frame>
        <Code lang="jsx">{`<input style={{
  width: "100%", height: 44, padding: "0 14px",
  borderRadius: 14, background: C.surface2,
  border: "1px solid " + C.border,
  color: "#fff", fontSize: 15, fontFamily: "inherit",
  outline: "none",
}} />`}</Code>
      </Section>

      <Section num="2.2" title="Amount entry" desc="A hero input: huge mono number, decimal visible only if typed, currency glyph muted at left.">
        <Frame label="amount">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 6, padding: "20px 0" }}>
            <span style={{ fontSize: 32, color: "rgba(255,255,255,0.25)", fontWeight: 600 }}>$</span>
            <span className="mono" style={{ fontSize: 72, fontWeight: 700, letterSpacing: "-0.03em" }}>240</span>
            <span className="mono" style={{ fontSize: 32, color: "rgba(255,255,255,0.25)", fontWeight: 700 }}>.00</span>
          </div>
        </Frame>
      </Section>

      <Section num="3.1" title="Tile" desc="The default container. 18px radius, translucent white, 20px blur, inset gloss. Everything in the app lives inside a tile.">
        <Frame label="tile">
          <div className="tile tile--spec" style={{ padding: 20, maxWidth: 340 }}>
            <div style={{ fontSize: 11, color: "var(--c-muted)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>balance</div>
            <div style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.025em" }}>$18,240.50</div>
            <div style={{ fontSize: 12, color: "var(--c-muted)", marginTop: 6 }}>Available to spend</div>
          </div>
        </Frame>
        <Code lang="jsx">{`<div className="tile" style={{ padding: 20 }}>
  {/* content */}
</div>

/* or via JS helper */
<div style={MachinesTokens.tile({ padding: 20 })} />`}</Code>
      </Section>

      <Section num="3.2" title="Pill" desc="Every chip, tag, and small container is a pill. 11px mono label, accent-tinted background, accent-tinted border.">
        <Frame label="pills">
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <Pill tone="orange">ACTIVE</Pill>
            <Pill tone="green">+$240</Pill>
            <Pill tone="purple">CRYPTO</Pill>
            <Pill tone="yellow">DUE SOON</Pill>
            <Pill tone="red">OVER LIMIT</Pill>
            <Pill>NEUTRAL</Pill>
          </div>
        </Frame>
        <Code lang="jsx">{`const tint = (hex) => ({
  background: \`\${hex}15\`,
  border: \`1px solid \${hex}30\`,
  color: hex,
});
<span className="mono" style={{
  padding: "3px 8px", borderRadius: 99,
  fontSize: 10, fontWeight: 700, letterSpacing: "0.08em",
  ...tint(C.orange),
}}>ACTIVE</span>`}</Code>
      </Section>

      <Section num="3.3" title="Segmented / period picker" desc="Used for toggling a time window or view. Inactive labels dim to 25%.">
        <Frame label="segmented">
          <SegmentedDemo />
        </Frame>
        <Code lang="jsx">{`<div style={{ display: "flex", gap: 2, padding: 3, borderRadius: 10,
  background: "rgba(255,255,255,0.03)" }}>
  {periods.map(p => (
    <div key={p.k} onClick={() => setP(p.k)} style={{
      padding: "5px 12px", borderRadius: 8,
      fontSize: 11, fontWeight: 700, letterSpacing: "0.04em",
      color: p.k === cur ? "#fff" : "rgba(255,255,255,0.25)",
      background: p.k === cur ? "rgba(255,255,255,0.08)" : "transparent",
    }}>{p.label}</div>
  ))}
</div>`}</Code>
      </Section>

      <Section num="3.4" title="Toggle" desc="iOS-style 50×28 switch. Green when on, neutral when off. No middle state.">
        <Frame label="toggles">
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <ToggleDemo initial={true} />
            <ToggleDemo initial={false} />
            <ToggleDemo initial={true} disabled />
          </div>
        </Frame>
      </Section>

      <Section num="3.5" title="List row" desc="The list row is the workhorse. 44px-ish height, round avatar at 36px, ellipsized title, right-aligned mono amount, 11px muted sub under the title.">
        <Frame label="list row">
          <div style={{ display: "grid", gap: 0, background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: 14, overflow: "hidden" }}>
            <ListRow avatar={{bg: "#FF4500", label: "W"}} title="Whole Foods Market" sub="Yesterday · 4:12 PM" amount={-47.20} />
            <RowDiv />
            <ListRow avatar={{bg: "#00CC66", label: "P"}} title="Payroll deposit" sub="Mon · Recurring" amount={+2400} />
            <RowDiv />
            <ListRow avatar={{bg: "#7B2FFF", label: "C"}} title="Coinbase → ETH" sub="Swap" amount={-120} mono />
          </div>
        </Frame>
        <Callout kind="do" title="Amounts are mono, tabular, right-aligned, minWidth 72px">Numbers never shift when you scroll. Mono + tabular-nums + fixed width is the recipe.</Callout>
      </Section>

      <Section num="4.1" title="Toast" desc="Appears top-center, auto-dismisses after 2.5s. Blurred surface, icon if status, 11px uppercase-ish label. Stack vertically; max 3 visible.">
        <Frame label="toast">
          <div style={{ display: "grid", gap: 10, justifyItems: "center" }}>
            <Toast type="success">Sent $240.00 to Nora</Toast>
            <Toast type="error">Card declined — try another</Toast>
            <Toast>Copied to clipboard</Toast>
          </div>
        </Frame>
      </Section>

      <Section num="4.2" title="Bottom sheet" desc="The detail container. 22px top radius, drag handle centered, close affordance to the right in brand orange.">
        <Frame label="sheet">
          <SheetDemo />
        </Frame>
      </Section>

      <Section num="4.3" title="Skeleton" desc="Shimmering row used while loading. Always matches the target row's rhythm — same height, same avatar circle, same amount block.">
        <Frame label="skeleton">
          <div style={{ display: "grid", gap: 10 }}>
            <SkeletonRow />
            <SkeletonRow />
            <SkeletonRow />
          </div>
        </Frame>
      </Section>

      <Section num="4.4" title="Empty state" desc="Use when a list has no items. Single-line headline, sub-line muted, a single primary CTA. No illustrations.">
        <Frame label="empty">
          <div style={{ textAlign: "center", padding: "40px 20px" }}>
            <div style={{ width: 56, height: 56, borderRadius: 16, background: "var(--c-surface)", border: "1px solid var(--c-border)", margin: "0 auto 14px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>✦</div>
            <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 4 }}>No transactions yet</div>
            <div style={{ fontSize: 13, color: "var(--c-muted)", marginBottom: 20 }}>When you send or receive money, it'll appear here.</div>
            <BtnPrimary>Send money</BtnPrimary>
          </div>
        </Frame>
      </Section>
    </>
  );
}

/* —— Button primitives —— */
function BtnPrimary({ children, tone = "orange", disabled }) {
  const colorMap = { orange: "#FF4500", green: "#00CC66", red: "#ef4444" };
  const glow = { orange: "0 6px 28px rgba(255,69,0,0.4)", green: "0 6px 28px rgba(0,204,102,0.4)", red: "0 6px 28px rgba(239,68,68,0.4)" };
  return (
    <button className="press-scale" disabled={disabled} style={{
      padding: "12px 22px", borderRadius: 99, background: colorMap[tone], color: "#fff",
      fontSize: 15, fontWeight: 700, letterSpacing: "-0.01em", border: "none", cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.4 : 1, fontFamily: "inherit",
      boxShadow: `inset 0 1px 0 rgba(255,255,255,0.2), ${glow[tone]}`,
    }}>{children}</button>
  );
}
function BtnSecondary({ children }) {
  return (
    <button className="press-scale" style={{
      padding: "11px 22px", borderRadius: 99, background: "transparent", color: "#fff",
      fontSize: 15, fontWeight: 600, border: "1px solid var(--c-border)", cursor: "pointer", fontFamily: "inherit",
    }}>{children}</button>
  );
}
function BtnGhost({ children }) {
  return (
    <button className="press-scale" style={{
      padding: "10px 14px", borderRadius: 14, background: "var(--c-surface)", color: "#fff",
      fontSize: 13, fontWeight: 600, border: "1px solid var(--c-border)", cursor: "pointer", fontFamily: "inherit",
    }}>{children}</button>
  );
}
function Fab({ tone = "green", glyph }) {
  const clr = tone === "green" ? "#00CC66" : "#FF4500";
  const glow = tone === "green" ? "0 4px 20px rgba(0,204,102,0.4)" : "0 6px 28px rgba(255,69,0,0.4)";
  return (
    <div style={{
      width: 56, height: 56, borderRadius: "50%", background: clr, color: "#fff",
      fontSize: 26, fontWeight: 400, display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: `${glow}, inset 0 1px 0 rgba(255,255,255,0.2)`,
      animation: "fabBreathe 3s ease-in-out infinite",
    }}>{glyph}</div>
  );
}

function Input({ placeholder, prefix, mono, disabled }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 8,
      height: 44, padding: "0 14px", borderRadius: 14,
      background: "var(--c-surface-2)", border: "1px solid var(--c-border)",
      opacity: disabled ? 0.4 : 1,
    }}>
      {prefix && <span style={{ color: "var(--c-muted)", fontSize: 15 }} className={mono ? "mono" : ""}>{prefix}</span>}
      <input disabled={disabled} placeholder={placeholder} className={mono ? "mono" : ""} style={{
        flex: 1, background: "none", border: "none", outline: "none",
        color: "#fff", fontSize: 15, fontFamily: "inherit",
      }} />
    </div>
  );
}

function Pill({ children, tone }) {
  const hex = { orange: "#FF4500", green: "#00CC66", purple: "#7B2FFF", yellow: "#FFCC00", red: "#ef4444" }[tone];
  const style = tone ? { background: hex + "20", border: `1px solid ${hex}30`, color: hex }
    : { background: "rgba(255,255,255,0.06)", border: "1px solid var(--c-border)", color: "rgba(255,255,255,0.6)" };
  return (
    <span className="mono" style={{
      padding: "3px 8px", borderRadius: 99,
      fontSize: 10, fontWeight: 700, letterSpacing: "0.08em",
      ...style,
    }}>{children}</span>
  );
}

function SegmentedDemo() {
  const [cur, setCur] = useStateCmp("W");
  const opts = [["D","DAY"],["W","WEEK"],["M","MONTH"],["Y","YEAR"],["A","ALL"]];
  return (
    <div style={{ display: "inline-flex", gap: 2, padding: 3, borderRadius: 10, background: "rgba(255,255,255,0.03)", border: "1px solid var(--c-border)" }}>
      {opts.map(([k, l]) => (
        <div key={k} onClick={() => setCur(k)} className="press-scale" style={{
          padding: "5px 12px", borderRadius: 8, cursor: "pointer",
          fontSize: 11, fontWeight: 700, letterSpacing: "0.04em",
          color: cur === k ? "#fff" : "rgba(255,255,255,0.25)",
          background: cur === k ? "rgba(255,255,255,0.08)" : "transparent",
          boxShadow: cur === k ? "inset 0 1px 0 rgba(255,255,255,0.1)" : "none",
          transition: "all 0.2s",
        }}>{l}</div>
      ))}
    </div>
  );
}

function ToggleDemo({ initial, disabled }) {
  const [on, setOn] = useStateCmp(!!initial);
  return (
    <div onClick={() => !disabled && setOn(!on)} style={{
      width: 50, height: 28, borderRadius: 99, padding: 2, cursor: disabled ? "default" : "pointer",
      background: on ? "#00CC66" : "rgba(255,255,255,0.12)",
      opacity: disabled ? 0.4 : 1,
      transition: "background 0.2s",
      boxShadow: on ? "inset 0 1px 0 rgba(255,255,255,0.2)" : "inset 0 1px 2px rgba(0,0,0,0.3)",
    }}>
      <div style={{
        width: 24, height: 24, borderRadius: "50%", background: "#fff",
        transform: on ? "translateX(22px)" : "translateX(0)",
        transition: "transform 0.25s cubic-bezier(0.32,0.72,0,1)",
        boxShadow: "0 2px 4px rgba(0,0,0,0.25)",
      }} />
    </div>
  );
}

function ListRow({ avatar, title, sub, amount, mono }) {
  const clr = amount > 0 ? "#34d399" : mono ? "#7B2FFF" : "#fff";
  return (
    <div className="press-scale" style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", cursor: "pointer" }}>
      <div style={{ width: 36, height: 36, borderRadius: "50%", background: avatar.bg,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 15, fontWeight: 700, color: "#fff", flexShrink: 0 }}>{avatar.label}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 15, fontWeight: 600 }}>{title}</div>
        <div style={{ fontSize: 11, color: "var(--c-muted)", marginTop: 1 }}>{sub}</div>
      </div>
      <div className="mono" style={{ fontSize: 15, fontWeight: 600, color: clr, minWidth: 72, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>
        {amount > 0 ? "+" : "−"}${Math.abs(amount).toFixed(2)}
      </div>
    </div>
  );
}
function RowDiv() { return <div style={{ height: 1, background: "var(--c-hairline)", margin: "0 14px" }} />; }

function Toast({ type, children }) {
  const clr = type === "success" ? "#00CC66" : type === "error" ? "#ef4444" : "#fff";
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      padding: "10px 16px", borderRadius: 99,
      background: "rgba(20,20,20,0.85)", border: "1px solid var(--c-border)",
      backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
      fontSize: 11, fontWeight: 600, color: clr,
      letterSpacing: "0.02em",
      boxShadow: "0 12px 48px rgba(0,0,0,0.6)",
    }}>
      {type && <span style={{ width: 6, height: 6, borderRadius: "50%", background: clr }} />}
      {children}
    </div>
  );
}

function SheetDemo() {
  return (
    <div style={{ maxWidth: 360, margin: "0 auto", background: "#0a0a0a",
      border: "1px solid var(--c-border)", borderRadius: "22px 22px 14px 14px",
      boxShadow: "0 12px 48px rgba(0,0,0,0.6)", overflow: "hidden",
    }}>
      <div style={{ position: "relative", padding: "12px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ width: 36, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.15)", position: "absolute", left: "50%", transform: "translateX(-50%)", top: 8 }} />
        <span style={{ fontSize: 11, color: "var(--c-muted)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>details</span>
        <span style={{ color: "#FF4500", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Done</span>
      </div>
      <div style={{ padding: "6px 16px 20px" }}>
        <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 4 }}>Payroll deposit</div>
        <div style={{ fontSize: 13, color: "var(--c-muted)", marginBottom: 14 }}>Received Mon · 9:02 AM</div>
        <div className="mono" style={{ fontSize: 36, fontWeight: 700, color: "#34d399", letterSpacing: "-0.025em" }}>+$2,400.00</div>
      </div>
    </div>
  );
}

function SkeletonRow() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", background: "var(--c-surface)", borderRadius: 14, border: "1px solid var(--c-border)" }}>
      <div style={sk(36, 36, "50%")} />
      <div style={{ flex: 1 }}>
        <div style={sk("60%", 12, 4)} />
        <div style={{ ...sk("30%", 10, 3), marginTop: 6 }} />
      </div>
      <div style={sk(72, 14, 4)} />
    </div>
  );
}
function sk(w, h, r) {
  return {
    width: w, height: h, borderRadius: r,
    background: "linear-gradient(90deg, rgba(255,255,255,0.04), rgba(255,255,255,0.08), rgba(255,255,255,0.04))",
    backgroundSize: "200% 100%",
    animation: "skeletonPulse 1.6s ease-in-out infinite",
  };
}

Object.assign(window, { ComponentsPage });
