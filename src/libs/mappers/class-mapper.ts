// libraries
import { ClassConstructor, plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';

type KeyValue = Record<string | number | symbol, unknown>;

export async function classMapper<T>(constructor: ClassConstructor<T>, body: KeyValue): Promise<T | null> {
	const classInstance: unknown = plainToClass(constructor, body, { strategy: 'excludeAll' });
	const validationErrors: ValidationError[] = await validate(classInstance as object);
	if (validationErrors.length !== 0) return null;
	return classInstance as T;
}
