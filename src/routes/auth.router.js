// 1. IMPORTACIONES
const router = require("express").Router()

// (Destructuracion de objeto, retiro la propiedad y la meto en variables)
const { 
    getSignUp,
    getLogin
} = require("./../controllers/auth.controller")



// 2. RUTAS 

router.get("/signup", getSignUp)

router.get('/login', getLogin)



// 3. EXPORTS

module.exports = router

