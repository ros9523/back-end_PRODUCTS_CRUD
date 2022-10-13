const router = require('express').Router()

const productsServices = require('./products.services')
//This is refactorization

router.get('/', productsServices.getProducts)
router.post('/', productsServices.postProduct)


router.get('/:id', productsServices.getProductById)
router.delete('/:id', productsServices.deleteProducts)
router.patch('/:id', productsServices.patchProduct)
router.put('/:id', productsServices.putProduct)

module.exports= router


