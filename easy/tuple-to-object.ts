// ============= Your Code Here =============
type TupleToObject<T extends readonly (string | number)[]> = {
    [key in T[number]]: key;
  };
  
  type result = TupleToObject<typeof tuple>; // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  