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
    <div className="flex items-center justify-between bg-white p-4 mb-3 rounded shadow-md">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={done}
          onChange={handleSuccess}
          className="w-5 h-5"
        />
        {isUpdate ? (
          <input
            className="border px-2 py-1 rounded"
            value={changeTitle}
            onChange={(e) => setChangeTitle(e.target.value)}
          />
        ) : (
          <p className={`text-lg ${done ? "line-through text-gray-500" : ""}`}>
            {title}
          </p>
        )}
      </div>

      <div className="flex items-center space-x-2">
        {isUpdate ? (
          <>
            <button
              className="text-green-500 hover:underline"
              onClick={() => {
                updateMutate({ id, title: changeTitle });
                setIsUpdate(false);
                setChangeTitle("");
              }}
            >
              수정완료
            </button>
            <button
              className="text-gray-500 hover:underline"
              onClick={() => {
                setIsUpdate(false);
                setChangeTitle("");
              }}
            >
              취소
            </button>
          </>
        ) : (
          <>
            <button
              className="text-blue-500 hover:underline"
              onClick={handleUpdate}
            >
              수정
            </button>
            <button
              className="text-red-500 hover:underline"
              onClick={handleDelete}
            >
              삭제
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
