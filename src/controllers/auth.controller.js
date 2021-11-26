
// 1. Funciones para el signup
exports.getSignUp = (req, res) => {

    res.render("auth/signup")

}


// 2. Funciones para el logIn

exports.getLogin = (req, res) => {

    res.render("auth/login")

}
