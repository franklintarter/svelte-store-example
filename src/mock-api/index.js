import { cartItems } from '../store/cart';
import { get } from 'svelte/store';

export const apiAddToCart = (sku) =>
	withDelayedPromise(() => {
		let needToAdd = true;
		const nextItems = get(cartItems).map((item) => {
			if (item.sku === sku) {
				needToAdd = false;
				return { ...item, quantity: item.quantity + 1 };
			} else {
				return { ...item };
			}
		});

		if (needToAdd) {
			nextItems.push({ quantity: 1, sku });
		}

		return nextItems;
	});

export const apiRemoveFromCart = (sku) =>
	withDelayedPromise(() => get(cartItems).filter((item) => item.sku !== sku));

export const apiGetProducts = () =>
	withDelayedPromise(() => [
		{
			sku: 'SHIRT-1',
			name: 'Red Striped Shirt',
			price: 29.99,
			image: '/mrushad-khombhadia-GlgDs6_WhTg-unsplash.jpg'
		},
		{
			sku: 'SHOES-1',
			name: 'Colorful Shoes',
			price: 59.99,
			image: '/irene-kredenets-dwKiHoqqxk8-unsplash.jpg'
		},
		{
			sku: 'SHOES-2',
			name: 'Red Shoes',
			price: 109.99,
			image: '/paul-gaudriault-a-QH9MAAVNI-unsplash.jpg'
		}
	]);

const withDelayedPromise = (action) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const result = action();
			resolve(result);
		}, 1100);
	});
};
