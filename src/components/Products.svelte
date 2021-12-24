<script>
	import { fade } from 'svelte/transition';
	import Product from './Product.svelte';
	import { Jumper } from 'svelte-loading-spinners';
	import { products, productsLoading } from '../store/products';
</script>

<div class="flex flex-wrap">
	{#if $productsLoading}
		<div
			transition:fade={{ duration: 200 }}
			style="height: 100vh"
			class="w-full flex justify-center items-center"
		>
			<Jumper size="60" color="#FF3E00" unit="px" duration="1s" />
		</div>
	{:else}
		{#each $products as p}
			<div transition:fade={{ delay: 300 }}>
				<Product sku={p.sku} name={p.name} price={p.price} image={p.image} />
			</div>
		{/each}
	{/if}
</div>
