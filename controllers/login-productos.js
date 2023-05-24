import { productsServices } from "../services/products-service.js";

const getCategory = (category) => {
  const category_content = document.createElement("div");
  category_content.classList.add("categories__content");

  const content = `
         <div class="categories__header">
              <h2 class="categories__header-title">${category}</h2>
              <button class="categories__header-btn">Agregar producto</button>
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
                  <div class="content__icon">
                  <a href="#" class="icon">
                    <i class="uil uil-trash-alt"></i>
                  </a>
                  <a href="#" class="icon">
                    <i class="uil uil-pen"></i>
                  </a>
                </div>F
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
