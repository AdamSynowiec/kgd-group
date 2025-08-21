import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

import HomePage from './components/pages/HomePage'
import Deweloper from './components/pages/Deweloper'
import Individual from './components/pages/Individual'

// Init AOS on first load
AOS.init({
  duration: 1000,
  once: true,
})

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const AnimatedRoutes = () => {
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }, [location])

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <HomePage />
            </motion.div>
          }
        />
        <Route
          path="/deweloper"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <Deweloper />
            </motion.div>
          }
        />
        <Route
          path="/indywidualna"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <Individual />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App
