// libraries
import type { APIGatewayProxyResult } from 'aws-lambda';
import type { APIGatewayProxyEvent } from 'aws-lambda';
import type { APIGatewayProxyEventPathParameters } from 'aws-lambda';
import type { APIGatewayProxyEventQueryStringParameters } from 'aws-lambda';

// resources
import { responseFactory } from '../libs/http/response-factory';

export async function query(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
	const query: APIGatewayProxyEventQueryStringParameters | null = event.queryStringParameters;
	const body: Record<string, unknown> = { message: 'hello query', query };
	const response: APIGatewayProxyResult = responseFactory(body);

	return response;
}

export async function get(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
	const params: APIGatewayProxyEventPathParameters | null = event.pathParameters;
	const body: Record<string, unknown> = { message: 'hello get', params };
	const response: APIGatewayProxyResult = responseFactory(body);
	return response;
}

export async function create(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
	const contentType: string | undefined = event.headers['content-type'];
	const body: Record<string, unknown> = { message: 'hello query', query };

	if (contentType === 'application/json' && event.body !== null) {
		const body: Record<string, unknown> = JSON.parse(event.body);
		body.body = body;
	}

	const response: APIGatewayProxyResult = responseFactory(body);
	return response;
}

export async function update(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
	const params: APIGatewayProxyEventPathParameters | null = event.pathParameters;
	const body: Record<string, unknown> = { message: 'hello query', query, params };

	const contentType: string | undefined = event.headers['content-type'];

	if (contentType === 'application/json' && event.body !== null) {
		const body: Record<string, unknown> = JSON.parse(event.body);
		body.body = body;
	}

	const response: APIGatewayProxyResult = responseFactory(body);
	return response;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function remove(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
	const response: APIGatewayProxyResult = responseFactory(204);
	return response;
}
