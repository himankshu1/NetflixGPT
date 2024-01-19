# Project - NetflixGPT --> Netflix clone

# Features -->

- Login/Signup page (when not authenticated) - Landing page

  - Always redirect to the landing page when not authenticated
  - Login/Signup/Signout page
    - Validation using regex (validateForm.js)
    - Firebase for storing, authenticating data and deployment
    - Create appStore, userSlice, and wrapping the main app component with <Provider></Provider>
    - After successful signup or login, firebase will return an object with user details. Pass this detail to the Redux store to later use it anywhere in the app. --> appStore.js
    - To check the user logged in or not, use onAuthStateChanged() from firebase (configured in Body.jsx) and then redirect to the browse page
    - From Browse component, signing out the user with Sign out button with firebase signOut API
  - Language button

- Browse page (when authenticated)

  - Header
  - Main movie trailer - Title, description, play button, Trailer in background
  - Movie suggestions
    - Categories - Movies list on horizontal scroll

- Netflix GPT
  - Search bar
  - Movie suggestions
