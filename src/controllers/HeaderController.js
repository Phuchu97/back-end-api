
class HeaderController {
    
    headerhome(req, res) { 
        res.render('home')
    }
}

module.exports = new HeaderController;