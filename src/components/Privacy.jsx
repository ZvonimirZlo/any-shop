import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 font-sans">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mt-10">
        
        {/* Header Section */}
        <div className="bg-red-400 p-8 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-black tracking-tight drop-shadow-md">
            Privacy Policy
          </h1>
          <p className="text-blue-100 mt-2 font-medium italic">
            The "No-Data-Drama" Guarantee
          </p>
        </div>

        <div className="p-8 md:p-12">
          {/* TL;DR Alert Box */}
          <div className="mb-10 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <span className="font-bold text-blue-800 uppercase text-sm tracking-widest">TL;DR:</span>
            <p className="text-blue-900 mt-1 text-lg">
              We don't want your data, we don't want your money—we just want to show you that this <strong>'Add to Cart'</strong> button works perfectly.
            </p>
          </div>

          {/* Policy List */}
          <ol className="space-y-8">
            <li className="flex gap-4">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold">1</span>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Information We "Collect"</h3>
                <p className="text-gray-600 leading-relaxed">
                  Any data entered on this site (such as names in the checkout simulation) 
                  is used solely to demonstrate frontend functionality. 
                  We <strong>do not</strong> store this data in a permanent database.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold">2</span>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Third-Party Services</h3>
                <p className="text-gray-600 leading-relaxed">
                  We use the <strong>FakeStore API</strong> to populate our product listings. 
                  We do not control how the API provider handles data, though no sensitive user info is ever sent to them.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold">3</span>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Local Storage</h3>
                <p className="text-gray-600 leading-relaxed">
                  We use browser <strong>Local Storage</strong> to save your cart progress so your items stay put if you refresh. 
                  You can wipe this data at any time by clearing your browser cache.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold">4</span>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Contact</h3>
                <p className="text-gray-600 leading-relaxed">
                  Curious about the code or found a bug? 
                  Check out the source on my <a href="https://github.com/ZvonimirZlo" className="text-blue-600 hover:underline font-medium">GitHub Profile</a>.
                </p>
              </div>
            </li>
          </ol>
        </div>

        <div className="bg-gray-50 px-8 py-4 text-center text-xs text-gray-400 border-t border-gray-100 italic">
          Disclaimer: This is a simulation. Don't worry, your real wallet is safe here.
        </div>
      </div>
    </div>
  );
};

export default Privacy;