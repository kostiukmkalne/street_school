import "./Button.scss";
import arrdown from '../../assets/arrowDown.svg';

export const Button = ({ onClick, children, cn }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`button ${cn}`}
    >
      {children}
      <img
        src={arrdown}
        className="batton__img"
        alt="arrow-down"
      />
    </button>
  );
};
