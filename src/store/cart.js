import { writable, derived } from 'svelte/store';
import { apiAddToCart, apiRemoveFromCart } from '../mock-api';
import { productsMap } from './products';

// State
export const cartItems = writable([]);
export const cartLoading = writable(false);
export const cartError = writable(null);

// State Changers
const updateCart = () => {
	cartLoading.set(true);
};

const updateCartSuccess = (nextCartItems) => {
	cartLoading.set(false);
	cartItems.set(nextCartItems);
};

const updateCartError = (error) => {
	cartLoading.set(false);
	cartError.set(error);
};

// State Views
export const cartItemsWithProducts = derived(
	[productsMap, cartItems],
	([$productsMap, $cartItems]) => {
		return $cartItems.map((item) => {
			const product = $productsMap[item.sku];
			return {
				...product,
				quantity: item.quantity,
				price: product.price * item.quantity
			};
		});
	}
);

export const cartItemsCount = derived(cartItems, ($itemsInCart) =>
	$itemsInCart.reduce((count, item) => count + item.quantity, 0)
);

export const subtotal = derived(cartItemsWithProducts, ($cartItemsWithProducts) =>
	$cartItemsWithProducts.reduce((total, item) => total + item.price, 0)
);

// Actions
export const addToCart = (sku) => {
	updateCart();
	apiAddToCart(sku)
		.then((data) => updateCartSuccess(data))
		.catch((error) => updateCartError(error));
};

export const removeFromCart = (sku) => {
	updateCart();
	apiRemoveFromCart(sku)
		.then((data) => updateCartSuccess(data))
		.catch((error) => updateCartError(error));
};
