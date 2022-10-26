import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Container, TodoList } from "./styles";

type Todo = {
  city: string;
  name: string;
};

export function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([] as Todo[]);

  async function getAllTodos() {
    const response = await axios.get(
      "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8"
    );
    return response;
  }

  const queryTodos = useQuery(['todos'], getAllTodos, {
    refetchOnWindowFocus: false,
    cacheTime: 1000,
    onSuccess: ({ data, status }) => {
      if (status !== 200) {
        return;
      }
      console.log(data);
      setTodos(data);
    }
  });

  return (
    <Container>
      <header>
        <h1>Todos</h1>
      </header>
      <TodoList>
        {todos.map((todo) => (
          <span key={todo.name}>{todo.name}</span>
        ))}
      </TodoList>
      <button type="button" onClick={() => queryTodos.refetch()}>Buscar Novamente</button>
    </Container>
  );
}
