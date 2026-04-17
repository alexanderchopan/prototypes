/* Foundations: color, type, spacing, radius, shadow, blur, icon sizes */

function FoundationsPage() {
  const C = window.MachinesTokens.C;
  return (
    <>
      <PageHeader
        eyebrow="01 · Core"
        title="Foundations"
        sub="The raw materials. Color, type, spacing, radius, shadow and blur — the layer everything else is composed from. All tokens match the production code 1:1."
      />

      {/* ——— COLOR ——— */}
      <Section num="1.1" title="Accent colors" tag="Signals" desc="High-saturation hues used sparingly. Each accent has a specific semantic job. Never mix two accents in the same component except to contrast in/out motion (green ↔ purple).">
        <div className="grid grid-4">
          <Swatch name="C.orange" value="#FF4500" usage="Primary brand, FAB, active nav, destructive FAB highlights." />
          <Swatch name="C.green"  value="#00CC66" usage="Deposits, success, positive deltas. Use #34d399 for text on dark." />
          <Swatch name="C.purple" value="#7B2FFF" usage="Withdrawals, outbound crypto, Agent actions." />
          <Swatch name="C.yellow" value="#FFCC00" usage="Warnings, 'due soon', note callouts." />
          <Swatch name="C.red"    value="#ef4444" usage="Destructive confirms, over-limit pulses, errors." />
          <Swatch name="C.blue"   value="#0066FF" usage="Neutral info, category tags (subs/travel)." />
          <Swatch name="C.pink"   value="#FF1493" usage="Rare — category color, reward accents." />
          <Swatch name="C.mint"   value="#6ee7b7" usage="Soft success text when green is too loud." />
        </div>
      </Section>

      <Section num="1.2" title="Neutrals" desc="Dark-only. The canvas is pure #000. Every surface is a translucent white layered on top, which keeps blur and overlap readable.">
        <div className="grid grid-4">
          <Swatch name="C.bg"      value="#000000"                 demoStyle={{ background: "#000", border: "1px solid rgba(255,255,255,0.07)" }} usage="Page background. Pure black. Not #0a0a0a." />
          <Swatch name="C.text"    value="#ffffff"                 demoStyle={{ background: "#fff" }} usage="Primary text. Almost never semi-transparent." />
          <Swatch name="C.surface" value="rgba(255,255,255,0.045)" usage="Default tile background. Pairs with 20px blur." />
          <Swatch name="C.border"  value="rgba(255,255,255,0.07)"  demoStyle={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.35)" }} usage="Tile, card, chip borders. Always 1px." />
          <Swatch name="C.muted"   value="rgba(255,255,255,0.38)"  demoStyle={{ background: "rgba(255,255,255,0.38)" }} usage="Secondary text, eyebrows, meta rows." />
          <Swatch name="C.dim"     value="rgba(255,255,255,0.15)"  demoStyle={{ background: "rgba(255,255,255,0.15)" }} usage="Disabled, inactive segmented states." />
          <Swatch name="C.hairline" value="rgba(255,255,255,0.05)" demoStyle={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.2)" }} usage="Row dividers inside tiles." />
          <Swatch name="C.surface-3" value="rgba(255,255,255,0.06)" usage="Hover, selected row, raised surface-on-surface." />
        </div>

        <div style={{ marginTop: 20 }}>
          <Code lang="jsx">{`// JSX access via window.MachinesTokens
const { C } = window.MachinesTokens;

// CSS variable access
background: var(--c-surface);
color:      var(--c-muted);`}</Code>
        </div>
      </Section>

      <Section num="1.3" title="Semantic money colors" desc="Money directions have fixed colors. Never vary them by screen.">
        <div className="grid grid-3">
          <div className="swatch">
            <div className="swatch__chip" style={{ background: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span className="mono" style={{ color: "#34d399", fontSize: 22, fontWeight: 700 }}>+$1,240.00</span>
            </div>
            <div className="swatch__meta">
              <div className="swatch__name">Inbound</div>
              <div className="swatch__val">#34d399 text · #00CC66 chip</div>
              <div className="swatch__usage">Deposits, refunds, rewards. Leading "+".</div>
            </div>
          </div>
          <div className="swatch">
            <div className="swatch__chip" style={{ background: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span className="mono" style={{ color: "#fff", fontSize: 22, fontWeight: 700 }}>−$47.20</span>
            </div>
            <div className="swatch__meta">
              <div className="swatch__name">Outbound</div>
              <div className="swatch__val">#ffffff (default) · #7B2FFF if crypto</div>
              <div className="swatch__usage">Spend stays white unless it's a crypto transfer. Leading "−".</div>
            </div>
          </div>
          <div className="swatch">
            <div className="swatch__chip" style={{ background: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span className="mono" style={{ color: "rgba(255,255,255,0.2)", fontSize: 22 }}>—</span>
            </div>
            <div className="swatch__meta">
              <div className="swatch__name">Pending / no amount</div>
              <div className="swatch__val">rgba(255,255,255,0.15)</div>
              <div className="swatch__usage">Em-dash placeholder. Same column width as real numbers.</div>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gap: 10, marginTop: 16 }}>
          <Callout kind="do" title="Do lead positive amounts with +">Always prefix deposits with +. It reinforces the green.</Callout>
          <Callout kind="dont" title="Don't colorize withdrawals red">Red is reserved for errors and destructive confirms, never for normal spend.</Callout>
        </div>
      </Section>

      {/* ——— TYPE ——— */}
      <Section num="2.1" title="Type stack" desc="Replica is the house sans (with a matching mono). Inter is the documented fallback — close metrics, available everywhere. Numbers are tabular by default.">
        <div className="grid grid-2">
          <div className="swatch">
            <div style={{ padding: "20px 14px", background: "#000", borderRadius: 10, border: "1px solid var(--c-border)" }}>
              <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em" }}>Replica Sans</div>
              <div style={{ fontSize: 13, color: "var(--c-muted)", marginTop: 6 }}>House sans · weights 400/500/600/700</div>
            </div>
            <div className="swatch__meta">
              <div className="swatch__name">--font-sans</div>
              <div className="swatch__val mono">'Replica', 'Inter', system-ui</div>
            </div>
          </div>
          <div className="swatch">
            <div style={{ padding: "20px 14px", background: "#000", borderRadius: 10, border: "1px solid var(--c-border)" }}>
              <div className="mono" style={{ fontSize: 26, fontWeight: 700 }}>$1,240.00</div>
              <div className="mono" style={{ fontSize: 13, color: "var(--c-muted)", marginTop: 6 }}>•••• 4429 · Replica Mono</div>
            </div>
            <div className="swatch__meta">
              <div className="swatch__name">--font-mono</div>
              <div className="swatch__val mono">'Replica Mono', 'JetBrains Mono'</div>
            </div>
          </div>
        </div>
      </Section>

      <Section num="2.2" title="Type scale" desc="Eight sizes. Letter-spacing tightens as size grows. Weight only ever jumps to 700 for numbers, titles, and strong labels.">
        <div style={{ border: "1px solid var(--c-border)", borderRadius: 14, overflow: "hidden" }}>
          {[
            { token: "--fs-36", size: 36, lh: 40, ls: "-0.025em", w: 700, role: "Balance hero — the number on the home screen" },
            { token: "--fs-28", size: 28, lh: 32, ls: "-0.02em",  w: 700, role: "Sheet title, confirmation number" },
            { token: "--fs-22", size: 22, lh: 26, ls: "-0.02em",  w: 700, role: "Section header inside a view" },
            { token: "--fs-15", size: 15, lh: 20, ls: "-0.01em",  w: 600, role: "Body default, list row title, amount" },
            { token: "--fs-13", size: 13, lh: 18, ls: "normal",    w: 500, role: "Paragraph, sub-title" },
            { token: "--fs-12", size: 12, lh: 16, ls: "normal",    w: 500, role: "Tertiary label, small rows" },
            { token: "--fs-11", size: 11, lh: 15, ls: "0.06em",    w: 600, role: "Eyebrow — UPPERCASE, letter-spaced, muted" },
            { token: "--fs-10", size: 10, lh: 14, ls: "0.08em",    w: 600, role: "Card digit group, footnote, mono caption" },
          ].map((r, i, arr) => (
            <div key={r.token} style={{
              display: "grid", gridTemplateColumns: "120px 1fr 220px",
              alignItems: "baseline", padding: "14px 18px",
              borderBottom: i < arr.length - 1 ? "1px solid var(--c-hairline)" : "none",
              background: "var(--c-surface-2)",
            }}>
              <span className="mono" style={{ color: "var(--c-muted)", fontSize: 11 }}>{r.token}</span>
              <div style={{
                fontSize: r.size, lineHeight: `${r.lh}px`, letterSpacing: r.ls, fontWeight: r.w,
                textTransform: r.token === "--fs-11" || r.token === "--fs-10" ? "uppercase" : "none",
                color: r.token === "--fs-11" || r.token === "--fs-10" ? "var(--c-muted)" : "var(--c-text)",
              }}>
                {r.token === "--fs-36" ? "$18,240.50" : r.token === "--fs-28" ? "Confirm send" : r.token === "--fs-22" ? "Recent activity" : r.token === "--fs-15" ? "Whole Foods Market" : r.token === "--fs-13" ? "Your paycheck hit early this week." : r.token === "--fs-12" ? "Yesterday · 4:12 PM" : r.token === "--fs-11" ? "spent this month" : "tap to reveal"}
              </div>
              <span style={{ color: "var(--c-muted)", fontSize: 11, textAlign: "right" }}>{r.role}</span>
            </div>
          ))}
        </div>

        <Callout kind="note" title="Line heights are snapped to integers">No fractional line-heights. Eyes detect subpixel text drift instantly in list rows.</Callout>
      </Section>

      <Section num="2.3" title="Eyebrow label" desc="The small uppercase label above a value. Always fs-11, weight 600, muted, letter-spaced. Often paired with a 6px colored dot.">
        <Frame label="eyebrow">
          <div style={{ display: "flex", gap: 36, alignItems: "flex-start" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 4 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF4500" }} />
                <span style={{ fontSize: 11, color: "var(--c-muted)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>spent</span>
              </div>
              <div style={{ fontSize: 22, fontWeight: 700, color: "#FF4500", letterSpacing: "-0.02em" }}>$1,240</div>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 4 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#34d399" }} />
                <span style={{ fontSize: 11, color: "var(--c-muted)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>deposited</span>
              </div>
              <div style={{ fontSize: 22, fontWeight: 700, color: "#34d399", letterSpacing: "-0.02em" }}>$3,420</div>
            </div>
          </div>
        </Frame>
        <Code lang="jsx">{`<div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 2 }}>
  <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.orange }} />
  <span style={{ fontSize: 11, color: C.muted, fontWeight: 600,
    letterSpacing: "0.06em", textTransform: "uppercase" }}>
    spent
  </span>
</div>`}</Code>
      </Section>

      {/* ——— SPACING ——— */}
      <Section num="3.1" title="Spacing" desc="4px base grid. These are the only gaps you should use.">
        <div className="grid grid-4">
          {[
            ["--s-1", 4, "Row gutter inside a pill"],
            ["--s-2", 8, "Icon-to-label gap"],
            ["--s-3", 12, "List row vertical padding"],
            ["--s-4", 14, "List row horizontal padding"],
            ["--s-5", 16, "Tile padding (default)"],
            ["--s-6", 20, "Section spacing inside a view"],
            ["--s-7", 24, "Page title to first section"],
            ["--s-page", 18, "Outer page padding (mobile)"],
          ].map(([tok, px, use]) => (
            <div key={tok} className="swatch">
              <div style={{ height: 72, display: "flex", alignItems: "center", justifyContent: "center", background: "#000", borderRadius: 10, border: "1px solid var(--c-border)" }}>
                <div style={{ width: px, height: px, background: "var(--c-orange)", borderRadius: 2 }} />
              </div>
              <div className="swatch__meta">
                <div className="swatch__name">{tok}</div>
                <div className="swatch__val">{px}px</div>
                <div className="swatch__usage">{use}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ——— RADIUS ——— */}
      <Section num="3.2" title="Radius" desc="Radii are quantized. Small atoms, smaller radii.">
        <div className="grid grid-4">
          {[
            ["--r-4",  4,   "Card digit tiles"],
            ["--r-6",  6,   "Badge, tiny count chip"],
            ["--r-8",  8,   "Small pill (segmented)"],
            ["--r-10", 10,  "Segmented background"],
            ["--r-12", 12,  "Inline card"],
            ["--r-14", 14,  "List row, chip"],
            ["--r-18", 18,  "Tile (default)"],
            ["--r-22", 22,  "Bottom sheet top"],
          ].map(([tok, r, use]) => (
            <div key={tok} className="swatch">
              <div style={{ height: 72, display: "flex", alignItems: "center", justifyContent: "center", background: "#000", borderRadius: 10, border: "1px solid var(--c-border)" }}>
                <div style={{ width: 54, height: 54, borderRadius: r, background: "var(--c-surface-3)", border: "1px solid var(--c-border)" }} />
              </div>
              <div className="swatch__meta">
                <div className="swatch__name">{tok}</div>
                <div className="swatch__val">{r}px</div>
                <div className="swatch__usage">{use}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ——— SHADOW & BLUR ——— */}
      <Section num="3.3" title="Shadow & gloss" desc="Every elevated surface has an inset 1px top gloss. This is the single most important tactile detail in the system.">
        <div className="grid grid-3">
          {[
            { tok: "--sh-tile",   title: "Tile",   demo: { background: "var(--c-surface)", border: "1px solid var(--c-border)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 4px 12px rgba(0,0,0,0.25)" } },
            { tok: "--sh-raised", title: "Raised", demo: { background: "var(--c-surface-3)", border: "1px solid var(--c-border)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.1), 0 8px 32px rgba(0,0,0,0.3)" } },
            { tok: "--sh-float",  title: "Float",  demo: { background: "var(--c-surface-3)", border: "1px solid var(--c-border)", boxShadow: "0 12px 48px rgba(0,0,0,0.6)" } },
            { tok: "--sh-fab",    title: "FAB",    demo: { background: "#00CC66", boxShadow: "0 4px 20px rgba(0,204,102,0.4), inset 0 1px 0 rgba(255,255,255,0.2)" } },
            { tok: "--sh-glow-orange", title: "Orange glow", demo: { background: "#FF4500", boxShadow: "0 6px 28px rgba(255,69,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)" } },
            { tok: "(gloss alone)", title: "Gloss line", demo: { background: "var(--c-surface)", border: "1px solid var(--c-border)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)" } },
          ].map((s) => (
            <div key={s.tok} className="swatch">
              <div style={{ height: 100, borderRadius: 14, ...s.demo }} />
              <div className="swatch__meta">
                <div className="swatch__name">{s.title}</div>
                <div className="swatch__val">{s.tok}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section num="3.4" title="Blur" desc="Blur is only on backdrops (tiles layered over scrolling content). We don't animate blur — it's expensive and rarely noticed.">
        <div className="grid grid-3">
          {[
            ["--blur-tile", "blur(20px)", "Tile over scrolling content"],
            ["--blur-sheet", "blur(6px)", "Sheet scrim"],
            ["--blur-nav", "blur(20px) saturate(160%)", "Sticky nav header"],
          ].map(([tok, val, use]) => (
            <div key={tok} className="swatch">
              <div style={{ height: 72, borderRadius: 10, position: "relative", overflow: "hidden",
                background: "conic-gradient(from 30deg, #FF4500, #7B2FFF, #0066FF, #00CC66, #FF4500)" }}>
                <div style={{ position: "absolute", inset: 12, borderRadius: 8, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(0,0,0,0.3)", backdropFilter: val, WebkitBackdropFilter: val }} />
              </div>
              <div className="swatch__meta">
                <div className="swatch__name">{tok}</div>
                <div className="swatch__val mono">{val}</div>
                <div className="swatch__usage">{use}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section num="3.5" title="Focus ring" desc="Keyboard focus uses a 2px offset ring in brand orange at 60%. Never remove it.">
        <Frame label="focus">
          <div style={{ display: "flex", gap: 20 }}>
            <button style={{
              padding: "10px 18px", borderRadius: 14, background: "var(--c-surface)",
              border: "1px solid var(--c-border)", color: "#fff", fontSize: 13, fontWeight: 600,
              cursor: "pointer", boxShadow: "0 0 0 2px rgba(255,69,0,0.6)",
            }}>Focused button</button>
            <input defaultValue="focused@input" style={{
              padding: "10px 14px", borderRadius: 14, background: "var(--c-surface-2)",
              border: "1px solid var(--c-border)", color: "#fff", fontSize: 13,
              fontFamily: "inherit", outline: "none", boxShadow: "0 0 0 2px rgba(255,69,0,0.6)",
            }} />
          </div>
        </Frame>
        <Code lang="css">{`/* Apply to :focus-visible */
box-shadow: var(--focus-ring);`}</Code>
      </Section>

      <Section num="4.0" title="Quick import" desc="Two ways to consume the tokens.">
        <div className="grid grid-2">
          <Code lang="css">{`@import "./styles/tokens.css";

.my-tile {
  background: var(--c-surface);
  border-radius: var(--r-18);
  box-shadow: var(--sh-tile);
}`}</Code>
          <Code lang="jsx">{`// Token JS mirror
const { C, radius, tile, ease } = window.MachinesTokens;

<div style={tile({ padding: 16 })}>
  <span style={{ color: C.muted }}>spent</span>
  <span style={{ color: C.orange }}>$1,240</span>
</div>`}</Code>
        </div>
      </Section>
    </>
  );
}

Object.assign(window, { FoundationsPage });
