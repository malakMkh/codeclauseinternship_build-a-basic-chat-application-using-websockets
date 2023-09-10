Internship Task 1: Simple Chat App using WebSockets
![Capture d’écran 2023-09-10 131159](https://github.com/malakMkh/codeclauseinternship_build-a-basic-chat-application-using-websockets/assets/123992427/091ce9a3-e625-427f-a29b-877c36a95efa)


Overview
This repository contains the code and documentation for Task 1 of the internship project. The goal of this task is to create a simple chat application that allows users to send and receive messages in real-time using WebSocket technology. The application is built using Node.js, Express.js, and React, with communication facilitated by the Socket.io library.

Features
Real-time chat: Users can send and receive messages instantly without the need to refresh the page.
User-friendly interface: The chat app has a clean and intuitive user interface for an enjoyable user experience.
Multiple users: The application supports multiple users, allowing them to join the chat room and interact with each other.
Timestamps: Messages display timestamps to indicate when they were sent.
Sender identification: Messages indicate the sender's name, distinguishing between different users.
Prerequisites
Before running the application, ensure that you have the following dependencies installed:

Node.js: Download and Install Node.js
npm (Node Package Manager): This comes bundled with Node.js.
Getting Started
Follow these steps to get the chat application up and running:

Clone this repository to your local machine:

bash
Copy code
git clone <repository-url>
Navigate to the project directory:

bash
Copy code
cd simple-chat-app
Install the server-side dependencies:

bash
Copy code
cd server
npm install
Install the client-side dependencies:

bash
Copy code
cd ../client
npm install
Start the server:

bash
Copy code
cd ../server
npm start
The server should now be running on http://localhost:3001.

Start the client:

bash
Copy code
cd ../client
npm start
The client should open in your default web browser at http://localhost:3000, and you can start using the chat application.

Usage
Launch the application by following the "Getting Started" steps.
Enter your name to join the chat room.
Start sending and receiving messages with other users in real-time.
Enjoy real-time communication!
Folder Structure
The project is structured as follows:

server/: Contains the server-side code built with Node.js and Express.js.
client/: Contains the client-side code built with React.
README.md: This documentation file.
Technologies Used
Node.js
Express.js
React
Socket.io
Contributors
Malak
License
This project is licensed under the MIT License.

Acknowledgments
Socket.io for providing real-time WebSocket communication.
Create React App for bootstrapping the React application.
Contact
If you have any questions or need further assistance, please contact me
