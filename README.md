# WEB103 Project 1 + 2 - **Devil Fruitpedia**

Submitted by: **Phillipe Manio**

About this web app:
**Devil Fruitpedia is an encyclopedia of all of the Devil Fruits in the One Piece universe. From Zoans, to Paramecias, to Logias, discover all of the mysterious, yet powerful Devil Fruits the One Piece world has to offer!**

Time spent: **7** hours (Part 1)
Time spent: **4** hours (Part 2)

## Part 1 Functionality

### Required Features

The following **required** functionality is completed:

- [X] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [X] **The web app displays a title**
- [X] **The web app displays at least five unique list items, each with at least three displayed attributes (such as title, text, and image)**
- [X] **The user can click on each item in the list to see a detailed view of it, including all database fields**
  - [X] **Each detail view should be a unique endpoint, such as as `localhost:3000/bosses/crystalguardian` and `localhost:3000/mantislords`**
  - [X] *Note: When showing this feature in the video walkthrough, please show the unique URL for each detailed view. We will not be able to give points if we cannot see the implementation* 
- [X] **The web app serves an appropriate 404 page when no matching route is defined**
- [X] **The web app is styled using Picocss**

The following **optional** features are implemented:

- [ ] The web app displays items in a unique format, such as cards rather than lists or animated list items

The following **additional** features are implemented:

- [ ] List anything else that you added to improve the site's functionality!

## Part 2 Functionality

### Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->
- [X] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [X] **The web app is connected to a PostgreSQL database, with an appropriately structured database table for the list items**
  - [X] **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [X]  **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**


The following **optional** features are implemented:

- [ ] The user can search for items by a specific attribute

The following **additional** features are implemented:

- [ ] List anything else that you added to improve the site's functionality!


## Video Walkthrough

Here's a walkthrough of implemented required features:

https://youtu.be/u3HAjlabfmI (Project 1)
https://youtu.be/JzN19V901UM (Project 2)

## Notes

Describe any challenges encountered while building the app or any additional context you'd like to add.

**As I'm not as experienced in backend, I feel like there were a lot of steps and a high steep in the learning curve trying to build my first backend project. I feel like there were a lot of steps and structure to keep track of in order to keep our web page properly composed and displayed as much as possible. My web page isn't pretty as well, but the learning experience is the most important part here. I believe that with more experience and challenges, it will help me further understand how web pages and full stack applications, work under the hood, while transmitting data and routes to show the user in the frontend.**

**In Project 2, I didn't have as much difficulty as I did in Part 1. If I recall, a roadblock I was stuck in was figuring out how to return a detailed Devil Fruit info, after not needing to import the JSON data from the data/devil_fruits.js file anymore. I had to create a new function in the controllers/devil_fruits.js file, where I implement a function that gets a Devil Fruit by its ID through an SQL query. Although difficult, it helped me enhance my understanding the relationship between database queries/pooling and routing. Other than that, the basics of setting up a database and in Render as well, were not too bad as I thought it would be.**

## License

Copyright [2026] [Phillipe Manio]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.