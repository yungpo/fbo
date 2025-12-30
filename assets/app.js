const defaultContent = {
  heroTitle: "Единый байер для покупок из Азии и локального рынка",
  heroSubtitle:
    "Покупайте кроссовки, технику и велосипеды без риска. Мы берём поиск, оплату, логистику и выдачу на себя.",
  heroCta: "Сделать заказ",
  supportPhone: "+7 (000) 000-00-00",
  supportTelegram: "@killerbayer_fbo",
  categories: [
    { title: "Кроссовки", caption: "Nike, Adidas, New Balance" },
    { title: "Техника", caption: "Смартфоны и аксессуары" },
    { title: "Велосипеды", caption: "Городские и горные" },
    { title: "Верхняя одежда", caption: "Зима без компромиссов" },
    { title: "Аксессуары", caption: "Сумки, часы, стиль" },
    { title: "Детский спорт", caption: "Самокаты и комплекты" },
  ],
};

const defaultProducts = [
  {
    title: "Nike Air Max 97",
    description: "Проверка подлинности + фирменная упаковка.",
    price: "от 15 900 ₽",
  },
  {
    title: "iPhone 15 128GB",
    description: "Привоз под заказ за 14 дней.",
    price: "от 92 000 ₽",
  },
  {
    title: "Giant Talon 2",
    description: "Велосипед для города и трейлов.",
    price: "от 64 000 ₽",
  },
  {
    title: "The North Face",
    description: "Тёплая куртка для якутской зимы.",
    price: "от 18 500 ₽",
  },
];

const storageKey = "killerbayer-content";

const loadContent = () => {
  const saved = localStorage.getItem(storageKey);
  if (!saved) {
    return defaultContent;
  }
  try {
    return { ...defaultContent, ...JSON.parse(saved) };
  } catch (error) {
    return defaultContent;
  }
};

const content = loadContent();

const heroTitle = document.getElementById("hero-title");
const heroSubtitle = document.getElementById("hero-subtitle");
const heroCta = document.getElementById("hero-cta");

if (heroTitle) heroTitle.textContent = content.heroTitle;
if (heroSubtitle) heroSubtitle.textContent = content.heroSubtitle;
if (heroCta) heroCta.textContent = content.heroCta;

const categoryGrid = document.getElementById("category-grid");
const productGrid = document.getElementById("product-grid");

if (categoryGrid) {
  categoryGrid.innerHTML = "";
  content.categories.forEach((category) => {
    const card = document.createElement("article");
    card.className = "category-card";
    card.innerHTML = `
      <span>${category.caption}</span>
      <h3>${category.title}</h3>
    `;
    categoryGrid.appendChild(card);
  });
}

if (productGrid) {
  productGrid.innerHTML = "";
  defaultProducts.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <p class="price">${product.price}</p>
    `;
    productGrid.appendChild(card);
  });
}

const footerLinks = document.querySelectorAll(".site-footer .footer-grid a");
footerLinks.forEach((link) => {
  if (link.textContent.includes("Контакты")) {
    link.textContent = `Контакты • ${content.supportPhone}`;
  }
});
