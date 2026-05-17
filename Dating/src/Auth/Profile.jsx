import React from 'react'
import { Heart } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate()

  return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-pink-500" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-black mb-2">Complete Your Profile</h1>
            <p className="text-gray-600">Tell others about yourself to get more matches</p>
          </div>

          <form className="space-y-5">
            <div className='grid gap-2'>
              <label className="text-md font-semibold text-black">Profile Picture</label>
              <input
                type="file"
                accept="image/*"
                className="border border-pink-200 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-md font-semibold text-black">Bio</label>
              <textarea
                placeholder="Tell others about yourself..."
                rows={4}
                className="border border-pink-200 rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-md font-semibold text-black">Age</label>
              <input
                type="number"
                placeholder="Your age"
                min="18"
                max="120"
                className="px-3 py-1 border border-pink-200 focus:ring-pink-500 focus:border-pink-500 rounded-lg h-10 text-black"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-md font-semibold text-black">Location</label>
              <input
                type="text"
                placeholder="City, Country"
                className="px-3 py-1 border border-pink-200 focus:ring-pink-500 focus:border-pink-500 rounded-lg h-10 text-black"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-md font-semibold text-black">Looking For</label>
              <input
                type="text"
                placeholder="What are you looking for?"
                className="px-3 py-1 border border-pink-200 focus:ring-pink-500 focus:border-pink-500 rounded-lg h-10 text-black"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                variant="outline"
                className="flex-1 border border-pink-300 text-black hover:bg-pink-50 h-11 rounded-lg font-semibold"
                onClick={() => navigate('/discover')}
              >
                Skip for Now
              </button>
              <button
                type="submit"
                className="flex-1 bg-pink-500 hover:bg-pink-600 text-white h-11 rounded-lg font-semibold"
              >
                Complete Setup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile