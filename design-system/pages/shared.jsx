/* Shared primitives: Code, Callout, Swatch, Frame, SectionTitle, PropTable. */
const { useState, useEffect, useRef } = React;
const T = window.MachinesTokens;
const C = T.C;

function Code({ children, lang = "jsx", copy = true }) {
  const [copied, setCopied] = useState(false);
  const doCopy = () => {
    navigator.clipboard?.writeText(String(children)).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    });
  };
  return (
    <div>
      <div className="code-head">
        <span>{lang}</span>
        {copy && (
          <span className="copy-btn" onClick={doCopy}>
            {copied ? "copied" : "copy"}
          </span>
        )}
      </div>
      <pre className="code"><code>{children}</code></pre>
    </div>
  );
}

function Callout({ kind = "note", title, children }) {
  const mark = kind === "do" ? "✓" : kind === "dont" ? "✕" : "!";
  return (
    <div className={`callout callout--${kind}`}>
      <div className="callout__mark">{mark}</div>
      <div className="callout__body">
        {title && <div className="callout__title">{title}</div>}
        <div className="callout__text">{children}</div>
      </div>
    </div>
  );
}

function Swatch({ name, value, usage, demoStyle }) {
  const isRgba = String(value).startsWith("rgba") || String(value).startsWith("#");
  return (
    <div className="swatch">
      <div className="swatch__chip" style={demoStyle || { background: value }} />
      <div className="swatch__meta">
        <div className="swatch__name">{name}</div>
        <div className="swatch__val">{value}</div>
        {usage && <div className="swatch__usage">{usage}</div>}
      </div>
    </div>
  );
}

function Frame({ label, children, flush, style }) {
  return (
    <div className={`frame ${flush ? "frame--flush" : ""}`} style={style}>
      {label && <div className="frame__label">{label}</div>}
      {children}
    </div>
  );
}

function Section({ num, tag, title, desc, children, id }) {
  return (
    <div className="sec" id={id}>
      {num && <div className="sec__num">{num}</div>}
      <h2 className="sec__title">
        {title}
        {tag && <span className="tag">{tag}</span>}
      </h2>
      {desc && <p className="sec__desc">{desc}</p>}
      {children}
    </div>
  );
}

function PageHeader({ eyebrow, title, sub }) {
  return (
    <header className="page-header">
      {eyebrow && <div className="page-header__eyebrow">{eyebrow}</div>}
      <h1 className="page-header__title">{title}</h1>
      {sub && <p className="page-header__sub">{sub}</p>}
    </header>
  );
}

function PropTable({ rows, cols = ["Prop", "Type", "Default", "Notes"] }) {
  return (
    <table className="prop-table">
      <thead><tr>{cols.map(c => <th key={c}>{c}</th>)}</tr></thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            {r.map((cell, j) => <td key={j} className={j === 0 || j === 1 ? "mono" : j === 3 ? "meta" : ""}>{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Object.assign(window, { Code, Callout, Swatch, Frame, Section, PageHeader, PropTable, C, T });
