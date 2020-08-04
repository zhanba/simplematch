type Matcher<T extends string, R> = { [K in T]: (k: K) => R };

/**
 * simple pattern match
 * @param m
 */
export const match = <T extends string, R = void>(m: Matcher<T, R>) => (t: T) =>
  m[t](t);
