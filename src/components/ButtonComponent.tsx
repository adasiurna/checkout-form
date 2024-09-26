import React from 'react';
import { Button } from 'reactstrap';

interface ButtonComponentProps {
  label: string;
  type?: "submit" | "button";
  color?: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ label, type = "submit", color = "success" }) => {
  return (
    <Button className="w-100 bg-green py-3 mt-2" type={type} color={color}>
      {label}
    </Button>
  );
};

export default ButtonComponent;
