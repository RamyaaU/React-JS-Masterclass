import React from 'react';

export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const date = new Date();
        const taskName = e.target.task.value.trim();

        if (task.id) {
            // Update existing task
            const updatedTaskList = tasklist.map((t) => (
                t.id === task.id ? {
                    id: t.id,
                    name: taskName,
                    time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
                } : t
            ));
            setTasklist(updatedTaskList);
            setTask({}); // Clear task object after update
        } else {
            // Add new task
            if (taskName) {
                const newTask = {
                    id: date.getTime(),
                    name: taskName,
                    time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
                };
                setTasklist([...tasklist, newTask]);
                e.target.task.value = ""; // clear input field
            }
        }
    };

    return (
        <section className='addTask'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='task'
                    autoComplete='off'
                    placeholder='add task'
                    value={task.name || ''}
                    maxLength="25"
                    onChange={e => setTask({ ...task, name: e.target.value })}
                />
                <button type='submit'>{task.id ? 'Update' : 'Add'}</button>
            </form>
        </section>
    );
}

export default AddTask;
