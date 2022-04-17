// libraries
import type { APIGatewayProxyResult } from 'aws-lambda';
import type { APIGatewayProxyEvent } from 'aws-lambda';
import type { APIGatewayProxyEventPathParameters } from 'aws-lambda';
import type { APIGatewayProxyEventQueryStringParameters } from 'aws-lambda';

// resources
import { responseFactory } from '../libs/http/response-factory';
import { HttpStatusCodes } from '../libs/http/status-codes';
import { classMapper } from '../libs/mappers/class-mapper';
import { TodoDto } from '../libs/models/todo';

type KeyValue = Record<string | number | symbol, unknown>;

export async function query(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
	const query: APIGatewayProxyEventQueryStringParameters | null = event.queryStringParameters;
	const todoDto: TodoDto | null = await classMapper(TodoDto, Object.create(query));

	if (todoDto === null) {
		const response: APIGatewayProxyResult = responseFactory(HttpStatusCodes.BAD_REQUEST);
		return response;
	}

	const response: APIGatewayProxyResult = responseFactory(HttpStatusCodes.OK);
	return response;
}

export async function get(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
	const params: APIGatewayProxyEventPathParameters | null = event.pathParameters;
	const body: KeyValue = { message: 'hello get', params };
	const response: APIGatewayProxyResult = responseFactory(body);
	return response;
}

export async function create(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
	const contentType: string | undefined = event.headers['content-type'];

	if (event.body === null || contentType !== 'application/json') {
		const response: APIGatewayProxyResult = responseFactory(HttpStatusCodes.BAD_REQUEST);
		return response;
	}

	const body: KeyValue = JSON.parse(event.body);
	const todoDto: TodoDto | null = await classMapper(TodoDto, body);

	if (todoDto === null) {
		const response: APIGatewayProxyResult = responseFactory(HttpStatusCodes.BAD_REQUEST);
		return response;
	}

	const response: APIGatewayProxyResult = responseFactory(HttpStatusCodes.CREATED);
	return response;
}

export async function update(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
	const params: APIGatewayProxyEventPathParameters | null = event.pathParameters;
	const contentType: string | undefined = event.headers['content-type'];

	if (event.body === null || contentType !== 'application/json') {
		const response: APIGatewayProxyResult = responseFactory(HttpStatusCodes.BAD_REQUEST);
		return response;
	}

	const body: KeyValue = JSON.parse(event.body);
	const todoDto: TodoDto | null = await classMapper(TodoDto, body);

	if (todoDto === null) {
		const response: APIGatewayProxyResult = responseFactory(HttpStatusCodes.BAD_REQUEST);
		return response;
	}

	const response: APIGatewayProxyResult = responseFactory(HttpStatusCodes.NO_CONTENT);
	return response;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function remove(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
	const response: APIGatewayProxyResult = responseFactory(HttpStatusCodes.NO_CONTENT);
	return response;
}
