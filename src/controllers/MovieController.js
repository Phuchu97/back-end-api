const movies = require('../data/movieList.json')
const media =  require('../data/mediaTypeList.json')
const genre =  require('../data/genreList.json')
const user =  require('../data/userToken.json')
const videos =  require('../data/videoList.json')
const jwt = require('jsonwebtoken');
const myToken = user[0].token;
// const connection = require('../config/db/connectDBxam')

// let getMovie = function(req, res) {
//     connection.query('SELECT * FROM `list`',function(err, results, next) {
//         if(err) console.log(err);
//         res.send({
//             message: 'Kết nối thành công',
//             data: results
//         })
//     })
// }

// Movie
const getListMovie = function(req, res) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Auth Error' });
    }
    let isCheckToken = token.includes(myToken)
    if(!isCheckToken) {
        res.status(500).send({ message: 'Invalid Token' });
    }
    let fillMovies;
    let keyword = req.body.keyword;
    let page = req.body.page;
    let page_size = req.body.page_size;
    let start_index = (page - 1) * page_size;
    let end_index = start_index + page_size;
    if(keyword !== '') {
        fillMovies = movies.filter(obj => {
            if(obj.title !== undefined) {
                let isCheckOverview = obj.overview.toLowerCase().includes(keyword.toLowerCase());
                return isCheckOverview;
            } else {
                return false;
            }
        });
    } else {
        fillMovies = movies
    }
    let results = fillMovies.slice(start_index, end_index);
    res.send({
        message: 'Kết nối thành công',
        data: results,
        page: page,
        page_number: page_size
    })
}

const getMoviesTrending = function(req, res) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Auth Error' });
    }
    let isCheckToken = token.includes(myToken)
    if(!isCheckToken) {
        res.status(500).send({ message: 'Invalid Token' });
    }
    let sortMovie = movies.sort((a,b) =>  {a.popularity - b.popularity})
    let page = +req.params.page;
    let page_size = +req.params.pageSize;
    let start_index = (page - 1) * page_size;
    let end_index = start_index + page_size;
    let results = sortMovie.slice(start_index, end_index);
    res.send({
        message: 'Kết nối thành công',
        data: results,
        page: page,
        page_number: page_size
    })
}


const getMoviesTopRating = function(req, res) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Auth Error' });
    }
    let isCheckToken = token.includes(myToken)
    if(!isCheckToken) {
        res.status(500).send({ message: 'Invalid Token' });
    }
    let sortMovie = movies.sort((a,b) =>  {a.vote_average - b.vote_average})
    let page = +req.params.page;
    let page_size = +req.params.pageSize;
    let start_index = (page - 1) * page_size;
    let end_index = start_index + page_size;
    let results = sortMovie.slice(start_index, end_index);
    res.send({
        message: 'Kết nối thành công',
        data: results,
        page: page,
        page_number: page_size
    })
}


const getMoviesGenre = function(req, res) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Auth Error' });
    }
    let isCheckToken = token.includes(myToken)
    if(!isCheckToken) {
        res.status(500).send({ message: 'Invalid Token' });
    }
    let page = +req.params.page;
    let id = +req.params.id;
    let page_size = +req.params.pageSize;
    let sortMovie;
    if(id === 0) {
        sortMovie = movies;
    } else {
        let isNotGenreUndefined = movies.filter(obj => obj.genre_ids !== undefined);
        sortMovie = isNotGenreUndefined.filter(obj => obj.genre_ids.includes(id) === true);
    }
    let start_index = (page - 1) * page_size;
    let end_index = start_index + page_size;
    let results = sortMovie.slice(start_index, end_index);
    res.send({
        message: 'Kết nối thành công, Genre',
        data: results,
        page: page,
        page_number: page_size
    })
}


// Endmovie

const getGenre = function(req, res) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Auth Error' });
    }
    let isCheckToken = token.includes(myToken)
    if(!isCheckToken) {
        res.status(500).send({ message: 'Invalid Token' });
    }
    res.send({
        message: 'Kết nối thành công',
        data: genre
    })
}

const getListMedia = function(req, res) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Auth Error' });
    }
    let isCheckToken = token.includes(myToken)
    if(!isCheckToken) {
        res.status(500).send({ message: 'Invalid Token' });
    }
    let page = req.params.page
    let pageNumber = req.params.pageSize

    moviesToFrontend = media.filter((obj, index) => index >= (page-1)*pageNumber && index <=page*pageNumber-1 )
    res.send({
        message: 'Kết nối thành công',
        data: moviesToFrontend,
        page: page,
        page_number: pageNumber
    })
}

const getListUser = function(req, res) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Auth Error' });
    }
    let isCheckToken = token.includes(myToken)
    if(!isCheckToken) {
        res.status(500).send({ message: 'Invalid Token' });
    }
    let page = req.params.page
    let pageNumber = req.params.pageSize

    moviesToFrontend = user.filter((obj, index) => index >= (page-1)*pageNumber && index <=page*pageNumber-1 )
    res.send({
        message: 'Kết nối thành công',
        data: moviesToFrontend,
        page: page,
        page_number: pageNumber
    })
}

const getVideo = function(req, res) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Auth Error' });
    }
    let isCheckToken = token.includes(myToken)
    if(!isCheckToken) {
        res.status(500).send({ message: 'Invalid Token' });
    }
    let id = +req.params.id
    moviesToFrontend = videos.find((obj) =>  obj.id == id);
    if(id) {
        if(moviesToFrontend) {
            let getVideoWithOfficialAndSite = moviesToFrontend.videos.filter(obj => obj.official === true && obj.site === "YouTube");
            if(getVideoWithOfficialAndSite.length > 1) {
                getVideoWithOfficialAndSite.sort((a, b) => {
                    return new Date(b.published_at) - new Date(a.published_at);
                })
            }
            console.log(getVideoWithOfficialAndSite[0]);
            res.send({
                message: 'Lây dữ liệu thành công',
                data: getVideoWithOfficialAndSite[0]
            })
        } else {
            res.send({
                message: 'Not found video',
                data: {}
            })
        }
    } else {
        res.error({
            message: `Not found ${id} parram`,
            data: {}
        })
    }
}
module.exports = {
    getListMovie,
    getListMedia,
    getMoviesGenre,
    getListUser,
    getGenre,
    getVideo,
    getMoviesTrending,
    getMoviesTopRating
};