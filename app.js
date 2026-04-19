// ===== NICK-HUB MAIN JS =====

// NAV TOGGLE
document.querySelector('.nav-toggle')?.addEventListener('click', () => {
  document.querySelector('.nav-links')?.classList.toggle('open');
});

// ===== COIN DATA (comprehensive list) =====
const COINS = [
  { id:'bitcoin', sym:'BTC', name:'Bitcoin', chain:'Bitcoin', color:'#f7931a', price:65420, chg:2.34, mc:'1.28T', vol:28.4, desc:'The original decentralized digital currency. Fixed 21M supply, secured by Proof of Work mining. Digital gold and the largest cryptocurrency by market cap.', wp:'https://bitcoin.org/bitcoin.pdf', explorer:'https://blockchair.com/bitcoin' },
  { id:'ethereum', sym:'ETH', name:'Ethereum', chain:'Ethereum', color:'#627eea', price:3215, chg:1.87, mc:'386B', vol:14.2, desc:'The leading smart contract platform. Powers DeFi, NFTs, and thousands of dApps. Moved to Proof of Stake in 2022, cutting energy use by 99.95%.', wp:'https://ethereum.org/en/whitepaper/', explorer:'https://etherscan.io' },
  { id:'bnb', sym:'BNB', name:'BNB', chain:'BNB Chain', color:'#f3ba2f', price:412, chg:-0.54, mc:'62B', vol:1.8, desc:'Native token of BNB Chain and Binance exchange. Used for gas fees, trading discounts, and DeFi applications on BNB Smart Chain.', wp:'https://github.com/bnb-chain/whitepaper', explorer:'https://bscscan.com' },
  { id:'solana', sym:'SOL', name:'Solana', chain:'Solana', color:'#9945ff', price:148, chg:3.21, mc:'68B', vol:3.1, desc:'High-performance blockchain with 65,000+ TPS. Uses Proof of History + Proof of Stake. Popular for NFTs, DEXs, and consumer apps with sub-cent fees.', wp:'https://solana.com/solana-whitepaper.pdf', explorer:'https://solscan.io' },
  { id:'xrp', sym:'XRP', name:'XRP', chain:'XRP Ledger', color:'#346aa9', price:0.582, chg:-1.23, mc:'32B', vol:1.4, desc:'Fast cross-border payment token. XRP Ledger settles transactions in 3-5 seconds at minimal cost. Used by financial institutions for international transfers.', wp:'https://ripple.com/files/ripple_consensus_whitepaper.pdf', explorer:'https://xrpscan.com' },
  { id:'usdc', sym:'USDC', name:'USD Coin', chain:'Multi-Chain', color:'#2775ca', price:1.000, chg:0.01, mc:'32B', vol:6.2, desc:'Regulated fiat-backed stablecoin by Circle. Each USDC backed 1:1 by cash and US Treasuries. Available on Ethereum, Solana, Polygon and more.', wp:'https://f.hubspotusercontent30.net/hubfs/9304636/PDF/centre-whitepaper.pdf', explorer:'https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48' },
  { id:'dogecoin', sym:'DOGE', name:'Dogecoin', chain:'Dogecoin', color:'#c2a633', price:0.162, chg:4.12, mc:'23B', vol:0.9, desc:'The original meme coin turned cultural phenomenon. Proof of Work, unlimited supply, 1-minute block times. Elon Musk endorsement drove mainstream awareness.', wp:'https://github.com/dogecoin/dogecoin', explorer:'https://blockchair.com/dogecoin' },
  { id:'cardano', sym:'ADA', name:'Cardano', chain:'Cardano', color:'#0033ad', price:0.468, chg:-0.89, mc:'16B', vol:0.6, desc:'Peer-reviewed academic blockchain built on Haskell. Proof of Stake (Ouroboros). Strong focus on developing world financial inclusion and formal verification.', wp:'https://docs.cardano.org/introduction', explorer:'https://cardanoscan.io' },
  { id:'avalanche', sym:'AVAX', name:'Avalanche', chain:'Avalanche', color:'#e84142', price:37.8, chg:2.67, mc:'15B', vol:0.7, desc:'Layer-1 with sub-second finality and unique 3-chain architecture. Subnets allow custom blockchain deployments. Growing DeFi and institutional adoption.', wp:'https://assets.website-files.com/5d80307810123f5ffbb34d6e/6008d7bbf8b10d1eb01e7e16_Avalanche%20Platform%20Whitepaper.pdf', explorer:'https://snowtrace.io' },
  { id:'polygon', sym:'POL', name:'Polygon', chain:'Polygon', color:'#8247e5', price:0.612, chg:1.44, mc:'6B', vol:0.4, desc:'Ethereum scaling solution (Layer 2). EVM-compatible with much lower fees. Used by major brands including Starbucks, Reddit, and Nike for Web3 experiences.', wp:'https://polygon.technology/papers/', explorer:'https://polygonscan.com' },
  { id:'chainlink', sym:'LINK', name:'Chainlink', chain:'Multi-Chain', color:'#2c5ff6', price:14.2, chg:-0.32, mc:'8B', vol:0.5, desc:'Decentralized oracle network. Connects smart contracts to real-world data, APIs, and payment systems. Used by Aave, Synthetix, and 1,000+ DeFi protocols.', wp:'https://research.chain.link/whitepaper-v2.pdf', explorer:'https://etherscan.io/token/0x514910771af9ca656af840dff83e8264ecf986ca' },
  { id:'tron', sym:'TRX', name:'TRON', chain:'TRON', color:'#ff0013', price:0.128, chg:0.77, mc:'11B', vol:0.8, desc:'High-throughput blockchain focused on digital content and entertainment. Free transactions for basic use. Largest USDT circulation on any blockchain.', wp:'https://tron.network/static/doc/white_paper_v_2_0.pdf', explorer:'https://tronscan.org' },
  { id:'polkadot', sym:'DOT', name:'Polkadot', chain:'Polkadot', color:'#e6007a', price:7.84, chg:-1.56, mc:'11B', vol:0.4, desc:'Multi-chain network enabling interoperability between blockchains. Parachains connect to the Relay Chain for shared security. Founded by Ethereum co-founder Gavin Wood.', wp:'https://polkadot.network/PolkaDotPaper.pdf', explorer:'https://polkascan.io' },
  { id:'shib', sym:'SHIB', name:'Shiba Inu', chain:'Ethereum', color:'#ff4500', price:0.0000248, chg:5.88, mc:'14B', vol:0.7, desc:'Ethereum-based meme token with growing ecosystem including ShibaSwap DEX, Shibarium L2, and Shib The Metaverse. One quadrillion initial supply.', wp:'https://shibatoken.com/shib-intro.pdf', explorer:'https://etherscan.io/token/0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE' },
  { id:'dai', sym:'DAI', name:'DAI', chain:'Multi-Chain', color:'#f5ac37', price:1.000, chg:0.02, mc:'5B', vol:0.3, desc:'Decentralized crypto-backed stablecoin by MakerDAO. Soft-pegged to USD through overcollateralization and algorithmic stability. Governed by MKR token holders.', wp:'https://makerdao.com/en/whitepaper/', explorer:'https://etherscan.io/token/0x6b175474e89094c44da98b954eedeac495271d0f' },
  { id:'litecoin', sym:'LTC', name:'Litecoin', chain:'Litecoin', color:'#bfbbbb', price:84.5, chg:0.95, mc:'6B', vol:0.4, desc:"Bitcoin's silver to Bitcoin's gold. 4x faster block time, Scrypt PoW algorithm. One of the oldest cryptocurrencies, launched 2011. Used for payments and store of value.", wp:'https://litecoin.org/', explorer:'https://blockchair.com/litecoin' },
  { id:'uniswap', sym:'UNI', name:'Uniswap', chain:'Ethereum', color:'#ff007a', price:9.82, chg:2.14, mc:'5B', vol:0.3, desc:'Governance token of the largest decentralized exchange. UNI holders vote on protocol changes and fee switches. Uniswap processes billions in daily trading volume.', wp:'https://uniswap.org/whitepaper-v3.pdf', explorer:'https://etherscan.io/token/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984' },
  { id:'atom', sym:'ATOM', name:'Cosmos', chain:'Cosmos', color:'#2e3148', price:8.94, chg:-0.67, mc:'3B', vol:0.2, desc:'Internet of Blockchains. IBC protocol enables sovereign blockchains to communicate and transfer assets. Hub-and-spoke architecture for modular blockchain building.', wp:'https://cosmos.network/resources/whitepaper', explorer:'https://www.mintscan.io/cosmos' },
  { id:'near', sym:'NEAR', name:'NEAR Protocol', chain:'NEAR', color:'#00c08b', price:5.62, chg:3.45, mc:'6B', vol:0.3, desc:'Sharded Proof of Stake blockchain optimized for developer experience. Nightshade sharding, human-readable account names, and JavaScript/Rust SDK.', wp:'https://near.org/papers/the-official-near-white-paper/', explorer:'https://nearblocks.io' },
  { id:'aptos', sym:'APT', name:'Aptos', chain:'Aptos', color:'#2d9cdb', price:8.71, chg:1.23, mc:'3B', vol:0.2, desc:'Move-language blockchain developed by former Meta (Diem) engineers. Parallel execution engine (Block-STM) for high throughput and low latency.', wp:'https://aptos.dev/aptos-white-paper/', explorer:'https://aptoscan.com' },
];

// Duplicate for ticker
const tickerData = [...COINS.slice(0,12)];

// ===== LIVE PRICE SIMULATION =====
let liveCoins = COINS.map(c => ({...c, livePrice: c.price}));
let priceHistory = {};
liveCoins.forEach(c => { priceHistory[c.id] = [c.price]; });

function simulatePrices() {
  liveCoins = liveCoins.map(c => {
    const volatility = c.price > 1000 ? 0.002 : c.price > 1 ? 0.005 : 0.01;
    const change = (Math.random() - 0.497) * volatility;
    const newPrice = c.livePrice * (1 + change);
    priceHistory[c.id].push(newPrice);
    if (priceHistory[c.id].length > 60) priceHistory[c.id].shift();
    return {...c, livePrice: newPrice};
  });
  renderMarket();
  renderTicker();
}

// ===== FORMAT HELPERS =====
function fmtPrice(p) {
  if (p >= 1000) return '$' + p.toLocaleString('en', {minimumFractionDigits:2,maximumFractionDigits:2});
  if (p >= 1) return '$' + p.toFixed(4);
  if (p >= 0.001) return '$' + p.toFixed(6);
  return '$' + p.toFixed(8);
}
function fmtChg(c) {
  const sign = c >= 0 ? '+' : '';
  return sign + c.toFixed(2) + '%';
}

// ===== TICKER =====
function renderTicker() {
  const track = document.getElementById('tickerTrack');
  if (!track) return;
  const items = [...tickerData, ...tickerData].map(coin => {
    const live = liveCoins.find(c => c.id === coin.id);
    const p = live ? live.livePrice : coin.price;
    const chg = live ? live.chg + ((Math.random()-0.5)*0.05) : coin.chg;
    const cls = chg >= 0 ? 'tick-up' : 'tick-dn';
    return `<div class="tick-item">
      <span class="tick-sym">${coin.sym}</span>
      <span class="tick-price">${fmtPrice(p)}</span>
      <span class="tick-chg ${cls}">${fmtChg(chg)}</span>
    </div>`;
  }).join('');
  track.innerHTML = items;
}

// ===== MARKET TABLE =====
let currentFilter = 'all';
let searchQuery = '';
let visibleCount = 12;

function getFilteredCoins() {
  let coins = liveCoins;
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    coins = coins.filter(c => c.sym.toLowerCase().includes(q) || c.name.toLowerCase().includes(q) || c.chain.toLowerCase().includes(q));
  }
  if (currentFilter !== 'all') {
    const chainMap = { ethereum:'Ethereum', bnb:'BNB Chain', solana:'Solana', bitcoin:'Bitcoin', polygon:'Polygon' };
    const f = chainMap[currentFilter] || currentFilter;
    coins = coins.filter(c => c.chain === f);
  }
  return coins;
}

function renderMarket() {
  const tbody = document.getElementById('coinsTbody');
  if (!tbody) return;
  const coins = getFilteredCoins().slice(0, visibleCount);
  const maxVol = Math.max(...coins.map(c => c.vol));

  tbody.innerHTML = coins.map((coin, i) => {
    const p = coin.livePrice;
    const realChg = coin.chg + ((Math.random()-0.5)*0.01);
    const chgClass = realChg >= 0 ? 'chg-up' : 'chg-dn';
    const volPct = Math.round((coin.vol / maxVol) * 100);
    return `<tr data-id="${coin.id}" style="cursor:pointer">
      <td style="color:var(--text3);font-size:0.78rem;font-family:var(--font-mono)">${i+1}</td>
      <td><div class="coin-name-cell">
        <div class="coin-logo" style="background:${coin.color}">${coin.sym.slice(0,2)}</div>
        <div class="coin-sym-name"><div class="sym">${coin.sym}</div><div class="name">${coin.name}</div></div>
      </div></td>
      <td class="price-cell">${fmtPrice(p)}</td>
      <td class="chg-cell ${chgClass}">${fmtChg(realChg)}</td>
      <td><span class="chain-badge">${coin.chain}</span></td>
      <td class="mc-cell">$${coin.mc}</td>
      <td><div class="vol-bar-wrap"><div class="vol-bar" style="width:${volPct}%"></div></div></td>
      <td><button onclick="openModal('${coin.id}',event)" class="btn btn-outline" style="padding:0.25rem 0.75rem;font-size:0.72rem">Details</button></td>
    </tr>`;
  }).join('') || `<tr><td colspan="8" style="text-align:center;color:var(--text3);padding:2rem">No coins found</td></tr>`;

  // Row click
  tbody.querySelectorAll('tr[data-id]').forEach(row => {
    row.addEventListener('click', (e) => {
      if (e.target.tagName !== 'BUTTON') openModal(row.dataset.id, e);
    });
  });
}

// ===== COIN MODAL =====
function openModal(id, e) {
  if (e) e.stopPropagation();
  const coin = liveCoins.find(c => c.id === id);
  if (!coin) return;
  const overlay = document.getElementById('coinModal');
  document.getElementById('modalContent').innerHTML = `
    <div class="modal-header">
      <div class="modal-logo" style="background:${coin.color}">${coin.sym.slice(0,2)}</div>
      <div><h2>${coin.name}</h2><div class="sym">${coin.sym} &middot; ${coin.chain}</div></div>
    </div>
    <div class="modal-stats">
      <div class="ms-item"><div class="ms-label">Live Price</div><div class="ms-value" style="color:var(--accent)">${fmtPrice(coin.livePrice)}</div></div>
      <div class="ms-item"><div class="ms-label">24h Change</div><div class="ms-value ${coin.chg>=0?'chg-up':'chg-dn'}">${fmtChg(coin.chg)}</div></div>
      <div class="ms-item"><div class="ms-label">Market Cap</div><div class="ms-value">$${coin.mc}</div></div>
      <div class="ms-item"><div class="ms-label">24h Volume</div><div class="ms-value">$${coin.vol}B</div></div>
      <div class="ms-item"><div class="ms-label">Blockchain</div><div class="ms-value" style="font-size:0.85rem">${coin.chain}</div></div>
      <div class="ms-item"><div class="ms-label">Rank</div><div class="ms-value">#${liveCoins.indexOf(coin)+1}</div></div>
    </div>
    <p class="modal-desc">${coin.desc}</p>
    <div class="modal-links">
      <a href="${coin.wp}" target="_blank" rel="noopener" class="modal-link">📄 Whitepaper</a>
      <a href="${coin.explorer}" target="_blank" rel="noopener" class="modal-link">🔗 Explorer</a>
    </div>`;
  overlay.classList.add('open');
}
function closeModal() { document.getElementById('coinModal')?.classList.remove('open'); }
document.getElementById('coinModal')?.addEventListener('click', e => { if (e.target === e.currentTarget) closeModal(); });

// ===== SEARCH =====
document.getElementById('coinSearch')?.addEventListener('input', e => {
  searchQuery = e.target.value;
  visibleCount = 12;
  renderMarket();
});

// ===== FILTERS =====
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    visibleCount = 12;
    renderMarket();
  });
});

document.getElementById('loadMore')?.addEventListener('click', () => {
  visibleCount += 8;
  renderMarket();
});

// ===== NICK COIN EARN SYSTEM =====
const NC_KEY = 'nickcoin_data';
function getNcData() {
  const d = localStorage.getItem(NC_KEY);
  return d ? JSON.parse(d) : { balance: 0, lastClaim: 0, streak: 0, totalEarned: 0, gameHighScore: 0 };
}
function saveNcData(d) { localStorage.setItem(NC_KEY, JSON.stringify(d)); }

function updateNcUI() {
  const d = getNcData();
  const els = document.querySelectorAll('.nc-balance');
  els.forEach(el => el.textContent = d.balance.toLocaleString());
  const badge = document.getElementById('navNcBalance');
  if (badge) badge.textContent = d.balance.toLocaleString() + ' NC';

  const btn = document.getElementById('dailyClaimBtn');
  const countEl = document.getElementById('earnCount');
  const barEl = document.getElementById('earnBar');

  const now = Date.now();
  const lastMidnight = new Date(); lastMidnight.setHours(0,0,0,0);
  const canClaim = d.lastClaim < lastMidnight.getTime();

  if (btn) {
    btn.disabled = !canClaim;
    btn.textContent = canClaim ? '🪙  Claim 10 NC Daily Reward' : '✓  Claimed Today — Come Back Tomorrow';
  }

  // Progress bar: 0-10 NC per day
  const todayClaimed = canClaim ? 0 : 10;
  if (barEl) barEl.style.width = (todayClaimed * 10) + '%';
  if (countEl) countEl.textContent = d.balance.toLocaleString();
}

document.getElementById('dailyClaimBtn')?.addEventListener('click', () => {
  const d = getNcData();
  const now = Date.now();
  const lastMidnight = new Date(); lastMidnight.setHours(0,0,0,0);
  if (d.lastClaim >= lastMidnight.getTime()) return;
  d.balance += 10;
  d.totalEarned += 10;
  d.lastClaim = now;
  d.streak = (d.lastClaim - lastMidnight.getTime() < 172800000) ? d.streak + 1 : 1;
  saveNcData(d);
  updateNcUI();
  showToast('🪙 +10 NC earned! Come back tomorrow.');
});

// ===== MINI GAME (Coin Catcher) =====
(function() {
  const canvas = document.getElementById('game-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = 360, H = 240;
  canvas.width = W; canvas.height = H;

  let coins = [], score = 0, lives = 3, gameActive = false, animId;
  let paddle = { x: 150, w: 70, y: H-20, h: 10 };
  let gameStarted = false;

  function drawState() {
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle = '#010810';
    ctx.fillRect(0,0,W,H);
    ctx.strokeStyle = 'rgba(0,245,255,0.06)';
    for(let x=0;x<W;x+=40){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
    for(let y=0;y<H;y+=40){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
    if (!gameStarted) {
      ctx.fillStyle = '#00f5ff';
      ctx.font = 'bold 14px Share Tech Mono';
      ctx.textAlign = 'center';
      ctx.fillText('CLICK TO START', W/2, H/2 - 10);
      ctx.fillStyle = 'rgba(255,255,255,0.4)';
      ctx.font = '11px Share Tech Mono';
      ctx.fillText('Catch coins, avoid bombs!', W/2, H/2+15);
      ctx.fillText('+1 NC per 10 pts scored', W/2, H/2+32);
    }
  }

  function spawnCoin() {
    const isBomb = Math.random() < 0.22;
    coins.push({ x: Math.random()*(W-20)+10, y: -10, speed: 1.5+Math.random()*2.5, isBomb, r: 10 });
  }

  function draw() {
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle = '#010810';
    ctx.fillRect(0,0,W,H);
    ctx.strokeStyle='rgba(0,245,255,0.06)';
    for(let x=0;x<W;x+=40){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
    for(let y=0;y<H;y+=40){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}

    coins.forEach(c => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI*2);
      ctx.fillStyle = c.isBomb ? '#ff3355' : '#ffd700';
      ctx.fill();
      ctx.fillStyle = '#000';
      ctx.font = 'bold 10px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(c.isBomb ? '💣' : 'NC', c.x, c.y);
    });

    // Paddle
    const grad = ctx.createLinearGradient(paddle.x,0,paddle.x+paddle.w,0);
    grad.addColorStop(0,'#00f5ff'); grad.addColorStop(1,'#0088aa');
    ctx.fillStyle = grad;
    ctx.fillRect(paddle.x, paddle.y, paddle.w, paddle.h);

    // HUD
    ctx.fillStyle = '#00f5ff';
    ctx.font = 'bold 12px Share Tech Mono';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText('SCORE: '+score, 8, 8);
    ctx.fillStyle = '#ff3355';
    ctx.fillText('LIVES: '+'❤️'.repeat(lives), 8, 26);
  }

  function gameLoop() {
    if (!gameActive) return;
    coins.forEach(c => c.y += c.speed);
    if (Math.random() < 0.025) spawnCoin();

    coins = coins.filter(c => {
      if (c.y > H + 10) return false;
      if (c.y + c.r >= paddle.y && c.x >= paddle.x && c.x <= paddle.x+paddle.w) {
        if (c.isBomb) {
          lives--;
          if (lives <= 0) { gameActive = false; endGame(); return false; }
        } else { score++; }
        return false;
      }
      return true;
    });

    draw();
    animId = requestAnimationFrame(gameLoop);
  }

  function endGame() {
    cancelAnimationFrame(animId);
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle = '#010810'; ctx.fillRect(0,0,W,H);
    ctx.fillStyle = '#00f5ff';
    ctx.font = 'bold 16px Share Tech Mono';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('GAME OVER', W/2, H/2-30);
    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 13px Share Tech Mono';
    ctx.fillText('Score: ' + score, W/2, H/2-5);

    const earned = Math.floor(score/10);
    if (earned > 0) {
      const d = getNcData();
      d.balance += earned;
      d.totalEarned += earned;
      if (score > d.gameHighScore) d.gameHighScore = score;
      saveNcData(d);
      updateNcUI();
      ctx.fillStyle = '#00ff88';
      ctx.fillText('+' + earned + ' NC Earned!', W/2, H/2+20);
    }
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.font = '11px Share Tech Mono';
    ctx.fillText('Click to play again', W/2, H/2+50);

    const el = document.getElementById('gameScore');
    if (el) el.textContent = 'Score: ' + score + (earned>0?' | +'+earned+' NC earned':'');
    gameStarted = false;
    score = 0; lives = 3; coins = [];
  }

  canvas.addEventListener('click', () => {
    if (!gameStarted) {
      gameStarted = true; gameActive = true; score=0; lives=3; coins=[];
      gameLoop();
    }
  });
  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left) * (W/rect.width);
    paddle.x = Math.max(0, Math.min(W - paddle.w, mx - paddle.w/2));
  });
  canvas.addEventListener('touchmove', e => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const tx = (e.touches[0].clientX - rect.left) * (W/rect.width);
    paddle.x = Math.max(0, Math.min(W-paddle.w, tx-paddle.w/2));
  }, { passive:false });

  drawState();
})();

// ===== AI BOT =====
const botResponses = {
  'hi|hello|hey': "Hey! I'm NickBot 🤖 I can read this page to you, explain crypto concepts, or answer questions about Nick Hub and Nick Coin (NC).",
  'read|read page|read aloud|listen': "Sure! I'll read the page content to you. Click the 🔊 button below.",
  'nick coin|nc coin|nc|nickcoin': "Nick Coin (NC) is the native token of Nick Hub! You can earn 10 NC per day by clicking the daily claim button, and more by playing the mini-game. It's our way of rewarding loyal community members.",
  'earn|how to earn|get nc': "You can earn NC in two ways: 1️⃣ Claim your free 10 NC daily reward each day. 2️⃣ Play the Coin Catcher mini-game — you earn 1 NC per 10 points scored!",
  'bitcoin|btc': "Bitcoin (BTC) is the original cryptocurrency launched in 2009. Fixed supply of 21 million coins, secured by Proof of Work mining. Currently trading around $65,000. Often called 'digital gold'.",
  'ethereum|eth': "Ethereum (ETH) is the leading smart contract platform — home to DeFi, NFTs, and thousands of apps. It switched to Proof of Stake in 2022, cutting energy use by 99.95%.",
  'defi|decentralized finance': "DeFi (Decentralized Finance) is a system of financial services — lending, borrowing, trading — built on blockchain with no banks or intermediaries needed. It's powered by smart contracts.",
  'price|prices|market': "You can see live-updating prices for 20+ cryptocurrencies in our Market section! Prices update every few seconds with simulated live data.",
  'contact|email|telegram|social': "📧 Email: quisetech@gmail.com | 📱 Telegram: t.me/NICKHUB12 | 📸 Instagram: @nick__hub",
  'whitepaper|white paper': "Every coin in our market section has a link to its official whitepaper! Click 'Details' on any coin to see the whitepaper link, blockchain explorer, and full description.",
  'game|minigame|play': "The Coin Catcher mini-game is in the Nick Coin section! Move your mouse to control the paddle, catch gold coins to score, avoid red bombs. Every 10 points = 1 NC earned!",
  'adsense|ads|advertising': "Nick Hub is supported by Google AdSense advertising. Ads help keep all our content and tools free for everyone.",
};

function getBotReply(msg) {
  const m = msg.toLowerCase();
  for (const [pattern, reply] of Object.entries(botResponses)) {
    if (pattern.split('|').some(p => m.includes(p))) return reply;
  }
  return "I'm not sure about that specific question. Try asking about Nick Coin, Bitcoin, DeFi, how to earn NC, or type 'read' to have me read the page to you! 🤖";
}

function addBotMsg(text, isUser=false) {
  const msgs = document.getElementById('botMessages');
  if (!msgs) return;
  const d = document.createElement('div');
  d.className = 'bot-msg ' + (isUser ? 'user' : 'bot');
  d.textContent = text;
  msgs.appendChild(d);
  msgs.scrollTop = msgs.scrollHeight;
}

document.getElementById('botToggle')?.addEventListener('click', () => {
  document.getElementById('botPanel')?.classList.toggle('open');
});
document.getElementById('botClose')?.addEventListener('click', () => {
  document.getElementById('botPanel')?.classList.remove('open');
});

function sendBotMsg() {
  const input = document.getElementById('botInput');
  if (!input || !input.value.trim()) return;
  const msg = input.value.trim();
  input.value = '';
  addBotMsg(msg, true);
  setTimeout(() => addBotMsg(getBotReply(msg)), 500);
}

document.getElementById('botSend')?.addEventListener('click', sendBotMsg);
document.getElementById('botInput')?.addEventListener('keydown', e => { if (e.key === 'Enter') sendBotMsg(); });

// SPEAK BUTTON
document.getElementById('botSpeakPage')?.addEventListener('click', () => {
  if (!window.speechSynthesis) { addBotMsg("Sorry, your browser doesn't support text-to-speech."); return; }
  window.speechSynthesis.cancel();
  const text = [
    'Welcome to Nick Hub.',
    document.querySelector('.hero h1')?.innerText || '',
    document.querySelector('.hero-desc')?.textContent || '',
    'Nick Coin, symbol NC, is our platform token. You can earn 10 NC per day by claiming your daily reward, and more by playing our mini-game.',
    'Our market section tracks live prices for over 20 cryptocurrencies including Bitcoin, Ethereum, Solana, BNB, and many more.',
    'You can search for any coin and view its whitepaper, blockchain explorer, and full details.',
    'Contact us at quisetech@gmail.com or join our Telegram at t.me/NICKHUB12.'
  ].join(' ');
  const utt = new SpeechSynthesisUtterance(text);
  utt.rate = 0.9; utt.pitch = 1.05;
  window.speechSynthesis.speak(utt);
  addBotMsg("🔊 Reading the page now! Click stop in your browser to pause.");
});

// Bot face expressions via DOM
function botBlink() {
  const eyes = document.querySelectorAll('.bot-eye-left, .bot-eye-right');
  eyes.forEach(e => { e.style.height = '2px'; setTimeout(() => e.style.height = '10px', 150); });
}
setInterval(botBlink, 3000 + Math.random()*2000);

// ===== TOAST =====
function showToast(msg) {
  const t = document.createElement('div');
  t.style.cssText = 'position:fixed;bottom:8rem;right:2rem;background:var(--bg4);border:1px solid var(--accent2);border-radius:4px;padding:0.75rem 1.25rem;color:var(--text);font-size:0.85rem;font-family:var(--font-ui);z-index:9998;animation:fadeInUp 0.3s ease;box-shadow:0 4px 20px rgba(0,0,0,0.4)';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

// ===== CONTACT FORM =====
document.getElementById('contactForm')?.addEventListener('submit', e => {
  e.preventDefault();
  showToast('✓ Message sent! We\'ll get back to you soon.');
  e.target.reset();
});

// ===== INIT =====
updateNcUI();
renderTicker();
renderMarket();
setInterval(simulatePrices, 3000);

// Animate numbers on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.card,.feature-card,.nc-stat').forEach(el => observer.observe(el));
