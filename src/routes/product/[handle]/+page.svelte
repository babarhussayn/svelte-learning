<script lang="ts">
	import { navigating } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';

	export let data;
	$: ({ products } = data);
</script>

<section class="min-h-screen">
	{#if !!$navigating}
		<div class="animate-pulse">loading data....</div>
	{:else}
		<div class="mt-12 flex w-full items-center justify-center">
			<div class="grid w-[800px] grid-cols-2 gap-4">
				<div>
					<img src={products.image} alt="pg" class="object-contain" />
				</div>
				<div class="m-2 flex flex-col items-start justify-center gap-4">
					<h2>Product name <strong>{products.title}</strong></h2>
					<p>Description {products.description}</p>
					<span>Price :{products.price}</span>
					<p>Category {products.category}</p>
					<span> rating : {products.rating.rate}</span>
					<Button
						class="bg-[#f07d7d] px-6 hover:border hover:border-red-300 hover:bg-white hover:text-[#f07d7d]"
						>Buy</Button
					>
				</div>
			</div>
			<!-- <h2 class="text-black">hello{products?.title}</h2> -->
		</div>
	{/if}
</section>
