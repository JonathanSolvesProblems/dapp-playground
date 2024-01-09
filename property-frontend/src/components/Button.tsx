interface Props {
  text: string;
  color?: 'primary' | 'secondary' | 'danger';
  onClick: () => void;
}

const Button = ({ text, onClick, color = 'primary' }: Props) => {
  return (
    <button type="button" className={'btn btn-' + color} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
