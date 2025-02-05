# URL Shortener with Authentication

## Description
This project is a URL shortener service with user authentication. Users can sign up, log in, and generate short URLs that redirect to the original URLs. The service also tracks the number of clicks for each short URL.

## Features
- User Signup and Login
- URL Shortening
- URL Click Tracking
- User-specific URL management

## Technologies Used
- Node.js
- Express.js
- MongoDB
- EJS (Embedded JavaScript templates)
- JWT (JSON Web Tokens) for authentication
- bcrypt for password hashing

## Installation
1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd Url_Shortener_with_authentication
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Set up your MongoDB connection in `config.js`:
    ```js
    const JWT_SECRET = "Your_JWT_SECRET_key";

    module.exports = {
         JWT_SECRET,
    };
    ```
5. Start the server:
    ```sh
    npm start
    ```

## Usage
1. Open your browser and navigate to `http://localhost:8001`.
2. Sign up for a new account or log in if you already have one.
3. Enter a URL to shorten it.
4. Manage your shortened URLs and track their click statistics.

## Project Structure
- `views/`: Contains EJS templates for the frontend.
- `service/`: Contains authentication service using JWT.
- `routes/`: Contains route definitions for user, URL, and static pages.
- `models/`: Contains Mongoose schemas for User and URL.
- `middlewares/`: Contains middleware for authentication.
- `controllers/`: Contains controller functions for handling user and URL logic.
- `connect.js`: MongoDB connection setup.
- `index.js`: Entry point of the application.

## License
This project is licensed under the MIT License.