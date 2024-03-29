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
    - Registered for TMDB API, configured the API and the authentication in constants.jsx and API call in Browse.jsx
    - Build now playing movie store and background movie trailer container with TMDB API and Youtube embedd with autoplay. Created custom hooks for movies with TMDB API
  - Movie suggestions
    - Categories - Movies list on horizontal scroll

- Netflix GPT

  - Search bar
  - Movie suggestions

- Bug Fixes and enhancement
  - Accessing browse page without authentication - Fixed (Using navigate() with onAuthStateChanged in HeaderLoggedIn)
  - Display name update just after signup/login - Fixed (Dispatching displayName to Redux store inside updateProfile in Login.jsx)
  - Unscubscribed to the onAuthStateChanged callback
