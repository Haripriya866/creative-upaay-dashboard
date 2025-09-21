import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { moveTask } from "../redux/actions/taskActions";

export default function TaskCard({ task, index }) {
  const dispatch = useDispatch();

  const handleStatusChange = e => {
    dispatch(moveTask(task.id, e.target.value));
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white p-4 mb-4 rounded shadow"
        >
          <h3 className="font-semibold">{task.title}</h3>
          <p className="text-sm text-gray-600">{task.description}</p>
          <select
            value={task.status}
            onChange={handleStatusChange}
            className="mt-2 p-1 border rounded w-full"
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>
      )}
    </Draggable>
  );
}
