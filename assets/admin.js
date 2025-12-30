const storageKey = "killerbayer-content";
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
const categoryList = document.getElementById("category-list");
const addCategoryButton = document.getElementById("add-category");
const resetButton = document.getElementById("reset-data");

let content = loadContent();

const renderCategories = () => {
  categoryList.innerHTML = "";
  content.categories.forEach((category, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "admin-list-item";
    const input = document.createElement("input");
    input.type = "text";
    input.value = `${category.title} — ${category.caption}`;
    input.addEventListener("input", (event) => {
      const [title, caption] = event.target.value.split("—").map((value) => value.trim());
      content.categories[index] = {
        title: title || category.title,
        caption: caption || category.caption,
      };
    });
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "Удалить";
    removeButton.addEventListener("click", () => {
      content.categories.splice(index, 1);
      renderCategories();
    });

    wrapper.appendChild(input);
    wrapper.appendChild(removeButton);
    categoryList.appendChild(wrapper);
  });
};

const populateForm = () => {
  form.heroTitle.value = content.heroTitle;
  form.heroSubtitle.value = content.heroSubtitle;
  form.heroCta.value = content.heroCta;
  form.supportPhone.value = content.supportPhone;
  form.supportTelegram.value = content.supportTelegram;
  renderCategories();
};

addCategoryButton.addEventListener("click", () => {
  content.categories.push({ title: "Новая категория", caption: "Описание" });
  renderCategories();
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
    heroTitle: form.heroTitle.value.trim() || defaultContent.heroTitle,
    heroSubtitle: form.heroSubtitle.value.trim() || defaultContent.heroSubtitle,
    heroCta: form.heroCta.value.trim() || defaultContent.heroCta,
    supportPhone: form.supportPhone.value.trim() || defaultContent.supportPhone,
    supportTelegram: form.supportTelegram.value.trim() || defaultContent.supportTelegram,
  };
  localStorage.setItem(storageKey, JSON.stringify(content));
  const button = form.querySelector(".primary-button");
  button.textContent = "Сохранено";
  setTimeout(() => {
    button.textContent = "Сохранить изменения";
  }, 2000);
});

populateForm();
