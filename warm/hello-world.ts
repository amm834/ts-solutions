//  https://github.com/type-challenges/type-challenges/issues/22834
type ToString<T> = T extends any ? string : never;
type HelloWorld = ToString<any>;
