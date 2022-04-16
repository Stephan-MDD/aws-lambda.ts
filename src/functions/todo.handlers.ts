// libraries
import type { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from 'aws-lambda';

export const query: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
	return { statusCode: 200, body: JSON.stringify({ message: 'hello query' }) };
};

export const get: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
	return { statusCode: 200, body: JSON.stringify({ message: 'hello get' }) };
};

export const create: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
	return { statusCode: 201, body: JSON.stringify({ message: 'hello create' }) };
};

export const update: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
	return { statusCode: 204, body: JSON.stringify({ message: 'hello update' }) };
};

export const remove: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
	return { statusCode: 204, body: JSON.stringify({ message: 'hello remove' }) };
};
