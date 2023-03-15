# Userpilot React Assessment

## Task

The task is to implement two screens based on the following designs:

- Users listing page: https://www.figma.com/file/yIGbpkGuFIgrPGwHzM8u4s/Untitled?node-id=1%3A475
  - Table contains users data
  - User Image
  - Full Name
  - Address
  - Email
  - Phone
  - Registration Date
  - Registration Time
  - Country and Postal Code
  - Table should be filtered by Gender and Nationality
  - Table contains server side pagination
- User details page: https://www.figma.com/file/kVp05SWrpumbl9zrRYobRs/Userpilot-Test?node-id=3%3A3
  - Clicking on table row should open a slideout popup and display the user information
  - This page is accessible by http://path-to-site/users/:userId, so if the user has the URL for that user, they should be able to see that slide out opened.

## Requirements

- Use React (Functional Components and Hooks)
- Use React-Router
- Use Material UI for UI Components
- Customize the theme using ThemeProviders and makeStyles hook
- Make components flexible/extendable so that other developers can use them in different screens with different styling/data/cases
