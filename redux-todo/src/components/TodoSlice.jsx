// import React from 'react'
import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    submit: (state, action) => {
      state.todos.push({
        text: action.payload,
        id: Date.now(),
        isEditting: true,
      });
      console.log(submit);

      // state.name = action.payload.name;
    },
    editItem: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isEditting = false;
      }
    },
    saveItem:(state, action) => {
        state.todos.forEach((todo) => {
            if(todo.id === action.payload.id){
                todo.text = action.payload.text
                todo.isEditting = true
            }
        })
  },
   deleteItem:(state, action) => {
    const filtered = state.todos.filter((item)=>item.id !== action.payload)
    state.todos = filtered
   }
}});

export const { submit, editItem,saveItem,deleteItem } = TodoSlice.actions;
export default TodoSlice.reducer;
