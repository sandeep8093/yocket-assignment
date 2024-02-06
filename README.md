ReadMe
Assumptions:
The fugitive's location is randomly determined at the beginning of each game session.
Each cop independently selects a city and a vehicle.
The game simulates whether any cop successfully captures the fugitive based on their choices and the fugitive's location.
Only basic UI/UX features are implemented for simplicity.
No database connections are used; all data is stored in memory.

Build Steps:

Backend (NodeJS):
Navigate to the backend directory.
Run npm install to install dependencies.
Run node server to start the backend server at port 5000

Frontend (React):
Navigate to the frontend directory.
Run npm install to install dependencies.
Run npm start to start the development server.
Access the application in a web browser at http://localhost:3000.


Backend (NodeJS):
The backend utilizes NodeJS and Express.
Data structures are used to store city names, distances, and vehicle properties.
The fugitive's location is randomly simulated.
Logic is implemented to determine if any cop successfully captures the fugitive based on their choices and the fugitive's location.

Frontend (React):
The frontend is built using React.
Screens are developed for the start/landing page, city selection, vehicle selection, and result page.
The UI is responsive.
The result page indicates the capture status and, if successful, displays the capturing cop's name.
Basic styling and user interactions are implemented.