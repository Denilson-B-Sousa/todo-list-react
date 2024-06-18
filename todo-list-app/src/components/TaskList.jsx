/* eslint-disable react/prop-types */
import { Task } from "./Task";

export function TaskList({tasks, onDeleteTask, onToggleTaskDone}) {
    return (
        <ul>
            {tasks.map((task) => (
                <Task 
                    key={task.id} 
                    task={task} 
                    onDeleteTask={() =>  onDeleteTask(task.id)}
                    onToggleDone={() => onToggleTaskDone(task.id)}
                />
            ))}
        </ul>
    )
}