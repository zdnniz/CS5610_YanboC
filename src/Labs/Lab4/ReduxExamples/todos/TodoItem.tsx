import { Button, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

type TodoType = {
        id: string;
        title: string;
};

export default function TodoItem({ todo,
}: { todo: TodoType }) {
        const dispatch = useDispatch();
        return (
                <ListGroup.Item key={todo.id}>
                        <Button onClick={() => dispatch(deleteTodo(todo.id))}
                                id="wd-delete-todo-click"> Delete </Button>
                        <Button onClick={() => dispatch(setTodo(todo))}
                                id="wd-set-todo-click"> Edit </Button>
                        {todo.title}
                </ListGroup.Item>
        );
}

