# DMovies (Test Project)

![home screen](https://github.com/daniel0ar/orion-movies/blob/main/home-screen.png?raw=true)

## Description

This is a project for the job opening post on Fikatech - Orion as a React Frontend Developer.

## Installation

The project is built powered by Vite, with the React plugin and with styling by Tailwind CSS. It also uses JSON-Server to serve a json file as the database for the movies, using axios as the http request library.

Steps to install:
```bash
# install the dependencies
$ npm install

# install json-server globally
$ npm install -g json-server

# start json-server (movies API) on the correct port
json-server --watch db.json --port 3031

# start the app
$ npm run dev
```

Open the browser on http://localhost:5173/ and the app should be up!

## Credits

This projects was entirely done by me, Daniel Arroyo, and I have used tech from:

Vite: https://vitejs.dev/

JSON-Server: https://github.com/typicode/json-server

Styling Template: https://github.com/mazyar1128/tailwindcss-movie-dashboard

React Routing Based on Files: https://dev.to/franciscomendes10866/file-based-routing-using-vite-and-react-router-3fdo

## License

This is a test project, and belongs to Orion / Fikatech.