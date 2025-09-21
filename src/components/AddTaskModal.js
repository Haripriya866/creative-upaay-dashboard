import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions/taskActions";
import { v4 as uuidv4 } from "uuid";

export default function AddTaskModal({ status }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("High"); 
  const dispatch = useDispatch();

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      title,
      description,
      status,
      priority,
      comments: getRandomInt(0, 20), 
      files: getRandomInt(0, 5),
    };
    dispatch(addTask(newTask));
    setTitle("");
    setDescription("");
    setPriority("High");
    setOpen(false);
  };

  return (
    <>
      <button
        className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F3F4F6] hover:bg-[#e0e2e7] shadow transition
        border border-[#E5E7EB] text-primary font-bold text-2xl"
        style={{ minWidth: 0, minHeight: 0, padding: 0, boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
        onClick={() => setOpen(true)}
        aria-label="Add Task"
      >
        +
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
            <select
              value={priority}
              onChange={e => setPriority(e.target.value)}
              required
              className="w-full p-2 mb-4 border rounded"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
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
