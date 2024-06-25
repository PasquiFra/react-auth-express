// import utils
import { Route, Routes } from "react-router-dom";
import { GlobalState } from './contexts/GlobalContext'
import { Auth } from './contexts/AuthContext'
import 'bootstrap/dist/css/bootstrap.min.css'

// import dei componenti
import DefaultLayout from "./layouts/DefaultLayout";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from './pages/HomePage'
import ShowPostPage from "./pages/ShowPostPage"
import PostsListPage from './pages/PostsListPage'
import CreatePost from './pages/CreatePost'
import SavePreviousPage from './pages/SavePrevPage.jsx';
import AuthPage from './pages/AuthPage.jsx'
import AuthUser from './components/authentication/authUser.jsx'

function App() {


  return (
    <>
      <GlobalState>
        <Auth>
          <Routes>

            <Route path="/" element={<DefaultLayout />}>

              <Route index element={<HomePage />} />

              <Route path="/posts" element={<PostsListPage />} />

              <Route path="auth">
                <Route path="login" element={<AuthPage />} ></Route>
                <Route path="register" element={<AuthPage />} ></Route>
              </Route>

            </Route>

            <Route path="/" element={
              <SavePreviousPage>
                <AuthUser>
                </AuthUser>
              </SavePreviousPage>
            }>
              <Route path="posts/create" element={<CreatePost />} />
              <Route path="posts/:slug" element={<ShowPostPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />

          </Routes>
        </Auth>
      </GlobalState >
    </>
  )
}

export default App
