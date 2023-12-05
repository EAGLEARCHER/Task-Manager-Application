# Task Manager Application

This Task Manager Application is created by [EAGLEARCHER](https://github.com/EAGLEARCHER) for the sole purpose of learning Node.js, Express, and MongoDB. It serves as a project focused on understanding the fundamentals of these technologies.

## Functionality

The Task Manager Application provides the following basic functionalities:

- **Adding a Task**: Users can add a new task by providing a title, description, and other necessary details.
- **Editing a Task**: Users can edit existing tasks, including updating the title, description, or other attributes.
- **Removing a Task**: Tasks can be removed or deleted from the task list.
- **Completing a Task**: Users can mark a task as completed, which changes its status.

These functionalities are achieved by making API calls to the backend, which interacts with the database to perform CRUD (Create, Read, Update, Delete) operations on tasks.

## Getting Started

To get started with the Task Manager Application, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed locally or accessible via a remote server

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/EAGLEARCHER/task-manager-application.git
    ```

2. Navigate to the project directory:

    ```bash
    cd task-manager-application
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Set up the environment variables:
   
   - Create a `.env` file in the root directory.
   - Define the following variables:
        ```
        PORT=3000
        MONGODB_URL=YOUR_MONGODB_CONNECTION_STRING
        ```

5. Start the application:

    ```bash
    npm start
    ```

6. Access the application in your browser at `http://localhost:3000` (or the specified port).

## Contributing

Contributions to this repository are welcome, especially if they aim to improve the learning experience for others. If you'd like to contribute, please follow these guidelines:

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request.

Please ensure that any contributions align with the learning objectives of this repository and maintain a respectful and collaborative environment for all contributors.

## License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.
