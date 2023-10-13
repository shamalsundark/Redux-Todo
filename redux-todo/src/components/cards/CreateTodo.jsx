import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submit, editItem,saveItem,deleteItem } from "../TodoSlice";

const CreateTodo = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.todo.todos);
  const inputRef = useRef(null);
  const editRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(submit(inputRef.current.value));
    inputRef.current.value = ""; // Clear the input field after submission
  };

  const save =(id)=>{
    const editValue ={
      id: id,
      text: editRef.current.value
    }
    dispatch(saveItem(editValue));

  }


  return (
    <div className="maindiv">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="enter your todo list"
          ref={inputRef} // Attach the input element to the ref
        />
        <button type="submit">submit</button>
      </form>

      <ul>
        {text.map((todo, index) => (
          <div key={index} className="d-flex justify-content-between">
            {todo.isEditting ? (
              <li>
                <p>{todo.text}</p>
                <button onClick={()=>dispatch(deleteItem(todo.id))}>delete</button>
                <button onClick={() => dispatch(editItem(todo.id))}>
                  edit
                </button>
              </li>
            ) : (
              <>
                <input type="text" ref={editRef} placeholder={todo.text} />
                <button onClick={()=>save(todo.id)}>save</button>
              </>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CreateTodo;
