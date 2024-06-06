const shoes = require('../models/shoes.model');

const getAllShoes = async (_, res) => {
    try {
        const result = await shoes.find({});
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getShoes = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await shoes.findById(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createShoes = async (req, res) => {
    try {
        const result = await shoes.create(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateShoes = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await shoes.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).json({ message: "shoes not found" });
        }

        const updatedResult = await shoes.findById(id);
        res.status(200).json(updatedResult);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteShoes = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await shoes.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: "shoes not found" });
        }

        res.status(200).json({ message: "shoes deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllShoes,
    getShoes,
    createShoes,
    updateShoes,
    deleteShoes
};