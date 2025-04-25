interface Todo {
  id?: string;
  title: string;
  description: string;
  startDate: string;
  endDate: String;
  status: string;
}
interface Todos {
  todos: Todo[];
}

export type {Todo, Todos};
