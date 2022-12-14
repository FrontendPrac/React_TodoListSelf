import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
    // console.log(uuidv4())
    const [todos, setTodos] = useState(initialState);

    return (
        <>
            {/* <div>header</div> */}
            <Header>Header</Header>
            {/* <div>input</div> */}
            <div style={{ backgroundColor: "yellow" }}>
                <Input todos={todos} setTodos={setTodos} />
                <TodoList isActive={false} todos={todos} setTodos={setTodos} />
                <TodoList isActive={true} todos={todos} setTodos={setTodos} />
            </div>
            {/* <div>footer</div> */}
            <Footer>Footer</Footer>
        </>
    );
}

const initialState = [
    {
        id: uuidv4(),
        title: "리액트",
        content: "리액트를 공부합시다",
        isDone: false,
    },
    {
        id: uuidv4(),
        title: "리덕스",
        content: "리덕스를 공부합시다",
        isDone: true,
    },
];

export default App;
