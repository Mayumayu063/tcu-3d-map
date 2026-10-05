// =================================
// 基本設定
// =================================

const params =
  new URLSearchParams(window.location.search);

const mode =
  params.get("mode");

const modeLabel =
  document.getElementById("mode-label");

const model =
  document.getElementById("campus-model");

const loader =
  document.getElementById("loader");


// =================================
// 学生・管理者モード
// =================================

if (mode === "admin") {

  modeLabel.textContent = "管理者用";

  modeLabel.classList.add(
    "admin-mode"
  );

} else {

  modeLabel.textContent = "学生用";

  modeLabel.classList.add(
    "student-mode"
  );

}


// =================================
// ローディング
// =================================

model.addEventListener(
  "load",
  () => {

    loader.classList.add(
      "loaded"
    );

  }
);


model.addEventListener(
  "error",
  (event) => {

    console.error(
      "3Dモデル読み込みエラー",
      event
    );

    loader.classList.add(
      "loaded"
    );

  }
);


// =================================
// 建物データ
// =================================

const buildings = {

  building1: {
  number: "BUILDING 01",
  name: "1号館",
  image: "images/building01.jpg",

  facilities:
    "警備室・総合案内／事務局／研究室／一般教室／ラウンジオーク／ダイバーシティ推進室",

  student: [
    {
      label: "館内を見る",
      url: "https://my.matterport.com/show/?m=7xcvP8f6PNC&play=0&ss=300&sr=.05,1.51"
    }
  ],

  admin: [
    {
      label: "Matterport",
      url: "https://my.matterport.com/show/?m=7xcvP8f6PNC&play=0&ss=300&sr=.05,1.51"
    }
  ]
},


building2: {
  number: "BUILDING 02",
  name: "2号館",
  image: "images/building02.jpg",

  facilities:
  "ナノ科学技術学際研究センター／一般教室／研究室・実験室（医用工学科）",

  student: [
    {
      label: "館内を見る",
      url: "https://my.matterport.com/show/?m=7xcvP8f6PNC&play=0&ss=14&sr=1.51,1.51"
    }
  ],

  admin: [
    {
      label: "Matterport",
      url: "https://my.matterport.com/show/?m=7xcvP8f6PNC&play=0&ss=14&sr=1.51,1.51"
    }
  ]
},


building3: {
  number: "BUILDING 03",
  name: "3号館",
  image: "images/building03.jpg",

  facilities:
  "研究室・実験室（電気電子通信工学科、情報科学科、医用工学科）／一般教室／五島メモリアルホール／歴史展示コーナー",
  
  student: [
    {
      label: "館内を見る",
      url: "https://my.matterport.com/show/?m=7xcvP8f6PNC&play=0&ss=68&sr=1.96,-1.48"
    }
  ],

  admin: [
    {
      label: "Matterport",
      url: "https://my.matterport.com/show/?m=7xcvP8f6PNC&play=0&ss=68&sr=1.96,-1.48"
    }
  ]
},


building4: {
  number: "BUILDING 04",
  name: "4号館",
  image: "images/building04.jpg",

  facilities:
  "研究室・実験室（建築都市デザイン学部）／製図室",

  student: [
    {
      label: "館内を見る",
      url: "https://my.matterport.com/show/?m=z2HRXkDmcsh"
    }
  ],

  admin: [
    {
      label: "Matterport",
      url: "https://my.matterport.com/show/?m=z2HRXkDmcsh"
    }
  ]
},


building5: {
  number: "BUILDING 05",
  name: "5号館",
  image: "images/building05.jpg",

  facilities:
  "小講堂／実験室（建築）／研究室（都市工学科）／子育て支援センター「ぴっぴ」",

  student: [
    {
      label: "外観を見る",
      url: "https://my.matterport.com/show/?m=7xcvP8f6PNC&play=0&ss=182&sr=2.97,-.71"
    }
  ],

  admin: [
    {
      label: "Matterport",
      url: "https://my.matterport.com/show/?m=7xcvP8f6PNC&play=0&ss=182&sr=2.97,-.71"
    }
  ]
},


building6: {
  number: "BUILDING 06",
  name: "6号館",
  image: "images/building06.jpg",

  facilities:
  "一般教室（大教室）／総合研究所／実験室（物理化学、機械系基礎）／機械系設計製図室／研究室（自然科学科、応用化学科）／学生工房",

  student: [
    {
      label: "館内を見る",
      url: "https://my.matterport.com/show/?m=7xcvP8f6PNC&play=0&ss=344&sr=2.15,-1.39"
    }
  ],

  admin: [
    {
      label: "Matterport",
      url: "https://my.matterport.com/show/?m=7xcvP8f6PNC&play=0&ss=344&sr=2.15,-1.39"
    }
  ]
},



building7: {
  number: "BUILDING 07",
  name: "7号館",
  image: "images/building07.jpg",

  facilities:
  "研究室・実験室（都市生活学部、人間科学部）／TCUホール（大教室）／nana café／一般教室／音楽室／ピアノ室／造形室／演習室／都市フォーラム／プロジェクトスタジオ／保健・調理実習室／実習指導室／キャンパスショップ世田谷／Taki Global Floor",

  student: [
    {
      label: "館内を見る",
      url: "https://mpembed.com/show/?m=kjFQak5wPb1&mpu=2140&ga=UA-236226218-2"
    }
  ],

  admin: [
    {
      label: "Matterport",
      url: "https://mpembed.com/show/?m=kjFQak5wPb1&mpu=2140&ga=UA-236226218-2"
    }
  ]
},


building8: {
  number: "BUILDING 08",
  name: "8号館（図書館）",
  image: "images/building08.jpg",

  facilities:
  "図書館・情報基盤センター／ラーニング・コモンズ",

  student: [
    {
      label: "B1階を見る",
      url: "https://mpembed.com/show/?m=RbtSwZh31a2&mdir=1&mpu=2140"
    },

    {
      label: "1・2階を見る",
      url: "https://mpembed.com/show/?m=bBq3qjzNpvw&mdir=1&mpu=2140"
    },

    {
      label: "3・4階を見る",
      url: "https://mpembed.com/show/?m=N6Lr3zUqk3E&mdir=1&mpu=2140"
    }
  ],

  admin: [
    {
      label: "B1階 Matterport",
      url: "https://mpembed.com/show/?m=RbtSwZh31a2&mdir=1&mpu=2140"
    },

    {
      label: "1・2階 Matterport",
      url: "https://mpembed.com/show/?m=bBq3qjzNpvw&mdir=1&mpu=2140"
    },

    {
      label: "3・4階 Matterport",
      url: "https://mpembed.com/show/?m=N6Lr3zUqk3E&mdir=1&mpu=2140"
    }
  ]
},


building9: {
  number: "BUILDING 09",
  name: "9号館",
  image: "images/building09.jpg",

  facilities:
  "アリーナ／食堂「CANTEEN RARA」／カフェテラス「Sky Cafeteria（CAFÉ SORA）」／学生クラブ本部室／ホール／シャワー室／集会室／講義室／茶室（武蔵庵）／トレーニングルーム",

  student: [
    {
      label: "館内を見る",
      url: "https://my.matterport.com/show/?m=7xcvP8f6PNC&play=0&ss=107&sr=2.39,1.53"
    }
  ],

  admin: [
    {
      label: "Matterport",
      url: "https://my.matterport.com/show/?m=7xcvP8f6PNC&play=0&ss=107&sr=2.39,1.53"
    }
  ]
},


building10: {
  number: "BUILDING 10",
  name: "10号館",
  image: "images/building10.jpg",

  facilities:
  "実験室・研究室（機械工学科、機械システム工学科、電気電子通信工学科、都市工学科、知能情報工学科、原子力安全工学科）／創成工房／クリエイティブセンター／クリーンルーム／構造実験室／PBL教室",

  student: [
    {
      label: "館内を見る",
      url: "https://my.matterport.com/show/?m=7xcvP8f6PNC&play=0&ss=185&sr=1.51,1.32"
    }
  ],

  admin: [
    {
      label: "Matterport",
      url: "https://my.matterport.com/show/?m=7xcvP8f6PNC&play=0&ss=185&sr=1.51,1.32"
    }
  ]
},


building11: {
  number: "BUILDING 11",
  name: "11号館",
  image: "images/building11.jpg",

  facilities:
  "ものつくり支援センター／部室",

  student: [
    {
      label: "外観を見る",
      url: "https://my.matterport.com/show/?m=7xcvP8f6PNC&play=0&ss=215&sr=1.57,.94"
    }
  ],

  admin: [
    {
      label: "Matterport",
      url: "https://my.matterport.com/show/?m=7xcvP8f6PNC&play=0&ss=215&sr=1.57,.94"
    }
  ]
},


building12: {
  number: "BUILDING 12",
  name: "12号館",
  image: "images/building12.jpg",

  facilities:
  "実験室・研究室（機械工学科）",
  
  student: [
    {
      label: "外観を見る",
      url: "https://my.matterport.com/show/?m=7xcvP8f6PNC&play=0&ss=130&sr=3.13,.9"
    }
  ],

  admin: [
    {
      label: "Matterport",
      url: "https://my.matterport.com/show/?m=7xcvP8f6PNC&play=0&ss=130&sr=3.13,.9"
    }
  ]
}

};


// =================================
// 情報パネル
// =================================

const infoPanel =
  document.getElementById(
    "info-panel"
  );

const panelClose =
  document.getElementById(
    "panel-close"
  );

const panelBackdrop =
  document.getElementById(
    "panel-backdrop"
  );

const panelNumber =
  document.getElementById(
    "panel-number"
  );

const panelTitle =
  document.getElementById(
    "panel-title"
  );

const panelFacilities =
  document.getElementById(
    "panel-facilities"
  );

const panelLinks =
  document.getElementById(
    "panel-links"
  );


// =================================
// 建物パネルを開く
// =================================

function openBuilding(
  buildingId
) {

  const building =
    buildings[buildingId];


  if (!building) {
    return;
  }


  // 建物番号
  panelNumber.textContent =
    building.number;


  // 建物名
  panelTitle.textContent =
    building.name;

panelFacilities.textContent =
  building.facilities || "";

  // 背景写真
  infoPanel.style.backgroundImage =
    `
    linear-gradient(
      135deg,
      rgba(5, 49, 88, 0.94),
      rgba(0, 112, 185, 0.86)
    ),
    url("${building.image}")
    `;


  // -------------------------
  // ボタンを一度全部消す
  // -------------------------

  panelLinks.innerHTML = "";


  // -------------------------
  // 表示するリンクを決定
  // -------------------------

  let links;


  // 新しいモード別データがある建物
  if (
    building.student &&
    building.admin
  ) {

    if (mode === "admin") {

      links =
        building.admin;

    } else {

      links =
        building.student;

    }

  }

  // 2〜12号館など
  // まだ旧形式の建物
  else {

    links = [
      building.link1,
      building.link2
    ].filter(Boolean);

  }


  // -------------------------
  // ボタンを自動生成
  // -------------------------

  links.forEach(
    (link) => {

      const button =
        document.createElement(
          "a"
        );


      button.textContent =
        link.label;


      button.href =
        link.url;


      button.target =
        "_blank";


      panelLinks.appendChild(
        button
      );

    }
  );


  // -------------------------
  // パネル表示
  // -------------------------

  infoPanel.classList.add(
    "active"
  );


  panelBackdrop.classList.add(
    "active"
  );

}


// =================================
// ピンクリック
// =================================

document
  .querySelectorAll(".hotspot")
  .forEach(
    (pin) => {

      pin.addEventListener(
        "click",
        (event) => {

          // ピン配置中は開かない
          if (pinPlacementMode) {
            return;
          }


          event.stopPropagation();


          const buildingId =
            pin.dataset.building;


          openBuilding(
            buildingId
          );

        }
      );

    }
  );


// =================================
// パネルを閉じる
// =================================

function closePanel() {

  infoPanel.classList.remove(
    "active"
  );

  panelBackdrop.classList.remove(
    "active"
  );

}


panelClose.addEventListener(
  "click",
  closePanel
);


panelBackdrop.addEventListener(
  "click",
  closePanel
);


// =================================
// ピン位置設定モード
// =================================

let pinPlacementMode =
  false;

let pinTarget =
  null;


// Pキーを押す
document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key.toLowerCase()
      === "p"
    ) {

      const number =
        prompt(
          "配置する建物番号を入力してください。\n例：1 または 2"
        );


      if (!number) {
        return;
      }


      const buildingId =
        "building" + number;


      const pin =
        document.querySelector(
          `[data-building="${buildingId}"]`
        );


      if (!pin) {

        alert(
          number +
          "号館のピンがありません。"
        );

        return;

      }


      pinTarget =
        buildingId;

      pinPlacementMode =
        true;


      // モデル操作停止
      model.removeAttribute(
        "camera-controls"
      );


      model.style.cursor =
        "crosshair";

    }


    // Escでキャンセル
    if (
      event.key === "Escape"
      &&
      pinPlacementMode
    ) {

      endPinPlacement();

    }

  }
);


// =================================
// モデルをクリックして座標取得
// =================================

model.addEventListener(
  "click",
  (event) => {

    if (!pinPlacementMode) {
      return;
    }


    const hit =
      model.positionAndNormalFromPoint(
        event.clientX,
        event.clientY
      );


    if (!hit) {

      alert(
        "モデル上をクリックしてください。"
      );

      return;

    }


    const position =
      hit.position.toString();

    const normal =
      hit.normal.toString();


    // ピンをその場へ移動
    model.updateHotspot({

      name:
        "hotspot-" +
        pinTarget,

      position:
        position,

      normal:
        normal

    });


    console.log(
      pinTarget,
      "position:",
      position
    );

    console.log(
      pinTarget,
      "normal:",
      normal
    );


    alert(
      "ピン位置を取得しました。\n\n" +

      "position:\n" +
      position +

      "\n\nnormal:\n" +
      normal
    );


    endPinPlacement();

  }
);


// =================================
// ピン位置設定終了
// =================================

function endPinPlacement() {

  pinPlacementMode =
    false;

  pinTarget =
    null;


  model.setAttribute(
    "camera-controls",
    ""
  );


  model.style.cursor =
    "grab";

}

// =================================
// Cキーで現在のカメラ位置を取得
// =================================

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key.toLowerCase() === "c") {

      const orbit =
        model.getCameraOrbit();

      const target =
        model.getCameraTarget();

      const fov =
        model.getFieldOfView();


      alert(
        "camera-orbit:\n" +
        orbit.toString() +

        "\n\ncamera-target:\n" +
        target.toString() +

        "\n\nfield-of-view:\n" +
        fov + "deg"
      );

    }

  }
);