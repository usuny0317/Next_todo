"use client";

import { useGetTodoQuery } from "@/hooks/queries/getTodoQuery";
import { Todo } from "@/types";
import TodoItem from "./todo-item";
import { useState } from "react";
import { usePostTodoMutation } from "@/hooks/mutation/postTodoMutaition";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState<string>("");
  const { data, isPending, isError } = useGetTodoQuery();
  const { mutate: postMutation } = usePostTodoMutation();
  if (isPending) {
    return <div>데이터를 로딩 중입니다.</div>;
  }
  if (isError) {
    return <div>데이터 로딩에 실패했습니다.</div>;
  }
  const doneTodos = data.filter((todo: Todo) => todo.done);
  const todoTodos = data.filter((todo: Todo) => !todo.done);
  return (
    <div>
      <div> 투두 리스트 </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postMutation({ title: newTodo });
          setNewTodo("");
        }}
      >
        <div>새로 할일을 작성해보세요!</div>
        <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button type="submit">작성하기</button>
      </form>

      <div>진행중인 TODOS</div>
      {todoTodos.map((todo: Todo) => {
        return (
          <div key={todo.id}>
            <TodoItem title={todo.title} id={todo.id} done={todo.done} />
          </div>
        );
      })}

      <div>완료된 TODOS</div>
      {doneTodos.map((todo: Todo) => {
        return (
          <div key={todo.id}>
            <TodoItem title={todo.title} id={todo.id} done={todo.done} />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
