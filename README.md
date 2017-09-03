## Project Idea

Sports Fantasy Leagues. Would allow users to keep track of all of their Yahoo sports fantasy league rosters and games (NFL, NBA, MLB and NHL). Users will be able to set up their own leagues of 8-12 users. Although, I am not a sports fantasy league follower or player, I am sure there is a huge market for it and it is something that would be used and make life easier. Everything in one place.

## User stories

1. User is able to signup upon arriving to homepage by selecting the login/signup button and selecting signup tab on modal pop up.
2. User is able to login upon arriving to homepage by selecting the login/signup button and typing in username and corresponding user password on the defualt on load login modal tab.
3. User is able to pull their Yahoo Sports Fantasy Leagues rosters after athentication and should be stored and update every time the correspoding link gets clicked.
4. User is able to view statistics of Yahoo Sports Fantasy Leagues rosters and individual athletes.
5. User is able to store statistics to see averages of Yahoo Sports Fantasy Leagues rosters and individual athletes.

## Plan your tables and columns

I would need a table for user information, a table for user rosters in each sport covered (NFL, NBA, MLB and NHL) and a table for current day highlights. For the user table, it would have columns for authentication and user is allowed to add links to their favorite leagues.

## ERD (entity relationship diagram)

<img src="https://image.ibb.co/fpjSu5/ERD_full_stack_pro.png" alt="ERD_full_stack_pro" border="0">


## Routing

What routes will you need to be able to make the proper request to your API?

GET
1. /leagues leagues#index display all leagues rosters for user allows them so select by sport.
2. /leagues/<sport> leagues#<sport> display all league statistics for sport (NFL, NBA, MLB and NHL).
3. /leagues/stats leagues#stats display user win-loss record and stats
3. /games games#index to only show games currently in season
4. /games;game_types=full,pickem-team games#game_types full|pickem-team|pickem-group|pickem-team-list
5. /games;game_codes=nfl,mlb game#game_codes Any valid game codes
6. /games;seasons=2011,2012 game#seasons Any valid seasons


POST
1. /leagues/roster leagues#roster add your roster for each sports league.

PATCH

1. /leagues/roster leagues#updateroster update your roster for each sports league.


## 3rd Party APIs

Yahoo Sports Fantasy API https://developer.yahoo.com/fantasysports/guide/

## Wireframes

<img src="https://image.ibb.co/msjOE5/Wireframe_Rails_Project.png" alt="Wireframe_Rails_Project" border="0">


## Timetable

1. One day to set up the basic front end structure.
2. Two days to set up API and go over documentation for Yahoo Sports Fantasy API.
3. Three days to setup database and connect to API, Two days of work and One day to test and debug.
4. Two days to complete front end formatting and complete testing.
