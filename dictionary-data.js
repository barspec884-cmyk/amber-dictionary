/* ============================================================
   Amber Palette — Whisky Dictionary Data (Complete Version)
============================================================ */

const DICTIONARY_DATA = [

  /* -----------------------
      原料・製麦 (raw)
  ----------------------- */
  { id:"barley", term_en:"Barley", term_jp:"大麦",
    category:"raw",
    description:"ウイスキーの主原料となる穀物。モルトウイスキーでは二条大麦が主に使われる。",
    tags:["grain","raw material"] },

  { id:"malt", term_en:"Malt", term_jp:"麦芽",
    category:"raw",
    description:"発芽させた大麦を乾燥させたもの。糖化しやすくなり、ウイスキーの基盤となる香味を生む。",
    tags:["raw material","malting"] },

  { id:"peat", term_en:"Peat", term_jp:"ピート",
    category:"raw",
    description:"長年堆積した植物が変化してできた泥炭。麦芽の乾燥時に燃料として用いることで、スモーキーな香りを付与する。",
    tags:["smoky","fuel","islay"] },

  { id:"kiln", term_en:"Kiln", term_jp:"キルン",
    category:"raw",
    description:"発芽した麦芽を乾燥させるための窯や炉。ここでピートを焚くことでスモーキーな香りがつく。",
    tags:["malting","drying"] },

  { id:"grist", term_en:"Grist", term_jp:"グリスト",
    category:"raw",
    description:"乾燥させた麦芽を粉砕し、糖化に適した粒度にしたもの。",
    tags:["raw material","milling"] },

  { id:"floor_malting", term_en:"Floor Malting", term_jp:"フロアモルティング",
    category:"raw",
    description:"大麦を床に広げ、手作業でかき混ぜながら発芽させる伝統的な製麦方法。",
    tags:["traditional","malting"] },


  /* -----------------------
      仕込み・発酵 (fermentation)
  ----------------------- */
  { id:"mash", term_en:"Mash", term_jp:"マッシュ（糖化液）",
    category:"fermentation",
    description:"粉砕した麦芽に温水を加え、デンプンを糖に変えた液。後に発酵へと進む。",
    tags:["brewing","liquid"] },

  { id:"wort", term_en:"Wort", term_jp:"麦汁（ウォート）",
    category:"fermentation",
    description:"マッシュを濾過した糖分を多く含む透明な液体。発酵槽へ送られる。",
    tags:["sweet","brewing"] },

  { id:"wash", term_en:"Wash", term_jp:"発酵液（ウォッシュ）",
    category:"fermentation",
    description:"麦汁を酵母で発発酵させた液体。アルコール度数は7〜10％。",
    tags:["fermentation","beer-like"] },

  { id:"yeast", term_en:"Yeast", term_jp:"酵母",
    category:"fermentation",
    description:"糖をアルコールと二酸化炭素に変える微生物。香りや味わいへの影響が大きい。",
    tags:["microorganism","aroma"] },

  { id:"wash_back", term_en:"Wash Back", term_jp:"ウォッシュバック（発酵槽）",
    category:"fermentation",
    description:"麦汁に酵母を加えて発酵させる巨大な槽。木製やステンレス製などがある。",
    tags:["vessel","fermentation"] },

  { id:"mashing", term_en:"Mashing", term_jp:"糖化（マッシング）",
    category:"fermentation",
    description:"麦芽のデンプンを酵素の力で糖に分解する工程。",
    tags:["process","sugar"] },

  { id:"mash_tun", term_en:"Mash Tun", term_jp:"糖化槽（マッシュタン）",
    category:"fermentation",
    description:"糖化（マッシング）を行うための槽。",
    tags:["vessel","mashing"] },

  { id:"sour_mash", term_en:"Sour Mash", term_jp:"サワーマッシュ",
    category:"fermentation",
    description:"前回蒸留の残液を次回仕込みに加えて発酵を安定させるバーボンの製法。",
    tags:["bourbon","ph control"] },


  /* -----------------------
      蒸留 (distillation)
  ----------------------- */
  { id:"pot_still", term_en:"Pot Still", term_jp:"ポットスチル",
    category:"distillation",
    description:"銅製の釜を用いた伝統的蒸留器。形状が香味に影響する。",
    tags:["copper","batch distillation"] },

  { id:"column_still", term_en:"Column Still", term_jp:"カラムスチル",
    category:"distillation",
    description:"連続蒸留が可能でグレーンウイスキーに使われる。",
    tags:["continuous","grain whisky"] },

  { id:"cut_point", term_en:"Cut Point", term_jp:"カットポイント",
    category:"distillation",
    description:"ヘッド・ミドル・テールを区切るタイミング。",
    tags:["distillation control"] },

  { id:"coffey_still", term_en:"Coffey Still", term_jp:"コフィースチル",
    category:"distillation",
    description:"高純度のアルコールを連続で得られる蒸留器。",
    tags:["continuous","grain whisky"] },

  { id:"second_distillation", term_en:"Second Distillation", term_jp:"再留",
    category:"distillation",
    description:"モルト製造における2回目の蒸留。",
    tags:["batch distillation"] },

  { id:"first_distillation", term_en:"First Distillation", term_jp:"初留",
    category:"distillation",
    description:"発酵液を蒸留しローワインを得る最初の工程。",
    tags:["batch distillation"] },

  { id:"new_pot", term_en:"New Pot", term_jp:"ニューポット",
    category:"distillation",
    description:"蒸留直後の透明な原酒。",
    tags:["raw spirit","unaged"] },

  { id:"direct_heating", term_en:"Direct Heating", term_jp:"直火加熱",
    category:"distillation",
    description:"ポットスチルを直接炎で加熱する方法。",
    tags:["traditional","heating"] },

  { id:"indirect_heating", term_en:"Indirect Heating", term_jp:"間接加熱",
    category:"distillation",
    description:"蒸気などで内部から均一に加熱する方法。",
    tags:["steam","heating"] },

  { id:"beer_still", term_en:"Beer Still", term_jp:"ビアスチル",
    category:"distillation",
    description:"アイルランド式3回蒸留の初回に使われる大型ポットスチル。",
    tags:["irish","distillation"] },


  /* -----------------------
      熟成 (maturation)
  ----------------------- */
  { id:"cask", term_en:"Cask", term_jp:"カスク（樽）",
    category:"maturation",
    description:"ウイスキーを熟成させるオーク樽。",
    tags:["oak","maturation"] },

  { id:"bourbon_barrel", term_en:"Bourbon Barrel", term_jp:"バーボンバレル",
    category:"maturation",
    description:"バーボン熟成後の樽。甘い香りを付与。",
    tags:["american oak","vanilla"] },

  { id:"sherry_cask", term_en:"Sherry Cask", term_jp:"シェリーカスク",
    category:"maturation",
    description:"シェリー酒熟成後の樽。濃厚な甘味を付与。",
    tags:["european oak","dried fruit"] },

  { id:"angels_share", term_en:"Angel's Share", term_jp:"天使の分け前",
    category:"maturation",
    description:"熟成中に蒸発して失われる分。",
    tags:["evaporation"] },

  { id:"warehouse", term_en:"Warehouse", term_jp:"熟成庫（ウェアハウス）",
    category:"maturation",
    description:"樽を保存する建物。環境で熟成が変わる。",
    tags:["environment","maturation"] },

  { id:"new_cask", term_en:"New Cask", term_jp:"新樽",
    category:"maturation",
    description:"未使用の樽。バーボンでは義務。",
    tags:["oak","virgin"] },

  { id:"first_fill", term_en:"First Fill", term_jp:"ファーストフィル",
    category:"maturation",
    description:"ウイスキーが初めて入る樽。",
    tags:["cask condition"] },

  { id:"second_fill", term_en:"Second Fill", term_jp:"セカンドフィル",
    category:"maturation",
    description:"2回目に詰められた樽。",
    tags:["cask condition"] },

  { id:"refill_cask", term_en:"Refill Cask", term_jp:"リフィル樽",
    category:"maturation",
    description:"3回以上使われる樽。影響が穏やか。",
    tags:["cask condition"] },

  { id:"butt", term_en:"Butt", term_jp:"バット",
    category:"maturation",
    description:"約500L の大型シェリー樽。",
    tags:["sherry","cask size"] },

  { id:"hogshead", term_en:"Hogshead", term_jp:"ホグスヘッド",
    category:"maturation",
    description:"バーボン樽を組み替えて作る中型樽。",
    tags:["cask size"] },

  { id:"puncheon", term_en:"Puncheon", term_jp:"パンチョン",
    category:"maturation",
    description:"約450L、中型シェリー樽。",
    tags:["sherry","cask size"] },

  { id:"barrel", term_en:"Barrel", term_jp:"バレル",
    category:"maturation",
    description:"200Lの標準的なアメリカンウイスキー樽。",
    tags:["bourbon","cask size"] },

  { id:"char", term_en:"Char", term_jp:"チャー",
    category:"maturation",
    description:"樽内側を焦がす工程。",
    tags:["toasting"] },

  { id:"devils_cut", term_en:"Devil's Cut", term_jp:"デビルズカット",
    category:"maturation",
    description:"樽材に染み込み取り出せない部分。",
    tags:["loss"] },

  { id:"marriage", term_en:"Marriage", term_jp:"マリッジ",
    category:"maturation",
    description:"ブレンド後に樽内で馴染ませる工程。",
    tags:["blending"] },


  /* -----------------------
      仕上げ・ボトリング (finishing)
  ----------------------- */
  { id:"finish", term_en:"Finish", term_jp:"フィニッシュ（後熟）",
    category:"finishing",
    description:"熟成後に別樽へ移して追加熟成させる。",
    tags:["extra maturation"] },

  { id:"chill_filtration", term_en:"Chill Filtration", term_jp:"冷却濾過",
    category:"finishing",
    description:"低温で濁りの原因を除去する濾過法。",
    tags:["filtration"] },

  { id:"coloring", term_en:"Coloring", term_jp:"着色（カラメル色素）",
    category:"finishing",
    description:"色のバラつきを整えるための着色。",
    tags:["e150a"] },

  { id:"cask_strength", term_en:"Cask Strength", term_jp:"カスクストレングス",
    category:"finishing",
    description:"加水せず樽出し度数でボトリング。",
    tags:["high abv","bottling"] },

  { id:"non_chillfiltered", term_en:"Non-Chillfiltered", term_jp:"ノンチルフィルター",
    category:"finishing",
    description:"冷却濾過を行わずボトリングすること。",
    tags:["no filtration"] },

  { id:"official_bottle", term_en:"Official Bottle", term_jp:"オフィシャルボトル",
    category:"finishing",
    description:"蒸留所公式のボトリング。",
    tags:["distillery"] },

  { id:"bottlers", term_en:"Bottlers", term_jp:"ボトラーズ",
    category:"finishing",
    description:"独自に熟成・瓶詰する業者。",
    tags:["independent"] },

  { id:"barrel_proof", term_en:"Barrel Proof", term_jp:"バレルプルーフ",
    category:"finishing",
    description:"バーボン系の樽出し度数表記。",
    tags:["bourbon"] },

  { id:"proof", term_en:"Proof", term_jp:"プルーフ",
    category:"finishing",
    description:"アメリカの度数単位（ABV×2）。",
    tags:["unit"] },

  { id:"small_batch", term_en:"Small Batch", term_jp:"スモールバッチ",
    category:"finishing",
    description:"少数樽でボトリングする製法。",
    tags:["batch"] },

  { id:"blender", term_en:"Blender", term_jp:"ブレンダー",
    category:"finishing",
    description:"原酒を選定しブレンドを行う職人。",
    tags:["profession"] },


  /* -----------------------
      テイスティング【1】果実系
  ----------------------- */
  { id:"apple", term_en:"Apple", term_jp:"リンゴ",
    category:"tasting",
    description:"青リンゴから焼きリンゴまで、爽やか・甘酸っぱい香り。",
    tags:["fruit","fresh"] },

  { id:"pear", term_en:"Pear", term_jp:"洋ナシ",
    category:"tasting",
    description:"上品で滑らかな甘い果実香。スコッチに多い。",
    tags:["fruit","soft"] },

  { id:"citrus", term_en:"Citrus", term_jp:"シトラス",
    category:"tasting",
    description:"オレンジ・レモンなどの爽やかな柑橘香。",
    tags:["fruit","fresh"] },

  { id:"orange_peel", term_en:"Orange Peel", term_jp:"オレンジピール",
    category:"tasting",
    description:"柑橘の皮のビター感を伴う香り。",
    tags:["citrus","bitter"] },

  { id:"lemon_zest", term_en:"Lemon Zest", term_jp:"レモンゼスト",
    category:"tasting",
    description:"鋭い柑橘の皮のフレッシュ感。",
    tags:["citrus","fresh"] },

  { id:"grapefruit", term_en:"Grapefruit", term_jp:"グレープフルーツ",
    category:"tasting",
    description:"酸味と軽い苦味が特徴の柑橘香。",
    tags:["fresh","bitter"] },

  { id:"banana", term_en:"Banana", term_jp:"バナナ",
    category:"tasting",
    description:"熟した甘いエステル香。",
    tags:["sweet","fruit"] },

  { id:"pineapple", term_en:"Pineapple", term_jp:"パイナップル",
    category:"tasting",
    description:"トロピカル系のジューシーな香り。",
    tags:["tropical"] },

  { id:"mango", term_en:"Mango", term_jp:"マンゴー",
    category:"tasting",
    description:"濃厚で甘い南国フルーツの香り。",
    tags:["tropical","sweet"] },

  { id:"lychee", term_en:"Lychee", term_jp:"ライチ",
    category:"tasting",
    description:"華やかでみずみずしい果実香。",
    tags:["floral","fruit"] },

  { id:"peach", term_en:"Peach", term_jp:"桃",
    category:"tasting",
    description:"熟した桃のジューシーな香り。",
    tags:["fruit"] },

  { id:"plum", term_en:"Plum", term_jp:"プラム",
    category:"tasting",
    description:"赤系果実の甘酸っぱい香り。",
    tags:["fruit","red fruit"] },

  { id:"raisin", term_en:"Raisin", term_jp:"レーズン",
    category:"tasting",
    description:"シェリー樽でよく出る濃厚な甘い香り。",
    tags:["dried fruit","sherry"] },

  { id:"fig", term_en:"Fig", term_jp:"イチジク",
    category:"tasting",
    description:"熟した果肉の深い甘み。",
    tags:["dried fruit"] },

  { id:"date", term_en:"Date", term_jp:"デーツ",
    category:"tasting",
    description:"黒糖のような濃厚な甘み。",
    tags:["dried fruit","rich"] },


  /* -----------------------
      テイスティング【2】甘味系・樽系
  ----------------------- */
  { id:"honey", term_en:"Honey", term_jp:"ハチミツ",
    category:"tasting",
    description:"甘く丸みのある香り。多くのモルトに現れる。",
    tags:["sweet","soft"] },

  { id:"vanilla", term_en:"Vanilla", term_jp:"バニラ",
    category:"tasting",
    description:"アメリカンオーク由来の甘い香り。",
    tags:["oak","sweet"] },

  { id:"caramel", term_en:"Caramel", term_jp:"キャラメル",
    category:"tasting",
    description:"濃厚な甘い香り。バーボンに多い。",
    tags:["sweet"] },

  { id:"butterscotch", term_en:"Butterscotch", term_jp:"バタースコッチ",
    category:"tasting",
    description:"コクのある濃厚な甘さ。",
    tags:["sweet","rich"] },

  { id:"chocolate", term_en:"Chocolate", term_jp:"チョコレート",
    category:"tasting",
    description:"甘さとビターが共存する香り。",
    tags:["rich"] },

  { id:"coffee", term_en:"Coffee", term_jp:"コーヒー",
    category:"tasting",
    description:"焙煎系のビターな深み。",
    tags:["roasted","bitter"] },

  { id:"cocoa", term_en:"Cocoa", term_jp:"ココア",
    category:"tasting",
    description:"甘さとほろ苦さがある粉系の香り。",
    tags:["sweet","bitter"] },

  { id:"nutty", term_en:"Nutty", term_jp:"ナッツ",
    category:"tasting",
    description:"香ばしいナッツ香。",
    tags:["roasted"] },

  { id:"almond", term_en:"Almond", term_jp:"アーモンド",
    category:"tasting",
    description:"乾いたナッツの香り。",
    tags:["nutty"] },

  { id:"hazelnut", term_en:"Hazelnut", term_jp:"ヘーゼルナッツ",
    category:"tasting",
    description:"甘く香ばしいナッツ香。",
    tags:["nutty","sweet"] },

  { id:"toffee", term_en:"Toffee", term_jp:"トフィー",
    category:"tasting",
    description:"濃厚なキャラメル様の香り。",
    tags:["sweet","rich"] },

  { id:"biscuit", term_en:"Biscuit", term_jp:"ビスケット",
    category:"tasting",
    description:"焼き菓子の香ばしさ。",
    tags:["baked","sweet"] },

  { id:"bread", term_en:"Bread", term_jp:"パン香",
    category:"tasting",
    description:"イーストや焼いたパンの香り。",
    tags:["baked"] },

  { id:"spicy", term_en:"Spicy", term_jp:"スパイシー",
    category:"tasting",
    description:"胡椒・シナモンなどの刺激ある香り。",
    tags:["spice"] },

  { id:"cinnamon", term_en:"Cinnamon", term_jp:"シナモン",
    category:"tasting",
    description:"温かみのある甘スパイス。",
    tags:["spice"] },

  { id:"clove", term_en:"Clove", term_jp:"クローブ",
    category:"tasting",
    description:"鋭く刺激的なスパイス香。",
    tags:["spice","intense"] },

  { id:"ginger", term_en:"Ginger", term_jp:"ジンジャー",
    category:"tasting",
    description:"ピリッとした鋭い香り。",
    tags:["spice","fresh"] },

  { id:"pepper", term_en:"Black Pepper", term_jp:"黒コショウ",
    category:"tasting",
    description:"刺激あるスパイス香。",
    tags:["spice","sharp"] },


  /* -----------------------
      テイスティング【3】香草・花・ウッディ
  ----------------------- */
  { id:"woody", term_en:"Woody", term_jp:"ウッディー",
    category:"tasting",
    description:"木の皮・樽由来の香り。",
    tags:["oak"] },

  { id:"oaky", term_en:"Oaky", term_jp:"オーク香",
    category:"tasting",
    description:"樽材の主張が強い香り。",
    tags:["oak","maturation"] },

  { id:"herbal", term_en:"Herbal", term_jp:"ハーバル",
    category:"tasting",
    description:"ハーブ系の青い香り。",
    tags:["fresh","green"] },

  { id:"floral", term_en:"Floral", term_jp:"フローラル",
    category:"tasting",
    description:"花のように華やかな香り。",
    tags:["flower","elegant"] },

  { id:"rose", term_en:"Rose", term_jp:"ローズ",
    category:"tasting",
    description:"バラの華やかな香り。",
    tags:["floral"] },

  { id:"smoked_meat", term_en:"Smoked Meat", term_jp:"燻製肉",
    category:"tasting",
    description:"ヘビーピートで感じやすい、肉系のスモーク香。",
    tags:["peat","smoke","savory"] },


  /* -----------------------
      テイスティング【4】味わい系
  ----------------------- */
  { id:"sweet", term_en:"Sweet", term_jp:"スウィート",
    category:"tasting",
    description:"砂糖・果実・蜂蜜のような甘い味。",
    tags:["sweet"] },

  { id:"dry", term_en:"Dry", term_jp:"ドライ",
    category:"tasting",
    description:"甘さを感じさせない引き締まった味わい。",
    tags:["clean"] },

  { id:"rich", term_en:"Rich", term_jp:"リッチ",
    category:"tasting",
    description:"厚みがあり力強い味わい。",
    tags:["heavy","deep"] },

  { id:"light", term_en:"Light", term_jp:"ライト",
    category:"tasting",
    description:"軽やかで飲みやすい味。",
    tags:["easy","smooth"] },

  { id:"malty", term_en:"Malty", term_jp:"モルティ",
    category:"tasting",
    description:"麦芽由来の甘さと香ばしさ。",
    tags:["grain","sweet"] },

  { id:"grainy", term_en:"Grainy", term_jp:"グレイニー",
    category:"tasting",
    description:"穀物感のある素朴な味。",
    tags:["grain"] },

  { id:"oily", term_en:"Oily", term_jp:"オイリー",
    category:"tasting",
    description:"油分を思わせる重厚な質感。",
    tags:["mouthfeel"] },

  { id:"buttery", term_en:"Buttery", term_jp:"バター風味",
    category:"tasting",
    description:"滑らかでコクのある乳製品のような味。",
    tags:["rich","soft"] },

  { id:"creamy", term_en:"Creamy", term_jp:"クリーミー",
    category:"tasting",
    description:"ミルキーで柔らかい味わい。",
    tags:["soft","sweet"] },

  { id:"caramelized", term_en:"Caramelized", term_jp:"カラメル風味",
    category:"tasting",
    description:"焦がし糖の甘苦い味。",
    tags:["sweet","bitter"] },

  { id:"brown_sugar", term_en:"Brown Sugar", term_jp:"ブラウンシュガー",
    category:"tasting",
    description:"黒糖のような深い甘み。",
    tags:["sweet","rich"] },

  { id:"molasses", term_en:"Molasses", term_jp:"糖蜜",
    category:"tasting",
    description:"濃厚で粘り気のある甘み。",
    tags:["rich","dark"] },

  { id:"tropical", term_en:"Tropical Fruit", term_jp:"トロピカルフルーツ",
    category:"tasting",
    description:"マンゴー・パインなどの南国系の味。",
    tags:["tropical","sweet"] },

  { id:"stone_fruit", term_en:"Stone Fruit", term_jp:"ストーンフルーツ",
    category:"tasting",
    description:"核のある果実（桃・アプリコット）の甘み。",
    tags:["fruit","sweet"] },

  { id:"red_fruit", term_en:"Red Fruit", term_jp:"赤系果実",
    category:"tasting",
    description:"ベリー系の甘酸っぱい味わい。",
    tags:["fruit"] },

  { id:"black_fruit", term_en:"Black Fruit", term_jp:"黒系果実",
    category:"tasting",
    description:"プルーンやブラックベリーの濃厚な味わい。",
    tags:["fruit","dark"] },

  { id:"bitter", term_en:"Bitter", term_jp:"ビター",
    category:"tasting",
    description:"柑橘の皮・コーヒーに似た心地よい苦味。",
    tags:["bitter"] },

  { id:"salty", term_en:"Salty", term_jp:"ソルティ",
    category:"tasting",
    description:"海風由来のミネラル感のある塩味。",
    tags:["mineral","coastal"] },

  { id:"umami", term_en:"Umami", term_jp:"旨味",
    category:"tasting",
    description:"だしのような深みのある味。",
    tags:["savory","complex"] },

  { id:"savory", term_en:"Savory", term_jp:"セイボリー",
    category:"tasting",
    description:"塩味や旨味、燻製肉を思わせる風味。",
    tags:["umami","smoke"] },

  { id:"meaty", term_en:"Meaty", term_jp:"ミーティー",
    category:"tasting",
    description:"肉のような厚い旨味。ヘビーピート系に多い。",
    tags:["umami","rich"] },

  { id:"herbal_taste", term_en:"Herbal (Taste)", term_jp:"ハーバル（味）",
    category:"tasting",
    description:"ハーブのような青く清涼感のある味。",
    tags:["fresh"] },

  { id:"earthy", term_en:"Earthy", term_jp:"アーシー",
    category:"tasting",
    description:"土・鉱物・根菜を思わせる複雑な味。",
    tags:["mineral","peat"] },

  { id:"mineral", term_en:"Mineral", term_jp:"ミネラル",
    category:"tasting",
    description:"硬質なミネラル感のある味。",
    tags:["clean","sharp"] },

  { id:"smoked", term_en:"Smoked", term_jp:"スモーク風味",
    category:"tasting",
    description:"燻煙による味わい。",
    tags:["smoke","peat"] },

  { id:"ash", term_en:"Ash", term_jp:"アッシュ（灰）",
    category:"tasting",
    description:"燃えた灰のような味。強烈なピートで出る。",
    tags:["peat","intense"] },

  { id:"medicinal", term_en:"Medicinal", term_jp:"メディシナル",
    category:"tasting",
    description:"薬品のような特徴的な味。アイラで顕著。",
    tags:["peat","phenol"] },

  { id:"iodine", term_en:"Iodine", term_jp:"ヨード",
    category:"tasting",
    description:"海藻系の薬品香。",
    tags:["coastal","phenol"] },

  { id:"briny", term_en:"Briny", term_jp:"ブライニー",
    category:"tasting",
    description:"潮気と海の風味。",
    tags:["coastal"] },

  { id:"peppermint", term_en:"Peppermint", term_jp:"ペパーミント",
    category:"tasting",
    description:"清涼感あるミント香。",
    tags:["fresh","cool"] },

  { id:"menthol", term_en:"Menthol", term_jp:"メントール",
    category:"tasting",
    description:"鋭くクールな風味。",
    tags:["fresh","sharp"] },

  { id:"spice_mix", term_en:"Mixed Spice", term_jp:"ミックススパイス",
    category:"tasting",
    description:"複数のスパイスが混ざった複雑な味。",
    tags:["spice"] },

  { id:"anise", term_en:"Anise", term_jp:"アニス",
    category:"tasting",
    description:"甘く清涼感のあるスパイス風味。",
    tags:["spice","fresh"] },

  { id:"licorice", term_en:"Licorice", term_jp:"リコリス",
    category:"tasting",
    description:"独特の甘苦さを持つ黒糖のような味。",
    tags:["sweet","bitter"] },

  { id:"oak_tannin", term_en:"Oak Tannin", term_jp:"樽タンニン",
    category:"tasting",
    description:"渋みとスパイスを伴う味。",
    tags:["oak","bitter"] },

  { id:"winey", term_en:"Winey", term_jp:"ワイニー",
    category:"tasting",
    description:"ワイン樽の影響を感じる味。",
    tags:["wine","fruity"] },

  { id:"sherry", term_en:"Sherried", term_jp:"シェリー感",
    category:"tasting",
    description:"甘く濃いシェリー系の味。",
    tags:["sherry","sweet"] },

  { id:"port_wine", term_en:"Port Wine", term_jp:"ポートワイン風味",
    category:"tasting",
    description:"赤ワインのような甘酸っぱい味。",
    tags:["wine","red fruit"] },

  { id:"rum_note", term_en:"Rum Note", term_jp:"ラム香味",
    category:"tasting",
    description:"ラム樽由来の甘くスパイシーな味。",
    tags:["sweet","spice"] },

  { id:"sooty", term_en:"Sooty", term_jp:"煤っぽい",
    category:"tasting",
    description:"焦げ・煙の要素を含む味。",
    tags:["smoke","peat"] },


  /* -----------------------
      テイスティング【5】質感（テクスチャー）
  ----------------------- */
  { id:"smooth", term_en:"Smooth", term_jp:"スムース",
    category:"tasting",
    description:"角がなく飲みやすい口当たり。",
    tags:["soft","easy"] },

  { id:"silky", term_en:"Silky", term_jp:"シルキー",
    category:"tasting",
    description:"絹のように滑らか。",
    tags:["soft"] },

  { id:"velvety", term_en:"Velvety", term_jp:"ベルベッティ",
    category:"tasting",
    description:"ベルベットのようになめらかで厚い。",
    tags:["rich","soft"] },

  { id:"creamy_texture", term_en:"Creamy Texture", term_jp:"クリーミーな口当たり",
    category:"tasting",
    description:"まろやかで濃厚な質感。",
    tags:["soft","rich"] },

  { id:"thick", term_en:"Thick", term_jp:"とろみ",
    category:"tasting",
    description:"粘度が高く重いテクスチャ。",
    tags:["rich"] },

  { id:"chewy", term_en:"Chewy", term_jp:"チューイー",
    category:"tasting",
    description:"噛み応えのあるような厚い質感。",
    tags:["rich","heavy"] },

  { id:"full_body", term_en:"Full-bodied", term_jp:"フルボディ",
    category:"tasting",
    description:"味わいの密度が非常に高い。",
    tags:["heavy","rich"] },

  { id:"medium_body", term_en:"Medium-bodied", term_jp:"ミディアムボディ",
    category:"tasting",
    description:"中庸でバランスの良い質感。",
    tags:["balanced"] },

  { id:"light_body", term_en:"Light-bodied", term_jp:"ライトボディ",
    category:"tasting",
    description:"軽やかで透明感のある質感。",
    tags:["light"] },

  { id:"dry_texture", term_en:"Dry Texture", term_jp:"ドライな口当たり",
    category:"tasting",
    description:"収れん感を伴う乾いた印象。",
    tags:["dry","tannin"] },

  { id:"tannic", term_en:"Tannic", term_jp:"タンニン感",
    category:"tasting",
    description:"樽・ワイン樽由来の渋み。",
    tags:["tannin","bitter"] },

  { id:"crispy", term_en:"Crisp", term_jp:"クリスプ",
    category:"tasting",
    description:"キレがあり爽快な口当たり。",
    tags:["fresh"] },

  { id:"sharp", term_en:"Sharp", term_jp:"シャープ",
    category:"tasting",
    description:"刺激があり切れ味のある口当たり。",
    tags:["fresh","bold"] },

  { id:"warming", term_en:"Warming", term_jp:"ウォーミング",
    category:"tasting",
    description:"飲んだ後に身体が温まるような感覚。",
    tags:["alcohol","warm"] },

  { id:"hot", term_en:"Hot", term_jp:"ホット",
    category:"tasting",
    description:"アルコールによる熱い感覚。",
    tags:["alcohol"] },

  { id:"prickly", term_en:"Prickly", term_jp:"ピリピリ",
    category:"tasting",
    description:"舌に刺激を感じる質感。",
    tags:["sharp","spice"] },

  { id:"effervescent", term_en:"Effervescent", term_jp:"微炭酸のような刺激",
    category:"tasting",
    description:"舌に細かい泡のような刺激。",
    tags:["fresh"] },

  { id:"syrupy", term_en:"Syrupy", term_jp:"シロップのような重さ",
    category:"tasting",
    description:"濃厚で甘い液質。",
    tags:["rich","thick"] },

  { id:"watery", term_en:"Watery", term_jp:"ウォータリー",
    category:"tasting",
    description:"水のように軽い質感。",
    tags:["light"] },

  { id:"balanced", term_en:"Balanced", term_jp:"バランスが良い",
    category:"tasting",
    description:"複数の要素が調和した味わい。",
    tags:["harmony"] },


  /* -----------------------
      追加：テイスティング表現（印象・余韻）
  ----------------------- */
  { id:"delicate", term_en:"Delicate", term_jp:"繊細な",
    category:"tasting",
    description:"主張しすぎず、ほのかで上品な味わい。",
    tags:["light","impression"] },

  { id:"clean", term_en:"Clean", term_jp:"クリーン",
    category:"tasting",
    description:"雑味がなく、透き通るようなきれいな味わい。",
    tags:["light","impression"] },

  { id:"fresh", term_en:"Fresh", term_jp:"フレッシュ",
    category:"tasting",
    description:"若々しく、生き生きとした爽やかな風味。",
    tags:["light","lively"] },

  { id:"mellow", term_en:"Mellow", term_jp:"メロウ（まろやか）",
    category:"tasting",
    description:"熟成を経て角が取れた、円熟味のある柔らかさ。",
    tags:["smooth","impression"] },

  { id:"long_finish", term_en:"Long Finish", term_jp:"長い余韻",
    category:"tasting",
    description:"飲み込んだ後も香味が長く口内に留まること。熟成が長い酒によくある。",
    tags:["finish","impression"] },

  { id:"short_finish", term_en:"Short Finish", term_jp:"短い余韻",
    category:"tasting",
    description:"味がスッと消えるキレの良さ。ライトなウイスキーに多い。",
    tags:["finish","impression"] },

  { id:"dry_finish", term_en:"Dry Finish", term_jp:"ドライな余韻",
    category:"tasting",
    description:"口の中が乾くような、甘さの残らない引き締まった後味。",
    tags:["finish","impression"] },

  { id:"warm_finish", term_en:"Warm Finish", term_jp:"温かみのある余韻",
    category:"tasting",
    description:"アルコールの温かさがじんわりと胸に残る心地よい感覚。",
    tags:["finish","impression"] },


  /* -----------------------
      追加：表現を広げるテイスティング用語
  ----------------------- */
  { id:"sugary", term_en:"Sugary", term_jp:"砂糖のような",
    category:"tasting",
    description:"精製された砂糖のような、ストレートで癖のない甘さ。",
    tags:["sweet","simple"] },

  { id:"maple", term_en:"Maple-like", term_jp:"メープル風",
    category:"tasting",
    description:"樹液を煮詰めたような、香ばしさとコクのある甘味。",
    tags:["sweet","wood"] },

  { id:"jammy", term_en:"Jammy", term_jp:"ジャムのような",
    category:"tasting",
    description:"果実を煮詰めたような、濃厚で凝縮感のある甘酸っぱさ。",
    tags:["fruit","sweet","rich"] },

  { id:"cereal", term_en:"Cereal-like", term_jp:"穀物のような",
    category:"tasting",
    description:"朝食のシリアルやオートミールを思わせる、素朴な穀物の香り。",
    tags:["grain","malty"] },

  { id:"fragrant", term_en:"Fragrant", term_jp:"フレグラント（香り高い）",
    category:"tasting",
    description:"香水のように華やかで、香りの立ち方が強いこと。",
    tags:["floral","intense"] },

  { id:"lavender", term_en:"Lavender", term_jp:"ラベンダー",
    category:"tasting",
    description:"フローラルかつ清涼感のある、特徴的な紫色の花の香り。",
    tags:["floral","herbal"] },

  { id:"chamomile", term_en:"Chamomile", term_jp:"カモミール",
    category:"tasting",
    description:"リンゴのような甘い香りを伴う、優しいハーブ香。",
    tags:["herbal","gentle"] },

  { id:"grassy", term_en:"Grassy", term_jp:"グラッシー（青草）",
    category:"tasting",
    description:"刈り取ったばかりの芝生のような、青々としたフレッシュな香り。",
    tags:["herbal","fresh","green"] },

  { id:"tar", term_en:"Tar-like", term_jp:"タールのような",
    category:"tasting",
    description:"道路舗装のタールや、ねっとりとした黒い煙の香り。重厚なピート香。",
    tags:["peat","smoke","heavy"] },

  { id:"nutmeg", term_en:"Nutmeg", term_jp:"ナツメグ",
    category:"tasting",
    description:"甘く刺激的で、少しウッディなスパイス香。",
    tags:["spice","warm"] },

  { id:"lingering", term_en:"Lingering", term_jp:"長く続く余韻",
    category:"tasting",
    description:"飲み込んだ後も、香りや味わいが口の中に心地よく残り続けること。",
    tags:["finish","impression"] },


  /* -----------------------
      追加：流通・ボトラーズ (Distribution & Bottlers)
  ----------------------- */
  { id:"official_bottler", term_en:"Official Bottlers", term_jp:"オフィシャルボトラーズ",
    category:"distribution",
    description:"蒸留所（またはその所有企業）が自社ブランドとして公式に瓶詰・販売するもの。味の安定性やハウススタイルを重視する。",
    tags:["distillery","brand","standard"] },

  { id:"independent_bottler", term_en:"Independent Bottlers", term_jp:"インディペンデントボトラーズ",
    category:"distribution",
    description:"蒸留所以外の独立業者が樽ごと原酒を購入し、独自に熟成・瓶詰・販売する業者（IB）。",
    tags:["independent","ib","single cask"] },

  { id:"importer", term_en:"Importer", term_jp:"インポーター",
    category:"distribution",
    description:"海外のウイスキーを輸入し、国内での流通・販売・プロモーションを行う業者。",
    tags:["distribution","market"] },

  { id:"bonder", term_en:"Bonder", term_jp:"ボンダー",
    category:"distribution",
    description:"蒸留所から原酒を樽で購入し、自社倉庫で熟成・ブレンド・瓶詰を行う業者。アイルランド（アイリッシュウイスキー）で伝統的に見られる形態。",
    tags:["irish","maturation","blending"] }
, // ← 前のデータとのつなぎ目のカンマ（忘れずに！）

  /* -----------------------
      追加：その他 (Others)
  ----------------------- */
  { id:"cheers", term_en:"Slàinte Mhath", term_jp:"スランジバー（乾杯）",
    category:"others",
    description:"スコットランド・ゲール語で「健康を！」という意味の乾杯の言葉。「スランジバー」と発音する。",
    tags:["culture","gaelic"] }
