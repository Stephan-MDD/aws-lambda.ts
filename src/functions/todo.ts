export const get = async (event: any) => {
	return {
		statusCode: 200,
		body: JSON.stringify({
			message: 'hello world',
		}),
	};
};

export const create = async (event: any) => {
	return {
		statusCode: 201,
		body: JSON.stringify({
			message: 'hello world',
		}),
	};
};

export const update = async (event: any) => {
	return {
		statusCode: 200,
		body: JSON.stringify({
			message: 'hello world',
		}),
	};
};

export const remove = async (event: any) => {
	return {
		statusCode: 200,
		body: JSON.stringify({
			message: 'hello world',
		}),
	};
};
