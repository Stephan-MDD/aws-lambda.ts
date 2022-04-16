export function responseFactory(): any;
export function responseFactory(statusCode: number): any;
export function responseFactory(body: Record<string | number, any>): any;
export function responseFactory(statusCode: number, body: Record<string | number, any>): any;
export function responseFactory(...args: any[]): any {
	const response: Record<string | number, any> = { statusCode: 200 };

	if (args.length === 0) {
		return response;
	}

	const [argument1, argument2]: any[] = args;

	if (args.length === 1 && typeof argument1 === 'number') {
		response.statusCode = argument1;
		return response;
	}

	if (args.length === 1 && typeof argument1 === 'object') {
		response.body = JSON.stringify(argument1);
		return response;
	}

	response.statusCode = argument1;
	response.body = JSON.stringify(argument2);
	return response;
}
