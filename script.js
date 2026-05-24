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
    const data = chatProfiles[key] || chatProfiles.reva;

    chatAvatar.src = data.avatar;
    chatAvatar.alt = data.name;
    chatName.textContent = data.name;
    chatTopic.textContent = data.topic;
    chatOutgoing.childNodes[0].textContent = `${data.outgoing} `;
    chatIncoming.childNodes[0].textContent = `${data.incoming} `;
    chatQuick.textContent = data.quick;
  }

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
      mainImage: "images/Kalkulator.png",
      thumbs: ["images/Kalkulator.png", "images/Kalkulator.png"],
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
      mainImage:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
      thumbs: [
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
      ],
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
      mainImage:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
      thumbs: [
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80",
      ],
    },
    "buku-sabatta": {
      title: "Buku Sabatta",
      price: "Rp 95.000",
      tag: "Untuk Dijual",
      tagIcon: "images/jual.svg",
      location: "FMIPA",
      locationIcon: "images/lokasi.svg",
      conditionPercent: 86,
      conditionText: "86% - Kondisi sangat baik",
      mainImage:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
      thumbs: [
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
      ],
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
      mainImage:
        "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&w=1200&q=80",
      thumbs: [
        "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&w=800&q=80",
      ],
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
      mainImage:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      thumbs: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      ],
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
      mainImage:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
      thumbs: [
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
      ],
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
      mainImage:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
      thumbs: [
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      ],
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
      mainImage:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      thumbs: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      ],
    },
  };

  const detailTitle = document.querySelector("#detail-title");
  const detailPrice = document.querySelector("#detail-price");
  const detailTag = document.querySelector("#detail-tag");
  const detailMain = document.querySelector("#detail-main");
  const detailThumbs = document.querySelector("#detail-thumbs");
  const detailProgress = document.querySelector("#detail-progress");
  const detailCondition = document.querySelector("#detail-condition");
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
          <div class="item-location">
            <img src="${data.locationIcon}" alt="Lokasi" />
            <span>${data.location}</span>
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
