# Green Foot

Hi there, welcome to Green Foot, a one-week project we built as part of graduating Dev Academy Aotearoa.
Green Foot is a game that helps you take small steps to protect the planet through fun, daily challenges.

![screenshot](/.docs/screenshot.png)

Let's go!

Note: Runs with node 16.15.0

```
npm install
npm run knex migrate:latest
npm run knex seed:run
npm run dev
```

# Pre-development planning and reflections

## MVP

* Create a Database  - Holds all the challenges that a user can choose from.
* All challenges will be displayed on a Home page.
* As a user I want to select a challenge from Home and add it to ‘My Challenges’ page.
* As a user I want to “DELETE’ a challenge from ‘My Challenges’ page.
* As a user I want to “Complete” a challenge this will add into the points system
* As a user I want to see my total Points and current Rank displayed on “My Challenges” page
* Styling and the look of this app is important to add to the Gamified feeling.
* Deployment of the app to Heroku

## Stretch
* Having a progress page to show distance to the next rank.
* Graph page to show history and progress?
* Ways to gamify it more - more illustrations and levels.
* Authentication - using Auth0

## Wireframes

<img width="867" alt="Screen Shot 2022-07-14 at 11 11 59 AM" src="https://user-images.githubusercontent.com/103092915/178852439-d95db84f-a5f2-4cc2-a034-0dc3d1efa6b6.png">

# Post-graduation reflections

## Work in progress / Easy things that can be done quickly
To be fixed: 
* currently the user can select the same challenge multiple times
* weird behaviour on refresh

To improve:
* rebuild the UI/UX, too many clicks atm!

## Big changes
* Implement Redux for a better state management solution
