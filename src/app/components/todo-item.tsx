import { useDeleteTodoMutation } from "@/hooks/mutation/deleteTodoMutation";

const TodoItem = ({ title, id }: { title: string; id: string }) => {
  const { mutate: deleteMutate } = useDeleteTodoMutation();

  const handleDelete = () => {
    deleteMutate({ id });
  };
  return (
    <div>
      <p>{title}</p>
      <button onClick={() => handleDelete()}>삭제</button>
    </div>
  );
};

export default TodoItem;
