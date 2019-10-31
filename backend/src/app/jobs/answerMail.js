import Mail from '../../lib/mail';

class AnswerMail {
  get key() {
    return 'AnswerMail';
  }

  async handle({ data }) {
    const { helpOrders } = data;
    console.log('email enviado');
    await Mail.sendMail({
      to: `${helpOrders.student.name} <${helpOrders.student.email}> `,
      subject: 'Resposta da sua pergunta',
      template: 'answers',
      context: {
        student: helpOrders.student.name,
        question: helpOrders.question,
        answer: helpOrders.answer,
      },
    });
  }
}
export default new AnswerMail();
