const Router = require('express')
const reviewsController = require('../controllers/reviewsController')
const router = new Router()

router.post('/:id', reviewsController.create)
router.get('/:id', reviewsController.getAll)



module.exports = router