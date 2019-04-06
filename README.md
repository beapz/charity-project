## Charity-Project ##

This was the final project for a coding bootcamp at Northwestern University by Trilogy.

The premise of our project is we wanted a way to fascilitate charity and acts of goodwill.  Users can either create a event or join an existing one.  Events can either ask for help in the form of time (e.g., volunteers at a soup kitchen) or help in the form of money (e.g.,to buy books to help schoolteachers).

Our project is hosted by Heroku with the JawsDB addon.


## Dependencies ##

To accomplish this we created a React app that uses Express, Node, and mySQL with Sequelize.  We chose a SQL based database to make it faster to query results and also for its scalability.

Other technologies/libraries used are:
  Popper.js, 
  Axios, 
  Moment, 
  React-Moment, 
  cookie-parser, 
  dotenv, 
  Stripework
  
## Getting Started ##

To begin locally, in the project directory you need to run:
`npm install`

Next add your password to mySQL in the .env file.

Then use `npm start`, this will initialize the database and needed tables.  It also will seed the database.  After this completes it will switch to the client folder and start the React App.  This will open the app locally on your machine in your default browser.

## Future Features ##

This is currently in the MVP stage.  
The site does not load as quickly as possible because the pictures in the '/find/all' route are large and take a while to load.  We want to have all pictures instead saved to a cloudinary database where we can use the thumbnail image to manage data.
We would also like to add an auto-emailer to remind users of their commitment so they don't miss out.
We also think it would be nice to have a dashboard for users to see what they have committed to and for how long and any future projects they are going to attend.
This would also be useful for a project manager and their project.  How successful have they been?

## Authors ##

-Amena Ahmed 
https://github.com/Amena99

-Brittany Higgin 
https://github.com/BAMHiggin

-Zach Merel 
https://github.com/zachmerel

-Zack Germain
https://github.com/zgermain

-Paul Cwik 
https://github.com/PCeeeZy

-Efe Owolide 
https://github.com/nigerian21

## License ##

Copyright 2019 beapz ISC

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
