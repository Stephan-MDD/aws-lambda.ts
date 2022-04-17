// libraries
import type { APIGatewayProxyResult } from 'aws-lambda';

export function responseFactory(statusCode: number): APIGatewayProxyResult;
export function responseFactory(body: Record<string, unknown>): APIGatewayProxyResult;
export function responseFactory(statusCode: number, body: Record<string, unknown>): APIGatewayProxyResult;
export function responseFactory(...args: any[]): APIGatewayProxyResult {
	const response: APIGatewayProxyResult = { statusCode: 200, body: '' };

	if (args.length === 0) {
		return response;
	}

	if (args.length === 2) {
		const [statusCode, body]: any[] = args;
		response.body = JSON.stringify(body);
		response.statusCode = statusCode;
		return response;
	}

	const [argument]: any[] = args;

	if (typeof argument === 'number') {
		response.statusCode = argument;
		return response;
	}

	if (typeof argument === 'object') {
		response.body = JSON.stringify(argument);
		return response;
	}

	return response;
}
