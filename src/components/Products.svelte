<script>
	import Product from './Product.svelte';
	import { products, productsLoading } from '../store/products';
</script>

<div class="flex flex-wrap">
	{#if $productsLoading}
		<div>loading..</div>
	{/if}
	{#each $products as p}
		<Product sku={p.sku} name={p.name} price={p.price} image={p.image} />
	{/each}
</div>
