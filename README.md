# React Todo Application

This is a simple React Todo application that allows users to manage their tasks. Users can add new tasks, edit existing ones, and delete tasks as needed.

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Responsive design

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/react-todo-app.git
   ```
2. Navigate to the project directory:
   ```
   cd react-todo-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To run the application in development mode, use the following command:
```
npm start
```
This will start the application and open it in your default web browser at `http://localhost:3000`.

### Building for Production

To create a production build of the application, run:
```
npm run build
```
This will generate a `build` directory with the production-ready files.

### Deploying to GitHub Pages

To deploy the application to GitHub Pages, follow these steps:

1. Ensure you have the `gh-pages` package installed:
   ```
   npm install gh-pages --save-dev
   ```
2. Add the following properties to your `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/react-todo-app",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy the application:
   ```
   npm run deploy
   ```

## Usage

Once the application is running, you can:

- Add a new task by entering the task name and clicking "Add Task".
- Edit a task by clicking the "Edit" button next to the task.
- Delete a task by clicking the "Delete" button next to the task.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License. See the LICENSE file for details.