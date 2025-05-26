import TodoItem from "./TodoItem.tsx";
import todos from "./todos.json";
import React from "react";
import { ListGroup } from "react-bootstrap";

export default function TodoList() {
 return(
   <>
     <h3>Todo List</h3>
     <ListGroup>
       { todos.map(todo => {
           return(<TodoItem todo={todo}/>);   })}
     </ListGroup><hr/>
   </>
);}

