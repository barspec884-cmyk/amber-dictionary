// HTMLの要素を取得
const searchInput = document.getElementById('searchInput');
const suggestBox = document.getElementById('suggest');
const resultBox = document.getElementById('result');

const rTermEn = document.getElementById('r-term-en');
const rTermJp = document.getElementById('r-term-jp');
const rCategory = document.getElementById('r-category');
const rDesc = document.getElementById('r-desc');
const rTags = document.getElementById('r-tags'); // タグ用に追加

// 初期状態: サジェストボックスと結果を隠す
suggestBox.style.display = 'none';

// 検索ボックスに入力があったときの処理
searchInput.addEventListener('input', function(e) {
  const val = e.target.value.toLowerCase().trim();

  if (val === '') {
    suggestBox.style.display = 'none';
    suggestBox.innerHTML = '';
    return;
  }

  // データ検索
  const matches = DICTIONARY_DATA.filter(item => {
    return item.term_en.toLowerCase().includes(val) ||
           item.term_jp.includes(val) ||
           item.tags.some(tag => tag.includes(val));
  });

  renderSuggestions(matches);
});

// サジェストリストを描画
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

// 結果表示（タグ対応版）
function showResult(item) {
  resultBox.style.display = 'block';

  rTermEn.textContent = item.term_en;
  rTermJp.textContent = item.term_jp;
  rCategory.textContent = "Category: " + item.category.toUpperCase();
  rDesc.textContent = item.description;

  // タグの生成処理
  rTags.innerHTML = '';
  if (item.tags && item.tags.length > 0) {
    item.tags.forEach(tag => {
      const span = document.createElement('span');
      span.textContent = "#" + tag; // #を見出しにつける
      rTags.appendChild(span);
    });
  }
}

// 枠外クリックで閉じる
document.addEventListener('click', function(e) {
  if (!searchInput.contains(e.target) && !suggestBox.contains(e.target)) {
    suggestBox.style.display = 'none';
  }
});