import React from 'react'
import { Link } from 'react-router-dom'
import { MessageSquare, UserCircle2 } from 'lucide-react'

const Discover = () => {
  return (
     <div className="min-h-screen bg-white">
        {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white border-b border-pink-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
            Tujuane
          </div>
          <div className="flex gap-4">
            <Link to="#">
              <button variant="outline" className="flex h-9 px-4 py-2 shadow-xs rounded-md border border-pink-500 text-black font-semibold hover:bg-pink-50">
                <MessageSquare className="w-5 h-5 mr-2" />
                Chats
              </button>
            </Link>
            <Link to="#">
              <button className="h-9 px-4">
                <UserCircle2 className='w-9 h-9 text-pink-700'/>
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Categories */}
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Discover People</h2>
          <p className="text-xl mb-4 opacity-90">
            Find your perfect match based on shared interests and values.What are you looking for?
          </p>
          <div className='flex gap-4'>
            <button variant="outline" className="flex h-9 px-2 py-2 shadow-xs rounded-md border border-pink-600 text-black hover:bg-pink-50">
                Dating
            </button>
          </div>
        </div>
      </div>

      </div>
  )
}

export default Discover