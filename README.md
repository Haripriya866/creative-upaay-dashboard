# Title
Creative Upaay Full Stack Development Assignment

## Objective
The goal of this project is to build a fully functional task management dashboard based on a specific Figma design. The dashboard will allow users to manage tasks visually across three main stages: "To Do", "In Progress", and "Done".

Figma Design Link: Creative Upaay Dashboard Design

Users should be able to:

* Add new tasks by entering a title, description, and priority.
* Move tasks between stages easily, either by changing their status via controls or by drag-and-drop.
* Filter tasks based on priority or other criteria.

## Demo

Link: 

## Tech Stack

- **React.js**: Frontend framework for building the dashboard.
- **Redux**: State management for predictable and centralized global state.
- **Local Storage**: For persisting application state.
- **Tailwind CSS**: For styling and responsive UI.
- **react-beautiful-dnd**:For drag-and-drop task movement.
- **redux-persist**: Simplifies Local Storage integration with Redux.

### Functionality

* Add Tasks: Click the plus icon next to “To Do” to add a new task with a title, description, and priority.

* Move Tasks: Use the dropdown or drag-and-drop to move tasks between “To Do”, “In Progress”, and “Done”.

* Filter Tasks: Use the Filter dropdown to show tasks based on priority.

* State Persistence: Tasks are saved to local storage, so your data stays even after page refresh.

## Setup Instructions

1. Initialize Project:
    npx create-react-app creative-upaay-dashboard
    cd creative-upaay-dashboard

2. Install Dependencies:
    # React Router for navigation
    npm install react-router-dom

    # Redux for state management
    npm install redux react-redux

    # UI Library
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

    # Optional drag-and-drop
    npm install react-beautiful-dnd

    Steps to run locally (npm install, npm start).
   
   
## push the code to Git using the following commands
* git init
* git remote add origin https://github.com/Haripriya866/creative-upaay-dashboard.git
* git add -A
* git commit -m "Creative Upaay Full Stack Development Assignment"
* git branch -M main
* git push -u origin main

## Deployment
Choose a Platform: Select a deployment platform like Vercel

## Pages
Dashboard page
