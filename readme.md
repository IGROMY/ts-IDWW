# Project Name

Short description of your project.

## Table of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Modules](#modules)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/project-name.git
   
2. Navigate to backend and after that to frontend directory
```cd server```
```cd client```
3.Install the dependencies:
```
npm install
```
4. Start project by using command:
```
npm start
```

##Getting Started
Configure the environment variables:

Rename the .env.example file to .env.
Update the values in the .env file with your own configurations.

##Modules

###Article Module
The Article module provides endpoints for managing articles.

Create an Article
Endpoint: `POST /articles`

Request Body:
```
{
"title": "Article Title",
"content": "Article Content",
"description": "Article Description",
"category": "Article Category",
"imageURL": "URL to Article Image"
}
```
Response: Newly created article.

###Get All Articles
Endpoint: GET /articles

Response: Array of all articles.

###Get an Article by ID
Endpoint: GET /articles/:id

Response: Article with the specified ID.

###Update an Article
Endpoint: PUT /articles/:id

Request Body: Same as create request body.

Response: Updated article.

###Delete an Article
Endpoint: DELETE /articles/:id

Response: Success message.

##Auth Module
The Auth module provides endpoints for user authentication and authorization.

###Register a User
Endpoint: POST `/auth/register`

Response: Newly registered user.

###User Login

Endpoint: POST `/auth/login`
```
{
  "email": "user@example.com",
  "password": "user-password"
}

```
Response: Access token.

##Refresh Token
Endpoint: GET `/auth/refresh-token`

Request Body:
```
{
  "userId": "user-id"
}
```
Response: Refresh token.

User Logout
Endpoint: POST /auth/logout

Request Body:
```
{
  "userId": "user-id"
}

```

###User Logout
Endpoint: POST `/auth/logout`

Request Body:

```
{
"userId": "user-id"
}
```
Response: Success message.

##Employee Module
The Employee module provides endpoints for managing employee information.

###Create an Employee
Endpoint: POST `/employees/employee`

Request Body:
```
{
"fullName": "Employee Full Name",
"job": "Employee Job",
"location": "Employee Location",
"phoneNumber": "Employee Phone Number",
"email": "Employee Email"
}
```

Response: Newly created employee.

###Get All Employees
Endpoint: GET `/employees/employee`

Response: Array of all employees.

###Get an Employee by ID
Endpoint: GET `/employees/employee/:id`

Response: Employee with the specified ID.

###Update an Employee
Endpoint: PUT `/employees/employee/:id`

Request Body: Same as create request body.

Response: Updated employee.

###Delete an Employee
Endpoint: DELETE `/employees/employee/:id`

Response: Success message.

##WorkInfo Module
The WorkInfo module provides endpoints for managing work information.

Create Work Step Info
Endpoint: POST `/work-info/work-step-info`

Request Body:

```
{
"heading": "Work Step Heading",
"text": "Work Step Text",
"stepNumber": "Work Step Number"
}
```

Response: Newly created work step info.

###Get All Work Step Infos
Endpoint: GET `/work-info/work-step-info`

Response: Array of all work step infos.
###Get a Work Step Info by ID
Endpoint: GET `/work-info/work-step-info/:id`

Response: Work step info with the specified ID.
###Update a Work Step Info
Endpoint: PUT `/work-info/work-step-info/:id`

Request Body: Same as create request body.

Response: Updated work step info.
###Delete a Work Step Info
Endpoint: DELETE `/work-info/work-step-info/:id`

Response: Success message.
