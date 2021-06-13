import React, {Component} from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import './app.css';

export default class App extends Component {

    state = {
        todoData: [
            {label: 'Drink Coffee', important: false, id: 0},
            {label: 'Make Awesome App', important: true, id: 1},
            {label: 'Somethings Else', important: false, id: 2},
            {label: 'Have a Lunch', important: false, id: 3}
        ]
    };

    deleteItem = (id) => {

        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx+1);
            const newArray = [...before, ...after];

            return {
                todoData: newArray
            };
        });
    };

    render() {
        return (
            <div>
                <AppHeader/>
                <SearchPanel/>

                <TodoList
                    todos={this.state.todoData}
                    onDeleted={ this.deleteItem }/>
            </div>
        );
    }


}
;