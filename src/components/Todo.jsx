import React from "react";

const Todo = ({ isActive, todo, setTodos }) => {
    // 삭제
    const onClickDeleteHandler = () => {
        setTodos((prev) =>
            prev.filter((item) => {
                return item.id !== todo.id;
            })
        );
    };

    // 수정
    const onClickSwitchHandler = () => {
        setTodos((prev) =>
            prev.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, isDone: !item.isDone };
                } else {
                    return item;
                }
            })
        );
    };

    return (
        <div
            style={{
                border: "1px solid black",
                padding: "20px",
            }}
        >
            <div>{todo.title}</div>
            <div>{todo.content}</div>
            <button onClick={onClickSwitchHandler}>
                {isActive === true ? "다시" : "완료"}
            </button>
            <button onClick={onClickDeleteHandler}>삭제</button>
        </div>
    );
};

export default Todo;
