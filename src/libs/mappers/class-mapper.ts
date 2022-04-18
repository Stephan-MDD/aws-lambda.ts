// libraries
import { ClassConstructor, plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';

type KeyValuePair = Record<string | number | symbol, unknown>;

export async function classMapper<T>(constructor: ClassConstructor<T>, body: KeyValuePair): Promise<T | null> {
	const classInstance: T = plainToClass(constructor, body, { strategy: 'excludeAll' });
	const validationErrors: ValidationError[] = await validate(classInstance as any);

	if (validationErrors.length !== 0) return null;
	return Object.create(classInstance as any);
}
