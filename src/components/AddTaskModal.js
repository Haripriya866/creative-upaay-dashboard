import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions/taskActions";
import { v4 as uuidv4 } from "uuid";

export default function AddTaskModal({ status }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      title,
      description,
      status,
      category: "Work",
      priority: "Medium",
      dueDate: "Upcoming"
    };
    dispatch(addTask(newTask));
    setTitle("");
    setDescription("");
    setOpen(false);
  };

  return (
    <>
      <button
        className="w-full py-1 bg-primary text-white rounded mb-4"
        onClick={() => setOpen(true)}
      >
        + Add Task
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded shadow-lg w-80"
          >
            <h2 className="text-lg font-semibold mb-4">Add Task</h2>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
              className="w-full p-2 mb-4 border rounded"
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
              className="w-full p-2 mb-4 border rounded"
            />
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button type="submit" className="px-4 py-2 bg-primary text-white rounded">
                Add
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
