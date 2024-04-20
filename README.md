# Todo App with React and TypeScript

This project is a Todo management application built with React and TypeScript, offering a modern and efficient way to organize tasks and stay productive.

## Demo Project

<img width="1080" alt="image" src="https://github.com/princekumarg/ToDo_using_TypeScript/assets/86905668/2df19b79-f266-431b-81cc-e61cfa86cf4b">


## Features

- **Add Todos:** Easily add new tasks to your list with a simple form.
- **Mark as Done:** Mark tasks as done to keep track of completed items.
- **Delete Todos:** Remove tasks from the list when they are no longer needed.
- **Responsive Design:** The application is designed to work seamlessly across desktop and mobile devices.
- **Type-Safe Development:** Utilizes TypeScript for type safety and improved code quality.
- **State Management:** Uses React's state management features for efficient updates and rendering.
- **Customizable Styling:** Customize the styling to match your preferences or branding.

## Technologies Used

- **React:** A popular JavaScript library for building user interfaces.
- **TypeScript:** Adds static typing to JavaScript, enhancing code reliability and maintainability.
- **React Hooks:** Utilizes React's Hooks API for state management and component logic.
- **CSS Modules:** Modular CSS for component-level styling and maintainability.
- **Git:** Version control system for collaborative development and code management.

## Getting Started

To run the Todo app locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/todo-app.git`
2. Navigate to the project directory: `cd todo-app`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and visit `http://localhost:5173` to view the app.

## Contributors

- [Prince Kumar](https://github.com/princekumarg)

## Deployment

- [Live Demo](https://to-do-using-type-script.vercel.app/)

## My Blog on TODO

- [Blog](https://medium.com/@agarwal8789/benefit-of-to-do-app-in-web-development-0b41d8ba6bb0)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
