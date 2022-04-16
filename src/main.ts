import { responseFactory } from './utils/response-factory';

export const handler = async (event: any) => {
	const response = responseFactory(202, { message: 'hello world' });
	return response;
};
