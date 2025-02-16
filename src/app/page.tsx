'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-900">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="p-6 text-center"
      >
        <h1 className="text-4xl font-bold text-purple-300">Srinjay Mitra</h1>
        <p className="text-xl text-purple-400">Software Developer</p>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-16"
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="relative"
        >
          <div className="w-72 h-72 relative rounded-2xl overflow-hidden border-4 border-purple-500 shadow-2xl">
            <Image
              src="/photo.jpeg"
              alt="Profile picture"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-purple-400 rounded-2xl -z-10" />
        </motion.div>
        <div className="text-center md:text-left max-w-xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-purple-300 mb-4">Hello! 👋</h2>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-purple-500/20">
              <p className="text-lg text-purple-200 leading-relaxed">
                I'm a passionate developer based in Burnaby, BC. I love creating beautiful 
                and functional web experiences that bring joy to users. When I'm not coding, 
                you can find me exploring the beautiful trails of British Columbia! ✨
              </p>
            </div>
            <motion.div 
              className="mt-8 flex gap-4 justify-center md:justify-start"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a 
                href="mailto:srinjaymitra918@gmail.com" 
                className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors shadow-lg"
              >
                Get in Touch
              </a>
              <a 
                href="https://portfolio.srinjaymitra.site/" 
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-purple-300 rounded-lg transition-colors shadow-lg border border-purple-500/20"
              >
                View Projects
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="container mx-auto px-6 py-12"
      >
        <h2 className="text-3xl font-bold text-purple-300 text-center mb-8">Education</h2>
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-bold text-purple-300">SFU</h3>
          <p className="text-purple-400">Bachelor of Computer Science</p>
          <p className="text-purple-500">2018 - 2022</p>
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-purple-300 mb-8">Let's Connect!</h2>
        <div className="flex justify-center gap-6">
          <motion.a
            whileHover={{ scale: 1.2, rotate: 10 }}
            href="mailto:srinjaymitra918@gmail.com"
            className="text-purple-300 text-3xl"
          >
            <FaEnvelope />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: -10 }}
            href="https://github.com/SrinjayMitra"
            className="text-purple-300 text-3xl"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 10 }}
            href="https://www.linkedin.com/in/srinjay-mitra/"
            className="text-purple-300 text-3xl"
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Srinjay Mitra. All rights reserved. ✨</p>
        </div>
      </footer>
    </div>
  )
}