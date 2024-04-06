export type Either<L, R> = { left: L } | { right: R };

export function resolve<L, R>(either: Either<L, R>): R | null {
    return "right" in either ? either.right : null;
}
