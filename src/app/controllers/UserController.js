import passwordGenerator from 'password-generator';

import Queue from '../lib/Queue';

export default {
	async store (request, response) {
		const { name, mail } = request.body;

		const user = {
			name,
			mail,
			password: passwordGenerator(15, false)
		};

		await Queue.add('RegistrationMail', { user });

		return response.json(user);
	}
}