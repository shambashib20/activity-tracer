const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div
            className={`task ${task.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => onToggle(task.id)}
        >


            <p>{task.day}</p>

        </div>
    )
}
export default Task