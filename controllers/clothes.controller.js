const clothes = require('../models/clothes.model');

const getAllClothes = async (_, res) => {
    try {
        const result = await clothes.find({});
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getClothes = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await clothes.findById(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createClothes = async (req, res) => {
    try {
        const result = await clothes.create(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateClothes = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await clothes.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).json({ message: "clothes not found" });
        }

        const updatedResult = await clothes.findById(id);
        res.status(200).json(updatedResult);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteClothes = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await result.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: "clothes not found" });
        }

        res.status(200).json({ message: "clothes deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllClothes,
    getClothes,
    createClothes,
    updateClothes,
    deleteClothes
};