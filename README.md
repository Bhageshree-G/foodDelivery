Food Delivery Website
MERN Stack Food Ordering app with React, Node, Express, MongoDB, Tailwind, Redux, Stripe
1. Database Connection (MongoDB with Mongoose)
Connects to MongoDB Atlas using Mongoose (connectDB function).
Connection details are stored in a MongoDB URL.
2. Authentication (JWT & bcrypt)
Uses jsonwebtoken for token-based authentication.
Functions:
generateToken(userId): Creates a JWT with a 48-hour expiry.
getUserIdFromToken(token): Decodes the token to get userId.
Uses bcrypt to hash passwords before storing them.
3. User Model & Schema (Mongoose)
Defines a User schema with fields:
fullName, email, password, role (customer or restaurant owner).
orders (references an Order model).
favorites (stores favorite food items).
addresses (references an Address model).
4. User Service (User Management Functions)
createUser(userData): Creates a new user with hashed passwords.
getUserByEmail(email): Finds a user by email.
findUserById(userId): Retrieves user details with addresses.
findUserProfileByJwt(jwt): Gets user profile using JWT.
findAllUsers(): Returns all users.
5. Express Routes & API Endpoints
homeRoutes (/ route) responds with a welcome message.
register endpoint: Creates a new user and returns a JWT.
login (incomplete): Intended for user authentication.
6. Server Setup & Middleware
Uses express, cors (Cross-Origin Resource Sharing), and body-parser.
Runs on port 5454 (app.listen(PORT)).
7. Dependencies (package.json)
Uses:
bcrypt (password hashing), jsonwebtoken (JWT auth), mongoose (MongoDB), express (API framework), cors, dotenv, nodemon (dev server).

