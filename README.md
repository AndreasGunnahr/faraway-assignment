# Demo application of SWAPI starwars API

### Assignment

- On the main page, display a list or character cards, add pagination to the list.
- On the main page should be implemented search or filtering of characters (depending on the chosen API).
- Implement a page with detailed information on the selected character.

Pros:

- Neat layout
- Using UI framework (Material, Ant, Bootstrap, etc.)
  As an additional task:
- Use Redux repository to work with data
- Edit character information locally without sending it to the server
- Tests

### Left out task's

A few places in the code have `NOTES:` which is connected to the following points:

- Update of local detail information was left out due to it feel redudent. The API didn't support update of character details, but I provided a RTK Query structure for how it would look like.
- More tests overall could have been added for sure (unit- and UI tests) but I didn't focus on that due to I only had yesterday to finish the assignment.

### Available Scripts

In the project directory, you can run:

#### `npm install`

To install all of the dependencis for the project

#### `npm start`

Runs the app in the development mode.<br /> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br /> You will also see any lint errors
in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br /> See the section
about
[running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.
