import { apiGetProducts } from '../mock-api';
import { writable, derived } from 'svelte/store';

// State
export const products = writable([]);
export const productsLoading = writable(false);
export const productsError = writable(null);

// State Changers
const requestProducts = () => {
	productsLoading.set(true);
};

const receiveProductsSuccess = (data) => {
	productsLoading.set(false);
	products.set(data);
};

const receiveProductsError = (error) => {
	productsLoading.set(false);
	productsError.set(error);
};

// State Views
export const productsMap = derived(products, ($products) =>
	$products.reduce((map, product) => {
		map[product.sku] = product;
		return map;
	}, {})
);

// Actions
export const fetchProducts = () => {
	requestProducts();
	apiGetProducts()
		.then((data) => receiveProductsSuccess(data))
		.catch((error) => receiveProductsError(error));
};
