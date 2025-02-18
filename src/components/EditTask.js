import React, { useState, useEffect } from 'react';

const EditTask = ({ task, onUpdate, onCancel }) => {
    const [updatedTask, setUpdatedTask] = useState('');

    useEffect(() => {
        if (task) {
            setUpdatedTask(task.name);
        }
    }, [task]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate({ ...task, name: updatedTask });
    };

    return (
        <div>
            <h2>Edit Task</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={updatedTask}
                    onChange={(e) => setUpdatedTask(e.target.value)}
                    required
                />
                <button type="submit">Update Task</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default EditTask;