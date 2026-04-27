import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import MobileFrame from './components/layout/MobileFrame'
import { InterestsProvider } from './InterestsContext'
import FeedPage from './routes/FeedPage'
import AnalyzeModal from './routes/AnalyzeModal'
import ContentProfilePage from './routes/ContentProfilePage'
import BreakdownPage from './routes/BreakdownPage'
import SignalLikesPage from './routes/SignalLikesPage'
import SignalCommentsPage from './routes/SignalCommentsPage'
import SignalSocialPage from './routes/SignalSocialPage'
import SignalNegativePage from './routes/SignalNegativePage'
import EditInterestsPage from './routes/EditInterestsPage'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<FeedPage />} />
        <Route path="/analyze" element={<AnalyzeModal />} />
        <Route path="/profile" element={<ContentProfilePage />} />
        <Route path="/breakdown/:interestId" element={<BreakdownPage />} />
        <Route path="/breakdown/:interestId/likes" element={<SignalLikesPage />} />
        <Route path="/breakdown/:interestId/comments" element={<SignalCommentsPage />} />
        <Route path="/breakdown/:interestId/social" element={<SignalSocialPage />} />
        <Route path="/breakdown/:interestId/negative" element={<SignalNegativePage />} />
        <Route path="/edit-interests" element={<EditInterestsPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <InterestsProvider>
        <MobileFrame>
          <AnimatedRoutes />
        </MobileFrame>
      </InterestsProvider>
    </BrowserRouter>
  )
}
