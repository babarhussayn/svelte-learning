export async function load({ fetch }) {
	const res = await fetch('https://fakestoreapi.com/products', {
		headers: { 'Content-Type': 'application/json' } // Correct headers format
	});

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	const data = await res.json();

	return {
		products: data
	};
}
