<script>
	export let data;

	$: ({ products } = data);
	console.log('product', data);
</script>

<section>
	<div class="flex w-full justify-center">
		<div class="grid w-[1200px] grid-cols-4 gap-4">
			{#each products as product}
				<div class="flex flex-col items-center justify-center gap-8 shadow-lg">
					<a href={`/product/${product.id}`}>
						<div class="">
							<img src={product.image} alt="p-1" class="object-contain" />
						</div>
						<div class="flex flex-col items-center justify-center gap-4">
							<h4>{product?.title}</h4>
							<span> price{product?.price} </span>
						</div>
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>
