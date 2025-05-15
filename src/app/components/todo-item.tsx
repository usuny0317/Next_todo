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
  const [changeTitle, setChangeTitle] = useState(title);

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
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white p-4 mb-3 rounded shadow-md w-full gap-2 sm:gap-0">
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <input
          type="checkbox"
          checked={done}
          onChange={handleSuccess}
          className="w-5 h-5 cursor-pointer shrink-0"
        />
        {isUpdate ? (
          <input
            className="border px-2 py-1 rounded w-full"
            value={changeTitle}
            onChange={(e) => setChangeTitle(e.target.value)}
          />
        ) : (
          <p
            className={`text-base sm:text-lg truncate ${
              done ? "line-through text-gray-500" : ""
            }`}
          >
            {title}
          </p>
        )}
      </div>

      <div className="flex items-center justify-center gap-2 shrink-0 w-full sm:w-auto">
        {isUpdate ? (
          <>
            <button
              className="text-blue-500 hover:underline whitespace-nowrap"
              onClick={() => {
                updateMutate({ id, title: changeTitle });
                setIsUpdate(false);
                setChangeTitle("");
              }}
            >
              수정완료
            </button>
            <button
              className="text-red-500 hover:underline whitespace-nowrap"
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
              className="text-blue-500 hover:underline whitespace-nowrap"
              onClick={handleUpdate}
            >
              수정
            </button>
            <button
              className="text-red-500 hover:underline whitespace-nowrap"
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
