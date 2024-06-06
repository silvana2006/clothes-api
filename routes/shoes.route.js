const express = require("express");
const { getAllShoes, getShoes, createShoes, updateShoes, deleteShoes } = require("../controllers/shoes.controller");

const router = express.Router();
router.get('/', getAllShoes);
router.get('/:id', getShoes);
router.post('/', createShoes);
router.patch('/:id', updateShoes);
router.delete('/:id', deleteShoes);


module.exports = router;