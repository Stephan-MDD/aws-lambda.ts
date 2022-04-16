// libraries
import type { Context, Handler } from 'aws-lambda';
import type { APIGatewayProxyResult } from 'aws-lambda';
import type { APIGatewayProxyEvent } from 'aws-lambda';
import type { APIGatewayProxyEventPathParameters } from 'aws-lambda';
import type { APIGatewayProxyEventQueryStringParameters } from 'aws-lambda';

export const query: Handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
	const query: APIGatewayProxyEventQueryStringParameters | null = event.queryStringParameters;
	return { statusCode: 200, body: JSON.stringify({ message: 'hello query', query }) };
};

export const get: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
	const params: APIGatewayProxyEventPathParameters | null = event.pathParameters;
	return { statusCode: 200, body: JSON.stringify({ message: 'hello get', params }) };
};

export const create: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
	const response: APIGatewayProxyResult = { statusCode: 201, body: '' };
	const contentType: string | undefined = event.headers['content-type'];

	if (contentType === 'application/json' && event.body !== null) {
		const body: Record<string, unknown> = JSON.parse(event.body);
		response.body = JSON.stringify({ message: 'hello create', body, headers: event.headers });
	}

	return response;
};

export const update: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
	const params: APIGatewayProxyEventPathParameters | null = event.pathParameters;

	const response: APIGatewayProxyResult = { statusCode: 200, body: '' };
	const contentType: string | undefined = event.headers['content-type'];

	if (contentType === 'application/json' && event.body !== null) {
		const body: Record<string, unknown> = JSON.parse(event.body);
		response.body = JSON.stringify({ message: 'hello update', params, body });
	}

	return response;
};

export const remove: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
	return { statusCode: 204, body: '' };
};
