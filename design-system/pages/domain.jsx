/* Domain components: card visual, tx row, bill row, balance hero, merchant icon, charts */

function DomainPage() {
  return (
    <>
      <PageHeader
        eyebrow="03 · Core"
        title="Domain"
        sub="Money-specific composite components. Built from primitives, but so recognizable they're their own thing."
      />

      <Section num="1.1" title="Balance hero" desc="The largest number in the app. 36–44px, weight 700, tabular. Currency glyph is muted, decimals are muted-when-0.">
        <Frame label="balance">
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4, marginBottom: 4 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF4500" }} />
              <span style={{ fontSize: 11, color: "var(--c-muted)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>available</span>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 2 }}>
              <span style={{ fontSize: 22, color: "rgba(255,255,255,0.25)", fontWeight: 600 }}>$</span>
              <span className="mono" style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.025em" }}>18,240</span>
              <span className="mono" style={{ fontSize: 22, fontWeight: 700, color: "rgba(255,255,255,0.25)" }}>.50</span>
            </div>
            <div style={{ fontSize: 12, color: "var(--c-muted)", marginTop: 4 }}>Across 3 cards</div>
          </div>
        </Frame>
      </Section>

      <Section num="1.2" title="Card visual" desc="The physical-card artifact. 340×210 aspect, 14px radius, brand-gradient face, mono digit groups at 20px tracking. The digit block uses --r-4.">
        <Frame label="card">
          <CardVisual />
        </Frame>
      </Section>

      <Section num="2.1" title="Transaction row" desc="The single most-used row in the app. 36px avatar, ellipsized merchant name, optional time fragment, muted sub, right-aligned mono amount.">
        <Frame label="tx">
          <div style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: 14, overflow: "hidden" }}>
            <TxRow merchant={{bg:"#FF4500", letter:"W"}} name="Whole Foods Market" time="4:12 PM" sub="Groceries · ••4429" amount={-47.20} />
            <HairDiv />
            <TxRow merchant={{bg:"#00CC66", letter:"P"}} name="Payroll" time="9:02 AM" sub="Direct deposit · Recurring" amount={+2400.00} />
            <HairDiv />
            <TxRow merchant={{bg:"#7B2FFF", letter:"C"}} name="Coinbase" time="" sub="ETH → USD swap" amount={-120.00} crypto />
            <HairDiv />
            <TxRow merchant={{bg:"#0066FF", letter:"U"}} name="Uber" time="11:47 PM" sub="Travel" amount={null} />
          </div>
        </Frame>
        <PropTable rows={[
          ["name",    "string",            "—",        "Merchant name. Truncated with ellipsis."],
          ["time",    "string?",           "undefined","4:12 PM — shown inline after name in 20% white."],
          ["sub",     "string",            "—",        "Category or secondary info. Muted."],
          ["amount",  "number | null",     "—",        "null shows em-dash. >0 is green & +prefix; <0 is white (or purple for crypto)."],
          ["crypto",  "boolean",           "false",    "Tints the negative amount purple."],
        ]}/>
      </Section>

      <Section num="2.2" title="Bill row" desc="Like a tx row, but with urgency. Due date at right in an urgency-tinted color — orange (soon), yellow (this week), muted (later).">
        <Frame label="bills">
          <div style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: 14, overflow: "hidden" }}>
            <BillRow name="Netflix" duration="Monthly" dueDay={18} amount={15.49} dueIn={1} />
            <HairDiv />
            <BillRow name="Spotify" duration="Monthly" dueDay={22} amount={10.99} dueIn={5} />
            <HairDiv />
            <BillRow name="Con Edison" duration="Monthly" dueDay={28} amount={87.24} dueIn={11} />
          </div>
        </Frame>
      </Section>

      <Section num="3.1" title="Merchant avatar" desc="36×36 circle. If a known merchant, use the logo on its brand color. Otherwise, colored circle with the first letter.">
        <Frame label="avatars">
          <div style={{ display: "flex", gap: 10 }}>
            {[["W","#FF4500"],["N","#E50914"],["S","#00CC66"],["U","#0066FF"],["C","#7B2FFF"],["A","#FFCC00"],["V","#FF1493"]].map(([l, bg]) => (
              <div key={l} style={{ width: 44, height: 44, borderRadius: "50%", background: bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, color: "#fff" }}>{l}</div>
            ))}
          </div>
        </Frame>
        <Callout kind="note" title="Pick the bg from the merchant's brand">Prefer the real brand color. Never use neutral gray — it kills the list.</Callout>
      </Section>

      <Section num="4.1" title="Bar chart" desc="Period-sliced spend/deposit bars. 12 columns max. The newest column is full-opacity; older columns are 40% and fade to 15%.">
        <Frame label="bars">
          <BarChart />
        </Frame>
      </Section>

      <Section num="4.2" title="Ring chart" desc="Category breakdown. Colors come from the accent palette. Center label is tabular mono.">
        <Frame label="ring">
          <RingChart />
        </Frame>
      </Section>

      <Section num="5.1" title="Privacy toggle" desc="When privacy is on, amounts are masked with a consistent run of dots (not asterisks). The column width is preserved.">
        <Frame label="privacy">
          <div style={{ display: "flex", gap: 24, alignItems: "center", justifyContent: "center" }}>
            <div className="mono" style={{ fontSize: 28, fontWeight: 700 }}>$18,240.50</div>
            <span style={{ color: "var(--c-muted)" }}>→</span>
            <div className="mono" style={{ fontSize: 28, fontWeight: 700, letterSpacing: "0.1em" }}>•••••••</div>
          </div>
        </Frame>
      </Section>
    </>
  );
}

function CardVisual() {
  return (
    <div style={{
      width: 340, height: 210, borderRadius: 14, padding: 18,
      background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 50%, #1a1a1a 100%)",
      border: "1px solid rgba(255,255,255,0.1)",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 12px 48px rgba(0,0,0,0.6)",
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      margin: "0 auto",
    }}>
      <div style={{ position: "absolute", inset: -40, background: "radial-gradient(circle at 30% 30%, rgba(255,69,0,0.25), transparent 50%)" }} />
      <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.04em" }}>MACHINES</div>
        <div style={{ fontSize: 10, fontFamily: "var(--font-mono)", color: "var(--c-muted)", letterSpacing: "0.1em" }}>METAL</div>
      </div>
      <div style={{ position: "relative", display: "flex", gap: 12, justifyContent: "flex-start" }}>
        {["4429","1203","8817","0042"].map((g, i) => (
          <div key={i} className="mono" style={{
            padding: "6px 10px", borderRadius: 4,
            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)",
            fontSize: 13, fontWeight: 700, letterSpacing: "0.08em",
            color: i < 3 ? "rgba(255,255,255,0.3)" : "#fff",
          }}>{g}</div>
        ))}
      </div>
      <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <div style={{ fontSize: 9, color: "var(--c-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Cardholder</div>
          <div style={{ fontSize: 13, fontWeight: 600, marginTop: 2 }}>NORA CHEN</div>
        </div>
        <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.4)" }}>EXP 09/29</div>
      </div>
    </div>
  );
}

function HairDiv() { return <div style={{ height: 1, background: "var(--c-hairline)", margin: "0 14px" }} />; }

function TxRow({ merchant, name, time, sub, amount, crypto }) {
  const isIn = amount > 0;
  const isPending = amount === null;
  const clr = isIn ? "#34d399" : crypto ? "#7B2FFF" : "#fff";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px" }}>
      <div style={{ width: 36, height: 36, borderRadius: "50%", background: merchant.bg, color: "#fff", fontSize: 15, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{merchant.letter}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <span style={{ fontSize: 15, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{name}</span>
          {time && <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", marginLeft: 6 }}>{time}</span>}
        </div>
        <div style={{ fontSize: 11, color: "var(--c-muted)", marginTop: 1 }}>{sub}</div>
      </div>
      {isPending ? (
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.15)", minWidth: 72, textAlign: "right" }}>—</div>
      ) : (
        <div className="mono" style={{ fontSize: 15, fontWeight: 600, color: clr, minWidth: 72, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>
          {isIn ? "+" : "−"}${Math.abs(amount).toFixed(2)}
        </div>
      )}
    </div>
  );
}

function BillRow({ name, duration, dueDay, amount, dueIn }) {
  const uc = dueIn <= 1 ? "#FF4500" : dueIn <= 7 ? "#FFCC00" : "var(--c-muted)";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px" }}>
      <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700 }}>{name.slice(0, 1)}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 15, fontWeight: 600 }}>{name}</div>
        <div style={{ fontSize: 11, color: "var(--c-muted)", marginTop: 2 }}>{duration} · {dueDay}th</div>
      </div>
      <div style={{ textAlign: "right" }}>
        <div className="mono" style={{ fontSize: 15, fontWeight: 600 }}>${amount.toFixed(2)}</div>
        <div style={{ fontSize: 11, color: uc, fontWeight: 600, marginTop: 2 }}>{dueIn <= 1 ? "Due tomorrow" : `In ${dueIn} days`}</div>
      </div>
    </div>
  );
}

function BarChart() {
  const data = [4, 7, 3, 9, 6, 11, 8, 10, 13, 9, 15, 12];
  const max = 16;
  const cW = 320, cH = 140;
  const bW = 12, gap = 10, leftPad = 8;
  return (
    <svg width={cW} height={cH} style={{ display: "block", margin: "0 auto" }}>
      {data.map((v, i) => {
        const isLast = i === data.length - 1;
        const alpha = isLast ? 1 : 0.4 - i * 0.015;
        const h = (v / max) * (cH - 18);
        const x = leftPad + i * (bW + gap);
        return (
          <g key={i}>
            <rect x={x} y={cH - 14 - h} width={bW} height={h} rx={3} fill="#FF4500" opacity={Math.max(alpha, 0.15)} />
            <text x={x + bW/2} y={cH - 2} textAnchor="middle" fontSize="9" fill={isLast ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.15)"} fontFamily="var(--font-sans)" fontWeight="500">{i + 1}</text>
          </g>
        );
      })}
    </svg>
  );
}

function RingChart() {
  const segs = [
    { name: "Food", val: 42, c: "#FF4500" },
    { name: "Travel", val: 18, c: "#0066FF" },
    { name: "Subs", val: 12, c: "#7B2FFF" },
    { name: "Other", val: 28, c: "rgba(255,255,255,0.2)" },
  ];
  const total = segs.reduce((a, s) => a + s.val, 0);
  let off = 0;
  const r = 56, cx = 90, cy = 90;
  const circ = 2 * Math.PI * r;
  return (
    <svg width={180} height={180} style={{ display: "block", margin: "0 auto", transform: "rotate(-90deg)" }}>
      {segs.map((s, i) => {
        const len = (s.val / total) * circ;
        const el = <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={s.c} strokeWidth="16" strokeDasharray={`${len} ${circ - len}`} strokeDashoffset={-off} />;
        off += len;
        return el;
      })}
      <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize="18" fontWeight="700" fontFamily="var(--font-sans)" style={{ fontVariantNumeric: "tabular-nums", transform: "rotate(90deg)", transformOrigin: `${cx}px ${cy}px` }}>$1.2k</text>
    </svg>
  );
}

Object.assign(window, { DomainPage });
