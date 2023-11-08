import { useSelector } from "../../Types/redux/selector-type";

export const Button = ({
  onClick,
  name,
  style,
  children = null,
}: {
  onClick: () => void;
  name: string;
  style: object,
  children?: React.ReactNode;
}) => {
  const { button } = useSelector((state) => state.style.styleSheet);

  return (
    <>
      <button className={name} onClick={onClick} style={{...button.main, ...style}}>
        {children}
      </button>
    </>
  );
};

export const Container = ({
  name,
  style,
  children,
}: {
  name: string;
  style: object;
  children?: React.ReactNode;
}) => {
  const { container } = useSelector((state) => state.style.styleSheet);

  return (
    <>
      <div className={name} style={{...container.main, ...style}}>
        {children}
      </div>
    </>
  );
};
