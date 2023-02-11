const getDataMovie = require('../data/movieList.json')

const Movies = {
    all: function() {
        return JSON.parse(fs.readFileSync(getDataMovie, 'utf8'))
    }
}

module.exports = Movies;