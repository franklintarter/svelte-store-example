<script>
	import currency from '$lib/currency';
	import { addToCart } from '../store/cart';

	export let name;
	export let image;
	export let price;
	export let sku;
</script>

<div class="w-100 mt-12 flex justify-center">
	<div>
		<div class="bg-white shadow overflow-hidden sm:rounded-lg">
			<img alt={name} src={image} />
			<div class="px-4 pt-5 sm:px-6">
				<h3 class="text-lg leading-6 font-medium text-gray-900">
					{name}
				</h3>
				<p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">A nice description goes here.</p>
			</div>
			<div>
				<dl>
					<div class="bg-gray-50 px-4 py-5 sm:px-6 flex items-center justify-between">
						<dt class="text-xl leading-5 font-medium text-gray-700">
							{currency(price)}
						</dt>
						<dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
							<button
								type="button"
								on:click={() => addToCart(sku)}
								class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
							>
								Add To Cart
							</button>
						</dd>
					</div>
				</dl>
			</div>
		</div>
	</div>
</div>
