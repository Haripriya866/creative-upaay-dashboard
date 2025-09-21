import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { moveTask } from "../redux/actions/taskActions";

export default function TaskCard({ task, index }) {
  const dispatch = useDispatch();

  const handleStatusChange = e => {
    dispatch(moveTask(task.id, e.target.value));
  };


  const profiles = Array.isArray(task.profiles) ? task.profiles : [];
  const comments = typeof task.comments === "number" ? task.comments : 0;
  const files = typeof task.files === "number" ? task.files : 0;
  const priority = task.priority || "Low"; 

  return (
    <Draggable draggableId={task.id} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white p-4 mb-4 rounded shadow"
        >
          <div
            className={`inline-block px-2 py-1 rounded text-white text-xs font-semibold ${
              priority === "High"
                ? "bg-red-600"
                : priority === "Medium"
                ? "bg-yellow-500"
                : "bg-green-500"
            }`}
          >
            {priority}
          </div>
          <h3 className="font-semibold mt-1">{task.title}</h3>
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

          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>💬 {comments} comments</span>
            <span>📁 {files} files</span>
          </div>
        </div>
      )}
    </Draggable>
  );
}
