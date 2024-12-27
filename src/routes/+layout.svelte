<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import Wrapper from '../components/Wrapper.svelte';
</script>

<Wrapper>
	{@render children()}
</Wrapper>
