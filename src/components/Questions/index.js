import { v4 as uuidv4 } from 'uuid';
import SingleQuestion from '../SingleQuestion';
import './questions.css';

function Questions({ questions }) {
  return (
    <aside className="questions">
      <h2>Information</h2>
      {questions.map((question) => (
        <SingleQuestion
          key={uuidv4()}
          question={question.summary}
          answer={question.answer}
        />
      ))}
    </aside>
  );
}

export default Questions;
