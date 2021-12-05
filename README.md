# tivelabs-leaderboard-challenge
## Get started

This project uses Tailwind to define the CSS classes for every component, to get all project's dependencies, run

```
$ npm install
```

To run this project you just need to run

```
$ npm start
```
## Behavior
The application will display a list of users sorted by their score. This table will also display information about the users' nationality and some other rankings. When the application first loads, it will update the users stats (time, level) if necessary, according to the instructions for this challenge.
## Exceptions
- While the current demo does not implement a cache strategy for loading the users' scores(due to time inconveniences), it does implement the methods describe in the challenge instructions while displaying them on screen.
- There is no other screen to display the curren user information, there is only one screen.
- The selected user for the application was chosen arbitrarily to be the user with the highest score and then be easy to spot.
## Data

The `usersData.js` file represents a fake database of users to show in the application.
### Users

Their information includes:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| userId                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| level          | String           | The user’s first name  and last name     |
| coins  | String           | The user's coins |
| time | String | The time the ser has been playing on the platform|
| country | String | The country the user is from|
| friends      | Array         |  The user's friends ids

