import { Link } from 'react-router-dom'

const SubpageNavbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md py-4 px-6 shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-black">
          ANY <span className="italic font-light text-blue-400">SHOP</span>
        </Link>
      </div>
    </nav>
  )
}

export default SubpageNavbar