export const getCategories = async (id : string) => {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await response.json();
  return data;
};

export const getProductsFromCategoryAndQuery = async (categoryID: string, query?: string) => {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryID}&${query && `q=${query}`}`);
  const data = await response.json();
  return data;
}

export const getDescriptionFromId = async (id: string) => {
  const response = await fetch(`https://api.mercadolibre.com/items/${id}/description`);
  const data = await response.json();
  return data;
}

export const getProductFromId = async (id: string) => {
  const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const data = await response.json();
  const description = await getDescriptionFromId(id);
  const category = await fetch(`https://api.mercadolibre.com/categories/${data.category_id}`)
  console.log(category)
  return { ...data, description };
}

