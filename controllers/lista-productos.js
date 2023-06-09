import { productsServices } from "../services/products-service.js";

const getCategory = (category) => {
  const category_content = document.createElement("div");
  category_content.classList.add("categories__content");

  const content = `
       <div class="categories__header">
            <h2 class="categories__header-title">${category}</h2>
            <a href="#" class="categories__header-btn">
              Ver todo
              <img src="assets/img/icons/arrow-right.png" alt="arrow-right" />
            </a>
          </div>
          <!-- ================ PRODUCTS =============== -->
          <div class="categories__listProducts" id="${category}">
                   
        </div>
  `;
  category_content.innerHTML = content;

  return category_content;
};

const getProducts = (title, price, imgURL, id) => {
  const card = document.createElement("div");
  card.classList.add("categories__product");

  const contenido = `       
              <div class="categories__product-img">
                <img src="${imgURL}" alt="${title}" />
              </div>
              <div class="categories__product-data">
                <h3>${title}</h3>
                <span>R$ ${price}</span>
                <a href="#">Ver producto</a>
              </div>       
  `;
  card.innerHTML = contenido;
  card.dataset.id = id;
  return card;
};

const categoriasContent = document.querySelector("[data-allCategories]");

const render = async () => {
  const listaProductos = await productsServices.listProducts();

  const categorias = await [
    ...new Set(listaProductos.map((producto) => producto.category)),
  ];

  categorias.forEach((categoria) => {
    categoriasContent.appendChild(getCategory(categoria));
  });

  listaProductos.forEach((listaProducto) => {
    const idCategoria = document.querySelector(`#${listaProducto.category}`);
    idCategoria.appendChild(
      getProducts(
        listaProducto.title,
        listaProducto.price,
        listaProducto.thumbnail,
        listaProducto.id
      )
    );
  });
};

render();
