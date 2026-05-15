import { ArrowRight, Brain, Calendar, CheckCircle2, Clock, MapPin, TrendingUp, Users, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import { RegistrationModal } from './components/RegistrationModal';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxRTkwRkYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTEwdjJIMjR2LTJoMTJ6bTAtMTB2MkgyNHYtMmgxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-blue-500/10 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/20">
                  🎯 Exclusive Live Session
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-[#0D1B2A] leading-tight">
                How Smart Doctors Are Using AI to{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
                  3X Their Revenue
                </span>{' '}
                in 2025
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Join Umesh Yadav on <span className="font-semibold text-[#0D1B2A]">2nd November 2025, at 7 PM</span>, for an exclusive live session revealing how doctors across every specialization are transforming their revenue, patient reach, and reputation — using AI and social media.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={openModal} className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2">
                  Reserve Your Free Seat Now
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button className="text-[#0D1B2A] px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-200 hover:border-blue-500/30 hover:bg-blue-50/50 transition-all duration-300">
                  Learn More
                </button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-white"></div>
                  ))}
                </div>
                <p className="text-gray-600">
                  <span className="font-bold text-[#0D1B2A]">500+</span> doctors already registered
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Brain className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0D1B2A]">AI-Powered Marketing</p>
                      <p className="text-sm text-gray-600">40% increase in engagement</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <TrendingUp className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0D1B2A]">Revenue Growth</p>
                      <p className="text-sm text-gray-600">2-3x income increase</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Users className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0D1B2A]">Patient Reach</p>
                      <p className="text-sm text-gray-600">50% more patient flow</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D1B2A] mb-6">
              Why Most Doctors Are Struggling — Even When They're Great at What They Do
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed mb-12 text-center">
              You've built your expertise over years of study and practice — but in today's world, that's not enough. Here's the reality most doctors face:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Rising clinic costs and unpredictable patient flow',
                'Dependence on word-of-mouth for new patients',
                'No time to market or manage their online reputation',
                'Competitors growing faster — even with less experience'
              ].map((problem, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-gray-700 font-medium flex items-start gap-3">
                    <span className="text-red-500 text-2xl">✕</span>
                    {problem}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
              <p className="text-xl text-gray-700 leading-relaxed text-center">
                You didn't become a doctor to worry about marketing or algorithms. But the truth is —{' '}
                <span className="font-bold text-[#0D1B2A]">your patients are online, even when you're not.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Shift Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D1B2A] mb-6">
              The Medical Landscape Has Changed — And AI Is Leading the Revolution
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              In 2025, the most successful doctors aren't the ones with the biggest clinics — they're the ones who understand how to use AI and social media to scale smarter.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <Users className="text-white" size={32} />
              </div>
              <div className="text-5xl font-bold text-[#0D1B2A] mb-2">72%</div>
              <p className="text-gray-700 leading-relaxed">
                of patients check a doctor's online presence before booking an appointment
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-2xl border border-cyan-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <Brain className="text-white" size={32} />
              </div>
              <div className="text-5xl font-bold text-[#0D1B2A] mb-2">40%</div>
              <p className="text-gray-700 leading-relaxed">
                increase in patient engagement with AI-powered marketing tools
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="text-white" size={32} />
              </div>
              <div className="text-5xl font-bold text-[#0D1B2A] mb-2">2-3x</div>
              <p className="text-gray-700 leading-relaxed">
                more revenue for doctors with consistent social media visibility
              </p>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center">
            <p className="text-2xl font-semibold text-[#0D1B2A] leading-relaxed">
              Social media is no longer an option. It's the new waiting room — and your reputation starts there.
            </p>
          </div>
        </div>
      </section>

      {/* The Opportunity Section */}
      <section className="py-24 bg-gradient-to-br from-[#0D1B2A] to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Turn AI Into Your Practice's Most Profitable Assistant
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              In this 60-minute live session, Umesh Yadav will reveal:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            {[
              'How to use AI to automate patient inquiries & follow-ups',
              'How to attract high-quality patients through smart digital strategies',
              'How to build a strong personal brand that creates instant trust',
              'How to grow your income — without adding more hours to your day'
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors">
                <CheckCircle2 className="text-cyan-400 flex-shrink-0" size={24} />
                <p className="text-lg font-medium">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              This isn't about theory — it's about practical tools and methods that are working right now for doctors across India and beyond.
            </p>
            <button onClick={openModal} className="group bg-white text-[#0D1B2A] px-10 py-5 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
              <Zap className="text-cyan-500" size={24} />
              Reserve Your Free Seat Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* About the Mentor Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 border border-gray-100">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-6"></div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-[#0D1B2A] mb-2">Umesh Yadav</h3>
                  <p className="text-lg text-gray-600">Healthcare Innovation Mentor</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0D1B2A]">
                Meet Your Mentor — Umesh Yadav
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  A visionary mentor and a respected name among healthcare professionals, Umesh Yadav has been guiding doctors from all specializations to scale their practice and amplify their income using AI and modern marketing.
                </p>
                <p>
                  With years of mentoring experience and a deep understanding of how technology impacts healthcare, Umesh is on a mission to help doctors build profitable, future-ready practices.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-[#0D1B2A]">1000+</div>
                  <p className="text-sm text-gray-600 mt-1">Doctors Mentored</p>
                </div>
                <div className="text-center p-4 bg-cyan-50 rounded-xl">
                  <div className="text-3xl font-bold text-[#0D1B2A]">50+</div>
                  <p className="text-sm text-gray-600 mt-1">Specializations</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-[#0D1B2A]">5+</div>
                  <p className="text-sm text-gray-600 mt-1">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-cyan-50/30 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D1B2A] mb-4">
              Session Details
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="text-white" size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Date</p>
                    <p className="text-2xl font-bold text-[#0D1B2A]">2nd November 2025</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Time</p>
                    <p className="text-2xl font-bold text-[#0D1B2A]">7 PM (IST)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Mode</p>
                    <p className="text-2xl font-bold text-[#0D1B2A]">Live Online Session</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="text-white" size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Entry</p>
                    <p className="text-2xl font-bold text-[#0D1B2A]">Free (Limited Seats)</p>
                  </div>
                </div>
              </div>

              <button onClick={openModal} className="group w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-5 rounded-xl font-bold text-xl hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center gap-3">
                <Zap size={24} />
                Book Your Free Seat Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
              </button>

              <p className="text-center text-gray-500 mt-4">
                Limited seats available • Register now to secure your spot
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D1B2A] mb-6">
              Doctors Who Implemented These Strategies Have Seen Results Like…
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "I used AI tools recommended by Dr. Umesh Sir and grew my patient base by 50% in 3 months.",
                name: "Dr. Priya Sharma",
                specialty: "Dermatologist"
              },
              {
                quote: "Finally, I understand how social media can work for me, not against me. My revenue has doubled!",
                name: "Dr. Rajesh Kumar",
                specialty: "Orthopedic Surgeon"
              },
              {
                quote: "This session opened my eyes to what's truly possible as a modern doctor.",
                name: "Dr. Anjali Mehta",
                specialty: "Pediatrician"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-shadow">
                <div className="text-4xl text-blue-500 mb-4">"</div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full"></div>
                  <div>
                    <p className="font-bold text-[#0D1B2A]">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.specialty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0D1B2A] via-blue-900 to-[#0D1B2A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxRTkwRkYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2Mi1IMjR2LTJoMTJ6bTAtMTB2MkgyNHYtMmgxMnptMC0xMHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            The Future of Medicine Belongs to Doctors Who Adapt. Are You One of Them?
          </h2>

          <p className="text-xl text-blue-100 leading-relaxed mb-12 max-w-2xl mx-auto">
            AI and social media are not just trends — they're tools to take control of your growth. Don't miss this opportunity to learn directly from Umesh Yadav and revolutionize your practice.
          </p>

          <button onClick={openModal} className="group bg-white text-[#0D1B2A] px-12 py-6 rounded-xl font-bold text-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 mx-auto mb-6">
            <Zap className="text-cyan-500" size={28} />
            Join the Free Live Session — 2nd November, 7 PM
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={28} />
          </button>

          <p className="text-blue-200">
            No credit card required • 100% Free • Limited seats only
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D1B2A] text-white py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Ayush Saxena. All rights reserved.
          </p>
        </div>
      </footer>

      <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
