# MEAN Stack App

## Overview
This is a MEAN (MongoDB, Express, Angular, Node.js) stack application that includes both the backend (Node.js + Express + MongoDB) and the frontend (Angular).

## Project Structure
```
mean-stack-app/
├── backend/
│   ├── src/
│   │   ├── models/
│   │   │   └── User.js
│   │   ├── routes/
│   │   │   └── auth.js
│   │   ├── server.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── login.component.ts
│   │   │   ├── services/
│   │   │   │   ├── user.service.ts
│   │   │   ├── app.component.ts
│   │   │   ├── app.routes.ts
│   │   ├── index.html
│   │   ├── main.ts
│   │   ├── styles.scss
│   ├── angular.json
│   ├── package.json
│   ├── tsconfig.json
│
├── README.md
```

## Backend Setup
1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and configure environment variables (e.g., MongoDB URI, JWT secret).
4. Start the server:
   ```sh
   npm start
   ```

## Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Serve the Angular app:
   ```sh
   ng serve
   ```
4. Open the app in a browser at `http://localhost:4200/`.

## Technologies Used
- **MongoDB**: NoSQL database
- **Express.js**: Backend framework
- **Angular**: Frontend framework
- **Node.js**: JavaScript runtime

## License
This project is licensed under the MIT License.

