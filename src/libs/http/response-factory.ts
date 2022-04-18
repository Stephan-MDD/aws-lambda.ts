// libraries
import type { APIGatewayProxyResult } from 'aws-lambda';

// resources
import { HttpStatusCodes } from './status-codes';

type KeyValuePair = Record<string | number | symbol, unknown>;

function responseFactory(statusCode: HttpStatusCodes): APIGatewayProxyResult;
function responseFactory(body: KeyValuePair): APIGatewayProxyResult;
function responseFactory(statusCode: HttpStatusCodes, body: KeyValuePair): APIGatewayProxyResult;
function responseFactory(...args: unknown[]): APIGatewayProxyResult {
	const response: APIGatewayProxyResult = { statusCode: HttpStatusCodes.OK, body: '' };

	if (args.length === 0) {
		return response;
	}

	if (args.length === 2) {
		const [statusCode, body]: unknown[] = args;
		response.body = JSON.stringify(body);
		response.statusCode = Number(statusCode);
		return response;
	}

	const [argument]: unknown[] = args;

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

export function okResponse(body?: object): APIGatewayProxyResult {
	const response: APIGatewayProxyResult = responseFactory(HttpStatusCodes.OK, Object.create(body ?? null));
	return response;
}

export function createdResponse(body: object): APIGatewayProxyResult {
	const response: APIGatewayProxyResult = responseFactory(HttpStatusCodes.CREATED, Object.create(body));
	return response;
}

export function noContentResponse(): APIGatewayProxyResult {
	const response: APIGatewayProxyResult = responseFactory(HttpStatusCodes.NO_CONTENT);
	return response;
}

/* client errors */

export function badRequestResponse(): APIGatewayProxyResult {
	const response: APIGatewayProxyResult = responseFactory(HttpStatusCodes.BAD_REQUEST);
	return response;
}

export function unauthorizedResponse(): APIGatewayProxyResult {
	const response: APIGatewayProxyResult = responseFactory(HttpStatusCodes.UNAUTHORIZED);
	return response;
}

export function forbiddenResponse(): APIGatewayProxyResult {
	const response: APIGatewayProxyResult = responseFactory(HttpStatusCodes.FORBIDDEN);
	return response;
}

export function notFoundResponse(): APIGatewayProxyResult {
	const response: APIGatewayProxyResult = responseFactory(HttpStatusCodes.NOT_FOUND);
	return response;
}

export function methodNotAllowedResponse(): APIGatewayProxyResult {
	const response: APIGatewayProxyResult = responseFactory(HttpStatusCodes.METHOD_NOT_ALLOWED);
	return response;
}

/* server errors */

export function internalServerErrorResponse(): APIGatewayProxyResult {
	const response: APIGatewayProxyResult = responseFactory(HttpStatusCodes.INTERNAL_SERVER_ERROR);
	return response;
}

export function notImplementedResponse(): APIGatewayProxyResult {
	const response: APIGatewayProxyResult = responseFactory(HttpStatusCodes.NOT_IMPLEMENTED);
	return response;
}
