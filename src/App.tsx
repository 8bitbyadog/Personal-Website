import React from 'react'
import { motion } from 'framer-motion'
import Header from './components/layout/Header'
import PixelCompanion from './components/ui/PixelCompanion'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Header />
      <PixelCompanion />

      <main className="container mx-auto px-4 pt-24">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4 font-pixel text-yellow-400">
            Pixel Artist & Animator | Bringing Retro Worlds to Life
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Creating unique pixel art experiences and animations for games and digital media
          </p>
          <motion.button
            className="pixel-button text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
        </motion.section>

        {/* Portfolio Grid Section */}
        <section className="mt-24">
          <h3 className="text-3xl font-pixel text-center mb-12 text-yellow-400">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg pixel-border overflow-hidden">
                  <div className="w-full h-full bg-gaming-purple/30" />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <button className="pixel-button text-sm transform scale-90 hover:scale-100 transition-transform">
                    View Project
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App 