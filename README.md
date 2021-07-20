# MERN Google Books Search

## Description
The goal of this assignment was to create a React-based Google Books Search app that uses React components, helper/util functions, and React lifestyle methods to query and display books based on user searches. This application also uses Node, Express, and MongoDB. 

## Usage
[Here](https://best-mern-google-books-search.herokuapp.com/) is the link to the deployed application.  
[Here](https://github.com/go-yasi/mern-google-books-search) is the link to the GitHub repository containing the application code.  
Below is a screenshot of the application homepage:  
![Image of Google Books Search application homepage](/assets/homepage.png)

## Installation

* This application required the following two pages:

  * **Search** - User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.

  * **Saved** - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database. 


### Steps
1. Add code to connect to a MongoDB database using the mongoose npm package, then create a Book schema.

2. At a minimum, books was required to have each of the following fields:

* `title` - Title of the book from the Google Books API

* `authors` - The books's author(s) as returned from the Google Books API

* `description` - The book's description as returned from the Google Books API

* `image` - The Book's thumbnail image as returned from the Google Books API

* `link` - The Book's information link as returned from the Google Books API

3. Create a SPA (Single Page Application) that uses [`react-router-dom`](https://github.com/reactjs/react-router) to navigate, hide, and show React components without changing the route within Express.

* The layout should include at least two React Components for each page `Search` and `Saved`.

6. Add the following Express routes for your app:

* `/api/books` (get) - Should return all saved books as JSON.

* `/api/books` (post) - Will be used to save a new book to the database.

* `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.

* `*` (get) - Will load your single HTML page in `client/build/index.html`. Make sure you have this _after_ all other routes are defined.

7. Deploy the final application to Heroku.

## Conclusion
This assignment helped me to develop a stronger understanding of how the MERN Stack is used for easier and faster deployment of full-stack web applications. The four key technologies that make up the MERN stack are MongoDB, Express, React, and Node. Throughout the course, we have worked with all of these technologies independently, so I was fascinated to see how when combined, they can make the development process of an application much more efficient.