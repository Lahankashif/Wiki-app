import bcrypt from 'bcryptjs';
import User from '../model/User.js';
import { generateToken } from '../utils/token.js';

export const registerUser = async (req, res, next) => {
    try {
        const { email, password, name } = req.body;
        if (!email || !password) return res.status(400).json({ message: 'Email and password required' });
        const existing = await User.findOne({ email })
        if (existing) return res.status(400).json({ message: 'email already exist' })
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);
        const user = await User.create({ name, email, password: hashed });


        res.status(201).json({
            id: user._id,
            name: user.name,
            email: user.email,
        })


    } catch (error) {
        next(err)
    }
}



export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'INVALID CREDentials' })
        const match = await bcrypt.compare(password, user.password)
        if (!match) return res.status(401).json({ message: 'invalid password' })
        res.json({
            id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        });
    } catch (error) {
        next(error)

    }


}




export const profileController = async (req, res) => {
    try {
        const userEmail = req.userEmail
        const user = await User.findOne(userEmail);
        delete user.password
        return res.status(200).json({ success: true, data: user })

    } catch (err) {
    return res.status(500).json({ success: false, message: err.message })
}
}