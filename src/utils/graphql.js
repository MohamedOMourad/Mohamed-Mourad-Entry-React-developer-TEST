import { client } from "../apollo";
import { CATEGORIES } from "../queries/categories";
import { CATEGORY } from "../queries/category";
import { CURRENCIES } from "../queries/currencies";
import { PRODUCT } from "../queries/product";

export const getCategories = async () => {
 const res = await client.query({ query: CATEGORIES });
 const data = await res.data;
 const categories = await data.categories;
 return categories;
};

export const getCategory = async (query) => {
 const res = await client.query({
  query: CATEGORY,
  variables: { category: query },
 });
 const data = await res.data;
 const category = await data.category;
 return category;
};

export const getCurrencies = async () => {
 const res = await client.query({ query: CURRENCIES });
 const data = await res.data;
 const currencies = await data.currencies;
 return currencies;
};

export const getProduct = async (id) => {
 const res = await client.query({ query: PRODUCT, variables: { product: id } });
 const data = await res.data;
 const product = await data.product;
 return product;
};
