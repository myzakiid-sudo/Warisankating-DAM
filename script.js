(() => {
  const chatProfiles = {
    zaki: {
      name: "Muhamad Yusuf Zaki",
      avatar: "images/ProfileZaki.png",
      topic: "Laptop Lenovo LOQ",
      outgoing: "Halo, laptopnya masih tersedia?",
      incoming: "Masih. Mau sewa berapa hari?",
      quick: "Boleh sewa 3 hari?",
    },
    brian: {
      name: "Briankung",
      avatar: "images/ProfileBrian.png",
      topic: "Headset Gaming",
      outgoing: "Halo, headsetnya masih ada?",
      incoming: "Masih. Kondisinya sangat baik.",
      quick: "Boleh nego harga?",
    },
    fariz: {
      name: "Bli Fariz",
      avatar: "images/ProfileFariz.png",
      topic: "Penggaris T",
      outgoing: "Halo kak, penggaris T masih ready?",
      incoming: "Ready. Bisa COD di kampus.",
      quick: "Aku ambil sekarang.",
    },
    reva: {
      name: "Repuy",
      avatar: "images/ProfileReva.png",
      topic: "Jas Lab Ukuran M",
      outgoing: "Halo kak, jas lab ukuran M masih tersedia?",
      incoming: "Masih ada. Perlu dipakai kapan?",
      quick: "Boleh COD besok?",
    },
    nayaka: {
      name: "Nayaka Neobeast",
      avatar: "images/ProfileNayaka.png",
      topic: "Kalkulator Casio",
      outgoing: "Halo, kalkulatornya masih ada?",
      incoming: "Masih ada. Mau ambil kapan?",
      quick: "Hari ini bisa?",
    },
    prabu: {
      name: "Prabu Ganteng",
      avatar: "images/Prabu.png",
      topic: "Laptop",
      outgoing: "Halo, laptopnya masih tersedia?",
      incoming: "Masih ada. Mau sewa berapa hari?",
      quick: "Boleh sewa 2 hari?",
    },
  };

  const sellers = {
    prabu: {
      name: "Prabu Ganteng",
      avatar: "images/Prabu.png",
      info: "Sistem Informasi - Angkatan 2023",
    },
    zaki: {
      name: "Muhamad Yusuf Zaki",
      avatar: "images/ProfileZaki.png",
      info: "Sistem Informasi - Angkatan 2023",
    },
    brian: {
      name: "Briankung",
      avatar: "images/ProfileBrian.png",
      info: "Teknik Informatika - Angkatan 2022",
    },
    fariz: {
      name: "Bli Fariz",
      avatar: "images/ProfileFariz.png",
      info: "Teknik Sipil - Angkatan 2021",
    },
    reva: {
      name: "Repuy",
      avatar: "images/ProfileReva.png",
      info: "Kedokteran - Angkatan 2022",
    },
    nayaka: {
      name: "Nayaka Neobeast",
      avatar: "images/ProfileNayaka.png",
      info: "Sistem Komputer - Angkatan 2022",
    },
  };

  const detailData = {
    "buku-sql": {
      title: "Buku Pemrograman SQL",
      price: "Rp 100.000",
      tag: "Untuk Dijual",
      tagIcon: "images/jual.svg",
      location: "FILKOM",
      locationIcon: "images/lokasi.svg",
      conditionPercent: 85,
      conditionText: "85% - Kondisi sangat baik",
      mainImage: "images/buku%20ql.png",
      thumbs: ["images/buku%20ql.png", "images/buku%20ql.png"],
      sellerKey: "zaki",
    },
    "buku-kalkulus": {
      title: "Buku Kalkulus",
      price: "Rp 80.000",
      tag: "Untuk Dijual",
      tagIcon: "images/jual.svg",
      location: "FMIPA",
      locationIcon: "images/lokasi.svg",
      conditionPercent: 80,
      conditionText: "80% - Kondisi baik",
      mainImage: "images/Buku%20kalkulus.png",
      thumbs: ["images/Buku%20kalkulus.png", "images/Buku%20kalkulus.png"],
      sellerKey: "brian",
    },
    laptop: {
      title: "Laptop",
      price: "Rp 100.000/hari",
      tag: "Untuk Disewa",
      tagIcon: "images/sewa.svg",
      location: "FILKOM",
      locationIcon: "images/lokasi.svg",
      conditionPercent: 90,
      conditionText: "90% - Kondisi sangat baik",
      mainImage: "images/Laptop.png",
      thumbs: ["images/Laptop.png", "images/Laptop.png"],
      sellerKey: "prabu",
    },
    kalkulator: {
      title: "Kalkulator Scientific",
      price: "Rp 45.000",
      tag: "Untuk Dijual",
      tagIcon: "images/jual.svg",
      location: "FILKOM",
      locationIcon: "images/lokasi.svg",
      conditionPercent: 95,
      conditionText: "95% - Kondisi sangat baik",
      mainImage: "images/ProdukKalkulator.png",
      thumbs: ["images/ProdukKalkulator.png", "images/ProdukKalkulator.png"],
      sellerKey: "prabu",
    },
    mouse: {
      title: "Mouse",
      price: "Rp 30.000",
      tag: "Untuk Dijual",
      tagIcon: "images/jual.svg",
      location: "FILKOM",
      locationIcon: "images/lokasi.svg",
      conditionPercent: 80,
      conditionText: "80% - Kondisi baik",
      mainImage: "images/tikus.png",
      thumbs: ["images/tikus.png", "images/tikus.png"],
      sellerKey: "prabu",
    },
    headset: {
      title: "Headset Gaming",
      price: "Rp 120.000",
      tag: "Untuk Dijual",
      tagIcon: "images/jual.svg",
      location: "FILKOM",
      locationIcon: "images/lokasi.svg",
      conditionPercent: 88,
      conditionText: "88% - Kondisi sangat baik",
      mainImage: "images/ProdukHeadset.png",
      thumbs: ["images/ProdukHeadset.png", "images/ProdukHeadset.png"],
      sellerKey: "brian",
    },
    "calculator-casio": {
      title: "Kalkulator Casio",
      price: "Rp 55.000",
      tag: "Untuk Dijual",
      tagIcon: "images/jual.svg",
      location: "FILKOM",
      locationIcon: "images/lokasi.svg",
      conditionPercent: 92,
      conditionText: "92% - Kondisi sangat baik",
      mainImage: "images/ProdukKalkulator.png",
      thumbs: ["images/ProdukKalkulator.png", "images/ProdukKalkulator.png"],
      sellerKey: "prabu",
    },
    "buku-sabatta": {
      title: "Buku Sobotta",
      price: "Rp 95.000",
      tag: "Untuk Dijual",
      tagIcon: "images/jual.svg",
      location: "FMIPA",
      locationIcon: "images/lokasi.svg",
      conditionPercent: 86,
      conditionText: "86% - Kondisi sangat baik",
      mainImage: "images/ProdukSobotta.png",
      thumbs: ["images/ProdukSobotta.png", "images/ProdukSobotta.png"],
      sellerKey: "nayaka",
    },
    "penggaris-t": {
      title: "Penggaris T",
      price: "Rp 18.000",
      tag: "Untuk Dijual",
      tagIcon: "images/jual.svg",
      location: "FT",
      locationIcon: "images/lokasi.svg",
      conditionPercent: 84,
      conditionText: "84% - Kondisi baik",
      mainImage: "images/ProdukPenggaris.png",
      thumbs: ["images/ProdukPenggaris.png", "images/ProdukPenggaris.png"],
      sellerKey: "fariz",
    },
    "jas-lab": {
      title: "Jas Lab",
      price: "Rp 25.000/hari",
      tag: "Untuk Disewa",
      tagIcon: "images/sewa.svg",
      location: "FK",
      locationIcon: "images/lokasi.svg",
      conditionPercent: 90,
      conditionText: "90% - Kondisi sangat baik",
      mainImage: "images/ProdukJaslab.png",
      thumbs: ["images/ProdukJaslab.png", "images/ProdukJaslab.png"],
      sellerKey: "reva",
    },
    tablet: {
      title: "Tablet",
      price: "Rp 90.000/hari",
      tag: "Untuk Disewa",
      tagIcon: "images/sewa.svg",
      location: "FILKOM",
      locationIcon: "images/lokasi.svg",
      conditionPercent: 87,
      conditionText: "87% - Kondisi sangat baik",
      mainImage: "images/ProdukTablet.png",
      thumbs: ["images/ProdukTablet.png", "images/ProdukTablet.png"],
      sellerKey: "nayaka",
    },
    keyboard: {
      title: "Keyboard Mechanical",
      price: "Rp 200.000",
      tag: "Untuk Dijual",
      tagIcon: "images/jual.svg",
      location: "FILKOM",
      locationIcon: "images/lokasi.svg",
      conditionPercent: 91,
      conditionText: "91% - Kondisi sangat baik",
      mainImage: "images/ProdukKeyboard.png",
      thumbs: ["images/ProdukKeyboard.png", "images/ProdukKeyboard.png"],
      sellerKey: "zaki",
    },
    flashdisk: {
      title: "Flashdisk 64GB",
      price: "Rp 35.000",
      tag: "Untuk Dijual",
      tagIcon: "images/jual.svg",
      location: "FILKOM",
      locationIcon: "images/lokasi.svg",
      conditionPercent: 83,
      conditionText: "83% - Kondisi baik",
      mainImage: "images/ProdukFlashdisk.png",
      thumbs: ["images/ProdukFlashdisk.png", "images/ProdukFlashdisk.png"],
      sellerKey: "zaki",
    },
  };

  const chatAvatar = document.querySelector("#chat-avatar");
  const chatName = document.querySelector("#chat-name");
  const chatTopic = document.querySelector("#chat-topic");
  const chatOutgoing = document.querySelector("#chat-outgoing");
  const chatIncoming = document.querySelector("#chat-incoming");
  const chatQuick = document.querySelector("#chat-quick");

  if (
    chatAvatar &&
    chatName &&
    chatTopic &&
    chatOutgoing &&
    chatIncoming &&
    chatQuick
  ) {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("user") || "reva";
    const itemKey = params.get("item");
    const data = chatProfiles[key] || chatProfiles.reva;
    const itemData = itemKey ? detailData[itemKey] : null;

    chatAvatar.src = data.avatar;
    chatAvatar.alt = data.name;
    chatName.textContent = data.name;
    chatTopic.textContent = itemData ? itemData.title : data.topic;
    chatOutgoing.childNodes[0].textContent = `${data.outgoing} `;
    chatIncoming.childNodes[0].textContent = `${data.incoming} `;
    chatQuick.textContent = data.quick;
  }

  const detailTitle = document.querySelector("#detail-title");
  const detailPrice = document.querySelector("#detail-price");
  const detailTag = document.querySelector("#detail-tag");
  const detailMain = document.querySelector("#detail-main");
  const detailThumbs = document.querySelector("#detail-thumbs");
  const detailProgress = document.querySelector("#detail-progress");
  const detailCondition = document.querySelector("#detail-condition");
  const sellerAvatar = document.querySelector("#seller-avatar");
  const sellerName = document.querySelector("#seller-name");
  const sellerInfo = document.querySelector("#seller-info");
  const sellerChatLink = document.querySelector("#seller-chat-link");
  const recommendationsGrid = document.querySelector("#recommendations-grid");

  if (
    detailTitle &&
    detailPrice &&
    detailTag &&
    detailMain &&
    detailThumbs &&
    detailProgress &&
    detailCondition
  ) {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("item") || "buku-sql";
    const data = detailData[key] || detailData["buku-sql"];

    detailTitle.textContent = data.title;
    detailPrice.textContent = data.price;
    detailTag.textContent = data.tag;
    detailMain.src = data.mainImage;
    detailMain.alt = data.title;
    detailProgress.style.width = `${data.conditionPercent}%`;
    detailCondition.textContent = data.conditionText;

    detailThumbs.classList.toggle("is-two", data.thumbs.length === 2);
    detailThumbs.innerHTML = data.thumbs
      .map(
        (src) =>
          `<div class="thumb"><img src="${src}" alt="${data.title}" /></div>`,
      )
      .join("");

    const seller = sellers[data.sellerKey] || sellers.prabu;
    if (seller && sellerAvatar && sellerName && sellerInfo) {
      sellerAvatar.src = seller.avatar;
      sellerAvatar.alt = seller.name;
      sellerName.textContent = seller.name;
      sellerInfo.textContent = seller.info;
    }

    if (sellerChatLink) {
      const sellerKey = data.sellerKey || "prabu";
      sellerChatLink.href = `chat-room.html?user=${sellerKey}&item=${key}`;
    }
  }

  const recommendationKeys = [
    "headset",
    "calculator-casio",
    "buku-sabatta",
    "penggaris-t",
  ];

  const renderItemCard = (data, key) => {
    const tagLabel = data.tag.includes("Disewa") ? "Sewa" : "Jual";

    return `
      <a class="item-card" href="detail.html?item=${key}">
        <div class="item-image">
          <img src="${data.mainImage}" alt="${data.title}" />
        </div>
        <div class="item-body">
          <div class="item-tag">
            <img src="${data.tagIcon}" alt="${tagLabel}" />
            <span>${tagLabel}</span>
          </div>
          <div class="item-name">${data.title}</div>
          <div class="item-price">${data.price}</div>
          <div class="item-row">
            <div class="item-location">
              <img src="${data.locationIcon}" alt="Lokasi" />
              <span>${data.location}</span>
            </div>
            <div class="item-rating">${data.conditionPercent}%</div>
          </div>
          <div class="item-progress">
            <span style="width: ${data.conditionPercent}%"></span>
          </div>
        </div>
      </a>
    `;
  };

  if (recommendationsGrid) {
    recommendationsGrid.innerHTML = recommendationKeys
      .filter((key) => detailData[key])
      .map((key) => renderItemCard(detailData[key], key))
      .join("");
  }

  const chatInput = document.querySelector(".chat-input input");
  const sendBtn = document.querySelector(".send-btn");
  const chatWindow = document.querySelector(".chat-window");
  const quickReply = document.querySelector(".quick-reply");

  if (quickReply && chatInput) {
    quickReply.addEventListener("click", () => {
      chatInput.value = quickReply.textContent.trim();
      chatInput.focus();
    });
  }

  if (sendBtn && chatInput && chatWindow) {
    sendBtn.addEventListener("click", () => {
      const text = chatInput.value.trim();
      if (!text) {
        return;
      }

      const bubble = document.createElement("div");
      bubble.className = "bubble outgoing";
      bubble.textContent = text;

      const time = document.createElement("span");
      time.className = "bubble-meta";
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      time.textContent = `${hours}:${minutes}`;

      bubble.appendChild(time);
      chatWindow.appendChild(bubble);
      chatInput.value = "";
      chatWindow.scrollTop = chatWindow.scrollHeight;
    });
  }
})();
