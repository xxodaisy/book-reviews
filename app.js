// ===== DARK MODE TOGGLE =====
const toggle = document.getElementById('themeToggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
toggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

toggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  toggle.textContent = next === 'dark' ? '☀️' : '🌙';
});

// ===== AUTO COLOR dari judul buku =====
function generateColor(str) {
  const palettes = [
    "#2C3E50", "#4A7FA5", "#B85C38", "#7D5A50",
    "#1A3A4A", "#5C4033", "#2E4057", "#4A4A6A",
    "#3B5E3B", "#6B3A3A", "#3A3A6B", "#5A3A6B",
  ];
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return palettes[Math.abs(hash) % palettes.length];
}

// ===== STATE =====
let activeTab = 'all';

// ===== STARS =====
function renderStars(n) {
  const full = Math.floor(n);
  const half = n % 1 >= 0.5;
  let s = '★'.repeat(full);
  if (half) s += '½';
  return s;
}

// ===== CARDS =====
function renderCards() {
  const search = document.getElementById('searchInput').value.toLowerCase();
  const filtered = books.filter(b => {
    if (activeTab === 'fiction' && b.category !== 'fiction') return false;
    if (activeTab === 'nonfiction' && b.category !== 'nonfiction') return false;
    if (search && !b.title.toLowerCase().includes(search) && !b.author.toLowerCase().includes(search)) return false;
    return true;
  });

  document.getElementById('countLabel').textContent = filtered.length + ' buku ditemukan';

  const grid = document.getElementById('grid');
  grid.innerHTML = '';

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="empty-state">Tidak ada buku yang cocok 📚</div>';
    return;
  }

  filtered.forEach(b => {
    const color = b.color || generateColor(b.title);
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="cover" style="${b.image ? `background-image: url('${b.image}'); background-size: cover; background-position: center;` : `background: ${color}`}">
        <div class="cover-inner">
          ${!b.image ? `
            <div class="cover-title">${b.title}</div>
            <div class="cover-author">${b.author}</div>
          ` : ''}
        </div>
      </div>
      <div class="card-body">
        <div class="card-title">${b.title}</div>
        <div class="card-meta">${b.author} · ${b.pages} hal · ${b.source}</div>
        <div class="stars">${renderStars(b.rating)}</div>
        <div class="genre-tags">
          ${b.genres.slice(0, 4).map(g => `<span class="gtag">${g}</span>`).join('')}
        </div>
        ${b.spoiler ? '<span class="spoiler-badge">might contain spoilers ‼️</span>' : ''}
      </div>
    `;

    if (b.twitterLink) {
      card.addEventListener('click', () => window.open(b.twitterLink, '_blank'));
    }

    grid.appendChild(card);
  });
}

// ===== TBR =====
function renderTBR() {
  document.getElementById('countLabel').textContent = tbr.length + ' buku';
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  tbr.forEach(b => {
    const color = generateColor(b.title);
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="cover" style="${b.image ? `background-image: url('${b.image}'); background-size: cover; background-position: center;` : `background: ${color}`}">
        <div class="cover-inner">
          ${!b.image ? `
            <div class="cover-title">${b.title}</div>
            <div class="cover-author">${b.author}</div>
          ` : ''}
        </div>
      </div>
      <div class="card-body">
        <div class="card-title">${b.title}</div>
        <div class="card-meta">${b.author}</div>
        <div class="genre-tags">
          ${b.genres.map(g => `<span class="gtag">${g}</span>`).join('')}
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ===== TABS =====
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    activeTab = tab.dataset.tab;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    if (activeTab === 'tbr') {  // ← ini tbr
      renderTBR();
    } else {
      renderCards();
    }
  });
});

// ===== SEARCH =====
document.getElementById('searchInput').addEventListener('input', renderCards);

// ===== INIT =====
renderCards();
