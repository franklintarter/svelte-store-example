<script>
	import Products from '../components/Products.svelte';
	import Cart from '../components/Cart.svelte';

	import { fetchProducts } from '../store/products';

	fetchProducts();
</script>

<div>
	<div class="m-auto flex justify-center w-100 md:w-4/5 flex-wrap flex-col-reverse sm:flex-row">
		<div class="w-100 sm:w-1/2 lg:w-2/3 sm:pr-4 lg:pr-10">
			<Products />
		</div>
		<div class="w-100 sm:w-1/2 lg:w-1/3">
			<Cart />
		</div>
	</div>
</div>
