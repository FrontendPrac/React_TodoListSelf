import React from "react";
import Todo from "./Todo";

const TodoList = ({ isActive, todos, setTodos }) => {
    return (
        <>
            <h2>{isActive === true ? "완료된 것" : "해야할 것"}</h2>
            {todos
                .filter((todo) => {
                    return todo.isDone === isActive;
                })
                .map((todo) => {
                    return (
                        <Todo
                            isActive={isActive}
                            todo={todo}
                            setTodos={setTodos}
                            key={todo.id}
                        />
                    );
                })}
        </>
    );
};

export default TodoList;
