// ===== STATE =====
let activeTab = 'all';
let activeGenre = null;

// ===== GENRE PILLS =====
function getGenres() {
  const set = new Set();
  books.forEach(b => b.genres.forEach(g => set.add(g)));
  return [...set];
}

function renderPills() {
  const wrap = document.getElementById('genrePills');
  wrap.innerHTML = '';
  getGenres().forEach(g => {
    const btn = document.createElement('button');
    btn.className = 'pill' + (activeGenre === g ? ' active' : '');
    btn.textContent = g;
    btn.addEventListener('click', () => {
      activeGenre = activeGenre === g ? null : g;
      renderPills();
      renderCards();
    });
    wrap.appendChild(btn);
  });
}

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
    if (activeGenre && !b.genres.includes(activeGenre)) return false;
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
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="cover" style="background: ${b.color}">
        <div class="cover-inner">
          <div class="cover-title">${b.title}</div>
          <div class="cover-author">${b.author}</div>
        </div>
      </div>
      <div class="card-body">
        <div class="card-title">${b.title}</div>
        <div class="card-meta">${b.author} · ${b.pages} hal · ${b.source}</div>
        <div class="stars">${renderStars(b.rating)}</div>
        <div class="genre-tags">
          ${b.genres.slice(0, 2).map(g => `<span class="gtag">${g}</span>`).join('')}
        </div>
        ${b.spoiler ? '<span class="spoiler-badge">might contain spoilers ‼️</span>' : ''}
      </div>
    `;

    // klik card → buka thread Twitter
    if (b.twitterLink) {
      card.addEventListener('click', () => window.open(b.twitterLink, '_blank'));
      card.style.cursor = 'pointer';
    }

    grid.appendChild(card);
  });
}

// ===== TABS =====
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    activeTab = tab.dataset.tab;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderCards();
  });
});

// ===== SEARCH =====
document.getElementById('searchInput').addEventListener('input', renderCards);

// ===== INIT =====
renderPills();
renderCards();
