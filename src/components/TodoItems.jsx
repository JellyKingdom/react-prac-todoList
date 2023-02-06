import React from "react";
import './todoItems.css';
import Todo from './Todo';

const TodoItems = ({todos,setTodos}) => {

    return(
        <div className="todoItems">
            <h2 className="title">Working</h2>
            <div className="itemsWrapper">
                <div className="todoContainer">
                    {todos.map((todo) => {
                        if(!todo.isDone){
                            return (
                                <Todo/>
                            );
                        }
                    })}
                </div>
            </div>
            <h2 className="title">Done</h2>
            <div className="itemsWrapper">
                <div className="todoContainer">
                    
                </div>
            </div>
        </div>
    );
};

export default TodoItems;