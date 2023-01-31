//  https://github.com/type-challenges/type-challenges/issues/22835
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};
type Test = MyPick<Todo, "title" | "completed">;
