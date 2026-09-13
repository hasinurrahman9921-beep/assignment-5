# Dev Stack

## Description
Dev Stack is a modern interactive web application that helps developers explore, select, and build their ideal technology stack for software development projects.

## Technologies Used
- React.js (Vite)
- Tailwind CSS
- JavaScript (ES6+)
- JSON (Mock Data)

## Key Features
1. **Interactive Tech Exploration:** Browse technologies with categorization, ratings, and experience levels.
2. **Custom Stack Selection:** Select up to 8 technologies to create a customized tech stack list.
3. **Dynamic Sidebar & Overview Counter:** Manage selected items with real-time stack counters and simple item removal options.

---

## React Questions & Answers

### i. What is JSX, and why is it used in React?
**Answer:** JSX (JavaScript XML) is a syntax extension for JavaScript that allows writing HTML-like code inside JavaScript. It makes writing and understanding component UI layout much easier and cleaner.

### ii. What is the difference between props and state?
**Answer:** 
- **Props:** Data passed into a component from its parent. Props are read-only (immutable).
- **State:** Data managed internally within a component that can change over time. When state updates, the component re-renders.

### iii. What does the useState hook do, and where did you use it in this project?
**Answer:** `useState` allows functional components to store and update dynamic state data. In this project, it is used in `App.jsx` to manage technology lists (`technologies`), user selections (`selectedStack`), and loading states (`loading`).

### iv. What does the useEffect hook do, and why did you need it to load the JSON data?
**Answer:** `useEffect` handles side effects in components (like data fetching). It was used to fetch mock technology data from the `/technologies.json` file once when the `App` component initially mounts.

### v. Why does every item in a .map() list need a unique key prop?
**Answer:** React uses the unique `key` prop to identify which items have changed, been added, or removed in a list. This allows React to efficiently update only the changed DOM elements without re-rendering the whole list.

### vi. What is conditional rendering? Show one place you used it.
**Answer:** Conditional rendering displays different UI components or content based on certain logical conditions. In this project, it is used in `StackSidebar.jsx` to show an empty message (`No technologies added yet.`) when `selectedTechs.length === 0`.

### vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:** 
- **Parent to Child:** Data is passed down directly via **Props**.
- **Child to Parent:** The parent passes a **callback function** as a prop to the child, which the child calls to send data back up.