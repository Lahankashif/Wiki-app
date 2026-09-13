import jwt from 'jsonwebtoken'

export const optionalAuthMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization
        const authToken = authHeader?.split(' ')?.[1]

        if (authToken) {
            const decoded = jwt.verify(authToken, process.env.JWT_SECRET)
            req.user = { id: decoded.id, email: decoded.email }
        }
        next()
    } catch (err) {
        next()
    }
}