const bags = require('../models/bags.model');

const getAllBags = async (_, res) => {
    try {
        const result = await bags.find({});
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getBag = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await bags.findById(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createBag = async (req, res) => {
    try {
        const result = await bags.create(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateBag = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await bags.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).json({ message: "bags not found" });
        }

        const updatedResult = await bags.findById(id);
        res.status(200).json(updatedResult);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteBag = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await bags.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: "bags not found" });
        }

        res.status(200).json({ message: "bags deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllBags,
    getBag,
    createBag,
    updateBag,
    deleteBag
};