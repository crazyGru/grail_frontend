import "./Button.css";

const Button = ({ onClick, children, className }) => {
  return (
    <button className={`get-started-button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
