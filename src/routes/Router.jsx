import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import paths from './paths'
import { Page } from '../components/Page'
import { Loading } from '../components/Loading'

const Home = lazy(() => import('../pages/Home'))
const PageNotFound = lazy(() => import('../pages/PageNotFound'))
const Login = lazy(() => import('../pages/Login'))

const getRouteElement = (Component) => (
  <Suspense fallback={<Loading />}>
    <Page>
      <Component />
    </Page>
  </Suspense>
)

const routes = [
  { path: paths.HOME, element: getRouteElement(Home) },
  { path: paths.NOT_FOUND, element: getRouteElement(PageNotFound) },
  { path: paths.LOGIN, element: getRouteElement(Login) },
]

export const router = createBrowserRouter(routes)
