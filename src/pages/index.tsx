import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

import HomePage from 'pages/HomePage'
import ManifestoPage from 'pages/ManifestoPage'
import Layout from 'pages/_layout'
import CollectionPage from './Collection'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route path='/collection' element={<CollectionPage />} />
          <Route path='/manifesto' element={<ManifestoPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='' element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
