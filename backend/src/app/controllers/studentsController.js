import * as Yup from 'yup';
import Students from '../models/Students';

class SdutensdController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      idade: Yup.string().required(),
      peso: Yup.string().required(),
      altura: Yup.string().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const student = await Students.create(req.body);
    return res.json(student);
  }
}

export default new SdutensdController();
