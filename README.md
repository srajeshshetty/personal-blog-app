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

## Screenshots

Check out the `screenshots/` directory for visual examples of the application in action!

- **Homepage** - Main blog interface with existing posts
- **Create Post** - Form for adding new blog posts
- **Edit Post** - Form for modifying existing posts
- **Post Detail** - Individual post view with full content

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
git clone https://github.com/srajeshshetty/personal-blog-app.git
cd personal-blog-app
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