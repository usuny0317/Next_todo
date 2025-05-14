import { useDeleteTodoMutation } from "@/hooks/mutation/deleteTodoMutation";
import { useDoneTodoMutation } from "@/hooks/mutation/doneTodoMutation";
import { useUpdateTodoMutation } from "@/hooks/mutation/updateTodoMutation";
import { useState } from "react";

const TodoItem = ({
  title,
  id,
  done,
}: {
  title: string;
  id: string;
  done: boolean;
}) => {
  const { mutate: deleteMutate } = useDeleteTodoMutation();
  const { mutate: updateMutate } = useUpdateTodoMutation();
  const { mutate: doneMutate } = useDoneTodoMutation();

  const [isUpdate, setIsUpdate] = useState(false);
  const [changeTitle, setChangeTitle] = useState("");

  const handleDelete = () => {
    deleteMutate({ id });
  };
  const handleUpdate = () => {
    setIsUpdate(true);
  };
  const handleSuccess = () => {
    doneMutate({ id, done });
  };
  return (
    <div>
      <p>{title}</p>
      <button onClick={() => handleUpdate()}>수정</button>
      <button onClick={() => handleDelete()}>삭제</button>
      <button onClick={() => handleSuccess()}>{done ? "취소" : "완료"}</button>
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
