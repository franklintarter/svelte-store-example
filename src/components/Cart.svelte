<script>
	import currency from '$lib/currency';
	import { fade } from 'svelte/transition';
	import { Jumper } from 'svelte-loading-spinners';
	import CartItem from './CartItem.svelte';
	import {
		cartItemsCount,
		removeFromCart,
		cartItemsWithProducts,
		subtotal,
		cartLoading
	} from '../store/cart';
	$: cartIsEmpty = $cartItemsCount === 0;
</script>

<div class="shadow mt-12 relative">
	{#if $cartLoading}
		<div
			transition:fade={{ duration: 200 }}
			class="absolute h-full w-full flex items-center justify-center bg-white opacity-60 z-10"
		>
			<Jumper size="60" color="#FF3E00" unit="px" duration="1s" />
		</div>
	{/if}
	<div class="p-3">
		<h2 class="text-2xl text-red-700">Cart</h2>
	</div>
	<div>
		{#if cartIsEmpty}
			<p class="p-3 pt-0 text-gray-700 text-xl">Your cart is empty.</p>
		{:else}
			<div>
				{#each $cartItemsWithProducts as item}
					<CartItem
						quantity={item.quantity}
						name={item.name}
						price={item.price}
						removeFromCart={() => removeFromCart(item.sku)}
					/>
				{/each}
				<div class="mt-2 border-t pt-3 pb-3 px-3">
					<div class="flex items-baseline justify-between">
						<h3 class="text-gray-600 text-md">Subtotal</h3>
						<p class="text-gray-700 text-xl">{currency($subtotal)}</p>
					</div>
					<button
						type="button"
						class="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
					>
						Proceed To Checkout
					</button>
				</div>
			</div>
		{/if}
	</div>
</div>
