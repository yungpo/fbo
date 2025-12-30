const storageKey = "killerbayer-content";
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
  supportPhone: "+7 (000) 000-00-00",
  supportTelegram: "@killerbayer_fbo",
  footerText: "Единая платформа закупки и доставки для Якутии.",
};

const loadContent = () => {
  const saved = localStorage.getItem(storageKey);
  if (!saved) {
    return { ...defaultContent };
  }
  try {
    return { ...defaultContent, ...JSON.parse(saved) };
  } catch (error) {
    return { ...defaultContent };
  }
};

const form = document.getElementById("admin-form");
const metricsList = document.getElementById("metrics-list");
const bannerList = document.getElementById("banner-list");
const brandList = document.getElementById("brand-list");
const genderList = document.getElementById("gender-list");
const categoryList = document.getElementById("category-list");
const productList = document.getElementById("product-list");
const localList = document.getElementById("local-list");

const addMetricButton = document.getElementById("add-metric");
const addBannerButton = document.getElementById("add-banner");
const addBrandButton = document.getElementById("add-brand");
const addGenderButton = document.getElementById("add-gender");
const addCategoryButton = document.getElementById("add-category");
const addProductButton = document.getElementById("add-product");
const addLocalButton = document.getElementById("add-local");
const resetButton = document.getElementById("reset-data");

let content = loadContent();

const createListItem = (value, onChange, onRemove) => {
  const wrapper = document.createElement("div");
  wrapper.className = "admin-list-item";
  const input = document.createElement("input");
  input.type = "text";
  input.value = value;
  input.addEventListener("input", (event) => onChange(event.target.value));
  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.textContent = "Удалить";
  removeButton.addEventListener("click", onRemove);
  wrapper.appendChild(input);
  wrapper.appendChild(removeButton);
  return wrapper;
};

const renderMetrics = () => {
  metricsList.innerHTML = "";
  content.heroMetrics.forEach((metric, index) => {
    const value = `${metric.value} — ${metric.label}`;
    const item = createListItem(
      value,
      (newValue) => {
        const [valueText, label] = newValue.split("—").map((text) => text.trim());
        content.heroMetrics[index] = {
          value: valueText || metric.value,
          label: label || metric.label,
        };
      },
      () => {
        content.heroMetrics.splice(index, 1);
        renderMetrics();
      }
    );
    metricsList.appendChild(item);
  });
};

const renderBanners = () => {
  bannerList.innerHTML = "";
  content.banners.forEach((banner, index) => {
    const value = `${banner.title} — ${banner.subtitle} — ${banner.link}`;
    const item = createListItem(
      value,
      (newValue) => {
        const [title, subtitle, link] = newValue.split("—").map((text) => text.trim());
        content.banners[index] = {
          title: title || banner.title,
          subtitle: subtitle || banner.subtitle,
          link: link || banner.link,
        };
      },
      () => {
        content.banners.splice(index, 1);
        renderBanners();
      }
    );
    bannerList.appendChild(item);
  });
};

const renderBrands = () => {
  if (!brandList) return;
  brandList.innerHTML = "";
  content.brands.forEach((brand, index) => {
    const item = createListItem(
      brand,
      (value) => {
        content.brands[index] = value || brand;
      },
      () => {
        content.brands.splice(index, 1);
        renderBrands();
      }
    );
    brandList.appendChild(item);
  });
};

const renderGenderTiles = () => {
  genderList.innerHTML = "";
  content.genderTiles.forEach((tile, index) => {
    const value = `${tile.title} — ${tile.subtitle} — ${tile.link}`;
    const item = createListItem(
      value,
      (newValue) => {
        const [title, subtitle, link] = newValue.split("—").map((text) => text.trim());
        content.genderTiles[index] = {
          title: title || tile.title,
          subtitle: subtitle || tile.subtitle,
          link: link || tile.link,
        };
      },
      () => {
        content.genderTiles.splice(index, 1);
        renderGenderTiles();
      }
    );
    genderList.appendChild(item);
  });
};

const renderCategories = () => {
  categoryList.innerHTML = "";
  content.categories.forEach((category, index) => {
    const value = `${category.title} — ${category.caption} — ${category.slug}`;
    const item = createListItem(
      value,
      (newValue) => {
        const [title, caption, slug] = newValue.split("—").map((text) => text.trim());
        content.categories[index] = {
          title: title || category.title,
          caption: caption || category.caption,
          slug: slug || category.slug,
        };
      },
      () => {
        content.categories.splice(index, 1);
        renderCategories();
      }
    );
    categoryList.appendChild(item);
  });
};

const renderProducts = () => {
  productList.innerHTML = "";
  content.products.forEach((product, index) => {
    const value = `${product.title} — ${product.price} — ${product.note} — ${product.gender} — ${product.category}`;
    const item = createListItem(
      value,
      (newValue) => {
        const [title, price, note, gender, category] = newValue
          .split("—")
          .map((text) => text.trim());
        content.products[index] = {
          title: title || product.title,
          price: price || product.price,
          note: note || product.note,
          gender: gender || product.gender,
          category: category || product.category,
        };
      },
      () => {
        content.products.splice(index, 1);
        renderProducts();
      }
    );
    productList.appendChild(item);
  });
};

const renderLocalList = () => {
  localList.innerHTML = "";
  content.localList.forEach((itemText, index) => {
    const item = createListItem(
      itemText,
      (value) => {
        content.localList[index] = value || itemText;
      },
      () => {
        content.localList.splice(index, 1);
        renderLocalList();
      }
    );
    localList.appendChild(item);
  });
};

const populateForm = () => {
  form.heroPill.value = content.heroPill;
  form.heroTitle.value = content.heroTitle;
  form.heroSubtitle.value = content.heroSubtitle;
  form.heroCta.value = content.heroCta;
  form.heroSecondary.value = content.heroSecondary;
  form.promoTitle.value = content.promoBanner.title;
  form.promoSubtitle.value = content.promoBanner.subtitle;
  form.promoBadge.value = content.promoBanner.badge;
  form.promoCta.value = content.promoBanner.cta;
  form.promoLink.value = content.promoBanner.link;
  form.promoImage.value = content.promoBanner.image;
  form.aboutTitle.value = content.aboutTitle;
  form.aboutText.value = content.aboutText;
  form.localTitle.value = content.localTitle;
  form.localText.value = content.localText;
  form.localCta.value = content.localCta;
  form.supportPhone.value = content.supportPhone;
  form.supportTelegram.value = content.supportTelegram;
  form.footerText.value = content.footerText;
  renderMetrics();
  renderBanners();
  renderBrands();
  renderGenderTiles();
  renderCategories();
  renderProducts();
  renderLocalList();
};

addMetricButton.addEventListener("click", () => {
  content.heroMetrics.push({ value: "Новая метрика", label: "Описание" });
  renderMetrics();
});

addBannerButton.addEventListener("click", () => {
  content.banners.push({ title: "Новый баннер", subtitle: "Описание", link: "#" });
  renderBanners();
});

addBrandButton.addEventListener("click", () => {
  content.brands.push("Новый бренд");
  renderBrands();
});

addGenderButton.addEventListener("click", () => {
  content.genderTiles.push({ title: "Новая плитка", subtitle: "Описание", link: "#" });
  renderGenderTiles();
});

addCategoryButton.addEventListener("click", () => {
  content.categories.push({ title: "Новая категория", caption: "Описание", slug: "new" });
  renderCategories();
});

addProductButton.addEventListener("click", () => {
  content.products.push({
    title: "Новый товар",
    note: "Описание",
    price: "от 0 ₽",
    gender: "unisex",
    category: "shoes",
  });
  renderProducts();
});

addLocalButton.addEventListener("click", () => {
  content.localList.push("Новый пункт");
  renderLocalList();
});

resetButton.addEventListener("click", () => {
  content = { ...defaultContent };
  localStorage.removeItem(storageKey);
  populateForm();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  content = {
    ...content,
    heroPill: form.heroPill.value.trim() || defaultContent.heroPill,
    heroTitle: form.heroTitle.value.trim() || defaultContent.heroTitle,
    heroSubtitle: form.heroSubtitle.value.trim() || defaultContent.heroSubtitle,
    heroCta: form.heroCta.value.trim() || defaultContent.heroCta,
    heroSecondary: form.heroSecondary.value.trim() || defaultContent.heroSecondary,
    promoBanner: {
      title: form.promoTitle.value.trim() || defaultContent.promoBanner.title,
      subtitle: form.promoSubtitle.value.trim() || defaultContent.promoBanner.subtitle,
      badge: form.promoBadge.value.trim() || defaultContent.promoBanner.badge,
      cta: form.promoCta.value.trim() || defaultContent.promoBanner.cta,
      link: form.promoLink.value.trim() || defaultContent.promoBanner.link,
      image: form.promoImage.value.trim() || defaultContent.promoBanner.image,
    },
    aboutTitle: form.aboutTitle.value.trim() || defaultContent.aboutTitle,
    aboutText: form.aboutText.value.trim() || defaultContent.aboutText,
    localTitle: form.localTitle.value.trim() || defaultContent.localTitle,
    localText: form.localText.value.trim() || defaultContent.localText,
    localCta: form.localCta.value.trim() || defaultContent.localCta,
    supportPhone: form.supportPhone.value.trim() || defaultContent.supportPhone,
    supportTelegram: form.supportTelegram.value.trim() || defaultContent.supportTelegram,
    footerText: form.footerText.value.trim() || defaultContent.footerText,
  };
  localStorage.setItem(storageKey, JSON.stringify(content));
  const button = form.querySelector(".primary-button");
  button.textContent = "Сохранено";
  setTimeout(() => {
    button.textContent = "Сохранить изменения";
  }, 2000);
});

populateForm();
