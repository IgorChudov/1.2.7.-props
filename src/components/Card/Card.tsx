import { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
};

const Card = ({ title, children }: CardProps) => {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Card;
