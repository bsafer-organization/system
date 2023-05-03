type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never

type UnionToOvlds<U> = UnionToIntersection<
  U extends any ? (f: U) => void : never
>

type PopUnion<U> = UnionToOvlds<U> extends (a: infer A) => void ? A : never

type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true

export type PropsToArray<T, A extends unknown[] = []> = IsUnion<
  NonNullable<T>
> extends true
  ? PropsToArray<Exclude<T, PopUnion<T>>, [PopUnion<T>, ...A]>
  : [T, ...A]
