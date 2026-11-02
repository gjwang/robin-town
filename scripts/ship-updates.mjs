export const PRODUCTION_ORIGIN = 'https://robin-town-production.up.railway.app';
export const GITHUB_REPO_URL = 'https://github.com/harrymove-ctrl/robin-town';
export const WIF_TOKEN_CONTRACT_MAINNET = '0x5173b8eA6923c2d40267890D45C46a3480954773';

export const SHIP_RELEASES = [
  {
    version: 'v1.3.0',
    date: '2026-11-02',
    title: 'Zodiac Harbor Events, AI Counter-Offers, EIP-6963 Wallets & Beat My Score Links',
    tagUrl: `${GITHUB_REPO_URL}/releases/tag/v1.3.0`,
    highlights: [
      'Added 6 deterministic Zodiac Market Events (Harbor Cargo Boom, Lantern Night Festival, Morning Market Bloom, Merchant Guild Rebate, Artisan Ribbon Grant, Port Prosperity Wave) permuted cleanly per Daily Harbor Seed.',
      'Added District Guild Majority Seals (+15 $wif/yr per 6+ plot majority across the 6 harbor districts) and full income Breakdown tracking in the Shopkeeper Ledger.',
      'Added intelligent 1-click AI Counter-Offers and Rival Monopoly Risk warnings inside the OTC Bargaining Table.',
      'Added EIP-6963 multi-wallet discovery, mobile MetaMask deep-link handoff, 1-click wallet_watchAsset ($wif), and RobinTownHarborVault ABI encoders on Robinhood Chain (4663).',
      'Hardened Wallet Registry anti-spoof bounds, per-IP match submission rate limiting, dynamic OpenGraph social preview unfurling (?room= & ?daily=&target=), tabletop deal pings, and Year 6 Harbor Fireworks.',
    ],
  },
  {
    version: 'v1.2.0',
    date: '2026-11-01',
    title: 'Full-Viewport Responsive Overhaul, Harbor Wallet Registry & Daily Seed Streaks',
    tagUrl: `${GITHUB_REPO_URL}/releases/tag/v1.2.0`,
    highlights: [
      'Rebuilt responsive geometry across 9 desktop, tablet, compact laptop, mobile portrait, and mobile landscape viewports with zero horizontal overflow.',
      'Shipped persistent Harbor Wallet Registry with gasless EIP-191 personal_sign ownership verification, Chain 4663 $wif receipt verification, and Daily Harbor Challenge leaderboards.',
      'Added downloadable 1200x630 Year 6 Harbor Empire Score Cards, live OTC deal-closeness meters, and 1-click Sweeten (+10 $wif) bargaining.',
    ],
  },
  {
    version: 'v1.1.0',
    date: '2026-10-31',
    title: 'Fast Play A-to-Z Simulation, Smart Draft Synergies & Interactive Coachmarks',
    tagUrl: `${GITHUB_REPO_URL}/releases/tag/v1.1.0`,
    highlights: [
      'Added Fast Play 1x, 3x, and 8x tabletop simulation alongside bot-to-bot OTC bargaining between Cole, Maya, and Clara.',
      'Added adjacent corner synergy indicators, marginal +$wif/yr build yield badges, and a 3-step interactive Year 1 harbor onboarding banner.',
      'Upgraded cross-device WebSocket room discovery with 1-click public room joining and perspective-swapped PvP trading.',
    ],
  },
  {
    version: 'v1.0.0',
    date: '2026-10-30',
    title: 'Robin Town Launch: 3D Harbor Diorama, 2D Tabletop & Official $wif Integration',
    tagUrl: `${GITHUB_REPO_URL}/releases/tag/v1.0.0`,
    highlights: [
      'Launched dual-mode Three.js 3D Harbor City Diorama (Day, Sunset, Night atmospheres) and illustrated 2D/3D Tilt tabletop map with zero state loss when switching.',
      'Integrated official World is Flat ($wif) ERC-20 token (0x5173b8eA6923c2d40267890D45C46a3480954773) on Robinhood Chain Mainnet (Chain ID 4663) with live burn proof and 1.20x staking boost.',
      'Shipped 6-character RFC 6455 WebSocket multiplayer rooms, synthesized lo-fi harbor radio, and click-wheel iPod controller.',
    ],
  },
];

function escapeHtml(raw) {
  return String(raw ?? '').replace(
    /[&<>"']/g,
    (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch] || ch,
  );
}

export function renderUpdatesHtml() {
  const articlesHtml = SHIP_RELEASES.map(
    (rel, idx) => `<article class="ship-card" id="${escapeHtml(rel.version)}">
      <header class="ship-card-head">
        <div class="ship-badges">
          <span class="ship-version">${escapeHtml(rel.version)}</span>
          <time datetime="${escapeHtml(rel.date)}">${escapeHtml(rel.date)}</time>
          ${idx === 0 ? '<span class="ship-latest">LATEST SHIP</span>' : ''}
        </div>
        <h2>${escapeHtml(rel.title)}</h2>
      </header>
      <ol class="ship-list">
        ${rel.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join('\n        ')}
      </ol>
      <footer class="ship-card-foot">
        <a href="${escapeHtml(rel.tagUrl)}" target="_blank" rel="noopener">GitHub Release ${escapeHtml(rel.version)} ↗</a>
      </footer>
    </article>`,
  ).join('\n    ');

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Robin Town · Ship Log &amp; Product Releases on Robinhood Chain (4663)</title>
    <meta name="description" content="Verified product releases and engineering ship log for Robin Town on Robinhood Chain Mainnet (4663) powered by World is Flat ($wif)." />
    <link rel="canonical" href="${PRODUCTION_ORIGIN}/updates" />
    <link rel="vcs-git" href="${GITHUB_REPO_URL}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Robin Town" />
    <meta property="og:url" content="${PRODUCTION_ORIGIN}/updates" />
    <meta property="og:title" content="Robin Town · Verified Ship Log &amp; Releases" />
    <meta property="og:description" content="Follow every shipped release of Robin Town on Robinhood Chain (4663) with World is Flat ($wif)." />
    <meta property="og:image" content="${PRODUCTION_ORIGIN}/assets/saigon/saigon-town-og-v8.png?v=v13" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Robin Town · Verified Ship Log &amp; Releases" />
    <meta name="twitter:description" content="Follow every shipped release of Robin Town on Robinhood Chain (4663) with World is Flat ($wif)." />
    <meta name="twitter:image" content="${PRODUCTION_ORIGIN}/assets/saigon/saigon-town-og-v8.png?v=v13" />
    <style>
      :root {
        color-scheme: dark;
        --bg: #0f291e;
        --panel: #163b2b;
        --border: rgba(238, 195, 83, 0.35);
        --gold: #eec353;
        --mint: #8bf5b5;
        --text: #f6f2e6;
        --muted: #b9d4c4;
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        background: radial-gradient(circle at top, #1b4a36 0%, var(--bg) 70%);
        color: var(--text);
        line-height: 1.55;
        padding: 32px 16px 64px;
      }
      main { max-width: 880px; margin: 0 auto; }
      .hero {
        background: rgba(12, 33, 24, 0.86);
        border: 2px solid var(--gold);
        border-radius: 18px;
        padding: 24px;
        margin-bottom: 24px;
      }
      .kicker {
        display: inline-block;
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 0.06em;
        color: var(--mint);
        background: rgba(57, 168, 131, 0.18);
        border: 1px solid rgba(139, 245, 181, 0.35);
        border-radius: 999px;
        padding: 4px 12px;
        margin-bottom: 10px;
      }
      h1 { margin: 0 0 8px; font-size: clamp(26px, 4vw, 38px); line-height: 1.15; }
      .hero p { margin: 0 0 14px; color: var(--muted); }
      .links { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; }
      .btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 8px 14px;
        border-radius: 10px;
        font-weight: 700;
        font-size: 14px;
        text-decoration: none;
        color: #14261c;
        background: var(--gold);
      }
      .btn.secondary {
        background: rgba(255, 255, 255, 0.08);
        color: var(--text);
        border: 1px solid var(--border);
      }
      .contract-meta {
        margin-top: 14px;
        padding-top: 12px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        font-size: 13px;
        color: var(--muted);
        word-break: break-all;
      }
      .contract-meta code { color: var(--mint); }
      .ship-card {
        background: var(--panel);
        border: 1px solid var(--border);
        border-radius: 16px;
        padding: 20px 22px;
        margin-bottom: 16px;
      }
      .ship-badges {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
        margin-bottom: 8px;
        font-size: 13px;
      }
      .ship-version {
        font-weight: 800;
        color: #14261c;
        background: var(--gold);
        padding: 2px 10px;
        border-radius: 999px;
      }
      .ship-latest {
        font-weight: 800;
        font-size: 11px;
        color: var(--mint);
        border: 1px solid var(--mint);
        padding: 2px 8px;
        border-radius: 999px;
      }
      time { color: var(--muted); font-weight: 600; }
      h2 { margin: 0 0 12px; font-size: 20px; }
      .ship-list { margin: 0 0 14px; padding-left: 20px; color: var(--text); }
      .ship-list li { margin-bottom: 6px; }
      .ship-card-foot a { color: var(--gold); font-weight: 700; text-decoration: none; font-size: 14px; }
      .ship-card-foot a:hover { text-decoration: underline; }
    </style>
  </head>
  <body>
    <main>
      <header class="hero">
        <span class="kicker">ROBINHOOD CHAIN MAINNET (4663) · VERIFIED SHIP LOG</span>
        <h1>Robin Town Product Updates &amp; Releases</h1>
        <p>Six-year 3D Harbor Diorama and 2D street trading board game built on Robinhood Chain (4663) with official World is Flat ($wif) utility.</p>
        <nav class="links" aria-label="Primary project links">
          <a class="btn" href="/">Play Robin Town Live ▶</a>
          <a class="btn secondary" href="${GITHUB_REPO_URL}" rel="noopener">GitHub Repository (harrymove-ctrl/robin-town) ↗</a>
          <a class="btn secondary" href="${GITHUB_REPO_URL}/releases" rel="noopener">GitHub Releases ↗</a>
          <a class="btn secondary" href="/updates.json">JSON Feed (/updates.json)</a>
        </nav>
        <div class="contract-meta">
          Official World is Flat ($wif) Token on Robinhood Chain (4663): <code>${WIF_TOKEN_CONTRACT_MAINNET}</code>
        </div>
      </header>
      ${articlesHtml}
    </main>
  </body>
</html>`;
}

export function renderDynamicIndexHtml(baseHtml, rawRequestUrl, origin = PRODUCTION_ORIGIN) {
  let parsed;
  try {
    parsed = new URL(rawRequestUrl || '/', origin);
  } catch {
    return baseHtml;
  }

  const rawRoom = (parsed.searchParams.get('room') || '').trim().toUpperCase();
  const rawDaily = (parsed.searchParams.get('daily') || '').trim();
  const rawTarget = Number(parsed.searchParams.get('target') || '');
  const validRoom = /^[A-Z0-9]{6}$/.test(rawRoom) ? rawRoom : null;
  const validDaily = /^\d{4}-\d{2}-\d{2}$/.test(rawDaily) ? rawDaily : null;
  const validTarget =
    Number.isFinite(rawTarget) && rawTarget > 0 && rawTarget <= 250_000
      ? Math.round(rawTarget)
      : null;

  if (!validRoom && !validDaily && !validTarget) {
    return baseHtml;
  }

  let dynTitle = 'Robin Town · Build with $wif on Robinhood Chain';
  let dynDesc =
    'Make a deal. Open a shop. Put $wif to work across six years on Robinhood Chain (4663).';
  const queryParts = [];

  if (validRoom) {
    dynTitle = `Join Live Room ${validRoom} · Robin Town on Robinhood Chain`;
    dynDesc = `Pull up a stool at Multiplayer Table ${validRoom}! Bargain OTC deals in $wif, draft street corners, and build 3D harbor shophouses live.`;
    queryParts.push(`room=${encodeURIComponent(validRoom)}`);
  } else if (validDaily && validTarget) {
    dynTitle = `Beat ${validTarget.toLocaleString('en-US')} $wif on Daily Seed ${validDaily} · Robin Town`;
    dynDesc = `Can you beat ${validTarget.toLocaleString('en-US')} $wif on Daily Harbor Seed ${validDaily}? Same 6-year plot & shop draws for every trader today on Robinhood Chain (4663).`;
    queryParts.push(`daily=${encodeURIComponent(validDaily)}`, `target=${validTarget}`);
  } else if (validDaily) {
    dynTitle = `Daily Harbor Seed ${validDaily} · Robin Town ($wif)`;
    dynDesc = `Play today's deterministic 6-year Daily Harbor Challenge (${validDaily}) on Robinhood Chain (4663) and climb the leaderboard!`;
    queryParts.push(`daily=${encodeURIComponent(validDaily)}`);
  } else if (validTarget) {
    dynTitle = `Challenge: Beat ${validTarget.toLocaleString('en-US')} $wif in Robin Town!`;
    dynDesc = `A harbor merchant finished Year 6 with ${validTarget.toLocaleString('en-US')} $wif. Pull up a stool and beat their empire in 6 zodiac years!`;
    queryParts.push(`target=${validTarget}`);
  }

  const canonicalShareUrl = `${origin}/${queryParts.length ? '?' + queryParts.join('&') : ''}`;
  const safeTitle = escapeHtml(dynTitle);
  const safeDesc = escapeHtml(dynDesc);
  const safeUrl = escapeHtml(canonicalShareUrl);

  return baseHtml
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${safeTitle}</title>`)
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:title" content="${safeTitle}" />`,
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:title" content="${safeTitle}" />`,
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:description" content="${safeDesc}" />`,
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:description" content="${safeDesc}" />`,
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:url" content="${safeUrl}" />`,
    );
}

export function handleShipUpdatesRequest(req, res) {
  const rawPath = (req.url || '/').split('?')[0] || '/';
  if (rawPath === '/updates' && (req.method === 'GET' || req.method === 'HEAD')) {
    const html = renderUpdatesHtml();
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=60',
      'X-Content-Type-Options': 'nosniff',
    });
    if (req.method === 'HEAD') {
      res.end();
      return true;
    }
    res.end(html);
    return true;
  }

  if (rawPath === '/updates.json' && (req.method === 'GET' || req.method === 'HEAD')) {
    const body = JSON.stringify({
      ok: true,
      project: 'Robin Town',
      chainId: 4663,
      wifTokenContract: WIF_TOKEN_CONTRACT_MAINNET,
      websiteUrl: PRODUCTION_ORIGIN,
      githubUrl: GITHUB_REPO_URL,
      updatesUrl: `${PRODUCTION_ORIGIN}/updates`,
      releases: SHIP_RELEASES,
    });
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=60',
      'Access-Control-Allow-Origin': '*',
    });
    if (req.method === 'HEAD') {
      res.end();
      return true;
    }
    res.end(body);
    return true;
  }

  return false;
}
