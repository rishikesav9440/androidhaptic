import React from 'react';
import { Download, Smartphone, AlertCircle, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <div className="flex items-center space-x-3">
          <Zap className="w-8 h-8 text-red-500" />
          <h1 className="text-2xl font-bold">F1 Trailer Haptic Experience</h1>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            We've created an enhanced Android app that delivers realistic haptic sensations 
            synchronized with F1 trailer, bringing you closer to the action.
          </p>

          {/* Download Button */}
          <div className="mb-16">
            <a
              href="https://lemonchiffon-boar-262793.hostingersite.com/F1Haptic.apk"
              download
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25"
            >
              <Download className="w-6 h-6" />
              <span>Download APK</span>
            </a>
          </div>

          {/* Device Compatibility */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-gray-700">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Smartphone className="w-8 h-8 text-green-500" />
              <h3 className="text-2xl font-bold text-green-400">Device Compatibility</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-white mb-3">✅ Supported Devices</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Samsung devices</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>OnePlus devices</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Realme devices</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Oppo devices (limited testing)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">🔧 Recommended</h4>
                <p className="text-gray-300 mb-4">
                  Android 15 is recommended for optimal haptic performance and compatibility.
                </p>
              </div>
            </div>
          </div>

          {/* Usage Instructions */}
          <div className="bg-amber-900/20 border border-amber-700/50 rounded-3xl p-8">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <AlertCircle className="w-8 h-8 text-amber-500" />
              <h3 className="text-2xl font-bold text-amber-400">Important Usage Notes</h3>
            </div>
            <div className="text-gray-300 space-y-4">
              <p className="font-medium">
                For the best haptic experience, please follow these guidelines:
              </p>
              <ul className="space-y-3 text-left max-w-2xl mx-auto">
                <li className="flex items-start space-x-3">
                  <span className="text-amber-500 mt-1">⚠️</span>
                  <span>Do not forward or rewind the video during playback</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-amber-500 mt-1">⚠️</span>
                  <span>Avoid changing volume while haptics are active</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-amber-500 mt-1">💡</span>
                  <span>These actions may interfere with haptic feedback synchronization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 mt-16 border-t border-gray-800">
        <div className="text-center text-gray-500">
          <p>© 2024 F1 Haptic Experience. Enhanced racing sensations.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
