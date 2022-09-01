THE PROJECT APIs ARE BUILT IN NODE.JS  USING EXPRESS.JS AND MONGODB DATABASE.
ALL THE DATA IS BEING SAVED ON MY MONGODB ATLAS CLOUD THERE IS ALREADY SOME DUMMY DATA (for testing purposes).
STEPS TO RUN APIs: 

1)CLONE THE REPOSITORY 
2)RUN COMMAND "npm i" (this will install all the dependencies) 
3)RUN COMMAND "npm start or npm run dev".

APIs ENDPOINT FOR CHECKING
TO GET LIST OF ALL FLOORS = /api/v1/GetListOfFloors (GET METHOD)
TO GET LIST OF ALL FLOORS BY FLOORID = /api/v1/GetSeatsByFloor(floorId) (GET METHOD) //floorid can be 1, 2, 3  
TO VERIFY IF THE USER SELECTED SEATS ARE AVAILABLE OR NOT = /api/v1/VerifyUserSelectedSeatsAvailable(floorId,seats,startTime, endTime)(GET METHOD)
TO BOOK THE USER SELECTED SEATS = /api/v1/BookUserSelectedSeat(user,floorId,seats,startTime, endTime) (POST METHOD) //user is username
