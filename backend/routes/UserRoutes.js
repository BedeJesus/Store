const router = require('express').Router()
const userController = require('../controllers/UserController')

//middlewares
const verifyToken = require('../helpers/verify-token')
const {imageUpload} = require('../helpers/image-upload')

//match the UserController function to the HTTP request(get,post,put,delete)


router.post('/register',userController.register)
router.post('/login',userController.login)
router.get('/checkuser',userController.checkUser)
router.get('/teste',userController.teste)
router.get('/:id',userController.getUserById)
router.patch('/edit/:id',verifyToken, imageUpload.single("image"), userController.editUser)//route with a middleware
router.post('/forgot_password',userController.forgotPassword)
router.post('/reset_password',userController.resetPassword)



module.exports = router
