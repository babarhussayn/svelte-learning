<script>
	import Landing from '../components/Landing.svelte';
	import Products from './products/+page.svelte';
	export let data;
</script>

<section class="min-h-screen">
	<Landing />
	<div class="mt-4">
		<Products {data} />
	</div>
</section>
