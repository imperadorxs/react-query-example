import React from 'react';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import './App.css';
import { TodosPage } from './pages/TodosPage';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <TodosPage />
      </div>
    </QueryClientProvider>
  );
}

export default App;
