# Social Network API

## Description

This is an API for a social network web application where users can share their shouts, reply to friends' shouts, and create a friend list. This API uses Express.js for routing, a MongoDB database, the Mongoose ODM, and Moment.js for timestamp formatting. The seed data is created using Insomnia.

## Table of Contents
- [Features](#Features)
- [Instllation](#Installation)
- [Usage](#Usage)
- [Technologies](#Technologies)
- [Tests](#Tests)
- [Contributions](#Contributions)
- [Questions](#Questions)
- [Credits](#Credits)

## Features

This is a social network API that uses a NoSQL database called MongoDB to handle large amounts of unstructured data. The mongoose models sync to the MongoDB database when the command invoking the app is entered.

When API GET routes for users and shouts are opened in Insomnia, the data for each of the routes is displayed in formatted JSON.

User, Friend, Shout, and Reply routes are created to construct the database and test the API on Insomnia.

User Routes - a user can construct a user with a username and valid email address. The user is assigned a unique user Id when created.

You can also create a user through the User `POST` routes, as well as update and delete users through the `PUT` and `DELETE` routes respectively.

You can add a friend by clicking on the `POST` request. On the URL enter the user Id of the user who is adding a friend, then the user Id of the friend the user is adding. Similarly, you can delete a friend in the same way through the `DELETE` request.

Within the Shout Routes, a user can create, delete, get sll, or get a single Shout by Id. and in the Reply Routes you can create or delete a reply.

## Installation

## Usage

## Technologies

## Tests

## Contributions

## Questions

## Credits

