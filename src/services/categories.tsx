// https://api.mercadolibre.com/sites/MLB/categories
// buscar categorias

export const getCategories = async () => {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await response.json();
  return data;
};

// /sites/$SITE_ID/search%3Fcategory=$CATEGORY_ID
// https://api.mercadolibre.com/sites/MLB/search?category=MLB1055

export const getProductsFromCategoryAndQuery = async (categoryID: string, query?: string) => {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryID}&${query && `q=${query}`}`);
  const data = await response.json();
  return data;
}

