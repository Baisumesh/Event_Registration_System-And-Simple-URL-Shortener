# Event_Registration_System-And-Simple-URL-Shortener

1️⃣ Event Registration System

Description:
A backend system that allows users to register for events, view their registrations, and manage them (cancel if needed). Admins or event organizers can manage events, view all registrations, and control user access.

Key Features:

User registration and login (optional authentication)

CRUD operations for events

Users can register for events

Users can view or cancel their registrations

Admin panel for event organizers (optional)

Tech Stack:

Backend: Node.js, Express.js

Database: MongoDB Atlas

Tools: Postman for API testing

APIs:

GET /api/events – Get all events

POST /api/events – Create a new event

GET /api/registrations/user/:userId – Get registrations of a user

POST /api/registrations – Register for an event

PATCH /api/registrations/:id/cancel – Cancel registration

Usage:

Clone the repository

Install dependencies: npm install

Create .env file with MONGO_URI

Run the server: node app.js

Test APIs using Postman

2️⃣ Simple URL Shortener

Description:
A lightweight service that allows users to shorten long URLs into compact, easy-to-share links. Users can also retrieve the original URL from the shortened version.

Key Features:

Shorten long URLs

Redirect short URL to original URL

Track usage count of each short URL

Optional: Expiry time for short links

Tech Stack:

Backend: Node.js, Express.js

Database: MongoDB

Tools: Postman for API testing

APIs:

POST /api/url – Create a short URL from a long URL

GET /:shortId – Redirect to the original long URL

GET /api/url/:shortId – Get details of the short URL (usage count, original URL)

Usage:

Clone the repository

Install dependencies: npm install

Set up .env with MongoDB URI and optional config

Run the server: node server.js

Test shortening and redirect endpoints via Postman

Optional Sections for README

Screenshots / GIFs – Show API responses or frontend if any

Future Enhancements – e.g., analytics for URL clicks, event notifications

Contributing Guidelines – if it’s an open-source project
