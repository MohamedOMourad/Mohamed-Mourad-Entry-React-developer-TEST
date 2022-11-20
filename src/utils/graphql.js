import { client } from "../apollo";
import { CATEGORIES } from "../queries/categories";
import { CURRENCIES } from "../queries/currencies";

export const getCategories = async () => {
    const res = await client.query({ query: CATEGORIES });
    const data = await res.data;
    const categories = await data.categories;
    return categories;
}

export const getCurrencies = async () => {
    const res = await client.query({ query: CURRENCIES });
    const data = await res.data;
    const currencies = await data.currencies;
    return currencies;
}