const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const movieController = require('../controllers/MovieController')
let router = express.Router();


const initRoutes = (app) => {
  app.use(bodyParser.json())
  app.use(cors({
    origin: '*'
  }));
  app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
  }));
  router.post(`/movies/search`,movieController.getListMovie)
  router.get(`/movies/trending/page/:page/page_number/:pageSize`, cors(),movieController.getMoviesTrending)
  router.get(`/movies/top-rating/page/:page/page_number/:pageSize`, cors(),movieController.getMoviesTopRating)
  router.get(`/movies/discover/genre/:id/page/:page/page_number/:pageSize`, cors(),movieController.getMoviesGenre)
  
  router.get('/media/page/:page/page_number/:pageSize', cors(),movieController.getListMedia)
  router.get('/genre/genre-list', cors(),movieController.getGenre)
  router.get('/user/page/:page/page_number/:pageSize', cors(),movieController.getListUser)

  //Video Trailer
  router.get('/video/:id', cors(),movieController.getVideo)
  return app.use('/',router)
}

module.exports = initRoutes;
