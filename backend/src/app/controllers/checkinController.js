import { subDays, parseISO } from 'date-fns';
import Checkins from '../schemas/checkins';
import Enrollments from '../models/Enrollments';

class CheckinController {
  async index(req, res) {
    const { date } = req.query;
    const currentDate = parseISO(date);
    const sevenDaysAgo = subDays(currentDate, 7);

    const checkins = await Checkins.find({
      student_id: req.params.id,
      checkins_date: {
        $gte: sevenDaysAgo,
        $lte: currentDate,
      },
    });

    return res.json(checkins);
  }

  async store(req, res) {
    const { id: student_id } = req.params;

    const enrollments = await Enrollments.findOne({
      where: {
        student_id,
      },
    });

    if (!enrollments) {
      return res.status(401).json({ error: 'unregistered student' });
    }

    const currentDate = new Date();
    const sevenDaysAgo = subDays(currentDate, 7);

    const countCheckins = await Checkins.find({
      student_id,
      createdAt: {
        $gte: sevenDaysAgo,
        $lte: currentDate,
      },
    }).countDocuments();

    if (countCheckins >= 5) {
      return res
        .status(401)
        .json({ error: 'cannot make entries more than 5 times' });
    }

    const checkins = await Checkins.create({
      student_id,
    });

    return res.json(checkins);
  }
}

export default new CheckinController();
