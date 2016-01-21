## App Description
Hej Hej is a fun, simple full-stack Javascript app for studying Swedish vocabulary and grammar.

## MVP User Stories
__Stage I:__
As a user, I can play a flashcard game with randomly generated cards from a pre-existing database of Swedish words. Words will consist of the type of speech, the tense (if applicable), an image, the English translation, and various conjugations.

The flashcards will either display an image or text, and the user will be enter the translation into an input field. If the translation is correct, they can continue on to the next card and they get a point. 

As a user, I can log in to create, read, update, and destroy the vocabulary words. This data will persist between sessions.

__Stage II:__
If the input is not true, the user's score resets to zero and the game restarts. Users can play with a 3:00 timer or not. When the timer reaches zero, the game ends and their score is saved.

Users will be able to choose what parts of speech they want to be included in that particular game, or which categories.

__Stage III:__
Users' profiles will keep track of their progress, listing high scores (perhaps using Chart.js), listening external educational resources, and possibly displaying the weather(/Instagrams/radio/headlines) in Stockholm.

__Stage IV:__
Users' databases will be unique, based on their CRUD contributions. 

Users' profiles will show which words they often get wrong, as well as their progress in a given category (e.g. medicine, food, work).

##Technology Used
* HTML, CSS, Javascript/JQuery
* SEAN (Sequelize, Express, Angular, and Node) stack

##Wireframes
![landing_page](https://github.com/francesharlow/hej_hej_app/blob/master/img/landing_page.png)
![profile_page](https://github.com/francesharlow/hej_hej_app/blob/master/img/profile_page.png)
![flashcard_page](https://github.com/francesharlow/hej_hej_app/blob/master/img/flashcard_page.png)

##ERDs
![erd_image]
