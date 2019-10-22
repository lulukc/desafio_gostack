import Admin from '../models/Admin';

class AdminController {
  async store(req, res) {
    const admin = await Admin.create(req.body);
    return res.json(admin);
  }
}

export default new AdminController();
