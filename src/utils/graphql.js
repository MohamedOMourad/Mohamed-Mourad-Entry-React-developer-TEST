import { client } from "../apollo";
import { CATEGORIES } from "../queries/categories";

export const getCategories = async () => {
    const res = await client.query({ query: CATEGORIES });
    const categories = await res.data.categories;
    console.log(categories);
    return categories
}