<script>
	import currency from '$lib/currency';
	export let name;
	export let price;
	export let removeFromCart;
	export let quantity;
</script>

<div class="flex items-baseline justify-between p-3 pt-0">
	<h3 class="text-gray-800 text-lg">
		{name}
		{#if quantity > 1}
			<span class="text-gray-600 text-sm font-light">({quantity})</span>
		{/if}
	</h3>
	<div class="flex items-center">
		<p class="text-gray-700 text-md mr-2">{currency(price)}</p>
		<button
			on:click={removeFromCart}
			class="text-xs underline text-gray-600 hover:text-red-800"
			type="button"
		>
			remove
		</button>
	</div>
</div>
