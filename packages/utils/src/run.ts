/** biome-ignore-all lint/complexity/noStaticOnlyClass: ignore */
type Success<T> = [error: null, data: T];
type Failure<E extends Error = Error> = [error: E, data: null];
type Result<T, E extends Error = Error> = Success<T> | Failure<E>;

export class Run {
	static async try<T, E extends Error = Error>(
		fn: (() => Promise<T>) | Promise<T>,
		errorMapper?: (error: unknown) => E,
	): Promise<Result<T, E>> {
		try {
			const data = await (typeof fn === "function" ? fn() : fn);
			return [null, data];
		} catch (error) {
			if (errorMapper) {
				return [errorMapper(error), null];
			}

			return [
				error instanceof Error ? error : new Error(String(error)),
				null,
			] as Failure<E>;
		}
	}

	static trySync<T, E extends Error = Error>(
		fn: () => T,
		errorMapper?: (error: unknown) => E,
	): Result<T, E> {
		try {
			const data = fn();
			return [null, data];
		} catch (error) {
			if (errorMapper) {
				return [errorMapper(error), null];
			}

			return [
				error instanceof Error ? error : new Error(String(error)),
				null,
			] as Failure<E>;
		}
	}

	static async tryAll<T extends readonly unknown[], E extends Error = Error>(
		fns: { [K in keyof T]: (() => Promise<T[K]>) | Promise<T[K]> },
		errorMapper?: (error: unknown) => E,
	): Promise<Result<T, E>> {
		try {
			const promises = fns.map((fn) => (typeof fn === "function" ? fn() : fn));
			const data = (await Promise.all(promises)) as unknown as T;

			return [null, data];
		} catch (error) {
			if (errorMapper) {
				return [errorMapper(error), null];
			}

			return [
				error instanceof Error ? error : new Error(String(error)),
				null,
			] as Failure<E>;
		}
	}
}
