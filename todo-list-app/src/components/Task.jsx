/* eslint-disable react/prop-types */

export function Task({ task, onDeleteTask, onToggleDone }) {
    return (
        <ul>
            <li>
                <span onClick={onToggleDone} style={{textDecoration: task.done ? 'line-through' : 'none'}}>{task.text}</span>
                <button onClick={() => onDeleteTask(task.id)}>Remover</button>
            </li>
        </ul>
    )
}