const express = require("express");
const { getAllClothes, getClothes, createClothes, updateClothes, deleteClothes } = require("../controllers/clothes.controller");

const router = express.Router();
router.get('/', getAllClothes);
router.get('/:id', getClothes);
router.post('/', createClothes);
router.patch('/:id', updateClothes);
router.delete('/:id', deleteClothes);


module.exports = router;