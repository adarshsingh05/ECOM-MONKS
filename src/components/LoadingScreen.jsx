"use client"

import { useState, useEffect } from "react"
import {
  X,
  Zap,
  TrendingUp,
  Target,
  Crown,
  Rocket,
  Star,
  ShoppingCart,
  Award,
  Users,
  BarChart3,
  Sparkles,
} from "lucide-react"

const BRAND_MOMENTS = [
  {
    type: "logo-reveal",
    duration: 2500,
  },
  {
    type: "tagline",
    text: "Scale Commerce the Conscious Way",
    duration: 2000,
  },
  {
    type: "brand-promise",
    text: "India's Most Proactive Growth Agency",
    duration: 2000,
  },
  {
    type: "stats-burst",
    stats: [
      { value: "₹50L+", label: "Revenue Generated", icon: BarChart3 },
      { value: "500+", label: "Brands Scaled", icon: Users },
      { value: "10.3×", label: "Maximum ROAS", icon: TrendingUp },
    ],
    duration: 2500,
  },
  {
    type: "services-carousel",
    services: [
      { name: "Amazon Mastery", icon: ShoppingCart, color: "from-orange-400 to-orange-600" },
      { name: "Flipkart Excellence", icon: Target, color: "from-blue-400 to-blue-600" },
      { name: "Meta Ads Magic", icon: Zap, color: "from-purple-400 to-purple-600" },
      { name: "Creative Studio", icon: Sparkles, color: "from-pink-400 to-pink-600" },
      { name: "Influencer Engine", icon: Crown, color: "from-yellow-400 to-yellow-600" },
    ],
    duration: 3000,
  },
  {
    type: "transformation",
    before: "Struggling Sellers",
    after: "Marketplace Champions",
    duration: 2000,
  },
  {
    type: "final-reveal",
    text: "Ready to Dominate?",
    duration: 2000,
  },
]

const FLOATING_ELEMENTS = [
  { icon: ShoppingCart, delay: 0, position: { top: "15%", left: "10%" }, color: "text-orange-500" },
  { icon: TrendingUp, delay: 200, position: { top: "25%", right: "15%" }, color: "text-green-500" },
  { icon: Target, delay: 400, position: { bottom: "20%", left: "8%" }, color: "text-blue-500" },
  { icon: Crown, delay: 600, position: { bottom: "15%", right: "12%" }, color: "text-yellow-500" },
  { icon: Star, delay: 800, position: { top: "10%", right: "8%" }, color: "text-purple-500" },
  { icon: Rocket, delay: 1000, position: { bottom: "25%", left: "15%" }, color: "text-red-500" },
  { icon: Award, delay: 1200, position: { top: "20%", left: "20%" }, color: "text-indigo-500" },
  { icon: Sparkles, delay: 1400, position: { bottom: "30%", right: "20%" }, color: "text-pink-500" },
]

const PARTICLE_COLORS = [
  "bg-gradient-to-r from-green-400 to-blue-500",
  "bg-gradient-to-r from-purple-400 to-pink-500",
  "bg-gradient-to-r from-yellow-400 to-orange-500",
  "bg-gradient-to-r from-blue-400 to-indigo-500",
  "bg-gradient-to-r from-pink-400 to-red-500",
]

export default function StylishBrandLoader({ onComplete }) {
  const [currentMoment, setCurrentMoment] = useState(0)
  const [progress, setProgress] = useState(0)
  const [showExplosion, setShowExplosion] = useState(false)
  const [showFloating, setShowFloating] = useState(false)
  const [showParticles, setShowParticles] = useState(false)
  const [showMorphing, setShowMorphing] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)
  const [surprise, setSurprise] = useState(false)
  const [showRipple, setShowRipple] = useState(false)

  const handleSkip = () => {
    setFadeOut(true)
    setTimeout(() => {
      if (onComplete) onComplete()
    }, 300)
  }

  useEffect(() => {
    const totalDuration = BRAND_MOMENTS.reduce((sum, moment) => sum + moment.duration, 0)
    let elapsed = 0

    // Progress animation
    const progressInterval = setInterval(() => {
      elapsed += 50
      const newProgress = (elapsed / totalDuration) * 100
      setProgress(Math.min(newProgress, 100))

      if (newProgress >= 100) {
        clearInterval(progressInterval)
        setTimeout(() => {
          setFadeOut(true)
          setTimeout(() => {
            if (onComplete) onComplete()
          }, 800)
        }, 500)
      }
    }, 50)

    // Moment transitions with enhanced effects
    let momentTimer
    let currentIndex = 0

    const scheduleNextMoment = () => {
      if (currentIndex < BRAND_MOMENTS.length - 1) {
        momentTimer = setTimeout(() => {
          setCurrentMoment((prev) => prev + 1)
          currentIndex++

          // Trigger special effects based on moment
          switch (currentIndex) {
            case 1:
              setShowRipple(true)
              setTimeout(() => setShowRipple(false), 1500)
              break
            case 2:
              setShowParticles(true)
              setTimeout(() => setShowParticles(false), 2000)
              break
            case 3:
              setShowExplosion(true)
              setTimeout(() => setShowExplosion(false), 1500)
              break
            case 4:
              setShowFloating(true)
              setSurprise(true)
              setTimeout(() => setSurprise(false), 1000)
              break
            case 5:
              setShowMorphing(true)
              setTimeout(() => setShowMorphing(false), 1800)
              break
          }

          scheduleNextMoment()
        }, BRAND_MOMENTS[currentIndex].duration)
      }
    }

    scheduleNextMoment()

    return () => {
      clearInterval(progressInterval)
      if (momentTimer) clearTimeout(momentTimer)
    }
  }, [onComplete])

  const renderMoment = () => {
    const moment = BRAND_MOMENTS[currentMoment]

    switch (moment.type) {
      case "logo-reveal":
        return (
          <div className="text-center animate-logo-entrance">
            <div className="relative mb-8">
              <div className="w-40 h-40 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-2xl animate-logo-mega-glow relative overflow-hidden">
                {/* Logo image replacing EM */}
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-28 h-28 object-contain animate-logo-text relative z-10 mx-auto"
                />

                {/* Animated background pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-wave"></div>

                {/* Rotating ring */}
                <div className="absolute inset-2 border-4 border-white/30 rounded-full animate-spin-slow"></div>
              </div>

              {/* Enhanced sparkle effects */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-sparkle-enhanced"
                  style={{
                    top: `${50 + Math.sin((i * 30 * Math.PI) / 180) * 80}px`,
                    left: `${50 + Math.cos((i * 30 * Math.PI) / 180) * 80}%`,
                    animationDelay: `${i * 0.15}s`,
                  }}
                >
                  <Star className="w-4 h-4 text-yellow-400" />
                </div>
              ))}

              {/* Pulsing rings */}
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-green-400/30 rounded-full animate-pulse-ring"
                  style={{
                    width: `${160 + i * 40}px`,
                    height: `${160 + i * 40}px`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              ))}
            </div>

            <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 animate-text-reveal-enhanced bg-300% animate-gradient-shift">
              THE ECOM MONKS
            </h1>
          </div>
        )

      case "tagline":
        return (
          <div className="text-center animate-slide-up-enhanced">
            <div className="relative">
              <div className="text-3xl md:text-4xl font-bold text-gray-700 mb-6 animate-typewriter-enhanced overflow-hidden whitespace-nowrap mx-auto">
                {moment.text}
              </div>

              {/* Underline animation */}
              <div className="w-0 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto animate-underline-grow"></div>

              {/* Floating dots */}
              <div className="flex justify-center space-x-3 mt-6">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce-sequence"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )

      case "brand-promise":
        return (
          <div className="text-center animate-zoom-in">
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 animate-text-glow-enhanced">
                {moment.text}
              </h2>

              {/* Animated badge */}
              <div className="inline-flex items-center mt-6 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-xl animate-badge-float">
                <Crown className="w-6 h-6 text-white mr-2" />
                <span className="text-white font-bold">INDIA'S #1 CHOICE</span>
                <Sparkles className="w-6 h-6 text-white ml-2" />
              </div>
            </div>
          </div>
        )

      case "stats-burst":
        return (
          <div className="text-center animate-stats-burst-enhanced">
            <h2 className="text-3xl font-black text-gray-800 mb-10 animate-pulse-text-enhanced">
              🚀 PROVEN TRACK RECORD
            </h2>
            <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
              {moment.stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="animate-stat-pop-enhanced" style={{ animationDelay: `${index * 0.4}s` }}>
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200 transform hover:scale-110 transition-all duration-300 relative overflow-hidden">
                      {/* Background pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-blue-400/10 animate-bg-shift"></div>

                      <div className="relative z-10">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-4xl font-black text-gray-800 mb-2">{stat.value}</div>
                        <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )

      case "services-carousel":
        return (
          <div className="text-center animate-services-carousel">
            <h2 className="text-4xl font-bold text-gray-800 mb-10 animate-glow-text-enhanced">
              ⚡ FULL-SPECTRUM DOMINANCE
            </h2>
            <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
              {moment.services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className="animate-service-card-enhanced"
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    <div
                      className={`p-6 bg-gradient-to-br ${service.color} rounded-2xl shadow-xl text-white transform hover:scale-110 transition-all duration-300 min-w-[200px]`}
                    >
                      <div className="flex items-center justify-center mb-3">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg">{service.name}</h3>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )

      case "transformation":
        return (
          <div className="text-center animate-transformation">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12">THE TRANSFORMATION</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Before */}
                <div className="animate-slide-left">
                  <div className="p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl border-2 border-red-200">
                    <div className="text-6xl mb-4">😰</div>
                    <h3 className="text-xl font-bold text-red-700 mb-2">{moment.before}</h3>
                    <p className="text-red-600 text-sm">Low ROAS • Poor visibility • Wasted ad spend</p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="animate-arrow-morph">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-xl">
                      <Rocket className="w-8 h-8 text-white animate-bounce" />
                    </div>
                  </div>
                </div>

                {/* After */}
                <div className="animate-slide-right">
                  <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200">
                    <div className="text-6xl mb-4">🏆</div>
                    <h3 className="text-xl font-bold text-green-700 mb-2">{moment.after}</h3>
                    <p className="text-green-600 text-sm">10.3× ROAS • Top rankings • Profitable growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "final-reveal":
        return (
          <div className="text-center animate-final-reveal-enhanced">
            <div className="mb-10">
              <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 animate-rainbow-text-enhanced bg-400% animate-gradient-shift-fast">
                {moment.text}
              </h2>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white rounded-full shadow-2xl animate-cta-mega-pulse relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer-wave"></div>
                <Zap className="w-7 h-7 mr-4 animate-spin-pulse" />
                <span className="text-xl font-black relative z-10">GET FREE GROWTH AUDIT</span>
                <Rocket className="w-7 h-7 ml-4 animate-rocket-boost" />
              </div>

              <p className="text-lg text-gray-600 font-semibold animate-fade-in-delayed">
                Complete analysis + 90-day roadmap • No fluff, just results
              </p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br from-white via-green-50 via-blue-50 to-purple-50 flex items-center justify-center z-50 transition-all duration-800 overflow-hidden ${
        fadeOut ? "opacity-0 scale-95" : "opacity-100 scale-100"
      } ${surprise ? "animate-surprise-shake-enhanced" : ""}`}
    >
      {/* Enhanced Skip Button */}
      <button
        onClick={handleSkip}
        className="fixed top-6 right-6 z-50 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 group border border-gray-200"
      >
        <X className="w-6 h-6 text-gray-600 group-hover:text-red-500 transition-colors" />
        <span className="absolute -bottom-8 right-0 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-semibold">
          Skip Experience
        </span>
      </button>

      {/* Enhanced Progress Ring */}
      <div className="fixed top-6 left-6 z-50">
        <div className="relative w-20 h-20">
          <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="35" stroke="rgba(34, 197, 94, 0.1)" strokeWidth="6" fill="none" />
            <circle
              cx="40"
              cy="40"
              r="35"
              stroke="url(#progressGradient)"
              strokeWidth="6"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 35}`}
              strokeDashoffset={`${2 * Math.PI * 35 * (1 - progress / 100)}`}
              className="transition-all duration-300 ease-out"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(34, 197, 94)" />
                <stop offset="50%" stopColor="rgb(59, 130, 246)" />
                <stop offset="100%" stopColor="rgb(147, 51, 234)" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-black text-gray-700">{Math.round(progress)}%</span>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      {showFloating && (
        <>
          {FLOATING_ELEMENTS.map((element, index) => {
            const Icon = element.icon
            return (
              <div
                key={index}
                className="fixed animate-float-element-enhanced"
                style={{
                  ...element.position,
                  animationDelay: `${element.delay}ms`,
                }}
              >
                <div className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl border border-gray-200 hover:scale-110 transition-transform">
                  <Icon className={`w-8 h-8 ${element.color}`} />
                </div>
              </div>
            )
          })}
        </>
      )}

      {/* Enhanced Particle System */}
      {showParticles && (
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-3 h-3 rounded-full animate-particle-float ${PARTICLE_COLORS[i % PARTICLE_COLORS.length]}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Enhanced Explosion Effect */}
      {showExplosion && (
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className="absolute w-6 h-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full animate-explode-enhanced"
              style={{
                left: "50%",
                top: "50%",
                transform: `rotate(${i * 22.5}deg)`,
                animationDelay: `${i * 0.05}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Ripple Effect */}
      {showRipple && (
        <div className="fixed inset-0 pointer-events-none flex items-center justify-center">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute border-4 border-green-400/30 rounded-full animate-ripple-expand"
              style={{
                width: `${100 + i * 100}px`,
                height: `${100 + i * 100}px`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">{renderMoment()}</div>

      {/* Enhanced Background Animation */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Custom Enhanced Styles */}
      <style jsx>{`
        @keyframes logo-entrance {
          0% { transform: scale(0) rotate(-360deg); opacity: 0; }
          50% { transform: scale(1.3) rotate(-180deg); opacity: 0.8; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        
        @keyframes logo-mega-glow {
          0%, 100% { 
            box-shadow: 0 0 30px rgba(34, 197, 94, 0.6), 0 0 60px rgba(59, 130, 246, 0.4), 0 0 90px rgba(147, 51, 234, 0.2); 
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 0 60px rgba(34, 197, 94, 0.8), 0 0 120px rgba(59, 130, 246, 0.6), 0 0 180px rgba(147, 51, 234, 0.4); 
            transform: scale(1.05);
          }
        }
        
        @keyframes shimmer-wave {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes sparkle-enhanced {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          25% { opacity: 0.7; transform: scale(0.8) rotate(90deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
          75% { opacity: 0.7; transform: scale(0.9) rotate(270deg); }
        }
        
        @keyframes pulse-ring {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(1.4); opacity: 0; }
        }
        
        @keyframes text-reveal-enhanced {
          0% { opacity: 0; transform: translateY(50px) rotateX(90deg); }
          100% { opacity: 1; transform: translateY(0) rotateX(0deg); }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes gradient-shift-fast {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        
        @keyframes slide-up-enhanced {
          0% { opacity: 0; transform: translateY(80px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes typewriter-enhanced {
          0% { width: 0; }
          100% { width: 100%; }
        }
        
        @keyframes underline-grow {
          0% { width: 0; }
          100% { width: 200px; }
        }
        
        @keyframes bounce-sequence {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-15px); }
          60% { transform: translateY(-10px); }
        }
        
        @keyframes zoom-in {
          0% { opacity: 0; transform: scale(0.5); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes text-glow-enhanced {
          0%, 100% { text-shadow: 0 0 20px rgba(147, 51, 234, 0.5); }
          50% { text-shadow: 0 0 40px rgba(147, 51, 234, 0.8), 0 0 60px rgba(219, 39, 119, 0.4); }
        }
        
        @keyframes badge-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        
        @keyframes stats-burst-enhanced {
          0% { opacity: 0; transform: scale(0.3) rotate(-10deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        
        @keyframes stat-pop-enhanced {
          0% { opacity: 0; transform: translateY(50px) scale(0.7) rotate(-5deg); }
          100% { opacity: 1; transform: translateY(0) scale(1) rotate(0deg); }
        }
        
        @keyframes bg-shift {
          0%, 100% { transform: translateX(-10px) translateY(-10px); }
          50% { transform: translateX(10px) translateY(10px); }
        }
        
        @keyframes services-carousel {
          0% { opacity: 0; transform: translateX(-100px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes service-card-enhanced {
          0% { opacity: 0; transform: translateY(50px) rotateY(-30deg); }
          100% { opacity: 1; transform: translateY(0) rotateY(0deg); }
        }
        
        @keyframes transformation {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes slide-left {
          0% { opacity: 0; transform: translateX(-100px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-right {
          0% { opacity: 0; transform: translateX(100px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes arrow-morph {
          0% { transform: scale(0) rotate(-180deg); }
          50% { transform: scale(1.2) rotate(0deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        
        @keyframes final-reveal-enhanced {
          0% { opacity: 0; transform: scale(0.8) rotateY(-30deg); }
          100% { opacity: 1; transform: scale(1) rotateY(0deg); }
        }
        
        @keyframes cta-mega-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 30px rgba(34, 197, 94, 0.4); }
          50% { transform: scale(1.08); box-shadow: 0 0 60px rgba(34, 197, 94, 0.8); }
        }
        
        @keyframes spin-pulse {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.2); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes rocket-boost {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(10deg); }
          75% { transform: translateY(-4px) rotate(-5deg); }
        }
        
        @keyframes float-element-enhanced {
          0% { opacity: 0; transform: translateY(30px) scale(0) rotate(-180deg); }
          50% { opacity: 1; transform: translateY(-15px) scale(1.1) rotate(0deg); }
          100% { opacity: 1; transform: translateY(0) scale(1) rotate(0deg); }
        }
        
        @keyframes particle-float {
          0% { opacity: 0; transform: translateY(0) scale(0); }
          50% { opacity: 1; transform: translateY(-100px) scale(1); }
          100% { opacity: 0; transform: translateY(-200px) scale(0); }
        }
        
        @keyframes explode-enhanced {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
          100% { transform: translate(-50%, -50%) translateX(300px) scale(1.5); opacity: 0; }
        }
        
        @keyframes ripple-expand {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(4); opacity: 0; }
        }
        
        @keyframes surprise-shake-enhanced {
          0%, 100% { transform: translateX(0) translateY(0); }
          10% { transform: translateX(-8px) translateY(-4px); }
          20% { transform: translateX(8px) translateY(4px); }
          30% { transform: translateX(-6px) translateY(-2px); }
          40% { transform: translateX(6px) translateY(2px); }
          50% { transform: translateX(-4px) translateY(-1px); }
          60% { transform: translateX(4px) translateY(1px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }
        
        @keyframes fade-in-delayed {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .bg-300% { background-size: 300% 300%; }
        .bg-400% { background-size: 400% 400%; }
        
        .animate-logo-entrance { animation: logo-entrance 2s ease-out; }
        .animate-logo-mega-glow { animation: logo-mega-glow 3s ease-in-out infinite; }
        .animate-shimmer-wave { animation: shimmer-wave 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-sparkle-enhanced { animation: sparkle-enhanced 3s ease-in-out infinite; }
        .animate-pulse-ring { animation: pulse-ring 2s ease-out infinite; }
        .animate-text-reveal-enhanced { animation: text-reveal-enhanced 1.2s ease-out 1s both; }
        .animate-gradient-shift { animation: gradient-shift 4s ease-in-out infinite; }
        .animate-gradient-shift-fast { animation: gradient-shift-fast 2s linear infinite; }
        .animate-slide-up-enhanced { animation: slide-up-enhanced 1s ease-out; }
        .animate-typewriter-enhanced { animation: typewriter-enhanced 2s steps(40) both; }
        .animate-underline-grow { animation: underline-grow 1s ease-out 2s both; }
        .animate-bounce-sequence { animation: bounce-sequence 2s ease-in-out infinite; }
        .animate-zoom-in { animation: zoom-in 1s ease-out; }
        .animate-text-glow-enhanced { animation: text-glow-enhanced 3s ease-in-out infinite; }
        .animate-badge-float { animation: badge-float 3s ease-in-out infinite; }
        .animate-stats-burst-enhanced { animation: stats-burst-enhanced 1s ease-out; }
        .animate-stat-pop-enhanced { animation: stat-pop-enhanced 0.8s ease-out both; }
        .animate-bg-shift { animation: bg-shift 4s ease-in-out infinite; }
        .animate-services-carousel { animation: services-carousel 0.8s ease-out; }
        .animate-service-card-enhanced { animation: service-card-enhanced 0.8s ease-out both; }
        .animate-transformation { animation: transformation 1s ease-out; }
        .animate-slide-left { animation: slide-left 1s ease-out; }
        .animate-slide-right { animation: slide-right 1s ease-out; }
        .animate-arrow-morph { animation: arrow-morph 1.5s ease-out; }
        .animate-final-reveal-enhanced { animation: final-reveal-enhanced 1.2s ease-out; }
        .animate-cta-mega-pulse { animation: cta-mega-pulse 2.5s ease-in-out infinite; }
        .animate-spin-pulse { animation: spin-pulse 2s ease-in-out infinite; }
        .animate-rocket-boost { animation: rocket-boost 1.5s ease-in-out infinite; }
        .animate-float-element-enhanced { animation: float-element-enhanced 1.2s ease-out both; }
        .animate-particle-float { animation: particle-float linear both; }
        .animate-explode-enhanced { animation: explode-enhanced 1.5s ease-out both; }
        .animate-ripple-expand { animation: ripple-expand 2s ease-out both; }
        .animate-surprise-shake-enhanced { animation: surprise-shake-enhanced 0.8s ease-in-out; }
        .animate-pulse-slow { animation: pulse-slow 5s ease-in-out infinite; }
        .animate-fade-in-delayed { animation: fade-in-delayed 1s ease-out 0.5s both; }
        .animate-pulse-text-enhanced { animation: pulse-text 2s ease-in-out infinite; }
        .animate-glow-text-enhanced { animation: text-glow-enhanced 2.5s ease-in-out infinite; }
        .animate-logo-text { animation: logo-text 1.2s ease-out 0.8s both; }
        .animate-rainbow-text-enhanced { animation: text-glow-enhanced 3s ease-in-out infinite; }
      `}</style>
    </div>
  )
}
