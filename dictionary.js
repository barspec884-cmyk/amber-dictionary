/* ============================================================
   Amber Palette — Whisky Dictionary Logic
   (Updated: 3x3 Category Grid with Kanpai & JP/EN Index)
============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  fetch('dictionary-data.json')
    .then(res => res.json())
    .then(data => {
      window.DICTIONARY_DATA = data;

      // ここで初期化
      renderCategoryGrid();
      renderIndexButtons();
    });
});

  // --- DOM Elements ---
  const searchInput = document.getElementById('searchInput');
  const suggestBox = document.getElementById('suggest');
  
  // ここ重要: カテゴリー(3x3)を入れる場所
  const categoryContainer = document.getElementById('category-container'); 
  // ここ重要: 辞書インデックス(A-Z)を入れる場所
  const indexContainer = document.getElementById('index-container'); 
  
  const tagContainer = document.getElementById('tag-container');
  const listView = document.getElementById('list-view');
  const resultModal = document.getElementById('result');

  // Modal Elements
  const rTermEn = document.getElementById('r-term-en');
  const rTermJp = document.getElementById('r-term-jp');
  const rCategory = document.getElementById('r-category');
  const rTags = document.getElementById('r-tags');
  const rDesc = document.getElementById('r-desc');
  const closeBtn = document.getElementById('closeResult');

  // --- Categories Definition (Display Name Mapping) ---
  const CATEGORY_MAP = {
    '原料・製麦': 'raw',
    '仕込み・発酵': 'fermentation',
    '蒸留': 'distillation',
    '熟成': 'maturation',
    '仕上げ・ボトリング': 'finishing',
    'スタイル・流通': 'distribution',
    'テイスティング': 'tasting',
    'その他': 'others'
  };

/* ============================================================
   1. Initialize Category Grid (3x3 with Icons & Colors)
============================================================ */
function renderCategoryGrid() {
  const categoryContainer = document.getElementById('category-container');
  if (!categoryContainer) return;
  categoryContainer.innerHTML = '';

  // 各ボタンの設定（ラベル、検索キー、アイコン、背景色）
  const gridItems = [
    { label: '原料・製麦',       key: 'raw',           icon: 'fa-seedling',     color: '#558b2f' }, // 緑 (自然)
    { label: '仕込み・発酵',     key: 'fermentation',  icon: 'fa-flask',        color: '#00838f' }, // 青緑 (科学・水)
    { label: '蒸留',             key: 'distillation',  icon: 'fa-fire',         color: '#d84315' }, // 赤橙 (熱・銅)
    { label: '熟成',             key: 'maturation',    icon: 'fa-clock',        color: '#5d4037' }, // 茶 (樽・時間)
    { label: '仕上げ・ボトリング', key: 'finishing',    icon: 'fa-wine-bottle',  color: '#4527a0' }, // 紫 (製品化)
    { label: 'スタイル・流通',   key: 'distribution',  icon: 'fa-globe',        color: '#1565c0' }, // 青 (世界)
    { label: 'テイスティング',   key: 'tasting',       icon: 'fa-comment-dots', color: '#f9a825' }, // 山吹 (香り・味)
    { label: 'その他',           key: 'others',        icon: 'fa-circle-info',  color: '#546e7a' }, // グレー
    { label: '乾杯',             key: 'kanpai',        icon: 'fa-wine-glass',   color: 'var(--accent)' } // アクセント
  ];

  gridItems.forEach(item => {
    const btn = document.createElement('div');
    btn.className = 'btn-chip';
    
    // アイコンとテキストを並べるHTML
    btn.innerHTML = `<i class="fa-solid ${item.icon}" style="font-size:1.2em; margin-bottom:5px; display:block;"></i> ${item.label}`;

    // スタイル調整（グリッド内で見やすくするため）
    btn.style.backgroundColor = item.color;
    btn.style.color = '#fff'; // 文字は白
    btn.style.display = 'flex';
    btn.style.flexDirection = 'column'; // アイコンを上に、文字を下に
    btn.style.justifyContent = 'center';
    btn.style.alignItems = 'center';
    btn.style.textAlign = 'center';
    btn.style.height = '80px'; // 高さを揃えて正方形っぽくする
    btn.style.fontSize = '0.8rem'; // 文字サイズ調整
    btn.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)'; // 影をつけてボタン感を出す

    // ★「乾杯」ボタンの特別処理
    if (item.label === '乾杯') {
      btn.style.color = '#000'; // 乾杯だけ文字黒（背景が黄色系なら）
      btn.style.fontWeight = 'bold';
      btn.onclick = () => {
        // 指定されたURLへ移動
        window.location.href = 'https://world-heers.vercel.app/'; 
      };
    } 
    // ★ その他のカテゴリーボタン
    else {
      btn.onclick = () => {
        filterByCategory(item.key);
      };
    }

    categoryContainer.appendChild(btn);
  });
}
  /* ============================================================
     2. Initialize Index Buttons (A-Z / あ-ん)
  ============================================================ */
  const JP_ROWS = [
    { label: 'あ', chars: 'あいうえおアイウエオ' },
    { label: 'か', chars: 'かきくけこカキクケコがぎぐげごガギグゲゴ' },
    { label: 'さ', chars: 'さしすせそサシスセソざじずぜぞザジズゼゾ' },
    { label: 'た', chars: 'たちつてとタチツテトだぢづでどダヂヅデド' },
    { label: 'な', chars: 'なにぬねのナニヌネノ' },
    { label: 'は', chars: 'はひふへほハヒフヘホばびぶべぼバビブベボぱぴぷぺぽパピプペポ' },
    { label: 'ま', chars: 'まみむめもマミムメモ' },
    { label: 'や', chars: 'やゆよヤユヨ' },
    { label: 'ら', chars: 'らりるれろラリルレロ' },
    { label: 'わ', chars: 'わをんワヲン' }
  ];

  let isJpMode = false; // Toggle State

  function renderIndexButtons() {
    if (!indexContainer) return;
    indexContainer.innerHTML = '';

    // 切替ボタン (English / Japanese)
    const toggleBtn = document.createElement('div');
    toggleBtn.className = 'btn-chip';
    toggleBtn.style.width = '100%';
    toggleBtn.style.marginBottom = '10px';
    toggleBtn.style.textAlign = 'center';
    toggleBtn.textContent = isJpMode ? 'Switch to A-Z' : 'Switch to あ-ん';
    toggleBtn.onclick = () => {
      isJpMode = !isJpMode;
      renderIndexButtons(); // 再描画
    };
    indexContainer.appendChild(toggleBtn);

    if (!isJpMode) {
      // --- English (A-Z) ---
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
      alphabet.forEach(char => {
        const btn = document.createElement('div');
        btn.className = 'btn-chip btn-index';
        btn.textContent = char;
        btn.onclick = () => filterByIndex(char);
        indexContainer.appendChild(btn);
      });
    } else {
      // --- Japanese (あ-ん) ---
      JP_ROWS.forEach(row => {
        const btn = document.createElement('div');
        btn.className = 'btn-chip btn-index';
        btn.textContent = row.label;
        btn.onclick = () => filterByIndex(row);
        indexContainer.appendChild(btn);
      });
    }
  }

  // ★ 実行 (初期化)
  renderCategoryGrid(); // 3x3カテゴリー
  renderIndexButtons(); // A-Zインデックス


  /* ============================================================
     3. Search & Suggestion Logic
  ============================================================ */
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const val = e.target.value.toLowerCase();
      if(!val) {
        suggestBox.style.display = 'none';
        return;
      }

      const matches = DICTIONARY_DATA.filter(d => 
        d.term_en.toLowerCase().includes(val) || 
        d.term_jp.includes(val)
      );

      if(matches.length > 0) {
        suggestBox.innerHTML = '';
        matches.slice(0, 10).forEach(m => { 
          const div = document.createElement('div');
          div.textContent = `${m.term_en} / ${m.term_jp}`;
          div.onclick = () => {
            showResult(m);
            suggestBox.style.display = 'none';
            searchInput.value = '';
          };
          suggestBox.appendChild(div);
        });
        suggestBox.style.display = 'block';
      } else {
        suggestBox.style.display = 'none';
      }
    });
  }

  /* ============================================================
     4. List Display Logic
  ============================================================ */
  
  // Show All
  window.showAllList = function() {
    renderList(DICTIONARY_DATA);
  };

  // Filter by Category
  window.filterByCategory = function(catKey) {
    const filtered = DICTIONARY_DATA.filter(d => d.category === catKey);
    renderList(filtered);
  };

  // Filter by Index
  window.filterByIndex = function(key) {
    let filtered = [];
    if (!isJpMode) {
      // English Mode
      filtered = DICTIONARY_DATA.filter(d => d.term_en.toUpperCase().startsWith(key));
    } else {
      // Japanese Mode
      const validChars = key.chars;
      filtered = DICTIONARY_DATA.filter(d => {
        const firstChar = d.term_jp.charAt(0);
        return validChars.includes(firstChar);
      });
    }
    renderList(filtered);
  };

  // Filter by Tag
  window.filterByTag = function(tag) {
    const filtered = DICTIONARY_DATA.filter(d => d.tags && d.tags.includes(tag));
    renderList(filtered);
  };

  // Render Function
  function renderList(data) {
    listView.innerHTML = '';
    listView.style.display = 'block';
    resultModal.style.display = 'none';

    if(data.length === 0) {
      listView.innerHTML = '<div style="padding:20px; text-align:center; color:#888;">No results found.</div>';
      return;
    }

    data.forEach(item => {
      const div = document.createElement('div');
      div.className = 'list-item';
      div.innerHTML = `
        <span>${item.term_en}</span>
        <span style="font-size:0.9rem; color:#888;">${item.term_jp}</span>
      `;
      div.onclick = () => showResult(item);
      listView.appendChild(div);
    });

    listView.scrollIntoView({ behavior: 'smooth' });
  }

  /* ============================================================
     5. Tag Buttons Logic (Fixed)
  ============================================================ */
  if (tagContainer && typeof DICTIONARY_DATA !== 'undefined') {
    tagContainer.innerHTML = '';
    const allTags = new Set();
    DICTIONARY_DATA.forEach(item => {
      if(item.tags) item.tags.forEach(t => allTags.add(t));
    });
    const sortedTags = Array.from(allTags).sort();

    const groupedTags = {};
    sortedTags.forEach(tag => {
      let char = tag.charAt(0).toUpperCase();
      if (!/[A-Z]/.test(char)) char = '#';
      if (!groupedTags[char]) groupedTags[char] = [];
      groupedTags[char].push(tag);
    });

    const keys = Object.keys(groupedTags).sort((a, b) => {
      if (a === '#') return 1;
      if (b === '#') return -1;
      return a.localeCompare(b);
    });

    keys.forEach(key => {
      const section = document.createElement('div');
      section.className = 'tag-section';
      
      const header = document.createElement('div');
      header.className = 'tag-header';
      header.textContent = key;
      section.appendChild(header);

      const list = document.createElement('div');
      list.className = 'tag-list';

      groupedTags[key].forEach(tag => {
        const btn = document.createElement('div');
        btn.className = 'btn-chip';
        btn.textContent = "#" + tag;
        btn.onclick = () => filterByTag(tag);
        list.appendChild(btn);
      });

      section.appendChild(list);
      tagContainer.appendChild(section);
    });
  }

  /* ============================================================
     6. Detail Modal Logic
  ============================================================ */
  window.showResult = function(item) {
    listView.style.display = 'none';
    resultModal.style.display = 'block';

    rTermEn.textContent = item.term_en;
    rTermJp.textContent = item.term_jp;
    
    // カテゴリー表示の変換（raw -> 原料・製麦）
    // CATEGORY_MAPは逆引き用なので、ここでは辞書データを元に表示名を決める必要がある
    // 簡易的に辞書内のキーを日本語に変換するロジック
    const jpCat = Object.keys(CATEGORY_MAP).find(key => CATEGORY_MAP[key] === item.category);
    rCategory.textContent = jpCat || item.category;
    
    rDesc.textContent = item.description;

    rTags.innerHTML = '';
    if(item.tags) {
      item.tags.forEach(tag => {
        const span = document.createElement('span');
        span.textContent = '#' + tag;
        span.onclick = (e) => {
          e.stopPropagation();
          filterByTag(tag);
        };
        rTags.appendChild(span);
      });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeResultModal = () => {
    resultModal.style.display = 'none';
    listView.style.display = 'block';
  };

  closeBtn.addEventListener('click', closeResultModal);
  resultModal.addEventListener('click', (e) => {
    if (e.target === resultModal) closeResultModal();
  });