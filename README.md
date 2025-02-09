
User Management and Cart Operations API
This API provides CRUD (Create, Read, Update, Delete) functionalities for user management, along with operations to manage the user's cart.

Endpoints
User Management
POST /signup: Create a new user account.
POST /signin: Sign in with an existing user account.
DELETE /user/:id: Delete a user account by ID.
PUT /user/reset-password: Update user password using email reset link.
Cart Operations
POST /cart/add: Add an item to the user's cart.
POST /cart/remove: Remove an item from the user's cart.
Usage
User Management
Signup

POST /signup
Content-Type: application/json

{
  "email": "example@example.com",
  "password": "password123",
  "name": "John Doe"
}

Signin

POST /signin
Content-Type: application/json

{
  "email": "example@example.com",
  "password": "password123"
}

Delete User
DELETE /user/:id

Reset Password

PUT /user/reset-password
Content-Type: application/json

{
  "email": "example@example.com",
  "password": "newpassword123"
}

Cart Operations
Add to Cart: Add an item to the user's cart.

POST /cart/add
Request Headers:
Authorization: Bearer <access_token>
Request Body:
{
  "userId": "user_id",
  "itemId": "item_id",
  "quantity": 1
}

Remove from Cart: Remove an item from the user's cart.

POST /cart/remove
Request Headers:
Authorization: Bearer <access_token>
Request Body:
{
  "userId": "user_id",
  "itemId": "item_id"
}

Authentication
All endpoints require authentication using JWT (JSON Web Tokens). Include the JWT token in the Authorization header with the value Bearer <access_token>.

JSON Schema
The API uses a JSON request format for handling cart operations:
{
  "userId": "user_id",
  "itemId": "item_id",
  "quantity": 1
}
Error Handling
The API returns appropriate HTTP status codes and error messages for invalid requests or errors encountered during processing.

