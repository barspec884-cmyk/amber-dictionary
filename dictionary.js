// 注意: dictionary-data.js がこのファイルより前に読み込まれている必要があります。

// === DOM要素の取得 ===
const searchInput = document.getElementById('searchInput');
const suggestBox = document.getElementById('suggest');
const listView = document.getElementById('list-view');
const resultBox = document.getElementById('result');
const indexContainer = document.getElementById('index-container');
const tagContainer = document.getElementById('tag-container');
const closeResultBtn = document.getElementById('closeResult');

const rTermEn = document.getElementById('r-term-en');
const rTermJp = document.getElementById('r-term-jp');
const rCategory = document.getElementById('r-category');
const rDesc = document.getElementById('r-desc');
const rTags = document.getElementById('r-tags');

// === 初期化処理 ===
// 1. A-Zボタンを作る
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
alphabet.forEach(char => {
  const btn = document.createElement('div');
  btn.className = 'btn-chip btn-index';
  btn.textContent = char;
  btn.addEventListener('click', () => filterByIndex(char));
  indexContainer.appendChild(btn);
});

// 2. タグボタンを作る（データからタグを収集して重複を除去）
const allTags = new Set();
DICTIONARY_DATA.forEach(item => {
  if(item.tags) item.tags.forEach(t => allTags.add(t));
});
// アルファベット順にソートしてボタン化
Array.from(allTags).sort().forEach(tag => {
  const btn = document.createElement('div');
  btn.className = 'btn-chip';
  btn.textContent = "#" + tag;
  btn.addEventListener('click', () => filterByTag(tag));
  tagContainer.appendChild(btn);
});


// === 検索・フィルタリングロジック ===

// 検索ボックス入力時
searchInput.addEventListener('input', function(e) {
  const val = e.target.value.toLowerCase().trim();
  
  // 入力中はリストビューや結果を一旦消しても良いが、今回はサジェストを優先
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

// インデックス (A-Z) でフィルターしてリスト表示
function filterByIndex(char) {
  // その文字で始まるデータを探す
  const matches = DICTIONARY_DATA.filter(item => 
    item.term_en.toUpperCase().startsWith(char)
  );
  renderListView(matches, `INDEX: ${char}`);
  clearResult(); // 詳細表示は閉じる
}

// タグでフィルターしてリスト表示
function filterByTag(tag) {
  const matches = DICTIONARY_DATA.filter(item => 
    item.tags && item.tags.includes(tag)
  );
  renderListView(matches, `TAG: #${tag}`);
  clearResult();
}

// === 描画関連 ===

// サジェスト（検索窓の下に出るやつ）
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

// リストビュー（ボタンを押したときに出る一覧）
function renderListView(matches, title) {
  listView.innerHTML = ''; // クリア
  suggestBox.style.display = 'none'; // サジェストは消す

  if(matches.length === 0) {
    listView.style.display = 'none';
    return;
  }
  
  // タイトル表示（任意）
  /*
  const header = document.createElement('div');
  header.textContent = `${title} (${matches.length})`;
  header.style.marginBottom = '10px';
  header.style.color = 'var(--accent)';
  listView.appendChild(header);
  */

  matches.forEach(item => {
    const div = document.createElement('div');
    div.className = 'list-item';
    div.innerHTML = `
      <span style="font-weight:bold; color:var(--accent);">${item.term_en}</span>
      <span style="font-size:0.9rem;">${item.term_jp}</span>
    `;
    div.addEventListener('click', () => {
      showResult(item);
      // スマホで見やすいよう、少しスクロール
      resultBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    listView.appendChild(div);
  });

  listView.style.display = 'block';
}


// 詳細表示
function showResult(item) {
  resultBox.style.display = 'block';
  
  rTermEn.textContent = item.term_en;
  rTermJp.textContent = item.term_jp;
  rCategory.textContent = item.category;
  rDesc.textContent = item.description;

  // タグ生成（クリックで再検索対応）
  rTags.innerHTML = '';
  if (item.tags) {
    item.tags.forEach(tag => {
      const span = document.createElement('span');
      span.textContent = "#" + tag;
      span.addEventListener('click', (e) => {
        e.stopPropagation(); // 親要素への伝播を防ぐ
        filterByTag(tag); // タグ検索を実行
      });
      rTags.appendChild(span);
    });
  }
}

// 詳細を閉じる
function clearResult() {
  resultBox.style.display = 'none';
}
closeResultBtn.addEventListener('click', clearResult);

// 画面クリック時の挙動（サジェストを閉じる）
document.addEventListener('click', function(e) {
  if (!searchInput.contains(e.target) && !suggestBox.contains(e.target)) {
    suggestBox.style.display = 'none';
  }
});