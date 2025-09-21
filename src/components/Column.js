import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";
import AddTaskModal from "./AddTaskModal";

export default function Column({ status }) {
  const { tasks, filter } = useSelector(state => state.tasksState);

  const filtered = tasks.filter(task => {
    if (task.status !== status) return false;
    if (filter.category && task.category !== filter.category) return false;
    if (filter.priority && task.priority !== filter.priority) return false;
    if (filter.dueDate && task.dueDate !== filter.dueDate) return false;
    return true;
  });

  return (
    <div className="bg-secondary p-4 rounded">
      <h2 className="text-lg font-semibold mb-4">{status}</h2>
      <AddTaskModal status={status} />
      <Droppable droppableId={status}>
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps} className="min-h-[200px]">
            {filtered.map((task, idx) => (
              <TaskCard key={task.id} task={task} index={idx} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
