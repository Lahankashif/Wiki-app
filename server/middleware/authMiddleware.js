import jwt from 'jsonwebtoken'
export const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization
        const authToken = authHeader?.split(' ')?.[1]

        if (!authToken) return res.status(401).json({ success: false, message: 'Access Token Required' })

        let jwtDecode = null;

        const decoded = jwt.verify(authToken, process.env.JWT_SECRET)
        req.user = { id: decoded.id, email: decoded.email }
        next()

    } catch (err) {
        return res.status(500).json({ success: false, message: err.message })
    }
}
