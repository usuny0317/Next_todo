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
    return (
      <div>
        데이터를 로딩 중입니다. 벡엔드를 글리치에 배포하여 시간이 조금 소모될 수
        있습니다. 😉
      </div>
    );
  }
  if (isError) {
    return <div>데이터 로딩에 실패했습니다.</div>;
  }
  const doneTodos = data.filter((todo: Todo) => todo.done);
  const todoTodos = data.filter((todo: Todo) => !todo.done);
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow space-y-6">
      <h1 className="text-2xl font-bold text-center">투두 리스트</h1>
      <form
        className="w-full flex flex-col sm:flex-row gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          postMutation({ title: newTodo });
          setNewTodo("");
        }}
      >
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-1 border border-gray-300 rounded px-3 py-2"
          placeholder="추가로 할 일을 입력하세요"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 whitespace-nowrap"
        >
          작성하기
        </button>
      </form>

      <section>
        <h2 className="text-lg font-semibold">🔛 진행중인 TODOS</h2>
        <div className="space-y-2">
          {todoTodos.length === 0 && (
            <div className="text-sm text-gray-500">할 일이 없습니다.</div>
          )}
          {todoTodos.map((todo: Todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </div>
      </section>
      <div className="my-6 border-t border-gray-300" />
      <section>
        <h2 className="text-lg font-semibold">✔️ 완료된 TODOS</h2>
        <div className="space-y-2">
          {doneTodos.length === 0 && (
            <div className="text-sm text-gray-500">완료한 일이 없습니다.</div>
          )}
          {doneTodos.map((todo: Todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TodoList;
