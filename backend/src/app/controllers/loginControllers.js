import jwt from 'jsonwebtoken';
import Admim from '../models/Admin';
import authConfig from '../../config/auth';

class LoginController {
  async store(req, res) {
    const { email, password } = req.body;
    const admin = Admim.findOne({ where: { email } });

    if (!admin) {
      return res.status(401).json({ error: 'User not found' });
    }
    if (!(await Admim.checkPassword(password))) {
      return res.status(401).json({ erro: 'Password does not match' });
    }
    const { id, name } = admin;
    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sing({ id }, authConfig.secret, {
        expiresIn: authConfig.exprireIn,
      }),
    });
  }
}

export default LoginController;
