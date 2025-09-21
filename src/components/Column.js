import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";
import AddTaskModal from "./AddTaskModal";

export default function Column({ status }) {
  const { tasks, filter } = useSelector(state => state.tasksState);

  const filtered = tasks.filter(task => {
    if (task.status !== status) return false;
    if (filter.priority && task.priority !== filter.priority) return false;
    return true;
  });

  return (
    <div className="bg-secondary p-4 rounded">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <span
            className={`inline-block w-2 h-2 rounded-full mr-2 ${
              status === "To Do" ? "bg-blue-500" :
              status === "In Progress" ? "bg-yellow-500" :
              status === "Done" ? "bg-green-500" : ""
            }`}
          ></span>
          <h2 className="text-lg font-semibold">{status}</h2>
        </div>
        {status === "To Do" && <AddTaskModal status={status} />}
      </div>
       <div
          className={`h-1 rounded-full mb-4 ${
            status === "To Do" ? "bg-blue-500" :
            status === "In Progress" ? "bg-yellow-500" :
            status === "Done" ? "bg-green-500" : ""
          }`}
        />     
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
