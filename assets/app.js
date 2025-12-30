const defaultContent = {
  heroPill: "Якутск • доставка 4–30 дней",
  heroTitle: "KillerBayer FBO — единый байер Якутии",
  heroSubtitle:
    "Премиальные кроссовки, техника и одежда без риска. Мы закупаем, проверяем и доставляем по всей Якутии.",
  heroCta: "Перейти в каталог",
  heroSecondary: "Как мы работаем",
  heroMetrics: [
    { value: "14 дней", label: "Средний срок доставки" },
    { value: "СБП/ЮKassa", label: "Безопасная оплата" },
    { value: "Склад в Якутске", label: "Проверка качества" },
  ],
  banners: [
    {
      title: "Мужчинам",
      subtitle: "Обувь, техника, велосипеды",
      link: "catalog.html?gender=men",
    },
    {
      title: "Женщинам",
      subtitle: "Одежда, аксессуары, техника",
      link: "catalog.html?gender=women",
    },
    {
      title: "Локальный закуп",
      subtitle: "Опт в Якутске без наценок",
      link: "local.html",
    },
  ],
  promoBanner: {
    title: "Сезонные предложения",
    subtitle: "Скидки на популярные категории и быстрые поставки по Якутии.",
    badge: "-30% до 31.12",
    cta: "Перейти к акциям",
    link: "catalog.html",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1400&auto=format&fit=crop",
  },
  brands: [
    "Nike",
    "New Balance",
    "Adidas",
    "Jordan",
    "ASICS",
    "Puma",
    "Converse",
    "Vans",
    "Timberland",
  ],
  genderTiles: [
    {
      title: "Мужчинам",
      subtitle: "Кроссовки, техника, велосипеды",
      link: "catalog.html?gender=men",
    },
    {
      title: "Женщинам",
      subtitle: "Одежда, аксессуары и гаджеты",
      link: "catalog.html?gender=women",
    },
  ],
  categories: [
    {
      title: "Обувь",
      caption: "Кроссовки, повседневная обувь",
      slug: "shoes",
    },
    {
      title: "Одежда",
      caption: "Верхняя одежда и базовые вещи",
      slug: "clothes",
    },
    {
      title: "Аксессуары",
      caption: "Сумки, часы, рюкзаки",
      slug: "accessories",
    },
    {
      title: "Телефоны",
      caption: "Смартфоны и мобильные аксессуары",
      slug: "phones",
    },
    {
      title: "Техника",
      caption: "Гаджеты, наушники, ноутбуки",
      slug: "tech",
    },
    {
      title: "Велосипеды",
      caption: "Городские и горные модели",
      slug: "bikes",
    },
  ],
  products: [
    {
      title: "Nike Air Max 97",
      note: "Проверка подлинности + фирменная упаковка",
      price: "от 15 900 ₽",
      gender: "men",
      category: "shoes",
    },
    {
      title: "New Balance 530",
      note: "Комфортная пара на каждый день",
      price: "от 13 500 ₽",
      gender: "women",
      category: "shoes",
    },
    {
      title: "iPhone 15 128GB",
      note: "Под заказ за 14–21 день",
      price: "от 92 000 ₽",
      gender: "unisex",
      category: "phones",
    },
    {
      title: "Giant Talon 2",
      note: "Велосипед для города и трейлов",
      price: "от 64 000 ₽",
      gender: "unisex",
      category: "bikes",
    },
  ],
  shelves: [
    { title: "Кроссовки недели", category: "shoes" },
    { title: "Гаджеты и телефоны", category: "phones" },
    { title: "Велосипеды и спорт", category: "bikes" },
  ],
  aboutTitle: "О нас",
  aboutText:
    "KillerBayer FBO — команда из Якутска с собственным складом. Мы берём на себя выкуп, контроль качества и логистику, чтобы покупка была безопасной и прозрачной.",
  aboutMetrics: [
    { value: "4–30 дней", label: "Срок доставки" },
    { value: "Склад", label: "Проверка в Якутске" },
    { value: "Под заказ", label: "Подбор товаров" },
  ],
  localTitle: "Локальный закуп в Якутске",
  localText:
    "Подключаем проверенных оптовиков с местного рынка. Выбирайте товар по оптовой цене, а мы организуем доставку.",
  localCta: "Получить оптовую цену",
  localList: [
    "Оптовые цены без наценок",
    "Быстрый доступ к наличию в городе",
    "Гарантия качества через наш склад",
  ],
  steps: [
    {
      title: "Заказ и предоплата",
      text: "Вы выбираете товар, фиксируете цену и оплачиваете удобным способом.",
    },
    {
      title: "Закупка и проверка",
      text: "Мы выкупаем товар, проверяем и упаковываем на складе.",
    },
    {
      title: "Доставка по Якутии",
      text: "Курьер или партнёрский пункт выдачи доставляют заказ в срок.",
    },
  ],
  payments: [
    {
      title: "Онлайн-оплата",
      text: "Принимаем карты через СБП и ЮKassa. Безопасная сделка.",
    },
    {
      title: "Частичная предоплата",
      text: "Фиксируйте цену, остальную сумму оплачивайте при получении.",
    },
    {
      title: "Рассрочка / сплит",
      text: "Подключим партнёров для покупки без лишней бюрократии.",
    },
  ],
  delivery: [
    {
      title: "Якутск и районы",
      text: "Доставка до двери или ПВЗ. Средний срок — 14 дней.",
    },
    {
      title: "Удалённые населённые пункты",
      text: "Логистика с учётом сезонности и маршрутов.",
    },
    {
      title: "Поддержка 7 дней",
      text: "Отслеживаем статус и информируем клиента.",
    },
  ],
  faq: [
    {
      title: "Как быстро доставляете?",
      text: "От 4 до 30 дней. Средний срок — 14 дней, зависит от загрузки.",
    },
    {
      title: "Можно ли заказать товар под запрос?",
      text: "Да, оставьте заявку — мы найдём товар и подтвердим цену.",
    },
    {
      title: "Где находится склад?",
      text: "Склад находится в Якутске, поэтому выдаём быстро и проверяем качество.",
    },
  ],
  processTitle: "Закупка под контролем KillerBayer FBO",
  processText:
    "Фиксируем цену, выкупаем товар и доставляем по Якутии в прозрачные сроки.",
  guarantees: [
    {
      title: "Прозрачные сроки",
      text: "Сроки фиксируются при заказе, статус всегда доступен в кабинете.",
    },
    {
      title: "Контроль качества",
      text: "Проверяем товар на складе и отправляем фотоотчёт.",
    },
    {
      title: "Возврат и поддержка",
      text: "Помогаем с обменом и решаем вопросы напрямую.",
    },
  ],
  b2bTitle: "Партнёрство для поставщиков и байеров",
  b2bText:
    "Размещайте оптовый ассортимент и получайте стабильный поток заказов через KillerBayer FBO.",
  b2bBenefits: [
    {
      title: "Поток заказов",
      text: "Выход на клиентов по всей Якутии через единую платформу.",
    },
    {
      title: "Прозрачные выплаты",
      text: "Фиксируем комиссию и сроки расчётов.",
    },
    {
      title: "Склад и логистика",
      text: "Помогаем с хранением и выдачей товара.",
    },
  ],
  b2bSteps: [
    {
      title: "Оставьте заявку",
      text: "Опишите ассортимент и условия оптового прайса.",
    },
    {
      title: "Согласуем условия",
      text: "Фиксируем комиссию и формат работы.",
    },
    {
      title: "Запускаем продажи",
      text: "Размещаем товары и подключаем клиентов.",
    },
  ],
  supportPhone: "+7 (000) 000-00-00",
  supportTelegram: "@killerbayer_fbo",
  footerText: "Единая платформа закупки и доставки для Якутии.",
};

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

const setText = (id, value) => {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
};

const setHTML = (id, value) => {
  const element = document.getElementById(id);
  if (element) {
    element.innerHTML = value;
  }
};

const renderList = (containerId, items, renderItem) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "info-card";
    card.innerHTML = renderItem(item);
    container.appendChild(card);
  });
};

const renderMetricList = (containerId, metrics) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  metrics.forEach((metric) => {
    const card = document.createElement("div");
    card.innerHTML = `<h3>${metric.value}</h3><span>${metric.label}</span>`;
    container.appendChild(card);
  });
};

setText("hero-pill", content.heroPill);
setText("hero-title", content.heroTitle);
setText("hero-subtitle", content.heroSubtitle);
const heroCta = document.getElementById("hero-cta");
if (heroCta) heroCta.textContent = content.heroCta;
const heroSecondary = document.getElementById("hero-secondary");
if (heroSecondary) heroSecondary.textContent = content.heroSecondary;
renderMetricList("hero-metrics", content.heroMetrics);

const bannerGrid = document.getElementById("banner-grid");
if (bannerGrid) {
  bannerGrid.innerHTML = "";
  content.banners.forEach((banner, index) => {
    const card = document.createElement("a");
    card.className = `banner-card banner-${index + 1}`;
    card.href = banner.link;
    card.innerHTML = `
      <div>
        <h3>${banner.title}</h3>
        <p>${banner.subtitle}</p>
      </div>
      <span>Перейти</span>
    `;
    bannerGrid.appendChild(card);
  });
}

const promoBanner = document.getElementById("promo-banner");
if (promoBanner) {
  promoBanner.innerHTML = `
    <div class="promo-banner" style="background-image: url('${content.promoBanner.image}')">
      <div class="promo-overlay"></div>
      <div class="promo-content">
        <span class="promo-badge">${content.promoBanner.badge}</span>
        <h3>${content.promoBanner.title}</h3>
        <p>${content.promoBanner.subtitle}</p>
        <a class="ghost-button" href="${content.promoBanner.link}">${content.promoBanner.cta}</a>
      </div>
    </div>
  `;
}

const renderBrands = (containerId) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  content.brands.forEach((brand) => {
    const chip = document.createElement("span");
    chip.className = "brand-chip";
    chip.textContent = brand;
    container.appendChild(chip);
  });
};

renderBrands("brand-list");
renderBrands("brand-list-catalog");

const genderGrid = document.getElementById("gender-grid");
if (genderGrid) {
  genderGrid.innerHTML = "";
  content.genderTiles.forEach((tile) => {
    const card = document.createElement("a");
    card.className = "tile-card";
    card.href = tile.link;
    card.innerHTML = `
      <h3>${tile.title}</h3>
      <p>${tile.subtitle}</p>
      <span>Перейти в раздел</span>
    `;
    genderGrid.appendChild(card);
  });
}

const renderCategories = (containerId, prefixLink = "category.html") => {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  content.categories.forEach((category) => {
    const card = document.createElement("a");
    card.className = "category-card";
    card.href = `${prefixLink}?category=${category.slug}`;
    card.innerHTML = `
      <span>${category.caption}</span>
      <h3>${category.title}</h3>
    `;
    container.appendChild(card);
  });
};

renderCategories("category-grid");
renderCategories("catalog-categories");
renderCategories("local-categories");

const productGrid = document.getElementById("product-grid");
if (productGrid) {
  productGrid.innerHTML = "";
  content.products.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <h3>${product.title}</h3>
      <p>${product.note}</p>
      <p class="price">${product.price}</p>
    `;
    productGrid.appendChild(card);
  });
}

setText("about-title", content.aboutTitle);
setText("about-text", content.aboutText);
renderMetricList("about-metrics", content.aboutMetrics);

setText("local-title", content.localTitle);
setText("local-text", content.localText);
const localCta = document.getElementById("local-cta");
if (localCta) localCta.textContent = content.localCta;
const localList = document.getElementById("local-list");
if (localList) {
  localList.innerHTML = "";
  content.localList.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    localList.appendChild(li);
  });
}

const stepsGrid = document.getElementById("steps-grid");
if (stepsGrid) {
  stepsGrid.innerHTML = "";
  content.steps.forEach((step, index) => {
    const card = document.createElement("article");
    card.className = "step-card";
    card.innerHTML = `
      <span>0${index + 1}</span>
      <h3>${step.title}</h3>
      <p>${step.text}</p>
    `;
    stepsGrid.appendChild(card);
  });
}

renderList("payment-grid", content.payments, (item) => `<h3>${item.title}</h3><p>${item.text}</p>`);
renderList("delivery-grid", content.delivery, (item) => `<h3>${item.title}</h3><p>${item.text}</p>`);
renderList("faq-grid", content.faq, (item) => `<h3>${item.title}</h3><p>${item.text}</p>`);

setText("footer-text", content.footerText);
setText("footer-phone", `Контакты • ${content.supportPhone}`);

const catalogGender = document.getElementById("catalog-gender");
if (catalogGender) {
  catalogGender.innerHTML = "";
  content.genderTiles.forEach((tile) => {
    const card = document.createElement("a");
    card.className = "tile-card";
    card.href = tile.link;
    card.innerHTML = `
      <h3>${tile.title}</h3>
      <p>${tile.subtitle}</p>
      <span>Открыть каталог</span>
    `;
    catalogGender.appendChild(card);
  });
}

const shelfList = document.getElementById("shelf-list");
if (shelfList) {
  shelfList.innerHTML = "";
  content.shelves.forEach((shelf) => {
    const section = document.createElement("section");
    section.className = "shelf";
    const items = content.products.filter((product) => product.category === shelf.category);
    section.innerHTML = `
      <div class="shelf-head">
        <h3>${shelf.title}</h3>
        <a href="category.html?category=${shelf.category}">Смотреть все</a>
      </div>
      <div class="product-grid">
        ${items
          .slice(0, 4)
          .map(
            (product) => `
          <article class="product-card light">
            <h3>${product.title}</h3>
            <p>${product.note}</p>
            <p class="price">${product.price}</p>
          </article>
        `
          )
          .join("")}
      </div>
    `;
    shelfList.appendChild(section);
  });
}

const categoryProducts = document.getElementById("category-products");
if (categoryProducts) {
  const params = new URLSearchParams(window.location.search);
  const categorySlug = params.get("category") || content.categories[0].slug;
  const gender = params.get("gender");
  const category = content.categories.find((item) => item.slug === categorySlug) || content.categories[0];

  setText("category-title", category.title);
  setText("category-pill", gender === "women" ? "Женщинам" : "Мужчинам");
  setText("category-subtitle", category.caption);

  const filtered = content.products.filter((product) => {
    const matchesCategory = product.category === category.slug;
    if (!gender) return matchesCategory;
    if (product.gender === "unisex") return matchesCategory;
    return matchesCategory && product.gender === gender;
  });

  categoryProducts.innerHTML = "";
  filtered.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card light";
    card.innerHTML = `
      <h3>${product.title}</h3>
      <p>${product.note}</p>
      <p class="price">${product.price}</p>
    `;
    categoryProducts.appendChild(card);
  });

  setHTML(
    "category-toolbar",
    `<span>Категория: ${category.title}</span><span>Товары: ${filtered.length}</span>`
  );
}

setText("process-title", content.processTitle);
setText("process-text", content.processText);
renderList(
  "process-guarantees",
  content.guarantees,
  (item) => `<h3>${item.title}</h3><p>${item.text}</p>`
);

setText("b2b-title", content.b2bTitle);
setText("b2b-text", content.b2bText);
renderList("b2b-benefits", content.b2bBenefits, (item) => `<h3>${item.title}</h3><p>${item.text}</p>`);
renderList("b2b-steps", content.b2bSteps, (item) => `<h3>${item.title}</h3><p>${item.text}</p>`);
