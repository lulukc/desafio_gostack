import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';

import { Container, QuestionsList, FormAnswer } from './styles';
import api from '~/services/api';

export default function Questions() {
  const [helpOrdes, setHelpOrdes] = useState([]);
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    async function getHelpOrdes() {
      const response = await api.get('help-orders');
      setHelpOrdes(response.data);
    }
    getHelpOrdes();
  }, []);

  function handleInputChange(e) {
    setAnswer(e.target.value);
  }
  async function handleSubmit(id) {
    const response = await api.put(`/help-orders/${id}`, { answer });
    if (response.data) {
      window.location.reload(false);
    }
  }

  return (
    <Container>
      <header>Pedido de auxílio</header>
      <QuestionsList>
        <thead>
          <tr>
            <th>Alunos</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {helpOrdes.map(helpOrde => (
            <tr key={helpOrde.id}>
              <td>{helpOrde.student.name}</td>
              <td>
                <Popup trigger={<button>Responder</button>} modal>
                  <FormAnswer
                    onSubmit={e => {
                      e.preventDefault();
                      handleSubmit(helpOrde.id);
                    }}
                  >
                    <strong>Pergunta do aluno</strong>
                    <p>{helpOrde.question} </p>
                    <strong>Sua resposta</strong>
                    <input
                      type="text"
                      placeholder="resposta..."
                      value={answer}
                      onChange={handleInputChange}
                    />
                    <button type="submit">Responder</button>
                  </FormAnswer>
                </Popup>
              </td>
            </tr>
          ))}
        </tbody>
      </QuestionsList>
    </Container>
  );
}
