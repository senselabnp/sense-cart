"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController = require("./controllers/auth.controller");
const welcomeController = require("./controllers/welcome.controller");
const router = (0, express_1.Router)();
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/', welcomeController.index);
exports.default = router;
//# sourceMappingURL=routes.js.map