export default function Home() {
  return (
    <div><nav className="bg-gray-900">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between py-4">
        <div>
          <a href="#" className="text-white text-2xl font-bold">Fitness 360</a>
        </div>
        <div className="hidden md:flex items-center">
          <a href="#" className="text-gray-300 hover:text-white px-4">Home</a>
          <a href="#" className="text-gray-300 hover:text-white px-4">About</a>
          <a href="#" className="text-gray-300 hover:text-white px-4">Classes</a>
          <a href="#" className="text-gray-300 hover:text-white px-4">Membership</a>
          <a href="#" className="text-gray-300 hover:text-white px-4">Contact</a>
          <a href="#" className="text-gray-300 hover:text-white px-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
          <title/>
          <g id="Complete"><g id="user">
          <g>
          <path d="M20,21V19a4,4,0,0,0-4-4H8a4,4,0,0,0-4,4v2" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          <circle cx="12" cy="7" fill="none" r="4" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          </g>
          </g></g>
          </svg>
          </a>
        </div>
        <div className="md:hidden">
         
          <button
            className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M3 6a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
  </div>
  )
}
