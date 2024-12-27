<script>
	export let data;

	$: ({ products } = data);
	console.log('product', data);
</script>

<section>
	<div>
		<div class="grid grid-cols-4 gap-4">
			{#each products as product}
				<div class="flex flex-col items-center justify-center gap-8 shadow-2xl">
					<div class="">
						<img src={product.image} alt="p-1" class="object-contain" />
					</div>
					<div class="flex flex-col items-center justify-center gap-4">
						<h4>{product?.name}</h4>
						<span> price{product?.price} </span>
						<button class="bg-blue-200 px-2 py-2 hover:bg-blue-600">Buy</button>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
