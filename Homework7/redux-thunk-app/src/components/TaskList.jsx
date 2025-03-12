import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTasks } from "../slices/tasksSlice";

const TaskList = () => {
    const dispatch = useDispatch();
    const { list, status, error } = useSelector(state => state.tasks);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    if (status === "loading") return <p>Загрузка задач...</p>;
    if (status === "failed") return <p>Ошибка: {error}</p>;


    return (
        <ul>
            {list.map(task => (
                <li key={task.id} >
                    {task.title} {task.completed ? '✅' : '❌'}
                </li>
            ))}
        </ul>
    )
};

export default TaskList;