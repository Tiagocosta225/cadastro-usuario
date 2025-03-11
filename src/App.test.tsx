import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Cadastro de Usuário link', () => {
  render(<App />);
  const linkElement = screen.getByText(/cadastro de usuário/i); // Texto correto
  expect(linkElement).toBeInTheDocument();
});

