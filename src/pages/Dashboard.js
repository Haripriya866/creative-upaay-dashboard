import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { moveTask } from "../redux/actions/taskActions";
import FilterBar from "../components/FilterBar";
import Column from "../components/Column";

export default function Dashboard() {
  const dispatch = useDispatch();

  const handleDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    dispatch(moveTask(draggableId, destination.droppableId));
  };

  return (
    <div className="p-6">
      <FilterBar />
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          <Column status="To Do" />
          <Column status="In Progress" />
          <Column status="Done" />
        </div>
      </DragDropContext>
    </div>
  );
}
