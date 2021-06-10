import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

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

ReactDOM.render(<App />,
    document.getElementById('root'));
