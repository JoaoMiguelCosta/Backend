"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getUsers = exports.updateUser = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, role } = req.body;
    try {
        const updatedUser = await userModel_1.default.findByIdAndUpdate(id, { name, email, role }, { new: true });
        res.json(updatedUser);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
};
exports.updateUser = updateUser;
const getUsers = async (_req, res) => {
    try {
        const users = await userModel_1.default.find();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
};
exports.getUsers = getUsers;
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await userModel_1.default.findByIdAndDelete(id);
        res.json({ message: 'User deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=userController.js.map