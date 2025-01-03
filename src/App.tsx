import './App.css';
import './tiptap.css';
import { lazy } from 'react';
import SuspenseWrapper from './Components/Widgets/SuspenseWrapper';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const InfoScreen = lazy(() => import('./Components/Screens/Info'));
const BlogScreen = lazy(() => import('./Components/Screens/Blog'));
const SingleInfoPageScreen = lazy(() => import('./Components/Screens/SingleInfoPage'));
const SingleBlogScreen = lazy(() => import('./Components/Screens/SingleBlog'));
const AboutScreen = lazy(() => import('./Components/Screens/About'));
const ContactScreen = lazy(() => import('./Components/Screens/Contact'));
const JobScreen = lazy(() => import('./Components/Screens/Job'));
const SingleJobScreen = lazy(() => import('./Components/Screens/SingleJob'));
const GuideScreen = lazy(() => import('./Components/Screens/Guide'));
const Redirect = lazy(() => import('./Components/Screens/Redirect'));
const MobileApp = lazy(() => import('./Components/Screens/MobileApp'));
import Header from './Components/Widgets/Header';
const Home = lazy(() => import('./Components/Screens/Home'));
const Footer = lazy(() => import('./Components/Widgets/Footer'));
import ErrorBoundary from './Components/Widgets/ErrorBoundary';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <ErrorBoundary callback={() => localStorage.clear()}>
      <Router>
        <Header />
        <Box pt={{ base: '4rem', lg: window.location.pathname === '/' ? '7rem' : '4rem' }}>
          <Routes>
            <Route
              path="/"
              index
              element={
                <SuspenseWrapper>
                  <Home />
                </SuspenseWrapper>
              }
            />
            <Route
              path="/info"
              element={
                <SuspenseWrapper>
                  <InfoScreen />
                </SuspenseWrapper>
              }
            />
            <Route
              path="/blogs"
              element={
                <SuspenseWrapper>
                  <BlogScreen />
                </SuspenseWrapper>
              }
            />
            <Route
              path="/info/:routeName"
              element={
                <SuspenseWrapper>
                  <SingleInfoPageScreen />
                </SuspenseWrapper>
              }
            />
            <Route
              path="/blogs/:routeName"
              element={
                <SuspenseWrapper>
                  <SingleBlogScreen />
                </SuspenseWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <SuspenseWrapper>
                  <AboutScreen />
                </SuspenseWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <SuspenseWrapper>
                  <ContactScreen />
                </SuspenseWrapper>
              }
            />
            <Route
              path="/career"
              element={
                <SuspenseWrapper>
                  <JobScreen />
                </SuspenseWrapper>
              }
            />
            <Route
              path="/career/:id"
              element={
                <SuspenseWrapper>
                  <SingleJobScreen />
                </SuspenseWrapper>
              }
            />
            <Route
              path="/guide/:routeName"
              element={
                <SuspenseWrapper>
                  <GuideScreen />
                </SuspenseWrapper>
              }
            />
            <Route
              path="/register"
              element={
                <SuspenseWrapper>
                  <Redirect url="https://shop.xedu.com.vn/register" />
                </SuspenseWrapper>
              }
            />
            <Route
              path="/procedures"
              element={
                <SuspenseWrapper>
                  <Redirect url="https://shop.xedu.com.vn/procedures" />
                </SuspenseWrapper>
              }
            />
            <Route
              path="/login"
              element={
                <SuspenseWrapper>
                  <Redirect url="https://shop.xedu.com.vn/" />
                </SuspenseWrapper>
              }
            />
            <Route
              path="/mobile-app"
              element={
                <SuspenseWrapper>
                  <MobileApp />
                </SuspenseWrapper>
              }
            />
            <Route
              path="*"
              element={
                <SuspenseWrapper>
                  <Redirect url="https://xedu.com.vn/" />
                </SuspenseWrapper>
              }
            />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
