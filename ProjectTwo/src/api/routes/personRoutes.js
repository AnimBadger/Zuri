const express = require('express');
const router = express.Router();
const { createPerson, updatePerson, deletePerson, getPerson } = require('../controllers/personController');

router.route('/:id').get(getPerson)
;
router.route('/').post(createPerson)
;
router.route('/:id').put(updatePerson)
;
router.route('/:id').delete(deletePerson)
;

module.exports = router;
