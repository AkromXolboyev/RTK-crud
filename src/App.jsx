import { nanoid } from "@reduxjs/toolkit";
import { Card } from "./components/card";
import { useForm } from "react-hook-form";
import {
  useGetTodosQuery,
  useCreateTodoMutation,
} from "./redux/service/todo-api";

function App() {
  const { error, data, isLoading } = useGetTodosQuery();
  const [createTodo, { isLoading: createLoading }] = useCreateTodoMutation();
  const [deleteTodo] = useCreateTodoMutation();

  const { handleSubmit, register, reset } = useForm();
 

const submit = (data) => {
  createTodo(data)
    .unwrap()

    .catch((error) => {
      console.log(error);
    });
  reset();
};
return (
  <>
    <div className="container mx-auto">
      {createLoading ? <h2>loading....</h2> : ""}
      <form className=" w-[400px] h-[500px] bg-gradient-to-r from-blue-500 to-green-500 m-auto" onSubmit={handleSubmit(submit)}>
        <div className="mb-5 pt-[100px] ">
          <input
            className="bg-blue-300 p-5 rounded-2xl w-[300px] ml-[40px] "
            {...register("title")}
            type="text"
            placeholder="enter name ..."
          />
        </div>
        <div>
          <input
            className="bg-blue-300 p-5 rounded-2xl w-[300px] ml-[40px]"
            {...register("description")}
            type="text"
            placeholder=".........."
          />
        </div>
        <button className="bg-red-400 p-3 ml-[120px] w-[120px] mt-8" type="submit">
          send
        </button>
      </form>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {data.map((item) => (
            <Card key={nanoid()} {...item} />
          ))}
        </div>
      )}
    </div>
  </>
);
}

export default App;
