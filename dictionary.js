// 注意: dictionary-data.js がこのファイルより前に読み込まれている必要があります。

// HTMLの要素を取得
const searchInput = document.getElementById('searchInput');
const suggestBox = document.getElementById('suggest');
const resultBox = document.getElementById('result');

const rTermEn = document.getElementById('r-term-en');
const rTermJp = document.getElementById('r-term-jp');
const rCategory = document.getElementById('r-category');
const rDesc = document.getElementById('r-desc');

// 初期状態: サジェストボックスと結果を隠す
suggestBox.style.display = 'none';

// 検索ボックスに入力があったときの処理
searchInput.addEventListener('input', function(e) {
  const val = e.target.value.toLowerCase().trim();

  // 空欄ならサジェストを消して終了
  if (val === '') {
    suggestBox.style.display = 'none';
    suggestBox.innerHTML = '';
    return;
  }

  // データを検索（英語名、日本語名、タグのいずれかにヒットするか）
  const matches = DICTIONARY_DATA.filter(item => {
    return item.term_en.toLowerCase().includes(val) ||
           item.term_jp.includes(val) ||
           item.tags.some(tag => tag.includes(val));
  });

  // サジェスト表示の更新
  renderSuggestions(matches);
});

// サジェストリストを描画する関数
function renderSuggestions(matches) {
  suggestBox.innerHTML = '';

  if (matches.length === 0) {
    suggestBox.style.display = 'none';
    return;
  }

  matches.forEach(item => {
    const div = document.createElement('div');
    // リストには「英語名 (日本語名)」を表示
    div.textContent = `${item.term_en} (${item.term_jp})`;
    
    // クリックされたら詳細を表示する処理
    div.addEventListener('click', () => {
      showResult(item);
      // サジェストを消し、入力欄に名前を入れる
      suggestBox.style.display = 'none';
      searchInput.value = item.term_en;
    });

    suggestBox.appendChild(div);
  });

  suggestBox.style.display = 'block';
}

// 検索結果詳細を表示する関数
function showResult(item) {
  // 結果エリアを表示
  resultBox.style.display = 'block';

  // 各要素に文字をセット
  rTermEn.textContent = item.term_en;
  rTermJp.textContent = item.term_jp;
  
  // カテゴリー表記を少しきれいに（先頭大文字など）
  rCategory.textContent = "Category: " + item.category.toUpperCase();
  
  rDesc.textContent = item.description;
}

// 検索ボックス以外をクリックしたらサジェストを閉じる（使いやすくするため）
document.addEventListener('click', function(e) {
  if (!searchInput.contains(e.target) && !suggestBox.contains(e.target)) {
    suggestBox.style.display = 'none';
  }
});