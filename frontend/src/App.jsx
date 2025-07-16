import React, { useEffect, useState } from 'react';

function App() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        fetch('/tasks')
            .then(res => res.json())
            .then(setTasks);
    }, []);

    const addTask = () => {
        fetch('/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, completed: false })
        })
        .then(res => res.json())
        .then(task => setTasks([...tasks, task]));
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <input value={title} onChange={e => setTitle(e.target.value)} />
            <button onClick={addTask}>Add</button>
            <ul>
                {tasks.map(task => <li key={task.id}>{task.title}</li>)}
            </ul>
        </div>
    );
}

export default App;