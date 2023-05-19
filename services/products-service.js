// ============== GET ===============
const listProducts = async () => {
  const { products } = await fetch(
    `https://dummyjson.com/products?limit=100`
  ).then((res) => res.json());

  return products;
};

// ============== POST ===============

// ============== PUT ===============

// ============== DELETE ===============

export const productsServices = {
  listProducts,
};
