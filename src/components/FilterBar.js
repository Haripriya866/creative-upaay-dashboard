import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/actions/taskActions";

export default function FilterBar() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.tasksState.filter);

  const handleChange = e => {
    dispatch(setFilter({ ...filter, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex space-x-4 p-4 bg-secondary rounded">
      <select
        name="category"
        value={filter.category}
        onChange={handleChange}
        className="p-2 border rounded"
      >
        <option value="">All Categories</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Urgent">Urgent</option>
      </select>

      <select
        name="priority"
        value={filter.priority}
        onChange={handleChange}
        className="p-2 border rounded"
      >
        <option value="">Filter</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <select
        name="dueDate"
        value={filter.dueDate}
        onChange={handleChange}
        className="p-2 border rounded"
      >
        <option value="">Today</option>
        <option value="Upcoming">Upcoming</option>
        <option value="Overdue">Overdue</option>
      </select>
    </div>
  );
}
