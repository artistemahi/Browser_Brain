import { useState, useRef, useEffect } from "react";

/* ─────────────────────────────────────────────
   ERA 1 – Netscape Navigator 3.0  (1994–1997)
───────────────────────────────────────────── */
function NetscapeBrowser() {
  const pages = {
    "http://www.netscape.com/": {
      title: "Welcome to Netscape – Netscape Navigator 3.0",
      html: `<div style="padding:10px;font-family:'Times New Roman',serif;color:#000;font-size:13px;">
        <h1 style="font-size:20px;color:#000080;border-bottom:3px double #000080;padding-bottom:4px;margin-bottom:8px;">Welcome to Netscape!</h1>
        <div style="overflow:hidden;background:#ffff00;border:1px solid #000;padding:2px;margin-bottom:8px;">
          <div style="display:inline-block;white-space:nowrap;animation:marquee 10s linear infinite;font-size:12px;font-weight:bold;color:#ff0000;font-family:'Courier New',monospace;">
            ★ NEW: Netscape Navigator 3.0 – Download Now! ★ Java support! ★ Fastest browser on the web! ★
          </div>
        </div>
        <p style="margin-bottom:6px;">Welcome to <b>Netscape Communications</b>, your guide to the World Wide Web!</p>
        <h2 style="font-size:15px;color:#800000;margin:8px 0 4px;">Explore the Web</h2>
        <ul style="padding-left:18px;line-height:1.9;">
          <li><a href="#" onclick="window._ns_go('http://www.yahoo.com/')" style="color:#0000cc;">Yahoo!</a> – Web directory</li>
          <li><a href="#" onclick="window._ns_go('http://www.geocities.com/')" style="color:#0000cc;">GeoCities</a> – Build your homepage FREE!</li>
          <li><a href="#" onclick="window._ns_go('http://www.altavista.com/')" style="color:#0000cc;">AltaVista</a> – Search the entire web</li>
          <li><a href="#" onclick="window._ns_go('http://www.hotmail.com/')" style="color:#0000cc;">Hotmail</a> – Free e-mail for everyone</li>
        </ul>
        <hr style="border:none;border-top:2px solid #808080;margin:8px 0;"/>
        <div style="background:#000;color:#00ff00;font-family:'Courier New',monospace;font-size:12px;padding:2px 6px;display:inline-block;border:1px solid #00ff00;letter-spacing:2px;">Visitor #001337</div>
        <div style="margin-top:8px;background:repeating-linear-gradient(45deg,#ffff00,#ffff00 8px,#000 8px,#000 16px);padding:3px;">
          <div style="background:#ffff00;font-weight:bold;font-size:11px;padding:2px;text-align:center;">🚧 UNDER CONSTRUCTION – More pages coming soon! 🚧</div>
        </div>
      </div>`,
    },
    "http://www.yahoo.com/": {
      title: "Yahoo! – The Web's Directory",
      html: `<div style="padding:10px;font-family:'Times New Roman',serif;font-size:13px;color:#000;">
        <h1 style="color:#9400D3;font-size:22px;text-align:center;margin-bottom:4px;">Yahoo!</h1>
        <p style="text-align:center;font-size:11px;color:#666;margin-bottom:8px;">"The ultimate guide to the internet"</p>
        <hr style="border-top:1px solid #ccc;"/>
        <table width="100%" style="font-size:12px;margin-top:8px;"><tr>
          <td width="50%" style="vertical-align:top;padding-right:8px;">
            <b>Arts</b><br/><span style="color:#666;font-size:11px;">Humanities, Photography...</span><br/><br/>
            <b>Business &amp; Economy</b><br/><span style="color:#666;font-size:11px;">Companies, Finance...</span><br/><br/>
            <b>Computers &amp; Internet</b><br/><span style="color:#666;font-size:11px;">Internet, WWW, Software...</span>
          </td>
          <td width="50%" style="vertical-align:top;">
            <b>Entertainment</b><br/><span style="color:#666;font-size:11px;">Movies, Music, TV...</span><br/><br/>
            <b>Health</b><br/><span style="color:#666;font-size:11px;">Medicine, Fitness...</span><br/><br/>
            <b>Science</b><br/><span style="color:#666;font-size:11px;">Biology, Physics, CS...</span>
          </td>
        </tr></table>
        <hr style="border-top:1px solid #ccc;margin-top:8px;"/>
        <p style="font-size:10px;text-align:center;color:#666;">© 1996 Yahoo! Inc.</p>
      </div>`,
    },
    "http://www.geocities.com/": {
      title: "GeoCities – Build Your Home on the Web!",
      html: `<div style="padding:10px;font-family:'Arial',sans-serif;font-size:13px;background:#ffffee;">
        <h1 style="color:#cc0000;font-size:20px;">🏘️ Welcome to GeoCities!</h1>
        <p style="font-size:12px;">Build your <b>FREE</b> homepage and join millions of neighbors!</p>
        <div style="background:#fff8dc;border:1px solid #ccc;padding:6px;margin:8px 0;font-size:12px;">
          <b>Choose your neighborhood:</b><br/>
          🎵 <a href="#" style="color:#0000cc;">Area51</a> – Sci-Fi fans<br/>
          🎨 <a href="#" style="color:#0000cc;">SoHo</a> – Artists &amp; writers<br/>
          💻 <a href="#" style="color:#0000cc;">SiliconValley</a> – Tech geeks<br/>
          🤘 <a href="#" style="color:#0000cc;">Sunset Strip</a> – Music lovers
        </div>
        <div style="background:#ffff00;border:2px dashed #ff0000;padding:6px;text-align:center;font-weight:bold;font-size:12px;color:#ff0000;">
          ✨ SIGN UP FREE ✨ 5MB of web space!
        </div>
        <p style="font-size:10px;color:#666;margin-top:8px;">© 1997 GeoCities. All rights reserved.</p>
      </div>`,
    },
    "http://www.altavista.com/": {
      title: "AltaVista: Search",
      html: `<div style="padding:10px;font-family:'Times New Roman',serif;font-size:13px;color:#000;">
        <h1 style="color:#0000aa;font-size:22px;">AltaVista<sup style="font-size:10px;">TM</sup></h1>
        <p style="font-size:12px;">Access to <b>31,000,000 pages</b> found on <b>476,000 servers</b></p>
        <hr style="border-top:2px solid #808080;margin:6px 0;"/>
        <div style="text-align:center;margin:8px 0;">
          <input style="width:80%;height:22px;border:2px inset #808080;font-size:13px;padding:0 4px;" defaultValue="search the web"/>
          <div style="margin-top:4px;font-size:12px;">
            <label><input type="radio" defaultChecked/> the Web</label>&nbsp;&nbsp;
            <label><input type="radio"/> Usenet</label>&nbsp;&nbsp;
            <button style="background:#c0c0c0;border:2px outset #ccc;padding:2px 12px;font-size:12px;cursor:pointer;">Submit</button>
          </div>
        </div>
        <hr style="border-top:2px solid #808080;margin:6px 0;"/>
        <p style="font-size:10px;color:#666;">© 1996 Digital Equipment Corporation</p>
      </div>`,
    },
    "http://www.hotmail.com/": {
      title: "Hotmail – Free Email",
      html: `<div style="padding:10px;font-family:'Arial',sans-serif;font-size:13px;background:#fff;">
        <h1 style="color:#cc0000;font-size:18px;">Hotmail</h1>
        <p style="font-size:12px;color:#333;">The world's FREE e-mail service!</p>
        <div style="border:1px solid #ccc;padding:10px;margin:8px 0;background:#f9f9f9;max-width:250px;">
          <div style="font-size:12px;margin-bottom:4px;"><b>Sign In</b></div>
          <div style="font-size:11px;">Login: <input style="border:1px inset #999;font-size:11px;width:120px;" placeholder="username@hotmail.com"/></div>
          <div style="font-size:11px;margin-top:4px;">Password: <input type="password" style="border:1px inset #999;font-size:11px;width:80px;"/></div>
          <button style="margin-top:6px;background:#cc0000;color:#fff;border:2px outset #ff8888;font-size:11px;padding:2px 10px;cursor:pointer;">Sign In</button>
        </div>
        <a href="#" style="font-size:12px;color:#0000cc;">Create a FREE account →</a>
      </div>`,
    },
  };

  const [url, setUrl] = useState("http://www.netscape.com/");
  const [pageTitle, setPageTitle] = useState(pages["http://www.netscape.com/"].title);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Document: Done");
  const [hist, setHist] = useState(["http://www.netscape.com/"]);
  const [histIdx, setHistIdx] = useState(0);
  const [inputVal, setInputVal] = useState("http://www.netscape.com/");
  const frameRef = useRef(null);

  useEffect(() => {
    window._ns_go = (u) => { loadPage(u, true); };
    return () => { delete window._ns_go; };
  }, [hist, histIdx]);

  const renderPage = (u) => {
    const p = pages[u];
    if (!frameRef.current) return;
    const doc = frameRef.current.contentDocument;
    doc.open();
    doc.write(`<!DOCTYPE html><html><head><style>
      body{margin:0;padding:0;background:#fff;}
      @keyframes marquee{0%{transform:translateX(400px)}100%{transform:translateX(-100%)}}
    </style></head><body>${p ? p.html : `<div style="padding:20px;text-align:center;font-family:Arial;"><h2 style="color:red;">404 Not Found</h2><p>The document <b>${u}</b> was not found.</p></div>`}</body></html>`);
    doc.close();
    setPageTitle(p ? p.title : "404 Not Found – Netscape Navigator 3.0");
  };

  const loadPage = (u, addHist = false) => {
    let finalUrl = u;
    if (!u.startsWith("http")) finalUrl = "http://www." + u.replace(/^www\./, "") + "/";
    setInputVal(finalUrl);
    setLoading(true);
    setStatus("Connecting to " + finalUrl.split("/")[2] + "...");
    setProgress(5);
    if (addHist) {
      setHist(h => { const n = [...h.slice(0, histIdx + 1), finalUrl]; setHistIdx(n.length - 1); return n; });
    }
    const iv = setInterval(() => setProgress(p => Math.min(p + 15, 90)), 100);
    setTimeout(() => {
      clearInterval(iv);
      setProgress(100);
      renderPage(finalUrl);
      setLoading(false);
      setStatus("Document: Done");
      setTimeout(() => setProgress(0), 400);
    }, 800 + Math.random() * 500);
  };

  useEffect(() => { renderPage(url); }, []);

  const navBack = () => { if (histIdx > 0) { const ni = histIdx - 1; setHistIdx(ni); setInputVal(hist[ni]); loadPage(hist[ni]); } };
  const navFwd = () => { if (histIdx < hist.length - 1) { const ni = histIdx + 1; setHistIdx(ni); setInputVal(hist[ni]); loadPage(hist[ni]); } };
  const go = () => loadPage(inputVal, true);

  const btn = (label, icon, onClick, disabled) => (
    <div onClick={disabled ? null : onClick} style={{ minWidth: 42, height: 34, background: "#c0c0c0", border: "2px solid", borderColor: "#fff #808080 #808080 #fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: disabled ? "default" : "pointer", fontSize: 9, gap: 1, opacity: disabled ? 0.4 : 1, userSelect: "none", padding: "2px 4px" }}>
      <span style={{ fontSize: 13 }}>{icon}</span>
      <span>{label}</span>
    </div>
  );

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#c0c0c0", border: "2px solid", borderColor: "#fff #808080 #808080 #fff", width: "100%", maxWidth: 680 }}>
      {/* Title bar */}
      <div style={{ background: "#000080", color: "#fff", padding: "3px 6px", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 12, fontWeight: "bold" }}>
        <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "85%" }}>{pageTitle}</span>
        <div style={{ display: "flex", gap: 2 }}>
          {["_", "□", "✕"].map(c => <div key={c} style={{ width: 14, height: 14, border: "1px solid", borderColor: "#fff #808080 #808080 #fff", background: "#c0c0c0", color: "#000", fontSize: 9, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontWeight: "bold" }}>{c}</div>)}
        </div>
      </div>
      {/* Menu */}
      <div style={{ background: "#c0c0c0", padding: "2px 4px", display: "flex", gap: 1, borderBottom: "1px solid #808080" }}>
        {["File", "Edit", "View", "Go", "Bookmarks", "Options", "Help"].map(m => <span key={m} style={{ fontSize: 12, padding: "2px 6px", cursor: "pointer" }}>{m}</span>)}
      </div>
      {/* Toolbar */}
      <div style={{ background: "#c0c0c0", padding: 4, display: "flex", alignItems: "center", gap: 2, borderBottom: "2px solid #808080" }}>
        {btn("Back", "◄", navBack, histIdx <= 0)}
        {btn("Fwd", "►", navFwd, histIdx >= hist.length - 1)}
        {btn("Reload", "↺", () => loadPage(inputVal))}
        {btn("Stop", "✕", null, !loading)}
        <div style={{ width: 2, height: 30, background: "#808080", borderRight: "1px solid #fff", margin: "0 2px" }} />
        {btn("Home", "⌂", () => loadPage("http://www.netscape.com/", true))}
        {btn("Search", "☆", () => loadPage("http://www.altavista.com/", true))}
        {btn("Mail", "✉", () => loadPage("http://www.hotmail.com/", true))}
        <div style={{ marginLeft: "auto", width: 36, height: 34, background: "#000080", border: "2px solid", borderColor: "#fff #808080 #808080 #fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 20, color: "#fff", fontWeight: 900, fontFamily: "Times New Roman", display: "inline-block", animation: loading ? "spin 0.3s steps(4) infinite" : "none" }}>N</span>
        </div>
      </div>
      {/* Address bar */}
      <div style={{ background: "#c0c0c0", padding: "3px 4px", display: "flex", alignItems: "center", gap: 6, borderBottom: "1px solid #808080" }}>
        <span style={{ fontSize: 12, fontWeight: "bold", whiteSpace: "nowrap" }}>Location:</span>
        <input value={inputVal} onChange={e => setInputVal(e.target.value)} onKeyDown={e => e.key === "Enter" && go()} style={{ flex: 1, height: 20, border: "2px solid", borderColor: "#808080 #fff #fff #808080", background: "#fff", fontSize: 12, fontFamily: "Courier New, monospace", padding: "0 4px", color: "#000", outline: "none" }} />
        <button onClick={go} style={{ height: 20, padding: "0 8px", background: "#c0c0c0", border: "2px solid", borderColor: "#fff #808080 #808080 #fff", fontSize: 11, cursor: "pointer" }}>Go!</button>
      </div>
      {/* Page */}
      <div style={{ border: "2px solid", borderColor: "#808080 #fff #fff #808080", margin: 2 }}>
        <iframe ref={frameRef} style={{ width: "100%", height: 280, display: "block", border: "none", background: "#fff" }} title="netscape" sandbox="allow-scripts allow-same-origin" />
      </div>
      {/* Status */}
      <div style={{ background: "#c0c0c0", borderTop: "2px solid #808080", padding: "2px 6px", display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 11, flex: 1, fontFamily: "Arial" }}>{status}</span>
        <div style={{ width: 140, height: 14, border: "2px solid", borderColor: "#808080 #fff #fff #808080", background: "#c0c0c0", overflow: "hidden" }}>
          <div style={{ height: "100%", background: "#000080", width: progress + "%", transition: "width 0.2s" }} />
        </div>
        <span style={{ fontSize: 11, paddingLeft: 8, borderLeft: "1px solid #808080" }}>Internet zone</span>
      </div>
      <style>{`@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ERA 2 – Internet Explorer 6  (2001–2006)
───────────────────────────────────────────── */
function IEBrowser() {
  const pages = {
    "http://www.msn.com/": {
      title: "MSN.com – More Useful Every Day",
      html: `<div style="font-family:Arial,sans-serif;font-size:12px;padding:8px;background:#fff;">
        <div style="background:#336699;color:#fff;padding:4px 8px;font-size:14px;font-weight:bold;margin-bottom:6px;">MSN</div>
        <div style="background:#ffffcc;border:1px solid #cc9900;padding:4px;font-size:11px;margin-bottom:6px;">
          ⚠️ <b>Internet Explorer Enhanced Security</b> is enabled. <a href="#" style="color:#0000cc;">Configure settings...</a>
        </div>
        <div style="display:flex;gap:8px;">
          <div style="flex:1;">
            <b style="color:#336699;font-size:11px;">TODAY'S TOP STORIES</b>
            <div style="border-top:1px solid #ccc;margin:3px 0;"></div>
            <a href="#" style="color:#0000cc;font-size:12px;display:block;margin-bottom:3px;">• Download the latest Windows Update</a>
            <a href="#" style="color:#0000cc;font-size:12px;display:block;margin-bottom:3px;">• Hotmail – Check your email</a>
            <a href="#" style="color:#0000cc;font-size:12px;">• MSN Money – Track your stocks</a>
          </div>
          <div style="width:160px;background:#eef;border:1px solid #99a;padding:4px;font-size:11px;">
            <b>MSN Search</b><br/>
            <input style="width:100%;font-size:11px;border:1px inset #999;margin-top:3px;" placeholder="Search the Web"/>
            <button style="margin-top:3px;font-size:10px;background:#c0c0c0;border:1px outset #aaa;cursor:pointer;padding:1px 6px;">Search</button>
          </div>
        </div>
        <div style="background:#ffcccc;border:1px solid #cc0000;padding:3px 6px;margin-top:6px;font-size:11px;">
          🛡️ This page uses ActiveX controls. <a href="#" style="color:#0000cc;">Click here to allow...</a>
        </div>
      </div>`,
    },
    "http://www.windowsupdate.com/": {
      title: "Windows Update – Microsoft",
      html: `<div style="font-family:Arial,sans-serif;font-size:12px;padding:10px;background:#fff;">
        <div style="background:#003399;color:#fff;padding:6px 10px;font-size:14px;font-weight:bold;display:flex;align-items:center;gap:6px;">
          <span>🪟</span> Windows Update
        </div>
        <div style="background:#f0f0f0;border:1px solid #ccc;padding:8px;margin-top:6px;">
          <b>Checking for updates...</b>
          <div style="background:#fff;border:1px inset #999;height:10px;margin-top:6px;overflow:hidden;">
            <div style="background:#003399;height:100%;width:65%;animation:ie-prog 2s ease-in-out infinite;"></div>
          </div>
        </div>
        <div style="margin-top:8px;font-size:12px;">
          <div style="padding:4px 0;border-bottom:1px solid #eee;display:flex;justify-content:space-between;">
            <span>🔴 Security Update (KB824146)</span><span style="color:#cc0000;font-weight:bold;">CRITICAL</span>
          </div>
          <div style="padding:4px 0;border-bottom:1px solid #eee;display:flex;justify-content:space-between;">
            <span>🟡 Internet Explorer 6 SP1</span><span style="color:#cc6600;">Important</span>
          </div>
          <div style="padding:4px 0;display:flex;justify-content:space-between;">
            <span>⚪ Windows Media Player 9</span><span style="color:#666;">Optional</span>
          </div>
        </div>
        <button style="margin-top:8px;background:#003399;color:#fff;border:2px outset #5555cc;padding:4px 16px;font-size:12px;cursor:pointer;">Install Updates</button>
        <style>@keyframes ie-prog{0%,100%{transform:translateX(-30%)}50%{transform:translateX(80%)}}</style>
      </div>`,
    },
    "http://www.hotmail.com/": {
      title: "Hotmail – Inbox",
      html: `<div style="font-family:Arial,sans-serif;font-size:12px;background:#fff;">
        <div style="background:#cc0000;color:#fff;padding:4px 8px;font-size:13px;font-weight:bold;">📧 Hotmail</div>
        <div style="display:flex;">
          <div style="width:100px;background:#eef;padding:6px;font-size:11px;border-right:1px solid #ccc;">
            <div style="font-weight:bold;color:#336699;margin-bottom:4px;">FOLDERS</div>
            <div style="cursor:pointer;color:#0000cc;">📥 Inbox (3)</div>
            <div style="cursor:pointer;color:#666;margin-top:2px;">📤 Sent</div>
            <div style="cursor:pointer;color:#666;margin-top:2px;">🗑️ Deleted</div>
            <div style="cursor:pointer;color:#666;margin-top:2px;">⚠️ Junk (12)</div>
          </div>
          <div style="flex:1;padding:6px;">
            <table style="width:100%;font-size:11px;border-collapse:collapse;">
              <thead><tr style="background:#c0c0c0;"><th style="padding:2px 4px;text-align:left;border:1px solid #999;">From</th><th style="padding:2px 4px;text-align:left;border:1px solid #999;">Subject</th></tr></thead>
              <tbody>
                <tr style="background:#ffffcc;font-weight:bold;"><td style="border:1px solid #ddd;padding:2px 4px;">MSN Team</td><td style="border:1px solid #ddd;padding:2px 4px;">Welcome to Hotmail!</td></tr>
                <tr style="background:#ffffcc;font-weight:bold;"><td style="border:1px solid #ddd;padding:2px 4px;">Windows Update</td><td style="border:1px solid #ddd;padding:2px 4px;">Critical security patches available</td></tr>
                <tr><td style="border:1px solid #ddd;padding:2px 4px;color:#666;">Chain letter</td><td style="border:1px solid #ddd;padding:2px 4px;color:#666;">FWD FWD FWD: You won $1,000,000!!!</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>`,
    },
  };

  const [url, setUrl] = useState("http://www.msn.com/");
  const [pageTitle, setPageTitle] = useState(pages["http://www.msn.com/"].title);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Done");
  const [inputVal, setInputVal] = useState("http://www.msn.com/");
  const [hist, setHist] = useState(["http://www.msn.com/"]);
  const [histIdx, setHistIdx] = useState(0);
  const frameRef = useRef(null);

  const renderPage = (u) => {
    const p = pages[u];
    if (!frameRef.current) return;
    const doc = frameRef.current.contentDocument;
    doc.open();
    doc.write(`<!DOCTYPE html><html><head><style>body{margin:0;padding:0;}</style></head><body>${p ? p.html : `<div style="padding:16px;font-family:Arial;text-align:center;"><h2 style="color:#cc0000;">The page cannot be displayed</h2><p>The page you are looking for is currently unavailable.</p><hr/><p style="font-size:12px;">HTTP 404 – File Not Found<br/>Internet Explorer</p></div>`}</body></html>`);
    doc.close();
    setPageTitle(p ? p.title : "The page cannot be displayed");
  };

  useEffect(() => { renderPage(url); }, []);
  useEffect(() => { window._ie_go = (u) => go(u); return () => delete window._ie_go; }, [hist, histIdx]);

  const go = (u) => {
    const finalUrl = u || inputVal;
    setInputVal(finalUrl);
    setLoading(true); setProgress(10); setStatus("Connecting...");
    const h = [...hist.slice(0, histIdx + 1), finalUrl];
    setHist(h); setHistIdx(h.length - 1);
    const iv = setInterval(() => setProgress(p => Math.min(p + 12, 85)), 100);
    setTimeout(() => { clearInterval(iv); setProgress(100); renderPage(finalUrl); setLoading(false); setStatus("Done"); setTimeout(() => setProgress(0), 400); }, 900 + Math.random() * 400);
  };

  const navBack = () => { if (histIdx > 0) { const ni = histIdx - 1; setHistIdx(ni); setInputVal(hist[ni]); const iv = setInterval(() => {}, 100); setTimeout(() => { clearInterval(iv); renderPage(hist[ni]); }, 600); } };

  return (
    <div style={{ fontFamily: "Tahoma, Arial, sans-serif", background: "#ece9d8", border: "2px solid #0054e3", width: "100%", maxWidth: 680, borderRadius: 2 }}>
      {/* Title bar XP */}
      <div style={{ background: "linear-gradient(to bottom, #245edb, #1941a5)", color: "#fff", padding: "4px 6px", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 12, fontWeight: "bold", borderRadius: "2px 2px 0 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 14 }}>🌐</span>
          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "80%" }}>{pageTitle}</span>
        </div>
        <div style={{ display: "flex", gap: 2 }}>
          {["—", "🗗", "✕"].map((c, i) => <div key={i} style={{ width: 20, height: 18, background: i === 2 ? "#cc2222" : "#3d74dd", border: "1px solid rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 9, borderRadius: 2, color: "#fff" }}>{c}</div>)}
        </div>
      </div>
      {/* Menu */}
      <div style={{ background: "#ece9d8", padding: "2px 4px", display: "flex", gap: 2, borderBottom: "1px solid #aca899", fontSize: 12 }}>
        {["File", "Edit", "View", "Favorites", "Tools", "Help"].map(m => <span key={m} style={{ padding: "2px 6px", cursor: "pointer" }}>{m}</span>)}
      </div>
      {/* Toolbar */}
      <div style={{ background: "#ece9d8", padding: "3px 4px", display: "flex", alignItems: "center", gap: 2, borderBottom: "1px solid #aca899" }}>
        {[["◀", "Back", histIdx <= 0], ["▶", "Fwd", histIdx >= hist.length - 1], ["↺", "Refresh"], ["✕", "Stop", !loading], ["⌂", "Home"]].map(([icon, label, dis]) => (
          <div key={label} onClick={label === "Back" ? navBack : label === "Home" ? () => go("http://www.msn.com/") : label === "Refresh" ? () => go(inputVal) : null} style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "2px 6px", cursor: dis ? "default" : "pointer", opacity: dis ? 0.4 : 1, fontSize: 9, gap: 1 }}>
            <span style={{ fontSize: 15 }}>{icon}</span>
            <span style={{ color: "#333" }}>{label}</span>
          </div>
        ))}
        <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 4, background: "#fff", border: "1px solid #7f9db9", borderRadius: 1, padding: "2px 4px", marginLeft: 4 }}>
          <span style={{ fontSize: 10 }}>🌐</span>
          <input value={inputVal} onChange={e => setInputVal(e.target.value)} onKeyDown={e => e.key === "Enter" && go()} style={{ flex: 1, border: "none", outline: "none", fontSize: 12, fontFamily: "Arial" }} />
          <button onClick={() => go()} style={{ background: "#ece9d8", border: "1px solid #aca899", fontSize: 11, padding: "1px 8px", cursor: "pointer" }}>Go</button>
        </div>
        <div style={{ marginLeft: 4, background: "linear-gradient(135deg, #1040c0, #3080ff)", width: 34, height: 34, borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 18, filter: loading ? "brightness(1.5)" : "none", transition: "filter 0.3s" }}>🌐</span>
        </div>
      </div>
      {/* Page */}
      <iframe ref={frameRef} style={{ width: "100%", height: 280, display: "block", border: "none", background: "#fff" }} title="ie" sandbox="allow-scripts allow-same-origin" />
      {/* Status */}
      <div style={{ background: "#ece9d8", borderTop: "1px solid #aca899", padding: "2px 6px", display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 11, flex: 1 }}>{loading ? "Connecting..." : "Done"}</span>
        <div style={{ width: 140, height: 12, border: "1px inset #999", background: "#fff", overflow: "hidden" }}>
          <div style={{ height: "100%", background: "#0054e3", width: progress + "%", transition: "width 0.2s" }} />
        </div>
        <span style={{ fontSize: 10, color: "#666" }}>🔒 Internet</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ERA 3 – Google Chrome  (2008–present)
───────────────────────────────────────────── */
function ChromeBrowser() {
  const pages = {
    "https://www.google.com/": {
      title: "Google",
      html: `<div style="font-family:Arial,sans-serif;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:260px;background:#fff;">
        <div style="font-size:52px;font-weight:bold;letter-spacing:-2px;margin-bottom:12px;">
          <span style="color:#4285f4">G</span><span style="color:#ea4335">o</span><span style="color:#fbbc05">o</span><span style="color:#4285f4">g</span><span style="color:#34a853">l</span><span style="color:#ea4335">e</span>
        </div>
        <div style="display:flex;align-items:center;background:#fff;border:1px solid #dfe1e5;border-radius:24px;padding:8px 16px;width:380px;max-width:90%;box-shadow:0 2px 5px rgba(0,0,0,0.1);margin-bottom:16px;">
          <span style="font-size:16px;margin-right:10px;color:#9aa0a6;">🔍</span>
          <span style="color:#9aa0a6;font-size:14px;">Search Google or type a URL</span>
        </div>
        <div style="display:flex;gap:8px;">
          <button style="background:#f8f9fa;border:1px solid #f8f9fa;border-radius:4px;padding:8px 16px;font-size:13px;color:#3c4043;cursor:pointer;">Google Search</button>
          <button style="background:#f8f9fa;border:1px solid #f8f9fa;border-radius:4px;padding:8px 16px;font-size:13px;color:#3c4043;cursor:pointer;">I'm Feeling Lucky</button>
        </div>
      </div>`,
    },
    "https://www.youtube.com/": {
      title: "YouTube",
      html: `<div style="font-family:'Roboto',Arial,sans-serif;background:#fff;padding:0;">
        <div style="background:#fff;border-bottom:1px solid #e0e0e0;padding:6px 12px;display:flex;align-items:center;gap:10px;">
          <span style="color:#ff0000;font-size:18px;font-weight:bold;">▶ YouTube</span>
          <div style="flex:1;display:flex;background:#fff;border:1px solid #ccc;border-radius:2px;overflow:hidden;">
            <input style="flex:1;border:none;outline:none;padding:4px 8px;font-size:13px;" placeholder="Search"/>
            <button style="background:#f8f8f8;border:none;border-left:1px solid #ccc;padding:4px 12px;cursor:pointer;font-size:13px;">🔍</button>
          </div>
        </div>
        <div style="padding:8px;">
          <div style="font-size:12px;font-weight:bold;color:#333;margin-bottom:6px;">Recommended</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
            ${[["#ff6b6b","JavaScript in 100 Seconds","Fireship","4.2M views"],["#4ecdc4","CSS Grid Full Course","Kevin Powell","1.8M views"],["#45b7d1","React Tutorial 2024","Traversy Media","3.1M views"]].map(([c,t,ch,v])=>`
            <div style="cursor:pointer;">
              <div style="background:${c};height:65px;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:20px;">▶</div>
              <div style="font-size:11px;font-weight:bold;margin-top:4px;line-height:1.3;">${t}</div>
              <div style="font-size:10px;color:#666;">${ch} · ${v}</div>
            </div>`).join("")}
          </div>
        </div>
      </div>`,
    },
    "https://github.com/": {
      title: "GitHub",
      html: `<div style="font-family:-apple-system,Arial,sans-serif;background:#0d1117;color:#e6edf3;padding:10px;min-height:260px;">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
          <span style="font-size:22px;">🐙</span>
          <span style="font-size:16px;font-weight:bold;">GitHub</span>
          <div style="flex:1;background:#161b22;border:1px solid #30363d;border-radius:6px;padding:4px 10px;font-size:12px;color:#8b949e;">🔍 Search or jump to...</div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
          ${[["your-project","main • Updated 2h ago","JavaScript"],["awesome-app","dev • Updated 1d ago","TypeScript"],["dotfiles","main • Updated 3d ago","Shell"],["portfolio","gh-pages • Updated 1w ago","HTML"]].map(([n,d,l])=>`
          <div style="background:#161b22;border:1px solid #30363d;border-radius:6px;padding:8px;font-size:11px;">
            <div style="color:#58a6ff;font-weight:bold;margin-bottom:2px;">📁 ${n}</div>
            <div style="color:#8b949e;font-size:10px;">${d}</div>
            <div style="color:#8b949e;font-size:10px;margin-top:3px;">● ${l}</div>
          </div>`).join("")}
        </div>
      </div>`,
    },
    "https://www.gmail.com/": {
      title: "Gmail – Inbox",
      html: `<div style="font-family:Arial,sans-serif;background:#fff;font-size:13px;">
        <div style="display:flex;align-items:center;padding:6px 10px;border-bottom:1px solid #e0e0e0;gap:8px;">
          <span style="color:#ea4335;font-size:18px;font-weight:bold;">M</span>
          <span style="font-size:14px;font-weight:300;color:#666;">Gmail</span>
          <div style="flex:1;background:#f1f3f4;border-radius:24px;padding:6px 14px;font-size:13px;color:#999;">🔍 Search mail</div>
        </div>
        <div style="padding:0 8px;">
          ${[["Google Team","Welcome to Gmail! Here's how to get started","10:23 AM",true],["GitHub","[GitHub] Your pull request was merged!","9:41 AM",true],["Netflix","New on Netflix this month","Yesterday",false],["Spotify","Your Wrapped is ready! 🎵","Mon",false]].map(([f,s,t,u])=>`
          <div style="display:flex;align-items:center;gap:8px;padding:6px 4px;border-bottom:1px solid #f0f0f0;font-weight:${u?"bold":"normal"};background:${u?"#fff":"#f9f9f9"};">
            <div style="width:28px;height:28px;border-radius:50%;background:${u?"#4285f4":"#ccc"};display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;">${f[0]}</div>
            <div style="flex:1;min-width:0;"><div style="font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${f} – ${s}</div></div>
            <div style="font-size:11px;color:#666;white-space:nowrap;">${t}</div>
          </div>`).join("")}
        </div>
      </div>`,
    },
  };

  const tabs = [
    { label: "Google", url: "https://www.google.com/", icon: "🔵" },
    { label: "YouTube", url: "https://www.youtube.com/", icon: "🔴" },
    { label: "GitHub", url: "https://github.com/", icon: "⚫" },
    { label: "Gmail", url: "https://www.gmail.com/", icon: "✉️" },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [inputVal, setInputVal] = useState(tabs[0].url);
  const frameRef = useRef(null);

  const renderPage = (u) => {
    const p = pages[u];
    if (!frameRef.current) return;
    const doc = frameRef.current.contentDocument;
    doc.open();
    doc.write(`<!DOCTYPE html><html><head><style>*{box-sizing:border-box;}body{margin:0;padding:0;}</style></head><body>${p ? p.html : `<div style="padding:40px;text-align:center;font-family:Arial;"><h2 style="color:#202124;font-weight:300">This site can't be reached</h2><p style="color:#5f6368;font-size:14px;">ERR_CONNECTION_REFUSED</p></div>`}</body></html>`);
    doc.close();
  };

  const switchTab = (i) => {
    setActiveTab(i);
    setInputVal(tabs[i].url);
    setLoading(true); setProgress(20);
    const iv = setInterval(() => setProgress(p => Math.min(p + 20, 90)), 80);
    setTimeout(() => { clearInterval(iv); setProgress(100); renderPage(tabs[i].url); setLoading(false); setTimeout(() => setProgress(0), 300); }, 500);
  };

  useEffect(() => { renderPage(tabs[0].url); }, []);

  return (
    <div style={{ fontFamily: "'Segoe UI',Arial,sans-serif", background: "#dee1e6", borderRadius: "8px 8px 0 0", width: "100%", maxWidth: 680, overflow: "hidden" }}>
      {/* Tab bar */}
      <div style={{ display: "flex", alignItems: "flex-end", padding: "6px 8px 0", gap: 1, background: "#dee1e6" }}>
        {tabs.map((t, i) => (
          <div key={i} onClick={() => switchTab(i)} style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 12px 7px", background: i === activeTab ? "#fff" : "#c8ccd0", borderRadius: "8px 8px 0 0", cursor: "pointer", maxWidth: 140, fontSize: 12, color: i === activeTab ? "#202124" : "#5f6368", fontWeight: i === activeTab ? 500 : 400, border: i === activeTab ? "1px solid #dee1e6" : "none", borderBottom: "none" }}>
            <span style={{ fontSize: 11 }}>{t.icon}</span>
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{t.label}</span>
            <span style={{ marginLeft: 4, fontSize: 10, color: "#999" }}>✕</span>
          </div>
        ))}
        <div style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#666", fontSize: 16, marginBottom: 2 }}>+</div>
      </div>
      {/* Toolbar */}
      <div style={{ background: "#fff", padding: "6px 8px", display: "flex", alignItems: "center", gap: 6 }}>
        {["◀", "▶", "↺"].map((ic, i) => (
          <button key={i} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, color: "#5f6368", padding: "4px 6px", borderRadius: 4 }}>{ic}</button>
        ))}
        <div style={{ flex: 1, display: "flex", alignItems: "center", background: "#f1f3f4", borderRadius: 20, padding: "5px 14px", gap: 6 }}>
          <span style={{ fontSize: 11, color: "#34a853" }}>🔒</span>
          <input value={inputVal} onChange={e => setInputVal(e.target.value)} style={{ flex: 1, border: "none", background: "transparent", outline: "none", fontSize: 13, color: "#202124", fontFamily: "Arial" }} />
          <span style={{ fontSize: 13, color: "#5f6368", cursor: "pointer" }}>☆</span>
        </div>
        <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#4285f4", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12, fontWeight: "bold" }}>G</div>
      </div>
      {/* Progress */}
      {progress > 0 && <div style={{ height: 3, background: "#e0e0e0" }}><div style={{ height: "100%", background: "#4285f4", width: progress + "%", transition: "width 0.15s" }} /></div>}
      {/* Page */}
      <iframe ref={frameRef} style={{ width: "100%", height: 280, display: "block", border: "none", background: "#fff" }} title="chrome" sandbox="allow-scripts allow-same-origin" />
    </div>
  );
}

/* ─────────────────────────────────────────────
   ERA 4 – AI Browser  (2023+)
───────────────────────────────────────────── */
function AIBrowser() {
  const [aiInput, setAiInput] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [activeSpace, setActiveSpace] = useState(0);
  const [inputVal, setInputVal] = useState("arc://home");
  const [activeTab, setActiveTab] = useState(0);
  const frameRef = useRef(null);

  const spaces = ["🏠 Home", "💼 Work", "🎨 Design"];
  const tabs = ["New Tab", "GitHub Copilot", "Perplexity AI"];

  const aiResponses = {
    default: "I can summarize pages, answer questions about what you're reading, book flights, write emails, or just search smarter. Try asking me anything!",
    summarize: "**Page Summary:** This article discusses the evolution of web browsers from 1990 to present. Key milestones: Mosaic (1993) brought images, Netscape dominated (1994–1998), Chrome revolutionized speed (2008), and AI is now being embedded directly into browsers.",
    translate: "**Translation complete!** Page has been translated from Japanese to English. 847 words translated across 12 paragraphs.",
    book: "I found 3 flights from Delhi to Mumbai tomorrow:\n• IndiGo 6E-101 · 06:00 AM · ₹4,299\n• Air India AI-615 · 09:15 AM · ₹5,100\n• SpiceJet SG-901 · 12:30 PM · ₹3,850\nShall I book the cheapest option?",
  };

  const sendAI = () => {
    if (!aiInput.trim()) return;
    setAiLoading(true);
    const q = aiInput.toLowerCase();
    const key = q.includes("summar") ? "summarize" : q.includes("translat") ? "translate" : q.includes("flight") || q.includes("book") ? "book" : "default";
    setTimeout(() => { setAiResponse(aiResponses[key]); setAiLoading(false); setAiInput(""); }, 1200);
  };

  const pages = {
    0: `<div style="background:linear-gradient(135deg,#0d0d1a,#1a0d2e);min-height:260px;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;font-family:system-ui,sans-serif;padding:16px;">
      <div style="font-size:36px;margin-bottom:8px;">🧠</div>
      <div style="font-size:18px;font-weight:600;margin-bottom:4px;background:linear-gradient(90deg,#a78bfa,#38bdf8);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Good morning</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4);margin-bottom:16px;">${new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})}</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;">
        ${["📧 3 unread emails","🗓️ 2 meetings today","📰 AI news digest","💡 Resume that tab?"].map(s=>`<div style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);border-radius:20px;padding:6px 14px;font-size:12px;">${s}</div>`).join("")}
      </div>
    </div>`,
    1: `<div style="background:#0d1117;min-height:260px;padding:12px;font-family:monospace;color:#e6edf3;font-size:12px;">
      <div style="color:#58a6ff;margin-bottom:8px;">// GitHub Copilot – AI pair programmer</div>
      <div style="color:#8b949e;margin-bottom:4px;">function fetchUserData(userId) {</div>
      <div style="background:rgba(88,166,255,0.1);border-left:2px solid #58a6ff;padding:2px 8px;margin-bottom:4px;color:#79c0ff;">
        &nbsp;&nbsp;// 🤖 Copilot suggestion:<br/>
        &nbsp;&nbsp;const response = await fetch('/api/users/' + userId);<br/>
        &nbsp;&nbsp;return response.json();<br/>
        &nbsp;&nbsp;<span style="color:#3fb950">// Tab to accept</span>
      </div>
      <div style="color:#8b949e;">}</div>
    </div>`,
    2: `<div style="background:#fff;min-height:260px;padding:12px;font-family:'Inter',Arial,sans-serif;">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
        <div style="background:#20b2aa;color:#fff;padding:4px 10px;border-radius:4px;font-size:13px;font-weight:bold;">Perplexity</div>
        <div style="flex:1;background:#f5f5f5;border-radius:20px;padding:6px 14px;font-size:13px;color:#999;">Ask anything...</div>
      </div>
      <div style="background:#f0fdf4;border:1px solid #86efac;border-radius:8px;padding:10px;font-size:12px;">
        <div style="font-weight:bold;color:#166534;margin-bottom:4px;">✦ Answer</div>
        <div style="color:#374151;line-height:1.6;">The evolution of web browsers began in 1990 with Tim Berners-Lee's WorldWideWeb. The pivotal moment was Mosaic in 1993, which first displayed images alongside text. Today's browsers integrate AI assistants, achieving speeds unimaginable in the dial-up era.</div>
        <div style="margin-top:6px;color:#666;font-size:11px;">Sources: MDN, Wikipedia, web.dev</div>
      </div>
    </div>`,
  };

  useEffect(() => {
    if (!frameRef.current) return;
    const doc = frameRef.current.contentDocument;
    doc.open();
    doc.write(`<!DOCTYPE html><html><head><style>*{box-sizing:border-box;}body{margin:0;}</style></head><body>${pages[activeTab]}</body></html>`);
    doc.close();
  }, [activeTab]);

  return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", background: "#1a1a2e", borderRadius: 12, width: "100%", maxWidth: 680, overflow: "hidden", border: "1px solid rgba(167,139,250,0.3)", boxShadow: "0 0 40px rgba(139,92,246,0.2)" }}>
      {/* Spaces */}
      <div style={{ display: "flex", gap: 4, padding: "8px 10px 0", background: "#16213e" }}>
        {spaces.map((s, i) => (
          <div key={i} onClick={() => setActiveSpace(i)} style={{ padding: "4px 12px", borderRadius: "6px 6px 0 0", background: i === activeSpace ? "#1a1a2e" : "transparent", cursor: "pointer", fontSize: 11, color: i === activeSpace ? "#a78bfa" : "rgba(255,255,255,0.4)", fontWeight: i === activeSpace ? 600 : 400 }}>{s}</div>
        ))}
      </div>
      {/* Tabs */}
      <div style={{ display: "flex", alignItems: "flex-end", padding: "0 8px", gap: 2, background: "#1a1a2e" }}>
        {tabs.map((t, i) => (
          <div key={i} onClick={() => setActiveTab(i)} style={{ padding: "6px 12px 6px", background: i === activeTab ? "rgba(255,255,255,0.06)" : "transparent", cursor: "pointer", fontSize: 11, color: i === activeTab ? "#e0e0ff" : "rgba(255,255,255,0.35)", borderRadius: "6px 6px 0 0", borderBottom: i === activeTab ? "2px solid #a78bfa" : "2px solid transparent", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 120 }}>{t}</div>
        ))}
        <div style={{ width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.3)", fontSize: 14, cursor: "pointer", marginBottom: 4 }}>+</div>
      </div>
      {/* Address */}
      <div style={{ background: "rgba(255,255,255,0.04)", padding: "6px 10px", display: "flex", alignItems: "center", gap: 6, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        {["◀", "▶", "↺"].map((ic, i) => <button key={i} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.3)", fontSize: 13, cursor: "pointer", padding: "3px 5px" }}>{ic}</button>)}
        <div style={{ flex: 1, background: "rgba(255,255,255,0.06)", borderRadius: 8, padding: "5px 12px", display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 11, color: "#a78bfa" }}>✦</span>
          <input value={inputVal} onChange={e => setInputVal(e.target.value)} style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: 12, color: "rgba(255,255,255,0.8)", fontFamily: "inherit" }} />
        </div>
        <div style={{ width: 26, height: 26, borderRadius: "50%", background: "linear-gradient(135deg,#a78bfa,#38bdf8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#fff", fontWeight: "bold" }}>✦</div>
      </div>
      {/* Page */}
      <iframe ref={frameRef} style={{ width: "100%", height: 210, display: "block", border: "none" }} title="ai-browser" sandbox="allow-scripts allow-same-origin" />
      {/* AI Bar */}
      <div style={{ background: "rgba(0,0,0,0.4)", borderTop: "1px solid rgba(167,139,250,0.2)", padding: "8px 10px" }}>
        {aiResponse && (
          <div style={{ background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.25)", borderRadius: 8, padding: "8px 10px", marginBottom: 6, fontSize: 11, color: "rgba(255,255,255,0.8)", lineHeight: 1.6, whiteSpace: "pre-line" }}>
            <span style={{ color: "#a78bfa" }}>✦ AI  </span>{aiResponse}
          </div>
        )}
        <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(167,139,250,0.3)", borderRadius: 8, padding: "5px 10px" }}>
          <span style={{ fontSize: 13, color: "#a78bfa" }}>✦</span>
          <input value={aiInput} onChange={e => setAiInput(e.target.value)} onKeyDown={e => e.key === "Enter" && sendAI()} placeholder='Ask AI... "Summarize", "Translate", "Book a flight"' style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: 12, color: "rgba(255,255,255,0.8)", fontFamily: "inherit" }} />
          {aiLoading
            ? <span style={{ fontSize: 10, color: "#a78bfa", animation: "pulse 1s infinite" }}>⋯</span>
            : <button onClick={sendAI} style={{ background: "#a78bfa", border: "none", borderRadius: 6, color: "#fff", fontSize: 11, padding: "3px 10px", cursor: "pointer" }}>Ask</button>}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN SLIDESHOW COMPONENT
───────────────────────────────────────────── */
const eras = [
  {
    id: 1, year: "1994–1997", label: "The Netscape Era", accent: "#00c878", bg: "from-[#001a0d] to-[#000d06]",
    tagline: "The web gets a face", fact: "Netscape introduced JavaScript — the language that still powers every website today.",
    stat1: "80%", stat1l: "Peak market share", stat2: "~600K", stat2l: "Web users in 1993", stat3: "1st", stat3l: "SSL secure browsing",
    Component: NetscapeBrowser,
  },
  {
    id: 2, year: "1998–2006", label: "The IE Monopoly", accent: "#4f9eff", bg: "from-[#00080d] to-[#000508]",
    tagline: "Microsoft wins the war", fact: "IE6 was so dominant it killed innovation for 5 years. Developers wrote CSS hacks just to survive it.",
    stat1: "96%", stat1l: "IE market share (2002)", stat2: "2022", stat2l: "IE finally retired", stat3: "5yrs", stat3l: "of stagnation",
    Component: IEBrowser,
  },
  {
    id: 3, year: "2008–2020", label: "The Chrome Revolution", accent: "#4285f4", bg: "from-[#000820] to-[#000510]",
    tagline: "Speed becomes a religion", fact: "Chrome's V8 engine made JavaScript 10–100× faster overnight. The modern web was born.",
    stat1: "65%", stat1l: "Current global share", stat2: "3.2B", stat2l: "Chrome users worldwide", stat3: "4yrs", stat3l: "To reach #1",
    Component: ChromeBrowser,
  },
  {
    id: 4, year: "2023–Now", label: "The AI Era", accent: "#a78bfa", bg: "from-[#0d001a] to-[#060008]",
    tagline: "Agent, not just window", fact: "The next browser won't just render pages — it will read them, summarize them, and act on your behalf.",
    stat1: "70%+", stat1l: "Browsers on Chromium", stat2: "2025", stat2l: "AI in every browser", stat3: "∞", stat3l: "What's next",
    Component: AIBrowser,
  },
];

 function BrowserEvolutionLive() {
  const [active, setActive] = useState(0);
  const [animDir, setAnimDir] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const era = eras[active];

  const goTo = (idx) => {
    if (isAnimating || idx === active || idx < 0 || idx >= eras.length) return;
    setAnimDir(idx > active ? 1 : -1);
    setIsAnimating(true);
    setTimeout(() => { setActive(idx); setIsAnimating(false); }, 350);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#030306", color: "#fff", fontFamily: "'Inter','DM Sans',system-ui,sans-serif", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 32px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ fontSize: 11, letterSpacing: 4, textTransform: "uppercase", color: "rgba(255,255,255,0.3)", fontWeight: 600 }}>
          Browser Evolution
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {eras.map((e, i) => (
            <button key={i} onClick={() => goTo(i)} style={{ width: i === active ? 28 : 8, height: 8, borderRadius: 4, border: "none", background: i === active ? era.accent : "rgba(255,255,255,0.15)", cursor: "pointer", transition: "all 0.3s", padding: 0 }} />
          ))}
        </div>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", fontFamily: "monospace" }}>{String(active + 1).padStart(2, "0")} / {String(eras.length).padStart(2, "0")}</div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 0, maxWidth: 1200, margin: "0 auto", width: "100%", padding: "40px 32px", boxSizing: "border-box", alignItems: "center" }}>
        {/* Left */}
        <div style={{ paddingRight: 48, opacity: isAnimating ? 0 : 1, transform: isAnimating ? `translateX(${animDir * -30}px)` : "translateX(0)", transition: "all 0.35s ease" }}>
          <div style={{ fontSize: 10, letterSpacing: 4, textTransform: "uppercase", color: era.accent, fontWeight: 700, marginBottom: 10 }}>
            {era.year}
          </div>
          <h2 style={{ fontSize: 38, fontWeight: 800, lineHeight: 1.1, margin: "0 0 8px", letterSpacing: -1 }}>{era.label}</h2>
          <p style={{ fontSize: 14, color: era.accent, marginBottom: 20, fontWeight: 500 }}>{era.tagline}</p>
          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 20 }}>
            {[[era.stat1, era.stat1l], [era.stat2, era.stat2l], [era.stat3, era.stat3l]].map(([v, l], i) => (
              <div key={i} style={{ background: `${era.accent}10`, border: `1px solid ${era.accent}30`, borderRadius: 10, padding: "12px 10px" }}>
                <div style={{ fontSize: 18, fontWeight: 700, color: era.accent }}>{v}</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginTop: 2, lineHeight: 1.3 }}>{l}</div>
              </div>
            ))}
          </div>
          {/* Fact */}
          <div style={{ background: `${era.accent}08`, border: `1px solid ${era.accent}20`, borderLeft: `3px solid ${era.accent}`, borderRadius: "0 8px 8px 0", padding: "10px 14px", fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
            <span style={{ color: era.accent }}>💡 </span>{era.fact}
          </div>
          {/* Nav */}
          <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
            <button onClick={() => goTo(active - 1)} disabled={active === 0} style={{ background: "transparent", border: `1px solid ${active === 0 ? "rgba(255,255,255,0.1)" : era.accent}`, color: active === 0 ? "rgba(255,255,255,0.2)" : era.accent, borderRadius: 8, padding: "10px 22px", fontSize: 13, cursor: active === 0 ? "not-allowed" : "pointer", transition: "all 0.2s", fontWeight: 500 }}>← Previous</button>
            <button onClick={() => goTo(active + 1)} disabled={active === eras.length - 1} style={{ background: active === eras.length - 1 ? "transparent" : era.accent, border: `1px solid ${era.accent}`, color: active === eras.length - 1 ? "rgba(255,255,255,0.2)" : "#000", borderRadius: 8, padding: "10px 22px", fontSize: 13, cursor: active === eras.length - 1 ? "not-allowed" : "pointer", transition: "all 0.2s", fontWeight: 600 }}>Next Era →</button>
          </div>
        </div>

        {/* Right — Live Browser */}
        <div style={{ opacity: isAnimating ? 0 : 1, transform: isAnimating ? `translateX(${animDir * 30}px)` : "translateX(0)", transition: "all 0.35s ease" }}>
          <div style={{ borderRadius: 14, overflow: "hidden", boxShadow: `0 0 80px ${era.accent}25, 0 30px 80px rgba(0,0,0,0.6)`, border: `1px solid ${era.accent}25` }}>
            <era.Component />
          </div>
          <div style={{ textAlign: "center", marginTop: 10, fontSize: 11, color: "rgba(255,255,255,0.25)" }}>
            ↑ fully interactive — click, type, navigate
          </div>
        </div>
      </div>
      <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}`}</style>
    </div>
  );
}
export default BrowserEvolutionLive;