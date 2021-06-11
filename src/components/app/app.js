import React from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import './app.css';

const App = ( props ) => {
    // const isLoggedIn = true;
    // const todayDate = <p>{ (new Date()).toDateString() }</p>;
    // const loginBox = <span>Log in, please.</span>;
    // const welcomeBox = <span>Welcome Back</span>

    const todoData = [
        {label: 'Drink Coffee', important: false, id: 0},
        {label: 'Make Awesome App', important: true, id: 1},
        {label: 'Somethings Else', important: false, id: 2},
        {label: 'Have a Lunch', important: false,  id: 3}
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData} />
            {/*{ isLoggedIn ? welcomeBox : loginBox }*/}
            {/*{ todayDate }*/}
        </div>
    );
};

export default App;