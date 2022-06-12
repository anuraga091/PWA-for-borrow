# PWA-for-borrow

## How to run this code
1. Clone this repository
2. Open both the server (client as well as backend)
3. Install all the dependencies by running *npm install* on both client folder as well as server folder by changing directory (*cd client and cd server*)
4. Open the server by giving command in the terminal as *npm start* for ###### for client and *npm start nodemon* or *npm start* for server(backend)

### Functionality
1. It has 3 buttons: *Login, Borrow and Send*
2. On clicking login you can give mobile number and then click to *send otp* button to recieve otp and then login button for login. (Not configured in backend)
3. On the same login button below it has *create account* text click on that will change the dialog option and it has 3 input option name, phone and gender. On successful signup by giving detail and continuing your name will come at the place of login button and on clicking on the name you will get option of logout.
4. All the features of point 3 is working both in backend as well as frontend and we can see the data in mongodb database.
5. On clicking to borrow or send button it will open a dialog asking amount, duration, reason and upi id and after giving detail and clicking on continue it will show a dialog of transaction successful. 
6. All the features of point 5 is working both in backend as well as frontend and we can see the data in mongodb database.
7. The data of carousel is coming from a external data folder where json type data is there, we can also fetch API to get all the data for the carousel.
8. Carousel autoplay be changing at each 10 secs, we can however swipe, drag and click on the '< , >' to change the card.
9. This app will show the last cache data when you go offline.

#### Deployed link: https://omnifolio-anurag.herokuapp.com/

This Progressive App is made on MERN stack.
It is responsive with devices

