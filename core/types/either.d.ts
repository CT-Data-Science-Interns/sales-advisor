// TODO: [p2] Refactor Either type and its utility functions into a class.

export type Either<L, R> = { left: L } | { right: R };

export function resolve<L, R>(either: Either<L, R>): R | null {
    return "right" in either ? either.right : null;
}

/**
 * @example
 * ```typescript
 * const leftEither: Either<string, number> = { left: "Error" };
 * const result1 = fold(
 *     leftEither,
 *     (left) => `Left value is: ${left}`,
 *     (right) => `Right value is: ${right}`
 * );
 * 
 * console.log(result1); // Output: "Left value is: Error"
 * ```
 * 
 * @example
 * ```typescript
 * const rightEither: Either<string, number> = { right: 42 };
 * const result2 = fold(
 *     rightEither,
 *     (left) => `Left value is: ${left}`,
 *     (right) => `Right value is: ${right}`
 * );
 * 
 * console.log(result2); // Output: "Right value is: 42"
 * ```
 */
export function fold<L, R, NL, NR>(
    either: Either<L, R>,
    leftFn: (left: L) => NL,
    rightFn: (right: R) => NR
): NL | NR {
    return "left" in either ? leftFn(either.left) : rightFn(either.right);
}
