"use client";

import { useGetTodoQuery } from "@/hooks/queries/getTodoQuery";
import { Todo } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import TodoItem from "./todo-item";

const TodoList = () => {
  const { data, isPending, isError } = useGetTodoQuery();
  console.log(data);
  if (isPending) {
    return <div>데이터를 로딩 중입니다.</div>;
  }
  if (isError) {
    return <div>데이터 로딩에 실패했습니다.</div>;
  }
  return (
    <div>
      <div> 투두 리스트 </div>
      {data.map((todo: Todo) => {
        return (
          <div key={todo.id}>
            <TodoItem title={todo.title} />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
