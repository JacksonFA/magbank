import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { paths } from './paths'
import { Page } from '../components/Page'
import { Loading } from '../components/Shared/Loading/Loading'

const Home = lazy(() => import('../pages/Home'))
const Login = lazy(() => import('../pages/Login'))
const Dashboard = lazy(() => import('../pages/Dashboard'))
const PageNotFound = lazy(() => import('../pages/PageNotFound'))

const getRouteElement = (Component) => (
  <Suspense fallback={<Loading />}>
    <Page>
      <Component />
    </Page>
  </Suspense>
)

const routes = [
  { path: paths.HOME, element: getRouteElement(Home) },
  { path: paths.LOGIN, element: getRouteElement(Login) },
  { path: paths.DASHBOARD, element: getRouteElement(Dashboard) },
  { path: paths.NOT_FOUND, element: getRouteElement(PageNotFound) },
]

export const Router = createBrowserRouter(routes)
