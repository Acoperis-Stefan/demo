import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';

const PageNotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center">
      <h1 className="text-7xl font-light text-muted-foreground">404</h1>
      <h2 className="text-2xl font-medium text-foreground mt-4">Pagina nu a fost găsită</h2>
      <button onClick={() => window.location.href = '/'} className="mt-6 px-6 py-2 bg-primary text-primary-foreground rounded-sm font-semibold">
        Înapoi Acasă
      </button>
    </div>
  </div>
);

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicii" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
