const getProducts = async () => {
  const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2024-07/products.json`,{
    headers: new Headers({
      'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY ?? ''
    })
  });
  const products = await response.json();
  return products;
};

export const MainProducts = async () => {
  console.log(process.env.SHOPIFY_HOSTNAME);
  console.log(process.env.SHOPIFY_API_KEY);
  const products = await getProducts();
  console.log(products);
  return (
    <div className="main-products">
      <h1>Main Products</h1>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </div>
  );
}