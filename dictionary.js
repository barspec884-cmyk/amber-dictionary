// 注意: dictionary-data.js がこのファイルより前に読み込まれている必要があります。

// === DOM要素の取得 ===
const searchInput = document.getElementById('searchInput');
const suggestBox = document.getElementById('suggest');
const listView = document.getElementById('list-view');
const resultBox = document.getElementById('result');

const categoryContainer = document.getElementById('category-container');
const indexContainer = document.getElementById('index-container');
const tagContainer = document.getElementById('tag-container');
const closeResultBtn = document.getElementById('closeResult');

const rTermEn = document.getElementById('r-term-en');
const rTermJp = document.getElementById('r-term-jp');
const rCategory = document.getElementById('r-category');
const rDesc = document.getElementById('r-desc');
const rTags = document.getElementById('r-tags');

// === カテゴリー定義（絵文字付き） ===
const CATEGORIES = [
  { id: 'all', label: '🌐 すべて' },
  { id: 'raw', label: '🌾 原料・製麦' },
  { id: 'fermentation', label: '⚗️ 仕込み・発酵' },
  { id: 'distillation', label: '🔥 蒸留' },
  { id: 'maturation', label: '🪵 熟成' },
  { id: 'finishing', label: '🏷️ 仕上げ・ボトリング' },
  { id: 'tasting', label: '🥃 テイスティング' },
  { id: 'distribution', label: '🚛 スタイル・流通' },
  { id: 'others', label: '📚 その他' }
];

// === 初期化処理 ===

// 1. カテゴリーボタンを作る
if (categoryContainer) {
  categoryContainer.innerHTML = '';
  CATEGORIES.forEach(cat => {
    const btn = document.createElement('div');
    btn.className = 'btn-chip';
    btn.textContent = cat.label;
    btn.addEventListener('click', () => filterByCategory(cat.id, cat.label));
    categoryContainer.appendChild(btn);
  });
}

// 2. A-Zボタンを作る
if (indexContainer) {
  indexContainer.innerHTML = '';
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  alphabet.forEach(char => {
    const btn = document.createElement('div');
    btn.className = 'btn-chip btn-index';
    btn.textContent = char;
    btn.addEventListener('click', () => filterByIndex(char));
    indexContainer.appendChild(btn);
  });
}

// 3. タグボタンを作る
if (tagContainer && typeof DICTIONARY_DATA !== 'undefined') {
  tagContainer.innerHTML = '';
  const allTags = new Set();
  DICTIONARY_DATA.forEach(item => {
    if(item.tags) item.tags.forEach(t => allTags.add(t));
  });
  Array.from(allTags).sort().forEach(tag => {
    const btn = document.createElement('div');
    btn.className = 'btn-chip';
    btn.textContent = "#" + tag;
    btn.addEventListener('click', () => filterByTag(tag));
    tagContainer.appendChild(btn);
  });
}


// === フィルタリングロジック ===

function filterByCategory(catId, label) {
  if (typeof DICTIONARY_DATA === 'undefined') return;
  let matches = [];
  
  if (catId === 'all') {
    matches = DICTIONARY_DATA;
  } else {
    matches = DICTIONARY_DATA.filter(item => item.category === catId);
  }
  
  renderListView(matches, `CATEGORY: ${label}`);
  clearResult();
}

function filterByIndex(char) {
  if (typeof DICTIONARY_DATA === 'undefined') return;
  const matches = DICTIONARY_DATA.filter(item => 
    item.term_en.toUpperCase().startsWith(char)
  );
  renderListView(matches, `INDEX: ${char}`);
  clearResult();
}

function filterByTag(tag) {
  if (typeof DICTIONARY_DATA === 'undefined') return;
  const matches = DICTIONARY_DATA.filter(item => 
    item.tags && item.tags.includes(tag)
  );
  renderListView(matches, `TAG: #${tag}`);
  clearResult();
}

// キーワード入力検索
if (searchInput) {
  searchInput.addEventListener('input', function(e) {
    if (typeof DICTIONARY_DATA === 'undefined') return;
    const val = e.target.value.toLowerCase().trim();
    if (val === '') {
      suggestBox.style.display = 'none';
      return;
    }
    const matches = DICTIONARY_DATA.filter(item => {
      return item.term_en.toLowerCase().includes(val) ||
             item.term_jp.includes(val) ||
             item.tags.some(tag => tag.includes(val));
    });
    renderSuggestions(matches);
  });
}

// === 描画関連 ===

function renderListView(matches, title) {
  listView.innerHTML = '';
  suggestBox.style.display = 'none';
  listView.style.display = 'block';

  if(matches.length === 0) {
    listView.innerHTML = '<div style="padding:16px; color:#888; text-align:center;">該当する用語はありません</div>';
    return;
  }

  const header = document.createElement('div');
  header.textContent = title; 
  header.style.cssText = "font-size:0.8rem; color:var(--accent); margin-bottom:8px; border-bottom:1px solid var(--border); padding-bottom:4px;";
  listView.appendChild(header);

  matches.forEach(item => {
    const div = document.createElement('div');
    div.className = 'list-item';
    div.innerHTML = `
      <span style="font-weight:bold; color:var(--accent);">${item.term_en}</span>
      <span style="font-size:0.9rem;">${item.term_jp}</span>
    `;
    div.addEventListener('click', () => {
      showResult(item);
      const yOffset = -20; 
      const y = resultBox.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    });
    listView.appendChild(div);
  });
}

function renderSuggestions(matches) {
  suggestBox.innerHTML = '';
  if (matches.length === 0) {
    suggestBox.style.display = 'none';
    return;
  }
  matches.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.term_en} (${item.term_jp})`;
    div.addEventListener('click', () => {
      showResult(item);
      suggestBox.style.display = 'none';
      searchInput.value = item.term_en;
    });
    suggestBox.appendChild(div);
  });
  suggestBox.style.display = 'block';
}

function showResult(item) {
  resultBox.style.display = 'block';
  rTermEn.textContent = item.term_en;
  rTermJp.textContent = item.term_jp;
  
  const catObj = CATEGORIES.find(c => c.id === item.category);
  rCategory.textContent = catObj ? catObj.label : item.category.toUpperCase();

  rDesc.textContent = item.description;

  rTags.innerHTML = '';
  if (item.tags) {
    item.tags.forEach(tag => {
      const span = document.createElement('span');
      span.textContent = "#" + tag;
      span.addEventListener('click', (e) => {
        e.stopPropagation();
        filterByTag(tag);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      rTags.appendChild(span);
    });
  }
}

function clearResult() {
  resultBox.style.display = 'none';
}

if (closeResultBtn) {
  closeResultBtn.addEventListener('click', clearResult);
}

document.addEventListener('click', function(e) {
  if (searchInput && suggestBox) {
    if (!searchInput.contains(e.target) && !suggestBox.contains(e.target)) {
      suggestBox.style.display = 'none';
    }
  }
});