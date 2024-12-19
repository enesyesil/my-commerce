import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../prisma/prismaClient';
export const register = async (req, res) => {
    const { email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: { email, password: hashedPassword },
        });
        res.status(201).json({ message: 'User registered', user });
    }
    catch (error) {
        res.status(400).json({ message: 'User already exists' });
    }
};
export const login = async (req, res) => {
    const { email, password } = req.body;
    console.log("Login request received:", { email });
    try {
        const user = await prisma.user.findUnique({ where: { email } });
        console.log("User retrieved from database:", user);
        if (!user) {
            console.log(`User not found: ${email}`);
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        console.log(`Password match for ${email}:`, passwordMatch);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        console.log(`Generated token for ${email}: ${token}`);
        res.json({ token });
    }
    catch (error) {
        console.error("Error during login process:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
//# sourceMappingURL=authController.js.map