import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";

export const home = (req, res) => {
  const movies = getMovies();
  return res.render("index", { pageTitle: "#Main", movies });
};

export const movieDetail = (req, res) => {
  const movies = getMovies();

  var matching = movies.filter((v) => {
    var tmp = [];
    if (Number(v.id) === Number(req.params.id)) {
      tmp.push(v);
      return tmp;
    }
  });
  var item = matching[0];

  let datailData = [
    {
      url: {
        name: "Url",
        desc: ""
      },
      title: {
        name: "Title",
        desc: ""
      },
      year: {
        name: "Year",
        desc: ""
      },
      rating: {
        name: "Rating",
        desc: ""
      },
      genres: {
        name: "Genres",
        desc: ""
      },
      summary: {
        name: "Summary",
        desc: ""
      },
      language: {
        name: "Language",
        desc: ""
      },
      date_uploaded: {
        name: "Uploaded Date",
        desc: ""
      }
    }
  ];

  for (const name of Object.keys(datailData[0])) {
    datailData[0][name]["desc"] = movies[0][name];
  }
  const postTbody = datailData[0];

  return res.render("detail", {
    pageTitle: `#Detail View`,
    item,
    postTbody
  });
};

export const filterMovie = (req, res) => {
  let movies = getMovies();

  const nvl = (param) => {
    if (param !== undefined && param !== "") {
      param = Number(param);
    } else {
      param = "";
    }
    return param;
  };

  const year = nvl(req.query.year);
  const rating = nvl(req.query.rating);
  const id = nvl(req.query.id);

  if (nvl(year)) {
    movies = getMovieByMinimumYear(year);
  } else if (nvl(rating)) {
    movies = getMovieByMinimumRating(rating);
  } else if (nvl(id)) {
    movies = getMovieById(id);
  }

  return res.render("filter", { pageTitle: "#Filter List", movies });
};
