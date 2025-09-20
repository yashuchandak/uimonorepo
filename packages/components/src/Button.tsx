import React from 'react';

interface ButtonProps {
    label: string;
    onClick?: () => void; // Make onClick optional
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return <button onClick={onClick}>{label}</button>;
};