import { subDays } from 'date-fns';
import Checkins from '../schemas/checkins';
import Enrollments from '../models/Enrollments';

class CheckinController {
  async index(req, res) {
    const checkins = await Checkins.find({
      student_id: req.params.id,
    }).sort('-createdAt');

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

    const checkinNumber = await Checkins.find({
      student_id,
    }).countDocuments();

    const checkins = await Checkins.create({
      student_id,
      checkin_Number: checkinNumber + 1,
    });

    return res.json(checkins);
  }
}

export default new CheckinController();
