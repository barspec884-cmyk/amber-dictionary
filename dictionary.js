// 注意: dictionary-data.js がこのファイルより前に読み込まれている必要があります。
// ▼ タグ分類ルール ------------------------------------
const TAG_CATEGORY = {
  material: ["barley","malt","grain","cereal","raw","raw material"],
  process: ["distillation","reflux","fermentation","mash","wash","stills","lyne arm"],
  cask: ["cask","barrel","oak","hogshead","sherry","bourbon","maturation"],
  flavor: ["peat","phenol","smoky","fruity","floral","aroma"],
  bottling: ["cask strength","non chill filtered","abv","single cask"]
};

// ▼ タグ → CSS クラス名に変換
function getTagColorClass(tag){
  const t = tag.toLowerCase();

  if(TAG_CATEGORY.material.some(x => t.includes(x))) return "tag-material";
  if(TAG_CATEGORY.process.some(x => t.includes(x))) return "tag-process";
  if(TAG_CATEGORY.cask.some(x => t.includes(x))) return "tag-cask";
  if(TAG_CATEGORY.flavor.some(x => t.includes(x))) return "tag-flavor";
  if(TAG_CATEGORY.bottling.some(x => t.includes(x))) return "tag-bottling";

  return ""; // その他
}

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
categoryContainer.innerHTML = ''; // 念のためクリア
CATEGORIES.forEach(cat => {
  const btn = document.createElement('div');
  btn.className = 'btn-chip';
  btn.textContent = cat.label;
  btn.addEventListener('click', () => filterByCategory(cat.id, cat.label));
  categoryContainer.appendChild(btn);
});

// 2. A-Zボタンを作る
indexContainer.innerHTML = '';
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
alphabet.forEach(char => {
  const btn = document.createElement('div');
  btn.className = 'btn-chip btn-index';
  btn.textContent = char;
  btn.addEventListener('click', () => filterByIndex(char));
  indexContainer.appendChild(btn);
});

// 3. タグボタンを作る
// ▼ TAG ボタン生成（色付き & 長押しで説明）
tagContainer.innerHTML = '';
const allTags = [...new Set(
  DICTIONARY_DATA.flatMap(item => item.tags || [])
)].sort();

allTags.forEach(tag => {
  const btn = document.createElement('span');
  btn.textContent = tag;

  // 色カテゴリを追加
  btn.className = getTagColorClass(tag);

  btn.style.padding = "8px 14px";
  btn.style.borderRadius = "20px";
  btn.style.cursor = "pointer";
  btn.style.userSelect = "none";
  btn.style.border = "1px solid #444";
  btn.style.display = "inline-block";
  btn.style.margin = "4px";

  // クリックで検索
  btn.addEventListener('click', () => filterByTag(tag));

  // 長押しで説明ポップアップ
  btn.addEventListener("contextmenu", e => {
    e.preventDefault();
    showTagPopup(tag);
  });

  btn.addEventListener("touchstart", () => {
    holdTimer = setTimeout(() => showTagPopup(tag), 450);
  });
  btn.addEventListener("touchend", () => clearTimeout(holdTimer));

  tagContainer.appendChild(btn);
});



// === フィルタリングロジック ===

// カテゴリー検索
let holdTimer = null;

function showTagPopup(tag){
  const popup = document.getElementById("tagPopup");

  // ▼ タグの説明文を辞書データから抽出
  const item = DICTIONARY_DATA.find(d => (d.tags || []).includes(tag));

  document.getElementById("tagPopupTitle").textContent = tag;
  document.getElementById("tagPopupDesc").textContent =
    item ? item.description : "説明データがありません。";

  popup.style.display = "block";
}

document.getElementById("tagPopupClose").onclick = () => {
  document.getElementById("tagPopup").style.display = "none";
};


// タグ検索
function filterByTag(tag) {
  const matches = DICTIONARY_DATA.filter(item => 
    item.tags && item.tags.includes(tag)
  );
  renderListView(matches, `TAG: #${tag}`);
  clearResult();
}

// キーワード入力検索
searchInput.addEventListener('input', function(e) {
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


// === 描画関連 ===

function renderListView(matches, title) {
  listView.innerHTML = '';
  suggestBox.style.display = 'none';
  listView.style.display = 'block';

  // 何も見つからない場合
  if(matches.length === 0) {
    listView.innerHTML = '<div style="padding:16px; color:#888; text-align:center;">該当する用語はありません</div>';
    return;
  }

  // タイトル表示
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
      // 結果位置までスクロール（少し余裕を持たせる）
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
  
  // カテゴリー名を日本語(絵文字付き)に変換して表示
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
        // タグ一覧を開く処理を入れるとおしゃれだが、今回はシンプルに検索実行のみ
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      rTags.appendChild(span);
    });
  }
}

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