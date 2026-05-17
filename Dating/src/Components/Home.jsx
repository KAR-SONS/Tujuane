import React from 'react'
import { Link } from 'react-router-dom'
import { DollarSign, Heart,MessageSquare,Users } from 'lucide-react'

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
         {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white border-b border-pink-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
            Tujuane
          </div>
          <div className="flex gap-4">
            <Link to="/login">
              <button variant="outline" className="h-9 px-4 py-2 shadow-xs rounded-md border border-pink-500 text-black font-semibold hover:bg-pink-50">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="h-9 px-4 py-2 shadow-xs rounded-md bg-pink-700 hover:bg-pink-600 text-white font-semibold">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </header>

       {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold text-black leading-tight">
                Connect with<br />
                <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                  Real People
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Discover fascinating profiles and start meaningful conversations. Tujuane is where connections come alive.
              </p>
            </div>
            <Link to="/discover">
              <button size="lg" className="bg-pink-600 hover:bg-pink-600 text-white text-lg h-14 px-8 rounded-full">
                Start Chatting Now
              </button>
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-80 h-96 bg-gradient-to-br from-pink-100 to-pink-50 rounded-3xl shadow-2xl flex items-center justify-center">
              <div className="text-center">
                <Heart className="w-24 h-24 text-pink-500 mx-auto mb-4" />
                <p className="text-gray-600 text-lg font-semibold">Find Your Connection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Features Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Why Tujuane?</h2>
            <p className="text-xl text-gray-600">Everything you need to connect meaningfully</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-pink-100">
              <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Browse Profiles</h3>
              <p className="text-gray-600">
                Explore beautiful profiles of people looking for genuine connections. See who catches your eye.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-pink-100">
              <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <MessageSquare className="w-7 h-7 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Instant Chat</h3>
              <p className="text-gray-600">
                Start conversations directly from profiles. Connect instantly and chat without delays.
              </p>
            </div>

             {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-pink-100">
              <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="w-7 h-7 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Pricing</h3>
              <p className="text-gray-600">
                We give you free access to view profiles for 3 hours from signup then we ask you to verify your account for a <span className="font-bold">ONE TIME</span> payment of <span className="font-semibold text-green-600">Kes 99</span> to chat with other users
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-pink-100">
              <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Real Connections</h3>
              <p className="text-gray-600">
                Genuine profiles and meaningful chats. Build real connections that matter.
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Find Your Match?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of people already connecting on Tujuane
          </p>
          <Link to="/login">
            <button size="lg" className="bg-white hover:bg-gray-100 text-pink-600 font-bold text-lg h-14 px-8 rounded-full">
              Get Started for Free
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2026 Tujuane. Connect Authentically.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home