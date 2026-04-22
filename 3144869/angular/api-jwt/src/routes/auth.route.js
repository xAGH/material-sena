const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

// Usuario fake para demo
const fakeUser = {
    id: 1,
    email: 'alejo@test.com',
    passwordHash: bcrypt.hashSync('123456', 10),
    name: 'Alejo',
};

// LOGIN
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            ok: false,
            message: 'Email y password son obligatorios',
        });
    }

    if (email !== fakeUser.email) {
        return res.status(401).json({
            ok: false,
            message: 'Credenciales inválidas',
        });
    }

    const isValidPassword = await bcrypt.compare(password, fakeUser.passwordHash);

    if (!isValidPassword) {
        return res.status(401).json({
            ok: false,
            message: 'Credenciales inválidas',
        });
    }

    const token = jwt.sign(
        {
            id: fakeUser.id,
            email: fakeUser.email,
            name: fakeUser.name,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '2h',
        }
    );

    return res.json({
        ok: true,
        token,
        user: {
            id: fakeUser.id,
            email: fakeUser.email,
            name: fakeUser.name,
        },
    });
});

// RUTA PROTEGIDA
router.get('/profile', authMiddleware, (req, res) => {
    return res.json({
        ok: true,
        message: 'Perfil obtenido correctamente',
        user: req.user,
    });
});

module.exports = router;