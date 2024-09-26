import React from 'react';
import { Button } from 'reactstrap';

interface ButtonComponentProps {
  label: string;
  type?: "submit" | "button";
  color?: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ label, type = "submit", color = "primary" }) => {
  return (
    <Button type={type} color={color}>
      {label}
    </Button>
  );
};

export default ButtonComponent;
