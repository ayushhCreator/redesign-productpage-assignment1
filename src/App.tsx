// App.tsx
import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import sharedRoutes from './configs/routes.config/sharedRoutes' 

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {sharedRoutes.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              element={<route.component {...(route.meta || {})} />}
            />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App