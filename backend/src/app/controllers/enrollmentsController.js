import { addMonths, parseISO } from 'date-fns';
import Enrollments from '../models/Enrollments';
import Plans from '../models/Plans';
import Students from '../models/Students';

class SdutensdController {
  async store(req, res) {
    const { email_student, name_plan, start_date } = req.body;

    if (!name_plan || !start_date || !email_student) {
      return res.status(400).json({ error: 'Dados insificientes' });
    }

    const plans = await Plans.findOne({
      where: {
        title: name_plan,
      },
    });

    const students = await Students.findOne({
      where: {
        email: email_student,
      },
    });

    const parseDate = parseISO(start_date);
    const end_date = await addMonths(parseDate, plans.duration);

    const price = plans.price * plans.duration;

    const enrollment = await Enrollments.create({
      student_id: students.id,
      plan_id: plans.id,
      start_date: parseDate,
      end_date,
      price,
    });
    return res.json(enrollment);
  }
}

export default new SdutensdController();
