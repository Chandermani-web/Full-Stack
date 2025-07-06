# Todo List Application with MongoDB

A full-stack Todo List application built with Express.js, MongoDB, and vanilla JavaScript with a beautiful UI.

## Features

- ✅ **Add Tasks**: Create new tasks with title, description, priority, category, due date, and notes
- ✅ **View All Tasks**: See all your tasks with filtering and sorting options
- ✅ **Complete Tasks**: Mark tasks as completed
- ✅ **Edit Tasks**: Update existing task details
- ✅ **Delete Tasks**: Remove tasks from the list
- ✅ **Dashboard**: Overview with statistics and recent tasks
- ✅ **Completed Tasks**: View and manage completed tasks
- ✅ **MongoDB Integration**: Persistent data storage
- ✅ **RESTful API**: Complete CRUD operations
- ✅ **Validation**: Input validation using Joi
- ✅ **Responsive Design**: Beautiful and modern UI

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Validation**: Joi
- **Styling**: Custom CSS with Remix Icons

## Setup Instructions

### 1. Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)

### 2. Installation

1. **Clone or download the project**
2. **Install dependencies**:
   ```bash
   npm install
   ```

### 3. Environment Setup

1. **Create a `.env` file** in the root directory:
   ```bash
   cp .env.example .env
   ```

2. **Configure your MongoDB connection**:
   - For local MongoDB:
     ```
     MONGO_URL=mongodb://localhost:27017/todo_app
     ```
   - For MongoDB Atlas:
     ```
     MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/todo_app
     ```

3. **Set the port** (optional):
   ```
   PORT=8000
   ```

### 4. Start the Application

1. **Start the server**:
   ```bash
   npm run dev
   ```

2. **Open your browser** and navigate to:
   ```
   http://localhost:8000
   ```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/tasks` | Create a new task |
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/:id` | Get a specific task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

## Database Schema

```javascript
{
  title: String (required),
  description: String (required),
  level: String (required), // "Normal", "Intermediate", "Important"
  category: String (required), // "Personal", "Work", "Study", etc.
  duedate: String (optional),
  duetime: String (optional),
  additional_notes: String (optional),
  status: String (default: "pending"), // "pending", "completed"
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated)
}
```

## Project Structure

```
Day1/
├── Controllers/
│   └── AuthController.js      # API controllers
├── First_unified_mentor_project(To-Do-List)/
│   ├── AddTask.html          # Add task page
│   ├── Alltask.html          # View all tasks page
│   ├── CompleteTask.html     # Completed tasks page
│   ├── Dashboard.html        # Dashboard page
│   ├── script.js             # Frontend JavaScript
│   └── style.css             # Styling
├── middlewares/
│   └── AddValidation.js      # Input validation
├── models/
│   ├── Addtask.db.js         # MongoDB schema
│   └── db.conn.js            # Database connection
├── routes/
│   └── Auth.route.js         # API routes
├── utils/
│   └── auth.utils.js         # Utility functions
├── server.js                 # Main server file
├── package.json              # Dependencies
└── .env.example              # Environment template
```

## Usage

### Adding a Task
1. Navigate to "Add Task" page
2. Fill in the required fields (Title and Description)
3. Select priority level and category
4. Set due date and time (optional)
5. Add additional notes (optional)
6. Click "Create Task"

### Managing Tasks
- **View All Tasks**: See all tasks with filtering options
- **Complete Task**: Click the "Complete" button
- **Edit Task**: Click "View" then "Edit" in the modal
- **Delete Task**: Click "Delete" button (with confirmation)

### Dashboard
- View task statistics
- See recent tasks
- Monitor completion rates

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**:
   - Ensure MongoDB is running
   - Check your connection string in `.env`
   - Verify network connectivity for Atlas

2. **Port Already in Use**:
   - Change the PORT in `.env` file
   - Or kill the process using the port

3. **Module Not Found**:
   - Run `npm install` to install dependencies
   - Check if all dependencies are in `package.json`

### Error Messages

- **"Database Connected Successfully"**: MongoDB connection working
- **"Task saved to MongoDB"**: Task creation successful
- **"Failed to fetch tasks"**: Check API endpoint and database connection

## Development

### Adding New Features

1. **New API Endpoint**:
   - Add route in `routes/Auth.route.js`
   - Create controller function in `Controllers/AuthController.js`
   - Update frontend to use new endpoint

2. **New Database Field**:
   - Update schema in `models/Addtask.db.js`
   - Update validation in `middlewares/AddValidation.js`
   - Update frontend forms and display

### Code Style

- Use ES6+ features
- Follow consistent naming conventions
- Add proper error handling
- Include console logs for debugging

## License

This project is for educational purposes.

## Author

Chandermani - Backend Development Practice Project 