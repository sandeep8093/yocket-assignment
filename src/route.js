
const router = require('express').Router();
const apiController = require('./controller');


router.post('/capture', apiController.capture);
router.get('/vehicles', apiController.getVehicles);

router.get('/cities',apiController.getCities);
router.get('/cops',apiController.getCops);


module.exports = router
