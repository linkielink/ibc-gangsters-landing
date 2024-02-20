import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

import CollectionPage from 'pages/CollectionPage'
import ManifestoPage from 'pages/ManifestoPage'
import Layout from 'pages/_layout'

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
          <Route path='/' element={<CollectionPage />} />
          <Route path='' element={<CollectionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
