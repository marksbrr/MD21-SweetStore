import { FC } from 'react';
import './button.scss';

type Props = {
  title: string;
  onClick?: () => void;
}

const Button: FC<Props> = ({ title, onClick }) => (
  <button
    className="button"
    onClick={onClick}
  >
    {title}
  </button>
);

export default Button;
