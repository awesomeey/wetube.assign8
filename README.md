# wetube.day10 (assignment 8)
Created with CodeSandbox
https://codesandbox.io/s/express-controller-blueprint-forked-3v2h0w?file=/src/movieController.js

# Default mongoDB data/function
```
import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";
```
- Moveis List

# Recap "Router"
- #Main : <code>const movies = getMovies();</code>   
- #Detail View :   
matching => movies.filter <code>Number(v.id) === Number(req.params.id)</code>   
datailData => for (const name of Object.keys(datailData[0])) <code>datailData[0][name]["desc"] = movies[0][name];</code>   
- #Filter List :   
req.query.${inputName in pug} <code>movies = getMovieByMinimumYear(year)</code>   
