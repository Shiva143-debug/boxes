const Box = (props) => {
  const { className, buttonText } = props;
  return <button className={`${className}`}>{buttonText}</button>;
};

const element = (
  <div className="container">
    <h1 className="heading">Boxes</h1>
    <div className="button-container">
      <Box buttonText="small" className="b1" />
      <Box buttonText="Medium" className="b2" />
      <Box buttonText="Large" className="b3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
