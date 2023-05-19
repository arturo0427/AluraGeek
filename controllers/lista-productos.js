import { productsServices } from "../services/products-service.js";

// const data = productsServices.listProducts().then((data) => console.log(data));

const getProducts = (title, price, imgURL, id) => {
  const card = document.createElement("div");
  card.classList.add("categories__listProducts");

  const contenido = `
            <div class="categories__product">
              <div class="categories__product-img">
                <img src="${imgURL}" alt="${title}" />
              </div>
              <div class="categories__product-data">
                <h3>${title}</h3>
                <span>R$ ${price}</span>
                <a href="#">Ver producto</a>
              </div>
            </div>
  `;
  card.innerHTML = contenido;
  card.dataset.id = id;
  return card;
};

const productos = document.querySelector("[data-allProducts]");

const render = async () => {
  const listaProductos = await productsServices.listProducts();

  listaProductos.forEach((producto) => {
    productos.appendChild(
      getProducts(producto.title, producto.price, producto.thumbnail, producto.id)
    );
  });
};

render();
