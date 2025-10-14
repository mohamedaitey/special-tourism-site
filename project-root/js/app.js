// Hero Slider
const images = [
  "url('https://cdn.britannica.com/37/135437-050-A12461CC/Burj-Khalifa-world-Sheikh-Khalifah-ibn-Zayid-2010.jpg')",
  "url('https://www.abouther.com/sites/default/files/2018/05/17/kingdom_center.jpg')",
  "url('https://www.killadesign.com/storage/2022/06/overcoming-design-challenges-with-technology-museum-of-the-future-in-dubai_2.jpeg')"
];

let current = 0;
setInterval(() => {
  const hero = document.getElementById('hero-bg');
  if (hero) {
    hero.style.backgroundImage = images[current];
    current = (current + 1) % images.length;
  }
}, 10000);


// Initial render
renderCards(bazaars);

// Language translation
async function loadLanguage(lang) {
  try {
    const res = await fetch(`../js/lang/${lang}.json`);
    const data = await res.json();

    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.getAttribute('data-key');
      if (data[key]) el.textContent = data[key];
    });
  } catch (error) {
    console.error("Translation load error:", error);
  }
}

const langEn = document.getElementById('lang-en');
const langDe = document.getElementById('lang-de');

if (langEn) langEn.addEventListener('click', () => loadLanguage('en'));
if (langDe) langDe.addEventListener('click', () => loadLanguage('de'));




// Services Data
const services = [
  {
    id: "service1",
    icon: "fa-map-marked-alt",
    titleKey: "service1_title",
    descKey: "service1_desc",
    image: "https://dynamic-media.tacdn.com/media/photo-o/2e/f0/e9/03/caption.jpg?w=1100&h=800&s=1"
  },
  {
    id: "service2",
    icon: "fa-shuttle-van",
    titleKey: "service2_title",
    descKey: "service2_desc",
    image: "https://media.tacdn.com/media/attractions-splice-spp-360x240/12/8e/84/bb.jpg"
  },
  {
    id: "service3",
    icon: "fa-hotel",
    titleKey: "service3_title",
    descKey: "service3_desc",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQghdaCnOBIfcIihqehskHr7TyVCNU6LT7jqw&s"
  },
  {
    id: "service4",
    icon: "fa-masks-theater",
    titleKey: "service4_title",
    descKey: "service4_desc",
    image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/4c/6f/3a.jpg"
  },
  {
    id: "service5",
    icon: "fa-route",
    titleKey: "service5_title",
    descKey: "service5_desc",
    image: "https://www.wildfrontierstravel.com/media/cache/driver/upload/mirror/dhruv-wildfrontierstravel-com/4649ebad_1000Nights2.webp"
  },
  {
    id: "service6",
    icon: "fa-calendar-check",
    titleKey: "service6_title",
    descKey: "service6_desc",
    image: "https://www.wildfrontierstravel.com/media/cache/driver/upload/mirror/dhruv-wildfrontierstravel-com/b5d555b0_dreamstimem173637391.webp"
  },
  {
    id: "service7",
    icon: "fa-kaaba",
    titleKey: "service7_title",
    descKey: "service7_desc",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiY1MU84wyXNYXieKpLvm7wE6jcUDOFYj5pQ&s"
  },
  {
    id: "service8",
    icon: "fa-user-nurse",
    titleKey: "service8_title",
    descKey: "service8_desc",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRooqtV-D_3pfKrRipgHVg4G_3zDvkRgONmmQ&s"
  },
  {
    id: "service9",
    icon: "fa-ship",
    titleKey: "service9_title",
    descKey: "service9_desc",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlmwBcA8tr9Uj2rAjZwJZaZRwaOEmTYsg4YA&s"
  },
  {
    id: "service10",
    icon: "fa-leaf",
    titleKey: "service10_title",
    descKey: "service10_desc",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVvbYkQ85pWki2iIWsQ9Z4h4ElRbCyOKGo6g&s"
  },
  {
    id: "service11",
    icon: "fa-utensils",
    titleKey: "service11_title",
    descKey: "service11_desc",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuCNyMmdmPeLOBKpB1DlQxeXgtuIb_VqdOfw&s"
  },
  {
    id: "service12",
    icon: "fa-landmark",
    titleKey: "service12_title",
    descKey: "service12_desc",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyRY6Tt26FhY2X6xAnzxuz_52idA-GEFuAtA&s"
  }
];

function renderServices() {
  const grid = document.getElementById("services-grid");
  if (!grid) return;

  grid.innerHTML = "";
  services.forEach(service => {
    const card = document.createElement("div");
    card.className = "bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-yellow-500/30 transition";
    card.innerHTML = `
      <img src="${service.image}" alt="${service.titleKey}" class="w-full h-48 object-cover">
      <div class="p-5">
        <h3 class="text-xl font-bold mb-2" data-key="${service.titleKey}">Service Title</h3>
        <p class="text-gray-400 mb-4 text-sm" data-key="${service.descKey}">Service description</p>
        <button class="bg-yellow-500 text-gray-900 px-4 py-2 rounded hover:bg-yellow-400 transition text-sm" data-key="book_now">Book Now</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

renderServices();

// Language Translation
async function loadLanguage(lang) {
  try {
    const res = await fetch(`../js/lang/${lang}.json`);
    const data = await res.json();

    document.querySelectorAll("[data-key]").forEach(el => {
      const key = el.getAttribute("data-key");
      if (data[key]) el.textContent = data[key];
    });
  } catch (error) {
    console.error("Translation load error:", error);
  }
}



if (langEn) langEn.addEventListener("click", () => loadLanguage("en"));
if (langDe) langDe.addEventListener("click", () => loadLanguage("de"));
