import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/actions/taskActions";

export default function FilterBar() {
  const dispatch = useDispatch();
  const priority = useSelector(state => state.tasksState.filter.priority);
  
   const handleChange = e => {
    dispatch(setFilter({ priority: e.target.value }));
  };

  return (
    <div className="flex p-4 bg-secondary rounded">
      <select
        name="priority"
        value={priority}
        onChange={handleChange}
        className="p-2 border rounded"
      >
        <option value="">All</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
  );
}
