import jwt from 'jsonwebtoken';

// Check if the user is an admin
export const isAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return next({ status: 401, message: 'Authorization header missing' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== 'admin') {
      return next({ status: 403, message: 'You are not authorized to access this resource.' });
    }

    req.user = decoded;
    next();
  } catch (error) {
    next({ status: 403, message: 'Invalid or expired token' });
  }
};

// Authenticate JWT from cookies or headers
export const authenticateJWT = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

  if (!token) {
    return next({ status: 401, message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    next({ status: 403, message: 'Invalid or expired token' });
  }
};
