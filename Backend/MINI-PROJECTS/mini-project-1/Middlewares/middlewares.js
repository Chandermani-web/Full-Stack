import jwt from 'jsonwebtoken';

export const isLoggedIN = (req, res, next) => {
    const token = req.cookies?.token;

    if (!token) return res.redirect("/login");
    try {
        const data = jwt.verify(token, "secret123"); // better: use process.env.JWT_SECRET
        req.user = data;
        next();
    } catch (err) {
        console.error(`JWT Error: ${err.message}`);
        return res.redirect("/login");
    }
};
