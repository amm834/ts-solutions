type MyReadonly<T> = {
    readonly [key in keyof T]: T[key];
  };
  
  type Test = MyReadonly<Todo1>;
  
  const todo: MyReadonly<Todo1> = {
    title: "Mg Mg",
    description: "Description",
    completed: true,
    meta: {
      author: "Aung Myat Moe",
    },
  };
  
  todo.title = "hello"; // this should be error
  