// ---------------------------------------------------------------------------
// PRODUCTS: edit this array to add/remove/update items.
//
// Replace "link" with your real ePN deep-link once you register in
// ePN Partner Network (epn.bz) and generate links for real AliExpress
// products, e.g. a link generated via the ePN "Deeplink" tool, which
// usually looks like:
//   https://alitems.com/g/1e8...../?ulp=<encoded_aliexpress_url>
// or a shortened epn.bz / s.click.aliexpress.com link with your sub-id.
//
// Replace "image" with the real product photo URL from the AliExpress
// listing once you pick the actual product.
// ---------------------------------------------------------------------------
const PRODUCTS = [
  {
    id: "pumpkin-lights",
    title: "Светящиеся тыквы-фонари (набор 3 шт.)",
    description: "LED-тыквы для крыльца и двора, работают от батареек, таймер включения.",
    price: "от $8",
    image: "https://placehold.co/400x300/f97316/ffffff?text=Pumpkin+Lights",
    link: "https://www.aliexpress.com/wholesale?SearchText=light+up+halloween+pumpkin"
  },
  {
    id: "garland",
    title: "Гирлянда с тыквами и черефами",
    description: "Декоративная гирлянда 3м для дома и вечеринки, тёплый свет.",
    price: "от $5",
    image: "https://placehold.co/400x300/7c3aed/ffffff?text=Halloween+Garland",
    link: "https://www.aliexpress.com/wholesale?SearchText=halloween+string+lights"
  },
  {
    id: "spiderweb",
    title: "Паутина декоративная (набор)",
    description: "Растягивающаяся паутина для входа и двора, с паучками в комплекте.",
    price: "от $3",
    image: "https://placehold.co/400x300/111827/ffffff?text=Spider+Web",
    link: "https://www.aliexpress.com/wholesale?SearchText=halloween+spider+web+decoration"
  },
  {
    id: "wreath",
    title: "Венок на дверь «Хэллоуин»",
    description: "Осенний венок с тыквами и листьями, готов к использованию сразу из коробки.",
    price: "от $10",
    image: "https://placehold.co/400x300/ea580c/ffffff?text=Door+Wreath",
    link: "https://www.aliexpress.com/wholesale?SearchText=halloween+door+wreath"
  },
  {
    id: "inflatable-ghost",
    title: "Надувной декор «Привидение» для двора",
    description: "Большая надувная фигура с подсветкой, крепления в комплекте.",
    price: "от $15",
    image: "https://placehold.co/400x300/6d28d9/ffffff?text=Inflatable+Ghost",
    link: "https://www.aliexpress.com/wholesale?SearchText=halloween+inflatable+decoration"
  },
  {
    id: "flameless-candles",
    title: "Свечи-таймер с эффектом пламени",
    description: "Безопасные LED-свечи, автоматическое включение по таймеру каждый день.",
    price: "от $6",
    image: "https://placehold.co/400x300/f59e0b/ffffff?text=Flameless+Candles",
    link: "https://www.aliexpress.com/wholesale?SearchText=halloween+flameless+candles"
  },
  {
    id: "table-set",
    title: "Скатерть и посуда «Хэллоуин» (набор)",
    description: "Тематическая сервировка стола для праздничного ужина или вечеринки.",
    price: "от $7",
    image: "https://placehold.co/400x300/16a34a/ffffff?text=Table+Set",
    link: "https://www.aliexpress.com/wholesale?SearchText=halloween+tablecloth+set"
  },
  {
    id: "witch-decor",
    title: "Костюм-декор «Ведьма» для крыльца",
    description: "Фигура ведьмы в полный рост, ткань + каркас, легко устанавливается.",
    price: "от $12",
    image: "https://placehold.co/400x300/1f2937/ffffff?text=Witch+Decor",
    link: "https://www.aliexpress.com/wholesale?SearchText=halloween+witch+porch+decoration"
  }
];

function renderProducts() {
  const grid = document.getElementById("product-grid");
  grid.innerHTML = PRODUCTS.map((p) => `
    <div class="product-card" id="${p.id}">
      <img src="${p.image}" alt="${p.title}" loading="lazy">
      <div class="body">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <span class="price">${p.price}</span>
        <a class="buy-button" href="${p.link}" target="_blank" rel="nofollow sponsored noopener">
          Смотреть на AliExpress →
        </a>
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderProducts);
