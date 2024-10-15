"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleMiddleware = void 0;
const roleMiddleware = (role) => {
    return (req, res, next) => {
        if (!req.user) {
            res.status(403).json({ message: 'Access denied, insufficient permissions' });
        }
        else if (req.user.role !== role) {
            res.status(403).json({ message: 'Access denied, insufficient permissions' });
        }
        else {
            next();
        }
    };
};
exports.roleMiddleware = roleMiddleware;
//# sourceMappingURL=roleMiddleware.js.map