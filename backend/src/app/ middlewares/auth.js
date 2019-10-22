import jwd from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.statu(401).json({ error: 'Token not provided' });
  }
  const [, token] = authHeader.split(' ');
  try {
    await promisify(jwd.verify)(token, authConfig.secret);
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
