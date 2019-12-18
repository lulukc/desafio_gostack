import * as Yup from 'yup';
import Students from '../models/Students';
import Enrollments from '../models/Enrollments';

class SdutensdController {
  async index(req, res) {
    const student = await Students.findAll();
    return res.json(student);
  }

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

  async delete(req, res) {
    const { id } = req.params;

    await Enrollments.destroy({ where: { student_id: id } });

    const student = await Students.destroy({ where: { id } });
    return res.json(student);
  }

  async update(req, res) {
    const { id } = req.params;

    const students = await Students.update(req.body, {
      where: { id },
    });
    return res.json(students);
  }
}

export default new SdutensdController();
