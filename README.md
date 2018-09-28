## Introduction

Movie listing challenge solution for Zone Digital.

https://github.com/zone/frontend/blob/master/challenges/movie-listings.md

## Architecture

* [https://material-ui.com/](Material-UI) for fast prototyping and a nice design
* React as base framework
* Redux for state management
* Redux-Thunk for async actions

The React app itself has the following structure

```
movie-listing-challenge/
  README.md
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
      GenreFilter.js
      MovieCard.js
      RatingFilter.js
      Spinner.js
    containers/
      App/
        App.js
      Filters/
        Filters.js
      Movies/
        Movies.js
    redux/
      middleware/
        apiMiddleware.js
      modules/
        filters/
          filters.reducer.js
        movies/
          genres.reducer.js
          movies.reducer.js
        index.js
    styles/
      index.css
    tests/
      - components, containers, redux tests
    utility/
      api.util.js
    index.js
```

#### Entry point
```
/src/index.js
```

This is the entry point of the application where we render the `/src/containers/App/App.js` component. The App component itself will trigger the `getMovies` and `getGenres` actions that will trigger TMDb API calls. <br />

The App component will then render `/src/containers/Movies/Movies.js` and `/src/containers/Filters/Filters.js` containers having movies and genres props passed. <br />

In the end, the Movies and Filters containers will render pure components from `/components` folder.

## How to run.

* Verify you have node installed (`node --version` to see output)
* Clone the project on your local machine
* Install dependencies using `npm install`
* Update `YOUR_API_KEY` from `/src/utility/api.util.js` with your TMDb API key
* Run `npm start` to start in development mode or `npm build` to build a production ready version


## Available scripts.


### `npm start`

Runs the app in development mode. <br />
Use [http://localhost:3000](http://localhost:3000) to see how it looks.


### `npm test`

It will run the basic tests that I've created for components, containers and redux modules. <br />
You should see the output in the console.

### `npm run build`

This step creates a production ready app inside the `build` folder.
