type First<T extends any[]> = T extends []
  ? never
  : T[0] extends undefined
  ? undefined
  : T[0];

type Test = First<[1, 2, 3]>;
type Test2 = First<[]>; // undefined
type Test3 = First<[undefined]>; // undefiend
