"use client";

import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RunningText from "./components/RunningText";
import ParallaxSection from "./components/ParallaxSection";
import ScrollParallax from "./components/ScrollParallax";
import ThreeDCard from "./components/ThreeDCard";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="bg-white text-[#222] overflow-x-hidden">
      {/* Parallax Background Elements */}
      <div className="fixed inset-0 z-0">
        <ScrollParallax speed={0.1} className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.07) 1px, transparent 1px)
            `,
              backgroundSize: "120px 120px",
            }}
          ></div>
        </ScrollParallax>

        <ScrollParallax speed={0.2} className="absolute top-20 left-20">
          <div className="w-32 h-32 bg-green-400/10 rounded-full blur-xl"></div>
        </ScrollParallax>

        <ScrollParallax speed={0.15} className="absolute top-40 right-32">
          <div className="w-24 h-24 bg-green-200/10 rounded-full blur-xl"></div>
        </ScrollParallax>

        <ScrollParallax speed={0.25} className="absolute bottom-40 left-40">
          <div className="w-40 h-40 bg-green-400/10 rounded-full blur-xl"></div>
        </ScrollParallax>
      </div>

      <Navbar />

      <main className="bg-white text-[#222] overflow-x-hidden">
        {/* Hero Section with Parallax */}
        <ParallaxSection speed={0.3} direction="up" className="w-full">
          <section className="py-32 flex flex-col items-center justify-center text-center relative bg-gradient-to-b from-green-50/60 to-white">
            <div className="max-w-5xl w-full mx-auto px-4 md:px-8 flex flex-col items-center">
              {/* Main Headline */}
              <div className="text-5xl md:text-7xl font-black tracking-tight mb-8">
                <span className="text-[#222]">THE </span>
                <span className="text-green-500">ECOM</span>
                <span className="text-green-400"> MONKS</span>
              </div>
              {/* Subheadline */}
              <div className="text-2xl md:text-3xl text-green-500 font-semibold mb-6">
                Scale Commerce the Conscious Way
              </div>
              {/* Supporting Text */}
              <div className="text-2xl md:text-4xl text-[#222] font-extrabold mb-6">
                Your All-in-One Growth Engine for <span className="text-green-500">Amazon</span>, <span className="text-green-400">Flipkart</span> &amp; Beyond
              </div>
              <div className="text-lg md:text-xl text-green-400 mb-2">
                From listings to sales to followers — we don't just manage accounts.
              </div>
              <div className="text-lg md:text-xl font-bold text-[#222] mb-8">
                We build brands, scale visibility, and drive conversions across all channels.
              </div>
              {/* CTA */}
              <button className="group bg-gradient-to-r from-green-400 to-green-500 text-white font-black px-12 py-6 rounded-2xl text-2xl md:text-3xl hover:scale-110 hover:shadow-2xl hover:shadow-green-400/40 transition-all duration-500 transform hover:rotate-1 flex items-center mt-2 animate-bounce mb-4">
                <span className="group-hover:animate-bounce inline-block mr-4 text-3xl">👉</span>
                Get My Free Ecom Audit
              </button>
              <span className="text-green-400 text-lg max-w-2xl leading-relaxed mt-2">
                <span className="font-bold text-green-500">Full listing, ad & social review</span> + a 3-month growth blueprint. No fluff.
              </span>
            </div>
          </section>
        </ParallaxSection>

        {/* Sliding Banner: Marketplace Management */}
        <RunningText text="Marketplace Management • Ads • Creatives • Social • Influencers" speed={40} />

        {/* Pain Points Section */}
        <section className="py-32 relative z-10" id="services">
          <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
            <div className="w-full h-full bg-gradient-to-br from-green-400/10 to-green-500/10"></div>
          </div>
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            {/* Section Heading Full Width */}
            <h2 className="text-5xl md:text-6xl font-black mb-10 text-[#222] text-center w-full">
              THE PAIN – WHAT SELLERS ARE FACING TODAY
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-16">
              {/* Image - slightly wider */}
              <div className="md:w-6/12 w-full flex justify-center items-center">
                <img
                  src="/depressedseller.jpeg"
                  alt="Frustrated Seller"
                  className="rounded-3xl shadow-2xl object-cover max-h-[500px] w-full md:w-auto"
                  style={{ minHeight: 380, maxWidth: 540 }}
                />
              </div>
              {/* Text Content */}
              <div className="md:w-6/12 w-full flex flex-col items-center md:items-start">
                <h3 className="text-3xl md:text-4xl font-bold text-green-500 mb-4 text-center md:text-left">
                  The Brutal Truth About Most SPN Agencies?
                </h3>
                <p className="text-xl md:text-2xl text-green-500 mb-10 text-center md:text-left">
                  They're either overloaded, unaccountable, or both.
                </p>
                {/* Pain Cards */}
                <div className="flex flex-col sm:flex-row gap-6 w-full mb-10 justify-center md:justify-start">
                  {["My ads are running, but no one's watching them.", "My listings are live, but no one's clicking.", "My brand is good, but no one knows it exists."].map((pain, idx) => (
                    <div
                      key={idx}
                      className="flex-1 min-w-[220px] bg-gradient-to-br from-green-200/80 to-green-400/40 rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center text-center hover:animate-shake"
                    >
                      <span className="text-4xl mb-4">😩</span>
                      <span className="text-lg md:text-xl font-bold text-green-900 leading-snug">{pain}</span>
                    </div>
                  ))}
                </div>
                {/* Checklist */}
                <div className="w-full bg-green-50/60 rounded-2xl p-8 shadow flex flex-col">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                    {["SPNs are slow, overloaded, and full of templated work", "Ads are outsourced with no ROI clarity", "You get sold big promises — and delivered zero strategy.", "You're stuck between poor creatives, weak campaigns, and zero clarity.", "Social media? Untouched", "Influencers? Unused"].map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-green-500 text-2xl mt-1">✅</span>
                        <span className="text-base md:text-lg text-green-700 leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Final Note - centered, wide */}
            <div className="mt-14 p-10 mr-[30px] bg-green-400/20 rounded-3xl border-2 border-green-400/30 max-w-5xl mx-auto text-center">
              <p className="text-xl md:text-2xl font-bold">
                <span className="text-green-500">And let's not forget:</span><br/>
                <span className="text-[#222]">Most agencies don't care about your ROI. They just want retainers, not responsibility.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-32 relative z-10">
          <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
            <div className="w-full h-full bg-gradient-to-l from-green-500/10 to-green-400/10"></div>
          </div>
          <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center">
            <h2 className="text-6xl md:text-7xl font-black mb-8 text-[#222]">
              THE SOLUTION — WHAT MAKES US DIFFERENT
            </h2>
            <p className="text-2xl md:text-3xl text-green-500 mb-16 font-bold">
              We're The Ecom Monks – India's most proactive, full-stack growth agency for digital sellers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <ThreeDCard className="bg-green-400/40 p-10 rounded-3xl h-full flex flex-col items-center">
                <h3 className="text-3xl font-black text-green-500 mb-8">Others Do This</h3>
                <ul className="space-y-6 text-left">
                  {["One team, 100 clients", "Generic listings", "Ad reporting", "No accountability", "Zero brand building"].map((item, idx) => (
                    <li key={idx} className="text-xl text-[#222] flex items-center"><span className="mr-3">❌</span>{item}</li>
                  ))}
                </ul>
              </ThreeDCard>
              <ThreeDCard className="bg-green-900/40 p-10 rounded-3xl h-full flex flex-col items-center">
                <h3 className="text-3xl font-black text-green-500 mb-8">We Do This</h3>
                <ul className="space-y-6 text-left">
                  {["One team, 10 clients only per cohort", "Behavioral-copywriting + USP hooks", "Real-time dashboards + daily ROAS tuning", "Weekly calls + seller-first mindset", "Creative storytelling + influencer buzz"].map((item, idx) => (
                    <li key={idx} className="text-xl text-[#222] flex items-center"><span className="mr-3">✅</span>{item}</li>
                  ))}
                </ul>
              </ThreeDCard>
            </div>
            <div className="mt-12">
              <p className="text-2xl md:text-3xl font-bold text-green-500">
                Our mission is to make your brand feel heard — while actually delivering results that move the needle.
              </p>
            </div>
          </div>
        </section>

        {/* Frameworks Section */}
        <section className="py-32 relative z-10">
          <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
            <div className="w-full h-full bg-gradient-to-br from-green-500/10 to-green-400/10"></div>
          </div>
          <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center">
            <h2 className="text-6xl md:text-7xl font-black mb-8 text-[#222]">
              OUR UNIQUE FRAMEWORKS
            </h2>
            <p className="text-2xl md:text-3xl text-green-500 mb-16 font-bold">
              We don't "try." We follow science-backed frameworks that actually grow businesses.
            </p>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
                {[
                  {
                    icon: '🔁',
                    title: 'TRIPLE-T: Your Dedicated Growth Squad',
                    bullets: [
                      'Team → Not freelancers, but our in-house ecom soldiers',
                      'Tech → Helium10, AdReports, Keyword Trackers, Analytics',
                      "Touchpoint → Weekly calls. Monthly reviews. You'll never be ghosted.",
                    ],
                  },
                  {
                    icon: '🔍',
                    title: 'A.U.D.I.T SPRINT – The Seller Deep Dive',
                    intro: 'Delivered within 48 hours:',
                    bullets: [
                      'Listings graded with copy + keyword feedback',
                      'Ad report card (ROAS, ACOS, gaps)',
                      'Competitor brand breakdown',
                      'Inventory / return / rating risk zones',
                      'Platform expansion checklist',
                    ],
                  },
                  {
                    icon: '🧠',
                    title: 'AD SMARTSET – Our Media Buying Philosophy',
                    intro: "We don't run ads. We create compounding performance:",
                    bullets: [
                      'Meta + Amazon synergy',
                      'Auto | Exact | ASIN Target campaigns',
                      'Retargeting creatives with UGC',
                      'Cross-channel ROAS maximization',
                      'Zero-waste ad budget monitoring',
                    ],
                  },
                  {
                    icon: '✍️',
                    title: 'S.O.S Listings – Built to Sell, Not Just Exist',
                    bullets: [
                      'SEO-backed titles, CTA bullets, and lifestyle imagery',
                      'F-shaped scan copy',
                      'First-impression optimization',
                      'Infographics + emotional punch',
                      'A+ Pages → Brand Store → Video funneling',
                    ],
                  },
                  {
                    icon: '🌐',
                    title: 'INFLUENCE TO IMPACT – Influencer Engine',
                    bullets: [
                      'Influencer discovery for your category',
                      'Reel scripts, briefs, tracking links',
                      'UGC + PR-style content',
                      'Cross-use for ads & Amazon videos',
                    ],
                  },
                ].map((item, idx) => (
                  <ThreeDCard
                    key={item.title}
                    className="bg-white border border-green-200 rounded-3xl shadow-xl p-10 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400 animate-floatCard"
                  >
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h3 className="text-2xl font-black text-green-700 mb-4 text-center">{item.title}</h3>
                    {item.intro && <div className="text-green-700 font-semibold mb-2">{item.intro}</div>}
                    <ul className="w-full pl-6 text-left text-green-700 space-y-2 list-disc">
                      {item.bullets.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </ThreeDCard>
                ))}
              </div>
            </div>
          </div>
      </section>

        {/* Services Section */}
        <section className="py-32 relative z-10">
          <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
            <div className="w-full h-full bg-gradient-to-br from-green-400/10 to-green-500/10"></div>
          </div>
          <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center mt-[-40px]">
            <h2 className="text-6xl md:text-7xl font-black mb-14 text-[#222]">
              Our Services – Ecommerce<br/>
              Q-COMMERCE BRAND BUILDING
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                {
                  icon: '🛒',
                  title: 'Platform Management',
                  bullets: [
                    'Amazon | Flipkart | Myntra | Meesho | Nykaa | Jiomart',
                    'Listings, A+ Content, Videos, Reviews, Safe-T Claims, Category Approvals',
                  ],
                },
                {
                  icon: '📈',
                  title: 'Performance Marketing',
                  bullets: [
                    'Amazon Ads | Meta Ads | Google Ads | Flipkart PLA | DSP',
                    'Campaign Setup, ROAS Optimization, Bid Management, Keyword Harvesting',
                  ],
                },
                {
                  icon: '🎨',
                  title: 'Creative Studio',
                  bullets: [
                    'Infographics, Product Videos, A+ Pages',
                    'Brand Stores, Storytelling Assets, Seasonal Rebrands',
                  ],
                },
                {
                  icon: '⚡',
                  title: 'Quick Commerce Blitz',
                  bullets: [
                    'Blinkit | Zepto | Instamart',
                    'Product Card Design, Promo Planning, Brand Integration',
                  ],
                },
                {
                  icon: '📱',
                  title: 'Social Media Management',
                  bullets: [
                    'Personalized Social Post Packages',
                    'Product storytelling, visual feed planning, captions + scheduling',
                  ],
                },
                {
                  icon: '🤝',
                  title: 'Influencer Marketing',
                  bullets: [
                    'Shortlist + Collab + Script + Launch',
                    'Niche creators in beauty, health, food, fashion',
                    'Measurable traffic + UGC asset creation',
                  ],
                },
              ].map((item, idx) => (
                <ThreeDCard
                  key={item.title}
                  className="bg-white border border-green-200 rounded-3xl shadow-xl p-10 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400 animate-floatCard"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-black text-green-700 mb-4">{item.title}</h3>
                  <ul className="w-full pl-6 text-left text-green-700 space-y-2 list-disc list-inside">
                    {item.bullets.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </ThreeDCard>
              ))}
            </div>
          </div>
        </section>

        {/* Sliding Banner: Services */}
        <RunningText text="Platform Management • Performance Marketing • Creative Studio • Quick Commerce Blitz • Social Media • Influencer Marketing" speed={40} />

        {/* Proof/Case Studies Section */}
        <section className="py-32 relative z-10">
          <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
            <div className="w-full h-full bg-gradient-to-br from-green-500/10 to-green-400/10"></div>
          </div>
          <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center">
            <h2 className="text-6xl md:text-7xl font-black mb-8 text-[#222]">
              PROOF THAT BUILDS TRUST
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
              {[
                {
                  icon: '📊',
                  title: 'Fashion Accessories Brand',
                  bullets: [
                    'Increased ROAS from 3.4× → 10.3× in 150 days',
                    'Cut ACOS down to 19.2% while doubling Amazon revenue',
                  ],
                },
                {
                  icon: '🧼',
                  title: 'Heritage Skincare Brand',
                  bullets: [
                    'Boosted online ROAS to 4.2× while keeping ACOS stable across 3 platforms',
                  ],
                },
                {
                  icon: '🧘‍♀️',
                  title: 'Health & Wellness Brand',
                  bullets: [
                    'Drove a 30%+ revenue jump in 3 months via telemedicine + q-commerce integrations',
                  ],
                },
                {
                  icon: '🛒',
                  title: 'D2C Grocery Startup',
                  bullets: [
                    'Reduced CAC by 18% and doubled repeat order retention with funnel fixes',
                  ],
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-green-200 rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400 group"
                >
                  <span className="text-4xl mb-4">{item.icon}</span>
                  <div className="font-bold text-green-900 text-xl mb-2">{item.title}</div>
                  <ul className="text-green-700 text-base list-disc list-inside text-left">
                    {item.bullets.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Our Clients Say Section */}
        <section className="py-6 relative z-10">
          <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-[#222] flex items-center justify-center gap-3">
              <span className="text-green-500 text-3xl"></span> What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-white border border-green-200 rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400 animate-fade-in-up group">
                <span className="text-green-500 text-4xl mb-4 group-hover:scale-110 transition-transform">“</span>
                <span className="text-xl md:text-2xl text-green-900 italic leading-relaxed">They don't just manage our account — they think like owners.</span>
              </div>
              <div className="bg-white border border-green-200 rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400 animate-fade-in-up group">
                <span className="text-green-500 text-4xl mb-4 group-hover:scale-110 transition-transform">“</span>
                <span className="text-xl md:text-2xl text-green-900 italic leading-relaxed">Finally found an agency that listens, acts, and shows up every week.</span>
              </div>
              <div className="bg-white border border-green-200 rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400 animate-fade-in-up group">
                <span className="text-green-500 text-4xl mb-4 group-hover:scale-110 transition-transform">“</span>
                <span className="text-xl md:text-2xl text-green-900 italic leading-relaxed">They scaled us on Flipkart and Amazon while fixing our returns mess. Legends.</span>
              </div>
              <div className="bg-white border border-green-200 rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400 animate-fade-in-up group">
                <span className="text-green-500 text-4xl mb-4 group-hover:scale-110 transition-transform">“</span>
                <span className="text-xl md:text-2xl text-green-900 italic leading-relaxed">They don't just talk numbers — they explain, optimize, and own it.</span>
              </div>
              <div className="bg-white border border-green-200 rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400 animate-fade-in-up group">
                <span className="text-green-500 text-4xl mb-4 group-hover:scale-110 transition-transform">“</span>
                <span className="text-xl md:text-2xl text-green-900 italic leading-relaxed">Their ad dashboards are magic. So clean, so real.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Founder's Note Section */}
        <section className="py-16 relative z-10">
          <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
            <div className="w-full h-full bg-gradient-to-br from-green-400/10 to-green-500/10"></div>
          </div>
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-3xl border border-green-200 shadow-xl p-10 md:p-16" style={{ fontFamily: 'Inter, Montserrat, Segoe UI, Arial, sans-serif' }}>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-green-900 text-center">FOUNDER'S NOTE – FROM THE DESK OF ARUN R. CHACHAN</h2>
              <div className="space-y-6 text-lg md:text-xl text-green-900/90 leading-relaxed text-center">
                <p>I've been where you are — as a brand founder, a growth head, a seller.<br/>And honestly? Most service providers care more about ticking boxes than moving revenue.</p>
                <p>Founders and sellers were stuck with average agencies, lean SPNs, or freelancers who lacked ownership. That's why I created The Ecom Monks — to be the agency I wish existed when I was on the other side.</p>
                <p>We care. We respond. We're not perfect. But we're obsessed with performance, transparent with feedback, and driven by our clients' success. We bring 12+ years of data-backed, funnel-obsessed, copy-smart execution to the table. Whether you're doing ₹50,000 or ₹5 crore a month — we bring clarity, firepower, and a no-BS approach that actually gets results.</p>
              </div>
              <div className="mt-8 text-green-600 font-semibold italic text-xl md:text-2xl text-center">We won't just manage your account. We'll scale your success.</div>
              <div className="mt-8 text-right text-green-700 font-bold text-lg md:text-xl italic">— Arun R. Chachan, Founder, The Ecom Monks</div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-32 relative z-10">
          <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
            <div className="w-full h-full bg-gradient-to-br from-green-500/10 to-green-400/10"></div>
          </div>
          <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center">
            <h2 className="text-6xl md:text-7xl font-black mb-14 text-[#222]">
              OUR PRICING PLANS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              {[...Array(3)].map((_, idx) => (
                <ThreeDCard key={idx} className="bg-green-900 p-10 rounded-3xl flex flex-col items-center animate-borderPop">
                  <div className="text-4xl font-black text-green-500 mb-4">Starter? Launch Pad</div>
                  <div className="text-5xl font-black text-[#222] mb-4">₹6,999/mo</div>
                  <ul className="text-left text-green-500 space-y-2 mb-8">
                    <li>Amazon, Flipkart, Myntra, Meesho, Nykaa, Jiomart</li>
                    <li>Listings, A+ Content, Videos, Reviews</li>
                    <li>Safe-T Claims, Category Approvals</li>
                    </ul>
                  <button className="bg-gradient-to-r from-green-400 to-green-500 text-white font-black px-10 py-5 rounded-xl hover:scale-110 transition-all duration-500">Get Started</button>
                </ThreeDCard>
                      ))}
                  </div>
            <div className="mt-8 text-center text-green-400 text-xl">
              Or plug & play: Only Ads? Only Listing Fixes? Only Influencers? We've got à-la-carte options too.
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 relative z-20">
          <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none -z-10">
            <div className="w-full h-full bg-gradient-to-r from-green-400/30 via-green-900/80 to-green-500/30 blur-2xl"></div>
          </div>
          <div className="max-w-4xl mx-auto px-8 text-center flex flex-col items-center">
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-[#222] animate-fade-in-up">
              Ready to Scale Your Brand? <span className="text-green-500">Let's Talk.</span>
            </h2>
            <p className="text-2xl md:text-3xl text-green-500 mb-12 font-bold animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Book your free audit call and get a custom growth blueprint.
            </p>
            <button className="group bg-gradient-to-r from-green-400 to-green-500 text-white font-black px-16 py-8 rounded-2xl text-3xl md:text-4xl hover:scale-110 hover:shadow-2xl hover:shadow-green-400/40 transition-all duration-500 transform hover:rotate-1 flex items-center animate-bounce-in" style={{ animationDelay: '0.4s' }}>
              <span className="group-hover:animate-bounce inline-block mr-4 text-4xl">🚀</span>
              Get My Free Ecom Audit
            </button>
            <span className="text-green-700 text-xl max-w-xl leading-relaxed mt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <span className="font-bold text-green-800">No spam. No sales pitch.</span> <span className="font-normal text-green-700">Just actionable insights for your business.</span>
            </span>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
