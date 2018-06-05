### Status
[![Build Status](https://travis-ci.org/DikshaSach/fitLife-clientEnd.svg?branch=master)](https://travis-ci.org/DikshaSach/fitLife-clientEnd)
# FitLife
# FitLife
Track and log your workouts , water-intake and weight to make sure you make the best of today. For a better tomorrow!
* Allows Users to add their workouts for the day.
* Allows users to edit workouts,
* Allows users to delete workouts.
* Allows users to see their progress visually with graphs to chart their weight and water intake.
# Links
Live App: https://fitlife.netlify.com/     
Demo Account Credentials:      
**Username:** testing  
**Password:** 1234567890     
Server Github Repo: https://github.com/DikshaSach/fitLife-backend     
Client Github Repo: https://github.com/DikshaSach/fitLife-clientEnd 
## API 
RESTful API endpoints    
### GET   
All Exercies ````...exercise/:id````    
Single Exercise  ````...exercise/singleExercise/:id````    
Weight-Bmi ````...weightandbmi/:id````    
All users water intake ````...water/waterintake/all/:id````    
Single water intake ````...water/waterintake/:id````    
### PUT    
Update water intake ````...water/waterintake/edit/:id````    
Update exercise event ````...exercise/edit/:id````    
### DELETE    
Delete exercise event ````...exercise/delete/:id'````    
Delete weight and bmi ````...weightandbmi/delete/:id````    
### POST    
Add exercise event ````...exercise/add/exercise````    
Add weight and bmi ````...weightandbmi/add/weightbmi````    
Add water intake ````...water/add````    
 
## Technology Stack
### Server Side
* Node
* Express
* Mongoose
* MongoDB
* Mocha
* Chai
### Front End
* React
* Redux
* HTML
* CSS
* Enzyme
* Jest

