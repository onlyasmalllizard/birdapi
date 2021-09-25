function SingleQuestion({ question, answer }) {
  return (
    <details>
      <summary>{question}</summary>
      {answer}
    </details>
  );
}

export default SingleQuestion;
