import { ButtonHTMLAttributes, ReactNode } from 'react';

interface InputProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, ...props }: InputProps) => {
  return (
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' {...props}>
      {children}
    </button>
  );
};
