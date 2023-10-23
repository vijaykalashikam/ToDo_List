import React from 'react';

const ToDoLists = ({ text, onDelete }) => {

    return (
        <>
            <div className="Todo_list">
                <li>{text}</li>
                <button className='btn btn-danger sm' onClick={onDelete}>-</button>
            </div>
        </>
    );
};

export default ToDoLists;
