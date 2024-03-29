import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

import { QueryClientProvider, QueryClient } from 'react-query'
const queryClient = new QueryClient()

it('renders homepage unchanged', () => {
  const { container } = render(
    <QueryClientProvider client={queryClient}>
        <Home />
    </QueryClientProvider>
  )
  expect(container).toMatchSnapshot()
});