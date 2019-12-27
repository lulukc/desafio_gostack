import * as Yup from 'yup';
import Plans from '../models/Plans';

class PlansController {
  async index(req, res) {
    const plans = await Plans.findAll();
    return res.json(plans);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number().required(),
      price: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const plans = await Plans.create(req.body);
    return res.json(plans);
  }

  async update(req, res) {
    const { id } = req.params;

    const plans = await Plans.update(req.body, {
      where: { id },
    });
    return res.json(plans);
  }

  async delete(req, res) {
    const { id } = req.params;

    const plans = await Plans.destroy({ where: { id } });
    return res.json(plans);
  }
}

export default new PlansController();
