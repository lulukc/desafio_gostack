import HelpOrders from '../models/HelpOrders';
import Students from '../models/Students';

import Queue from '../../lib/queue';
import AnswerMail from '../jobs/answerMail';

class HelpOrdersController {
  async index(req, res) {
    const helpOrders = await HelpOrders.findAll({
      where: {
        answer_at: null,
      },
      include: [
        {
          model: Students,
          as: 'student',
          attributes: ['name'],
        },
      ],
    });

    return res.json(helpOrders);
  }

  async store(req, res) {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: 'Please ask the question' });
    }

    const helpOrders = await HelpOrders.create({
      student_id: req.params.id,
      question,
    });

    return res.json(helpOrders);
  }

  async update(req, res) {
    const helpOrders = await HelpOrders.findByPk(req.params.id, {
      include: [
        { model: Students, as: 'student', attributes: ['name', 'email'] },
      ],
    });
    helpOrders.answer = req.body.answer;
    helpOrders.answer_at = new Date();

    await helpOrders.save();

    await Queue.add(AnswerMail.key, { helpOrders });

    return res.json(helpOrders);
  }
}

export default new HelpOrdersController();
