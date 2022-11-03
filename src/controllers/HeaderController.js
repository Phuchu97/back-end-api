const Films = require('../models/films')
const Course = require('../models/Courses')

class HeaderController {
  headerhome(req, res) {
    Course.find({}, (err, films) => {
      if(!err) res.json(films);
      res.status(400).json({error: err})
    })
    // res.json({
    //   name: 'test'
    // })
  }
}

module.exports = new HeaderController();
