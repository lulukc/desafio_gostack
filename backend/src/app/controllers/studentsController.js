import Stutends from '../models/Students';

class SdutensdController {
  async store(req, res) {
    const student = await Stutends.create(req.body);
    return res.json(student);
  }
}

export default new SdutensdController();
