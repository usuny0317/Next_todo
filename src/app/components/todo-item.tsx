import { useDeleteTodoMutation } from "@/hooks/mutation/deleteTodoMutation";
import { useUpdateTodoMutation } from "@/hooks/mutation/updateTodoMutation";
import { useState } from "react";

const TodoItem = ({ title, id }: { title: string; id: string }) => {
  const { mutate: deleteMutate } = useDeleteTodoMutation();
  const { mutate: updateMutate } = useUpdateTodoMutation();

  const [isUpdate, setIsUpdate] = useState(false);
  const [changeTitle, setChangeTitle] = useState("");

  const handleDelete = () => {
    deleteMutate({ id });
  };
  const handleUpdate = () => {
    setIsUpdate(true);
  };
  return (
    <div>
      <p>{title}</p>
      <button onClick={() => handleUpdate()}>수정</button>
      <button onClick={() => handleDelete()}>삭제</button>
      {isUpdate ? (
        <div>
          <input
            value={changeTitle}
            onChange={(e) => setChangeTitle(e.target.value)}
          />
          <button
            onClick={() => {
              updateMutate({ id: id, title: changeTitle });
              setIsUpdate(false);
              setChangeTitle("");
            }}
          >
            수정완료
          </button>
          <button
            onClick={() => {
              setIsUpdate(false);
              setChangeTitle("");
            }}
          >
            수정취소
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default TodoItem;
