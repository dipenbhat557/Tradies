# Tradies - Home Services Marketplace

Tradies is a comprehensive marketplace connecting customers with skilled trade service providers. This platform enables users to find, book, and review a wide range of home services from plumbing and electrical work to cleaning and gardening.

## Project Structure

The project is organized into two main parts:

1. **Frontend** - A React application built with Vite, TypeScript, and Tailwind CSS
2. **Backend** - A Node.js API built with Express and MongoDB

## Features

- **User Authentication** - Secure login and registration for both customers and service providers
- **Service Listings** - Browse services by category, location, and ratings
- **Service Provider Profiles** - Detailed profiles with ratings, reviews, and portfolio
- **Booking System** - Schedule services with real-time availability
- **Reviews and Ratings** - Leave feedback after service completion
- **Dashboard** - Manage bookings, services, and account details

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- MongoDB (local or Atlas)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/username/tradies.git
   cd tradies
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the backend directory with the following variables:
     ```
     PORT=5001
     MONGODB_URI=mongodb://localhost:27017/tradies
     JWT_SECRET=your_jwt_secret
     ```
   - Create a `.env` file in the frontend directory:
     ```
     VITE_API_URL=http://localhost:5001
     VITE_APP_NAME=Tradies
     ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm run dev
   ```

2. Start the frontend development server:
   ```
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Technology Stack

### Frontend
- React
- Vite
- TypeScript
- Tailwind CSS
- React Router
- React Icons

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt

## Project Structure

```
tradies/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── contexts/
│       ├── hooks/
│       ├── pages/
│       └── main.tsx
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- UI components inspired by [Tailwind UI](https://tailwindui.com/)
- Stock photos from [Unsplash](https://unsplash.com/) 