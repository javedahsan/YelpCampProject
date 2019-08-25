# YelpCamp Training Project

## Prerequisite
* Make sure node js is installed.
* MongoDb is installed.
* download or clone the project from github

    * https://github.com/javedahsan/YelpCampProject.git

## Setup Project dependencies
    * open new terminal session
    * cd <project location >
    * init -update

## How to Start Application and Database Instances:
* Start Mongodb instance:
    * open new terminal session 
        * cd <mongoDb home>/bin/
        * run from command line "./mongod"
        * run from command line"./mongo"

* Start Application Server:
    * open new terminal session
        * cd project location
        * run from command line "node app.js"

* Start Executing Testcases:
    * open new terminal session or execute the following command from Visual Studio code terminal
        * cd project location
        * run from command line "npm test"

* Review the Test Result Report:
    * Test reports are available under folder "mochawesome-report"
    * View Test report using browser

        file:///<project path>/mochawesome-report/mochawesome.html
    
## Initial Setup
* Add Landing Page
* Add Campgrounds Page that lists all campgrounds
* Each Campground has:
    * Name
    * Image

# Layout and Basic Styling
* Create our header and footer partials
* Add in Bootstrap

# Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

# Style the campgrounds page
* Add a better header/footer
* Make campgrounds display in a grid

# Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form

# Databases

## Intro to Databases
* What is a database?
   * A collection of information/database
   * Has an interface
* SQL (rational) vs. NoSQL (non-rationtional)

# Intro to MongoDB
* What is MonoDB?
* Why are we using it?
* Let's Install it!
    * sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
    * sudo apt-get install -y mongodb-org
    * Create mongod file parent directory of workspace folder
       * echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"'
    * chomd a+x mongod
    * mkdir data 

# Our First Mongo Commands
* mongod
* mongo
* help
* show dbs
* use
   * run command use
   * create db "demo"
   * use demo
* insert
* find
* update
* remove

# Mongoose
* What is Mongoose?
   * Elegant Object modeling for node JS
* Why are we using it?
    * it is lightwight
* Interact with a Mongo Database Mongoose

# Add Mongoose
* Install and configure mongoose
* Setup campground Schema
* Use Campground model inside routers

# Show Page
* Review the RESTful routes we'he seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

 
# Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly

# Seed Files
* Add a seed.js file
* Run the seeds file every time the server starts

# Add the comment model!
* Make our errors go away!
* Display comments on campground show page

# Comments New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

# Style Show Page
* Add sidebar to show page
* Display comments nicely

 
# Authentication

## Intro to Auth
* What tools are we using?
    * Passport
    * Passport Local
    * Passport Local Mongoose
* Walk through auth flaw
    * Express-Session

## Auth Pt.1 - Add User Model
* Install all packages for auth
* Define User model

## Auth pt. 2 - Register
* Configure Passport
* Add register routes
* Add register template

## Auth Pt. 3 Login
* Add login routes
* Add login template

 
## Auth Pt.4 - logout/navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Show/hide auth links correctly
 

## Auth Pt. 5 - Show
* Show/hide auth links in navbar correctly


## Refactor The Routes
* Use Express router to reorgnize all routes

## Users + Comments
* Associate users and comments
* Save author's name to a comment automatically

## Users + Campgrounds
* Prevent an unauthorized user from creating a campground
* Save username+id to newly created campground
* 


## Editing Campgrounds
* Add Method-override
* Add Edit Route for Campgrounds
* Add link to Edit Page
* Add Update Route
* Fix $set problem


## Deleting Campgrounds
* Add Destroy Route
* Add Delete button


## Authorization part 1: Campgrounds
* User can only edit his/her campground
* User can only delete his/her campgrounds
* Hide/Show edit and delete buttons


# Editing Comments
* Add Edit route for comments
* Add Edit button
* Add Update route

# Delete Comments
* Add Destroy route
* Add Delete button
 

## Authorization part 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactoring Middleware


## Adding in Flash!
* Demo working version
* Install and configure connect-flash
* Add bootstrap alerts to header

## Work to be done:
    * Adding refactoring landing page
    * Adding more Test cases
    * Refactoring Test cases ( separate Testcases and input data in different folders)
    * Any Suggestions welcome!




