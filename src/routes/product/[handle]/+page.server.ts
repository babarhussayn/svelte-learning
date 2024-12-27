export async function load({ fetch, params }) {
	const response = await fetch('https://fakestoreapi.com/products', {
		header: 'Content-Type: application/json'
	});
	const data = response.json;
	console.log('data', data);
}
