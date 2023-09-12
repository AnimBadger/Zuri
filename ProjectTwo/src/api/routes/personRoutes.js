const express = require('express');
const router = express.Router();
const { createPerson, patchPerson, deletePerson, getPerson } = require('../controllers/personController');

router.route('/:id').get(getPerson)
;
router.route('/').post(createPerson)
;
router.route('/:id').patch(patchPerson)
;
router.route('/:id').delete(deletePerson)
;

module.exports = router;
