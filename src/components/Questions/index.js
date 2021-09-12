import { v4 as uuidv4 } from 'uuid';

function Questions({ questions }) {
  return (
    <aside>
      <h2>Information</h2>
      {questions.map((question) => (
        <details key={uuidv4()}>
          <summary>{question.summary}</summary>
          {question.answer}
        </details>
      ))}
    </aside>
  );
}

export default Questions;
