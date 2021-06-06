import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
    return (
        <ul>
            <li>Learn React</li>
            <li>Build Awesome App</li>
        </ul>
    );
};

const AppHeader = () => {
    return (
        <h1>My Todo List</h1>
    );
};

const SearchPanel = () => {
    return (
        <input type="text" placeholder='search' />
    );
};

const App = () => {

    const isLoggedIn = true;
    const todayDate = <span>{ (new Date()).toDateString() }</span>;
    const loginBox = <span>Log in, please.</span>;

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
            { isLoggedIn ? todayDate : loginBox }
        </div>
    );
};

ReactDOM.render(<App />,
    document.getElementById('root'));

console.log('test OK');