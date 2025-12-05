/* ============================================================
   Amber Palette — Whisky Dictionary Data (Updated)
   Ref: User Provided List + Basic Terms
============================================================ */

const DICTIONARY_DATA = [

  /* -----------------------
      原料・製麦 (raw)
  ----------------------- */
  { id:"barley", term_en:"Barley", term_jp:"大麦",
    category:"raw", description:"ウイスキーの主原料となる穀物。モルトウイスキーでは二条大麦が主に使われる。", tags:["grain","raw material"] },
  { id:"malt", term_en:"Malt", term_jp:"麦芽",
    category:"raw", description:"発芽させた大麦を乾燥させたもの。糖化しやすくなり、ウイスキーの基盤となる香味を生む。", tags:["raw material","malting"] },
  { id:"peat", term_en:"Peat", term_jp:"ピート",
    category:"raw", description:"長年堆積した植物が変化してできた泥炭。麦芽の乾燥時に燃料として用いることで、スモーキーな香りを付与する。", tags:["smoky","fuel","islay"] },
  { id:"kiln", term_en:"Kiln", term_jp:"キルン",
    category:"raw", description:"発芽した麦芽を乾燥させるための窯や炉。ここでピートを焚くことでスモーキーな香りがつく。", tags:["malting","drying"] },
  { id:"floor_malting", term_en:"Floor Malting", term_jp:"フロアモルティング",
    category:"raw", description:"大麦を床に広げ、手作業でかき混ぜながら発芽させる伝統的な製麦方法。", tags:["traditional","malting"] },
  
  // 頂いたリストより反映
  { id:"malting", term_en:"Malting", term_jp:"モルティング",
    category:"raw", description:"大麦を麦芽（モルト）へ加工する、製麦工程のこと。", tags:["process","raw"] },
  { id:"maltster", term_en:"Maltster", term_jp:"モルトスター",
    category:"raw", description:"製麦工程を専門的に行い、原料を提供する業者。", tags:["profession","raw"] },
  { id:"milling", term_en:"Milling", term_jp:"ミリング",
    category:"raw", description:"精麦（モルティング）された麦芽の糖を水に溶けやすくするために挽き割りする、粉砕工程のこと。", tags:["process","milling"] },
  { id:"grist", term_en:"Grist", term_jp:"グリスト",
    category:"raw", description:"粉砕した麦芽のこと。粉砕度合いは粗いものからハスク、グリッツ、一番細かいものをフラワーと呼び、全体をまとめてグリストと呼ぶ。", tags:["raw","material"] },


  /* -----------------------
      仕込み・発酵 (fermentation)
  ----------------------- */
  { id:"yeast", term_en:"Yeast", term_jp:"酵母",
    category:"fermentation", description:"糖をアルコールと二酸化炭素に変える微生物。香りや味わいへの影響が大きい。", tags:["microorganism","aroma"] },
  { id:"sour_mash", term_en:"Sour Mash", term_jp:"サワーマッシュ",
    category:"fermentation", description:"前回蒸留の残液を次回仕込みに加えて発酵を安定させるバーボンの製法。", tags:["bourbon","process"] },

  // 頂いたリストより反映
  { id:"mashing", term_en:"Mashing", term_jp:"マッシング",
    category:"fermentation", description:"グリストとお湯を混ぜて加熱し、麦汁（ウォート）を抽出する、糖化工程のこと。", tags:["process","mash"] },
  { id:"wort_mash", term_en:"Wort / Mash", term_jp:"ウォート / マッシュ",
    category:"fermentation", description:"グリストに熱湯を注ぎ、麦芽中のデンプンを酵素で糖化したもの。", tags:["liquid","mash"] },
  { id:"mash_tun", term_en:"Mash Tun", term_jp:"マッシュタン",
    category:"fermentation", description:"糖化槽のこと。麦汁（ウォート）をつくるための容器で、木製や金属製など、蒸溜所によって異なる。", tags:["equipment","mash"] },
  { id:"fermentation_process", term_en:"Fermentation", term_jp:"ファーメンテーション",
    category:"fermentation", description:"麦汁に酵母を加え、アルコール分7〜8%程度の発酵液に変える発酵工程のこと。", tags:["process","fermentation"] },
  { id:"wash", term_en:"Wash", term_jp:"ウォッシュ",
    category:"fermentation", description:"もろみ（発酵液）のこと。麦汁（ウォート）にイースト（酵母）を加えてできる。", tags:["liquid","fermentation"] },
  { id:"wash_back", term_en:"Wash Back", term_jp:"ウォッシュバック",
    category:"fermentation", description:"発酵槽のこと。麦汁（ウォート）に酵母を加えて発酵させ、もろみ（ウォッシュ）をつくる。", tags:["equipment","fermentation"] },


  /* -----------------------
      蒸留 (distillation)
  ----------------------- */
  { id:"pot_still", term_en:"Pot Still", term_jp:"ポットスチル",
    category:"distillation", description:"銅製の釜を用いた伝統的蒸留器。形状が香味に影響する。", tags:["equipment","copper"] },
  { id:"column_still", term_en:"Column Still", term_jp:"カラムスチル",
    category:"distillation", description:"連続蒸留が可能でグレーンウイスキーに使われる蒸留器。", tags:["equipment","grain"] },
  { id:"coffey_still", term_en:"Coffey Still", term_jp:"コフィースチル",
    category:"distillation", description:"高純度のアルコールを連続で得られるカフェ式蒸留器。", tags:["equipment","grain"] },
  { id:"direct_heating", term_en:"Direct Heating", term_jp:"直火加熱",
    category:"distillation", description:"ポットスチルを直接炎で加熱する方法。香ばしい風味がつきやすい。", tags:["process","heating"] },
  { id:"indirect_heating", term_en:"Indirect Heating", term_jp:"間接加熱",
    category:"distillation", description:"蒸気などで内部から均一に加熱する方法。コントロールしやすい。", tags:["process","heating"] },
  
  // 頂いたリストより反映
  { id:"distillation_process", term_en:"Distillation", term_jp:"ディスティレーション",
    category:"distillation", description:"発酵液を水とアルコールの沸点の違いを利用して、アルコール度数の高い蒸留液を抽出する、蒸留工程のこと。", tags:["process","distillation"] },
  { id:"reflux", term_en:"Reflux", term_jp:"リフラックス",
    category:"distillation", description:"還流のこと。蒸留の際に、ポットスチル内の液体が蒸発と凝縮を繰り返えしながら、純度を高めていくプロセス。還流が強ければ強いほど、軽いフレーバーの酒質となる。", tags:["process","science"] },
  { id:"lyne_arm", term_en:"Lyne Arm", term_jp:"ラインアーム",
    category:"distillation", description:"ポットスチルの加熱部分と冷却器（コンデンサー）を繋ぐパイプ。長さや角度で、リフラックスに大きな影響を与える。", tags:["equipment","part"] },
  { id:"wash_still", term_en:"Wash Still", term_jp:"ウォッシュスチル",
    category:"distillation", description:"モルトウイスキー製造で最初に使われるスチルのこと。初溜釜ともよばれる。銅製の場合が多く、ウォッシュを蒸留してローワイン（初留液）に変える。", tags:["equipment","first"] },
  { id:"spirit_still", term_en:"Spirit Still", term_jp:"スピリットスチル",
    category:"distillation", description:"2つ目のポットスチル、再留釜ともよばれる。ローワインを再蒸留し、アルコール度数をより高めていく。カットポイントなどが決められる重要な工程。", tags:["equipment","second"] },
  { id:"low_wine", term_en:"Low Wine", term_jp:"ローワイン",
    category:"distillation", description:"ウォッシュスチル（初留釜）で最初の蒸留が終わった後にできる液体。初留液ともよばれる。アルコール度数は約20～30%で不純物を含む。", tags:["liquid","raw spirit"] },
  { id:"middle_cut", term_en:"Middle Cut", term_jp:"ミドルカット",
    category:"distillation", description:"別名ハートカット。蒸留液の最初（ヘッド）と最後（テール）を切り捨て、最も風味豊かな「ハート」部分だけを取り出す作業。", tags:["process","cut"] },
  { id:"cut_point", term_en:"Cut Point", term_jp:"カットポイント",
    category:"distillation", description:"ミドルカットを行うポイントのこと。前寄りにカットするか後寄りにカットするかで、ウイスキーの酒質が変わる。", tags:["process","cut"] },
  { id:"new_make", term_en:"New Make", term_jp:"ニューメイク",
    category:"distillation", description:"樽熟成する前の蒸留液のこと。ニューポットとも呼ばれる。無色透明で、荒々しい香りや口当たりが特徴。", tags:["liquid","unaged"] },


  /* -----------------------
      熟成 (maturation)
  ----------------------- */
  { id:"bourbon_barrel", term_en:"Bourbon Barrel", term_jp:"バーボンバレル",
    category:"maturation", description:"バーボン熟成後の樽。バニラやカラメルのような甘い香りを付与する。", tags:["cask","american oak"] },
  { id:"sherry_cask", term_en:"Sherry Cask", term_jp:"シェリーカスク",
    category:"maturation", description:"シェリー酒熟成後の樽。ドライフルーツやスパイスの濃厚な香りを付与する。", tags:["cask","european oak"] },
  { id:"angels_share", term_en:"Angel's Share", term_jp:"天使の分け前",
    category:"maturation", description:"熟成中に水分やアルコールが蒸発して失われる分。", tags:["phenomenon","romantic"] },
  { id:"devils_cut", term_en:"Devil's Cut", term_jp:"デビルズカット",
    category:"maturation", description:"樽材に染み込み取り出せない部分のこと。", tags:["phenomenon","loss"] },

  // 頂いたリストより反映
  { id:"maturation_process", term_en:"Maturation", term_jp:"マチュレーション",
    category:"maturation", description:"蒸留したてのウイスキー（ニューポット）を木製の樽に詰めて寝かせる、熟成工程のこと。", tags:["process","aging"] },
  { id:"cask_barrel", term_en:"Cask / Barrel", term_jp:"カスク / バレル",
    category:"maturation", description:"ウイスキー樽のこと。サイズによって様々な名称がある。", tags:["cask","container"] },
  { id:"cooperage", term_en:"Cooperage", term_jp:"クーパレッジ",
    category:"maturation", description:"製樽工場のこと。樽をつくる職人のことはクーパー（cooper）と呼ぶ。樽を一から製造したり、中古樽の修理をしたりする。", tags:["place","craft"] },
  { id:"re_racking", term_en:"Re-racking", term_jp:"リラック",
    category:"maturation", description:"樽の中の原酒を、一つの樽から別の樽へと移し替えること。複数の樽で熟成させることで、ウイスキーの味わいや香りを豊かにすることができる。", tags:["process","cask"] },
  { id:"charring", term_en:"Charring", term_jp:"チャーリング",
    category:"maturation", description:"樽の内側を直火で焦がすこと。アメリカの法律により、バーボンはチャーリングされた新樽で熟成させることが義務付けられている。", tags:["process","barrel"] },
  { id:"toast", term_en:"Toast", term_jp:"トースト",
    category:"maturation", description:"樽を遠火の遠赤外線で低温加熱し焦がすこと。ワイン樽などに特有の香りをつけたり、成分を溶出しやすくする。", tags:["process","barrel"] },
  { id:"first_fill", term_en:"1st Fill", term_jp:"ファーストフィル",
    category:"maturation", description:"古樽がウイスキーの熟成に初めて使用される場合に用いる。新樽とは異なる。成分の影響が強く出る。", tags:["cask","condition"] },
  { id:"dunnage", term_en:"Dunnage", term_jp:"ダンネージ式",
    category:"maturation", description:"樽を横向きで3〜4段積み上げる伝統的な貯蔵方式。湿度が保たれやすいが、スペース効率は悪い。", tags:["warehouse","traditional"] },
  { id:"racked", term_en:"Racked", term_jp:"ラック式",
    category:"maturation", description:"金属製の棚に樽を横向きで十数段積み上げる方式。効率が良く、大手蒸溜所でよく利用される。", tags:["warehouse","modern"] },
  { id:"palletised", term_en:"Palletised", term_jp:"パレタイズ式",
    category:"maturation", description:"樽を縦向きにパレットに乗せて積む方式。効率は良いが長期熟成には不向きとされる。", tags:["warehouse","efficiency"] },


  /* -----------------------
      仕上げ・ボトリング (finishing)
  ----------------------- */
  { id:"finish", term_en:"Finish", term_jp:"フィニッシュ（後熟）",
    category:"finishing", description:"熟成後に別樽へ移して追加熟成させる手法。", tags:["process","flavor"] },
  { id:"coloring", term_en:"Coloring", term_jp:"着色（カラメル色素）",
    category:"finishing", description:"製品ごとの色のバラつきを整えるための着色。", tags:["process","additive"] },
  
  // 頂いたリストより反映
  { id:"cask_strength", term_en:"Cask Strength", term_jp:"カスク・ストレングス",
    category:"finishing", description:"樽出しのアルコール度数で瓶詰めされたウイスキーのこと。加水されていないため、アルコール度数が50~60度であることが多い。", tags:["bottling","high proof"] },
  { id:"non_chill_filtered", term_en:"Non-Chill Filtered", term_jp:"ノンチルフィルタード",
    category:"finishing", description:"冷却濾過が施されていないウイスキーのこと。澱を取り除かないため、ウイスキー本来の味わいを楽しめる。", tags:["bottling","natural"] },
  { id:"vatting", term_en:"Vatting", term_jp:"ヴァッティング",
    category:"finishing", description:"異なるウイスキーの原酒を混ぜ合わせること。（モルト同士など同種の混合を指すことが多い）", tags:["process","blend"] },
  { id:"one_batch", term_en:"One Batch", term_jp:"ワンバッチ",
    category:"finishing", description:"製造工程における一度の生産量・使用量の単位。", tags:["unit","production"] },
  { id:"small_batch", term_en:"Small Batch", term_jp:"スモールバッチ",
    category:"finishing", description:"少数の良質な樽からのみボトリングされた、数量限定のウイスキー。", tags:["bottling","premium"] },
  { id:"bottling", term_en:"Bottling", term_jp:"ボトリング",
    category:"finishing", description:"製品化に向けて、樽で熟成したウイスキーをボトル詰めする工程のこと。", tags:["process","finish"] },


  /* -----------------------
      スタイル・流通 (distribution)
  ----------------------- */
  // 頂いたリストの「スタイル」はここに統合します
  { id:"single_malt", term_en:"Single Malt", term_jp:"シングルモルト",
    category:"distribution", description:"1つの蒸溜所のモルト原酒のみからつくられたウイスキーのこと。", tags:["style","popular"] },
  { id:"single_cask", term_en:"Single Cask", term_jp:"シングル・カスク",
    category:"distribution", description:"他の樽の原酒と混ぜずに、1つの蒸溜所の1つの樽から瓶詰めされたウイスキー。希少価値が高い。", tags:["style","rare"] },
  { id:"teaspoon_malt", term_en:"Teaspooned Malt", term_jp:"ティースプーンモルト",
    category:"distribution", description:"シングルモルトへごく少量の他蒸溜所ウイスキーを加えたもの。ブランド保護などのために行われる。", tags:["style","geeky"] },
  { id:"pot_still_whisky", term_en:"Pot Still Whisky", term_jp:"ポットスチルウイスキー",
    category:"distribution", description:"麦芽と未発芽大麦を原料とし、ポットスチルで蒸留するアイルランド特有のスタイル。", tags:["style","irish"] },
  { id:"independent_bottlers", term_en:"Independent Bottlers", term_jp:"インディペンデント・ボトラーズ",
    category:"distribution", description:"蒸溜所から原酒を樽ごと購入し、独自に熟成・瓶詰して販売する業者。ボトラーズとも呼ばれる。", tags:["distribution","ib"] },
  
  // 既存データ
  { id:"official_bottle", term_en:"Official Bottle", term_jp:"オフィシャルボトル",
    category:"distribution", description:"蒸留所が自社ブランドとして公式に販売するボトル。", tags:["distribution","ob"] },
  { id:"importer", term_en:"Importer", term_jp:"インポーター",
    category:"distribution", description:"海外ウイスキーの輸入代理店。", tags:["distribution","business"] },


  /* -----------------------
      テイスティング (tasting)
  ----------------------- */
  // 基本的なフレーバー
  { id:"fruity", term_en:"Fruity", term_jp:"フルーティー",
    category:"tasting", description:"果実のような香り。リンゴ、洋ナシ、柑橘、トロピカルなど様々。", tags:["aroma","fruit"] },
  { id:"smoky", term_en:"Smoky", term_jp:"スモーキー",
    category:"tasting", description:"煙のような香り。ピート由来のものや樽由来のものがある。", tags:["aroma","peat"] },
  { id:"woody", term_en:"Woody", term_jp:"ウッディー",
    category:"tasting", description:"木の香り。熟成に使われたオーク樽に由来する。", tags:["aroma","oak"] },
  { id:"spicy", term_en:"Spicy", term_jp:"スパイシー",
    category:"tasting", description:"胡椒やシナモンのような刺激のある香り。", tags:["aroma","spice"] },

  // 頂いたリストより反映
  { id:"dram", term_en:"Dram", term_jp:"ドラム",
    category:"tasting", description:"スコットランドでのウイスキー1杯分の呼称。明確な定義はないが、25ml〜35ml程度を指すことが多い。", tags:["unit","culture"] },
  { id:"flight", term_en:"Flight", term_jp:"フライト",
    category:"tasting", description:"数種類のウイスキーの飲み比べセットのこと。", tags:["style","menu"] },


  /* -----------------------
      その他 (others)
  ----------------------- */
  // ★新規追加★
  { id:"abv", term_en:"Alcohol by Volume (ABV)", term_jp:"アルコール度数",
    category:"others", description:"アルコールの体積百分率。スコッチウイスキーは法律で40度以上でなければならない。", tags:["legal","measure"] },

  // 頂いたリストより反映
  { id:"age_statement", term_en:"Age Statement", term_jp:"エイジ・ステイトメント",
    category:"others", description:"ブレンドされている一番若い原酒の熟成年数を記載すること。", tags:["label","legal"] },
  { id:"non_age_statement", term_en:"Non Age Statement (NAS)", term_jp:"ノンエイジ",
    category:"others", description:"ラベルに熟成年数を表記しないウイスキーのこと。", tags:["label","trend"] },
  { id:"house_style", term_en:"House Style", term_jp:"ハウススタイル",
    category:"others", description:"蒸溜所が持つ独自の味わいの傾向のこと。", tags:["concept","character"] },
  { id:"mothballed_distillery", term_en:"Mothballed Distillery", term_jp:"モスボール・ディスティラリー",
    category:"others", description:"過去に稼働していたが、現在は閉鎖している蒸溜所のこと。", tags:["status","history"] },
  { id:"moonshine", term_en:"Moonshine", term_jp:"ムーンシャイン",
    category:"others", description:"密造酒のこと。禁酒法時代に月明かりの下で作られたことに由来する。", tags:["history","slang"] },
  { id:"keepers_of_the_quaich", term_en:"The Keepers of the Quaich", term_jp:"ザ・キーパー・オブ・ザ・クエイヒ",
    category:"others", description:"スコッチウイスキー業界に貢献した人物が入会できる格式高い協会。", tags:["honor","scotch"] },
  { id:"master_of_the_quaich", term_en:"The Master of the Quaich", term_jp:"ザ・マスター・オブ・ザ・クエイヒ",
    category:"others", description:"キーパーの中でも特に貢献度が大きく、長年務めた人物に贈られる名誉称号。", tags:["honor","rare"] },
  { id:"world_whiskies_awards", term_en:"World Whiskies Awards (WWA)", term_jp:"ワールド・ウイスキー・アワード",
    category:"others", description:"年に1回開催される国際的なウイスキーコンペティション。", tags:["competition","award"] },
  { id:"hall_of_fame", term_en:"Hall of Fame", term_jp:"ホール・オブ・フェイム",
    category:"others", description:"ウイスキー業界に偉大な功績を残した人物を称える「殿堂入り」の称号。", tags:["honor","history"] },
  { id:"regauge", term_en:"Regauge", term_jp:"リゲージ",
    category:"others", description:"樽の液体量やアルコール度数を再測定すること。熟成管理のために行われる。", tags:["management","cask"] },
  { id:"cheers", term_en:"Slàinte Mhath", term_jp:"スランジバー（乾杯）",
    category:"others", description:"スコットランド・ゲール語で「健康を！」という意味の乾杯の言葉。", tags:["culture","gaelic"] }

];