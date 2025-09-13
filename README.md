# MERN Stack Personal Blog Platform

A full-stack blog application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to create, read, update, and delete blog posts.

## Features

- ✅ **Create Blog Posts** - Add new blog posts with title, content, and author
- ✅ **Read Blog Posts** - View all posts on the homepage and individual post details
- ✅ **Update Blog Posts** - Edit existing blog posts
- ✅ **Delete Blog Posts** - Remove blog posts with confirmation
- ✅ **Responsive Design** - Modern, mobile-friendly UI
- ✅ **Real-time Updates** - Changes reflect immediately in the UI
- ✅ **Form Validation** - Client-side validation for all forms
- ✅ **Error Handling** - Proper error messages and loading states

## Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **Body-parser** - Parse incoming request bodies

### Frontend
- **React.js** - Frontend library
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **CSS3** - Modern styling with responsive design

## Project Structure

```
Blog_web/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Navbar.js
│   │   │   ├── Home.js
│   │   │   ├── CreatePost.js
│   │   │   ├── EditPost.js
│   │   │   └── PostDetail.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
├── server.js              # Express server
├── package.json           # Backend dependencies
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Blog_web
```

### 2. Install Backend Dependencies
```bash
npm install
```

### 3. Install Frontend Dependencies
```bash
cd client
npm install
cd ..
```

### 4. Set Up Environment Variables
Create a `.env` file in the root directory:
```env
MONGODB_URI=mongodb://localhost:27017/blog-platform
PORT=5000
NODE_ENV=development
```

### 5. Start MongoDB
Make sure MongoDB is running on your system:
```bash
# For local MongoDB
mongod

# Or use MongoDB Atlas (cloud)
# Update MONGODB_URI in .env file
```

### 6. Run the Application

#### Option 1: Run Both Frontend and Backend Separately
```bash
# Terminal 1 - Start Backend
npm run server

# Terminal 2 - Start Frontend
npm run client
```

#### Option 2: Run Both with Concurrently
```bash
npm run dev
```

### 7. Access the Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/posts` | Get all blog posts |
| GET | `/api/posts/:id` | Get single blog post |
| POST | `/api/posts` | Create new blog post |
| PUT | `/api/posts/:id` | Update blog post |
| DELETE | `/api/posts/:id` | Delete blog post |
| GET | `/api/health` | Health check |

## Usage

### Creating a Blog Post
1. Click "Create Post" button on the homepage
2. Fill in the title, author name, and content
3. Click "Create Post" to save

### Viewing Posts
- All posts are displayed on the homepage
- Click "Read More" to view full post details
- Posts are sorted by creation date (newest first)

### Editing a Post
1. Click "Edit" button on any post
2. Modify the title, author, or content
3. Click "Update Post" to save changes

### Deleting a Post
1. Click "Delete" button on any post
2. Confirm deletion in the popup dialog
3. Post will be permanently removed

## Database Schema

### BlogPost Collection
```javascript
{
  _id: ObjectId,
  title: String (required),
  content: String (required),
  author: String (required),
  createdAt: Date (default: Date.now),
  updatedAt: Date (default: Date.now)
}
```

## Testing with Postman

### Create a Post
```http
POST http://localhost:5000/api/posts
Content-Type: application/json

{
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post...",
  "author": "John Doe"
}
```

### Get All Posts
```http
GET http://localhost:5000/api/posts
```

### Update a Post
```http
PUT http://localhost:5000/api/posts/:id
Content-Type: application/json

{
  "title": "Updated Title",
  "content": "Updated content...",
  "author": "John Doe"
}
```

### Delete a Post
```http
DELETE http://localhost:5000/api/posts/:id
```

## Interview Questions & Answers

### 1. What is the MERN stack?
The MERN stack is a collection of technologies used to build full-stack web applications:
- **MongoDB**: NoSQL database for data storage
- **Express.js**: Web framework for Node.js
- **React.js**: Frontend JavaScript library for building user interfaces
- **Node.js**: JavaScript runtime for server-side development

### 2. What is a REST API?
REST (Representational State Transfer) API is an architectural style for designing web services. It uses HTTP methods (GET, POST, PUT, DELETE) to perform CRUD operations on resources.

### 3. What does useEffect do in React?
useEffect is a React Hook that allows you to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM. It runs after every render by default.

### 4. How do you send data to backend from React?
Data can be sent to the backend using HTTP libraries like Axios or fetch API. For example:
```javascript
const response = await axios.post('/api/posts', formData);
```

### 5. What is MongoDB used for?
MongoDB is a NoSQL document database used for storing and retrieving data. It stores data in flexible, JSON-like documents and is particularly good for applications with changing data requirements.

### 6. What is the difference between GET and POST?
- **GET**: Retrieves data from the server (read operation)
- **POST**: Sends data to the server to create new resources (create operation)

### 7. How do you create routes in Express?
Routes are created using Express router methods:
```javascript
app.get('/api/posts', (req, res) => { /* handler */ });
app.post('/api/posts', (req, res) => { /* handler */ });
```

### 8. What is a component in React?
A component is a reusable piece of UI that can accept inputs (props) and return React elements describing what should appear on the screen.

### 9. How does React Router work?
React Router enables client-side routing in React applications, allowing navigation between different components without page refreshes. It uses URL changes to determine which component to render.

### 10. How do you connect MongoDB with Node.js?
MongoDB is connected to Node.js using the Mongoose library:
```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/database-name');
```

## Deployment

### Heroku Deployment
1. Create a Heroku app
2. Set environment variables in Heroku dashboard
3. Connect to GitHub repository
4. Deploy from main branch

### Environment Variables for Production
```env
MONGODB_URI=your-mongodb-atlas-connection-string
NODE_ENV=production
PORT=process.env.PORT
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue in the repository.

---

**Happy Blogging! 📝✨**
