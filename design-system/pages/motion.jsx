/* Motion: easings, durations, keyframe gallery */

function MotionPage() {
  return (
    <>
      <PageHeader
        eyebrow="04 · Core"
        title="Motion"
        sub="How Machines moves. Four easings, three durations, and a small gallery of named animations lifted verbatim from the production app."
      />

      <Section num="1.1" title="Easings" desc="Four curves. Don't invent new ones. standard handles 90% of cases; spring for entrances; out-soft for value reveals; in-out for flips.">
        <div className="grid grid-2">
          {[
            ["--ease-standard", "cubic-bezier(0.32, 0.72, 0, 1)", "iOS sheet slide. Default choice."],
            ["--ease-spring",   "cubic-bezier(0.34, 1.56, 0.64, 1)", "Overshoot — toast in, FAB appear, confetti burst."],
            ["--ease-out-soft", "cubic-bezier(0.22, 1, 0.36, 1)", "Chart reveal, ring fill, balance count-up."],
            ["--ease-in-out",   "cubic-bezier(0.4, 0, 0.2, 1)", "Symmetric — card flip, screen crossfade."],
          ].map(([tok, val, use]) => (
            <div key={tok} className="swatch">
              <EaseCurve bezier={val} />
              <div className="swatch__meta">
                <div className="swatch__name">{tok}</div>
                <div className="swatch__val">{val}</div>
                <div className="swatch__usage">{use}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section num="1.2" title="Durations" desc="Three tiers. Keep most motion under 300ms — users mistake longer for lag.">
        <div className="grid grid-3">
          {[
            ["--d-fast", "0.15s", "Press-scale, hover, toggle flip."],
            ["--d-base", "0.3s",  "Sheet, toast, row enter/exit."],
            ["--d-slow", "0.6s",  "Balance count-up, ring fill, chart draw."],
          ].map(([tok, val, use]) => (
            <div key={tok} className="swatch">
              <div style={{ height: 72, display: "flex", alignItems: "center", justifyContent: "center", background: "#000", borderRadius: 10, border: "1px solid var(--c-border)" }}>
                <span className="mono" style={{ fontSize: 22, fontWeight: 700 }}>{val}</span>
              </div>
              <div className="swatch__meta">
                <div className="swatch__name">{tok}</div>
                <div className="swatch__usage">{use}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section num="2.1" title="Animation gallery" desc="Named keyframes from the prototype. Hover the tile to replay.">
        <div className="grid grid-3">
          {[
            { n: "fadeSlide", dur: "0.2s", usage: "Row reveal after data change.", render: (k) => <div key={k} style={{ animation: `fadeSlide 0.5s ease forwards`, padding: 16, borderRadius: 12, background: "var(--c-surface)", border: "1px solid var(--c-border)", fontSize: 13 }}>A new row.</div> },
            { n: "slideUp", dur: "0.3s", usage: "Sheet entry, empty-state CTA.", render: (k) => <div key={k} style={{ animation: `slideUp 0.5s var(--ease-standard) forwards`, padding: 16, borderRadius: 12, background: "var(--c-surface-3)", border: "1px solid var(--c-border)", fontSize: 13, textAlign: "center" }}>Sheet</div> },
            { n: "toastIn", dur: "0.3s", usage: "Toast entrance. Uses spring curve.", render: (k) => <Toast key={k} type="success">Sent $240</Toast> },
            { n: "balancePop", dur: "0.4s", usage: "Balance bumps when a new tx hits.", render: (k) => <div key={k} className="mono" style={{ animation: `balancePop 0.6s ease forwards`, fontSize: 28, fontWeight: 700 }}>$18,240</div> },
            { n: "fabBreathe", dur: "3s loop", usage: "Idle FAB heartbeat. Infinite.", render: (k) => <div key={k} style={{ width: 44, height: 44, borderRadius: "50%", background: "#00CC66", margin: "0 auto", animation: `fabBreathe 3s ease-in-out infinite`, boxShadow: "0 4px 20px rgba(0,204,102,0.4)" }} /> },
            { n: "skeletonPulse", dur: "1.6s loop", usage: "Loading shimmer.", render: (k) => <div key={k} style={{ height: 14, borderRadius: 4, background: "linear-gradient(90deg, rgba(255,255,255,0.04), rgba(255,255,255,0.12), rgba(255,255,255,0.04))", backgroundSize: "200% 100%", animation: "skeletonPulse 1.6s ease-in-out infinite" }} /> },
            { n: "limitPulse", dur: "2s loop", usage: "Over-limit warning halo.", render: (k) => <div key={k} style={{ width: 44, height: 44, borderRadius: 14, background: "rgba(239,68,68,0.2)", margin: "0 auto", animation: `limitPulse 2s ease-in-out infinite` }} /> },
            { n: "digitRoll", dur: "0.4s", usage: "Single-digit odometer roll.", render: (k) => <div key={k} className="mono" style={{ fontSize: 28, fontWeight: 700, animation: `digitRoll 0.5s ease forwards` }}>7</div> },
            { n: "cardEntry", dur: "0.35s", usage: "Card added to list.", render: (k) => <div key={k} style={{ width: "100%", height: 44, borderRadius: 10, background: "linear-gradient(135deg, #1a1a1a, #0a0a0a)", animation: `cardEntry 0.5s var(--ease-spring) forwards`, border: "1px solid var(--c-border)" }} /> },
          ].map((a) => <AnimationCard key={a.n} {...a} />)}
        </div>
      </Section>

      <Section num="2.2" title="Rules of thumb" desc="If in doubt, fewer animations are better. Every motion has a job.">
        <div style={{ display: "grid", gap: 10 }}>
          <Callout kind="do" title="Animate value changes, not layout">Count-up a balance, shimmer a row, flip a card. Don't slide menus just to be fancy.</Callout>
          <Callout kind="do" title="Use spring for arrivals">Toasts, FABs, confirmation chips — anything that "lands" deserves a little overshoot.</Callout>
          <Callout kind="dont" title="Don't animate color">Color changes should be instant. Easing them feels broken.</Callout>
          <Callout kind="dont" title="Don't stack animations on a row">Pick one: fadeSlide OR digitRoll, not both. A row with two competing motions feels unstable.</Callout>
          <Callout kind="note" title="Respect prefers-reduced-motion">Swap all named animations for a 1-frame fade when the user opts out.</Callout>
        </div>
      </Section>
    </>
  );
}

function EaseCurve({ bezier }) {
  // Parse cubic-bezier(x1,y1,x2,y2)
  const [a, b, c, d] = bezier.match(/-?\d*\.?\d+/g).map(Number);
  const w = 200, h = 80, pad = 18;
  // Y axis: 0 → bottom, 1 → top, values can overshoot (spring > 1, back < 0).
  const yFor = (v) => pad + (1 - v) * h;
  const xFor = (v) => v * w;
  return (
    <div style={{ height: 116, padding: 10, background: "#000", borderRadius: 10, border: "1px solid var(--c-border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width={w} height={h + pad * 2}>
        {/* baseline + top line */}
        <line x1="0" y1={yFor(0)} x2={w} y2={yFor(0)} stroke="rgba(255,255,255,0.08)" />
        <line x1="0" y1={yFor(1)} x2={w} y2={yFor(1)} stroke="rgba(255,255,255,0.08)" />
        <line x1="0" y1={yFor(0)} x2={w} y2={yFor(1)} stroke="rgba(255,255,255,0.06)" strokeDasharray="2 3" />
        <path
          d={`M ${xFor(0)} ${yFor(0)} C ${xFor(a)} ${yFor(b)}, ${xFor(c)} ${yFor(d)}, ${xFor(1)} ${yFor(1)}`}
          stroke="#FF4500" strokeWidth="2" fill="none"
        />
      </svg>
    </div>
  );
}

function AnimationCard({ n, dur, usage, render }) {
  const [key, setKey] = useStateCmp(0);
  return (
    <div className="swatch" onMouseEnter={() => setKey(k => k + 1)} style={{ cursor: "pointer" }}>
      <div style={{ height: 88, display: "flex", alignItems: "center", justifyContent: "center", background: "#000", borderRadius: 10, border: "1px solid var(--c-border)", padding: 12, overflow: "hidden" }}>
        {render(key)}
      </div>
      <div className="swatch__meta">
        <div className="swatch__name mono">@keyframes {n}</div>
        <div className="swatch__val">{dur}</div>
        <div className="swatch__usage">{usage}</div>
      </div>
    </div>
  );
}

Object.assign(window, { MotionPage });
