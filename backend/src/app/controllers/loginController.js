import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Admin from '../models/Admin';
import authConfig from '../../config/auth';

class LoginController {
  async store(req, res) {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ where: { email: req.body.email } });

    if (!admin) {
      return res.status(401).json({ error: 'User not found' });
    }
    const compare = await bcrypt.compare(password, admin.password_hash);

    if (!compare) {
      return res.status(401).json({ erro: 'Password does not match' });
    }
    const { id, name } = admin;
    return res.json({
      admin: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.exprireIn,
      }),
    });
  }
}

export default new LoginController();
