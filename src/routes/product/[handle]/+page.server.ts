import { error } from '@sveltejs/kit';

export async function load({ fetch, params }) {
	const response = await fetch(`https://fakestoreapi.com/products/${params.handle}`, {
		headers: { 'Content-Type': 'application/json' }
	});
	const data = await response.json();
	if (data.message) {
		throw error(404, {
			message: `User with id ${params.handle} not found`
		});
	}

	return {
		products: data
	};
}
