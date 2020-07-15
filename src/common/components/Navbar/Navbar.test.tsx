import React from 'react';
import { render } from '@testing-library/react';
import NavBar from './NavBar';

test('categories are all visible', () => {
  const { getByText } = render(
    <NavBar
      activeCategory="general"
      setActiveCategory={() => {}}
    />
  )
  expect(getByText(/general/i)).toBeInTheDocument()
  expect(getByText(/business/i)).toBeInTheDocument()
  expect(getByText(/technology/i)).toBeInTheDocument()
  expect(getByText(/sports/i)).toBeInTheDocument()
  expect(getByText(/entertainment/i)).toBeInTheDocument()
  expect(getByText(/health/i)).toBeInTheDocument()
})
