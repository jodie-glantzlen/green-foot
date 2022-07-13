# Green Foot

## Getting Started

### From the Github UI
See the instructions [here](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) to use Github's feature to create a new repo from a template.

### From the command line

```
git clone https://github.com/dev-academy-challenges/boilerplate-fullstack [your-project-name]
cd [your-project-name]
npm install # to install dependencies
npm run dev # to start the dev server
```

You can find the server running on [http://localhost:3000](http://localhost:3000).

## Details

This repo includes:

* a single, simple API endpoint (`/api/v1/fruits`)
* a single React component (`<App />`)
* an example database module (`server/db/fruits.js`)
* an API client module (`client/apis/fruits.js`)
* configuration for Jest and testing library
* configuration for server-side debugging in VS Code
* a single client-side test (`client/components/App.test.js`)


# MVP

* Create a Database  - Holds all the challenges that a user can choose from.

* All challenges will be displayed on a Home page.

* As a user I want to select a challenge from Home and add it to ‘My Challenges’ page.

* As a user I want to “DELETE’ a challenge from ‘My Challenges’ page.

* As a user I want to “Complete” a challenge this will add into the points system

* As a user I want to see my total Points and current Rank displayed on “My Challenges” page

* Styling and the look of this app is important to add to the Gamified feeling.

* Deployment of the app to Heroku



Stretch
* Having a progress page to show distance to the next rank.
* Graph page to show history and progress.
* Ways to gamify it more - more illustrations and levels.
* Authentication - using Auth0


