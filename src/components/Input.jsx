import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList";

const Input = ({ todos, setTodos }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const onChangeTitleHandler = (event) => {
        setTitle(event.target.value);
        // console.log(title);
    };

    const onChangeContentHandler = (event) => {
        setContent(event.target.value);
        // console.log(content);
    };

    // 추가
    const onSubmitHandler = (event) => {
        event.preventDefault();

        const newTodo = {
            id: uuidv4(),
            title: title,
            content: content,
            isDone: false,
        };

        setTodos([...todos, newTodo]);

        // console.log(todos);
    };

    return (
        <>
            <form>
                제목:{" "}
                <input
                    type="text"
                    value={title}
                    onChange={onChangeTitleHandler}
                />
                내용:{" "}
                <input
                    type="text"
                    value={content}
                    onChange={onChangeContentHandler}
                />
                <button onClick={onSubmitHandler}>추가하기</button>
            </form>
        </>
    );
};

export default Input;
