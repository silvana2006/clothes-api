const express = require("express");
const { getAllBags, getBag, createBag, updateBag, deleteBag } = require("../controllers/bags.controller");

const router = express.Router();
router.get('/', getAllBags);
router.get('/:id', getBag);
router.post('/', createBag);
router.patch('/:id', updateBag);
router.delete('/:id', deleteBag);


module.exports = router;