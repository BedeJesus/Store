const router  = require("express").Router()

const ItemController = require("../controllers/ItemController")

//midllewares
const verifyToken = require('../helpers/verify-token')
const {imageUpload} = require('../helpers/image-upload')

//routes
router.post('/create',verifyToken,imageUpload.array("images"),ItemController.create)
router.get('/',ItemController.getAll)
router.get('/myitems',verifyToken,ItemController.getAllUserItems)
router.get('/myrents',verifyToken,ItemController.getAllUserRent)
router.get('/:id',ItemController.getItemById)
router.delete('/:id',verifyToken,ItemController.removeItemById)
router.patch('/:id',verifyToken,imageUpload.array('images'),ItemController.updateItem)
router.patch('/rent/:id',verifyToken,ItemController.rent)
router.patch('/conclude/:id',verifyToken,ItemController.concludeRent)


module.exports = router


