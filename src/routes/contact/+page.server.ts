import { fail } from '@sveltejs/kit';

export const actions = {
	email: async ({ locals, request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const message = data.get('message');

		if (!locals?.user?.role?.includes('admin'))
			return fail(401, { error_message: 'un-Authorized' });

		console.log(name, email, message);
		return {
			message: 'success'
		};
	}
};
