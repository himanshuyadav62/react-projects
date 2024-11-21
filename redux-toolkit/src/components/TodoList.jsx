import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

export default function TodoList() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [editId, setEditId] = useState(null);
    const [newTitle, setNewTitle] = useState("");
    const [checkedIds, setCheckedIds] = useState([]);

    const handleUpdate = (id, title) => {
        dispatch(updateTodo({ id, title }));
        setEditId(null);
        setNewTitle("");
    };

    const handleCheckboxChange = (e, id) => {
        if (e.target.checked) {
            setCheckedIds([...checkedIds, id]);
        } else {
           // remove the id from checkedIds 
           setCheckedIds(checkedIds.filter((checkedId) => checkedId !== id));
        }
    };


    return (
        <div className="flex justify-center items-center bg-gray-100 min-h-screen">
            <div className="p-6 bg-white shadow-lg rounded-lg w-full max-w-md">
                <ul className="space-y-4">
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            className="flex justify-between items-center p-4 border-b border-gray-300"
                        >

                            <input 
                                type="checkbox"
                                className="w-4 h-4"
                                checked={checkedIds.includes(todo.id)}
                                onChange={(e) => handleCheckboxChange(e, todo.id)}
                            />
                            
                            {editId === todo.id ? (
                                <input
                                    type="text"
                                    value={newTitle}
                                    onChange={(e) => setNewTitle(e.target.value)}
                                    className="text-lg text-gray-700 border border-gray-300 rounded px-2 py-1"
                                />
                            ) : (
                                <span className={`text-lg text-gray-700 ${checkedIds.includes(todo.id) ? 'line-through' : ''}`}>{todo.title}</span>
                            )}
                            
                            {editId === todo.id ? (
                                <button
                                    onClick={() => handleUpdate(todo.id, newTitle)}
                                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    Save
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        setEditId(todo.id);
                                        setNewTitle(todo.title);
                                    }}
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    Edit
                                </button>
                            )}

                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
