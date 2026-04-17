/* Main app shell: sidebar + router */
const { useState: useStateApp, useEffect: useEffectApp } = React;

const NAV = [
  { key: "home",        label: "Overview",    section: "Getting started" },
  { key: "foundations", label: "Foundations", section: "Core" },
  { key: "components",  label: "Components",  section: "Core" },
  { key: "domain",      label: "Domain",      section: "Core" },
  { key: "motion",      label: "Motion",      section: "Core" },
  { key: "patterns",    label: "Patterns",    section: "Core" },
];

function Sidebar({ page, go }) {
  const sections = {};
  NAV.forEach(n => { (sections[n.section] ||= []).push(n); });
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <div className="sidebar__brand-mark">M</div>
        <div>
          <div className="sidebar__brand-name">Machines</div>
          <div className="sidebar__brand-sub">Design System · v1.0</div>
        </div>
      </div>

      {Object.entries(sections).map(([sec, items]) => (
        <div key={sec}>
          <div className="sidebar__sec-label">{sec}</div>
          <div className="sidebar__nav">
            {items.map(it => (
              <div
                key={it.key}
                className={`sidebar__item ${page === it.key ? "is-active" : ""}`}
                onClick={() => go(it.key)}
              >
                <span className="dot" />
                {it.label}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="sidebar__foot">
        Source: <span className="mono">machines-app-v2.jsx</span><br />
        Reconciled: v1, v3, v4<br />
        Theme: dark only
      </div>
    </aside>
  );
}

function App() {
  const getInitial = () => {
    const h = (window.location.hash || "").replace("#", "");
    return NAV.find(n => n.key === h)?.key || localStorage.getItem("mds.page") || "home";
  };
  const [page, setPage] = useStateApp(getInitial);
  useEffectApp(() => {
    localStorage.setItem("mds.page", page);
    window.location.hash = page;
    window.scrollTo(0, 0);
  }, [page]);
  useEffectApp(() => {
    const onHash = () => {
      const h = window.location.hash.replace("#", "");
      if (NAV.find(n => n.key === h)) setPage(h);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const go = (k) => setPage(k);
  return (
    <div className="app">
      <Sidebar page={page} go={go} />
      <main className="main">
        {page === "home"        && <HomePage go={go} />}
        {page === "foundations" && <FoundationsPage />}
        {page === "components"  && <ComponentsPage />}
        {page === "domain"      && <DomainPage />}
        {page === "motion"      && <MotionPage />}
        {page === "patterns"    && <PatternsPage />}
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
