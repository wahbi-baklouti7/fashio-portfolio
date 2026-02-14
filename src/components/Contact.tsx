import React, { useState } from 'react';
import FadeIn from './ui/FadeIn';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="w-full bg-luxury-black py-32 px-6 md:px-12 lg:px-24 flex flex-col items-center">
      <FadeIn>
         <h2 className="font-serif text-3xl md:text-4xl text-luxury-offwhite mb-2 text-center">Inquiries</h2>
         <p className="text-luxury-muted text-xs tracking-widest uppercase mb-16 text-center">Open for commissions & collaborations</p>
      </FadeIn>

      <div className="w-full max-w-xl">
        {formState === 'success' ? (
          <FadeIn>
            <div className="text-center py-20 border border-luxury-divider bg-luxury-charcoal/10">
              <span className="text-2xl font-serif italic block mb-4">Message Sent</span>
              <p className="text-luxury-muted text-sm font-light">Thank you. I will respond shortly.</p>
              <button 
                onClick={() => setFormState('idle')}
                className="mt-8 text-xs uppercase tracking-widest border-b border-transparent hover:border-luxury-offwhite transition-all"
              >
                Send Another
              </button>
            </div>
          </FadeIn>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-12">
            <FadeIn delay={100}>
              <div className="relative group">
                <input 
                  type="text" 
                  required
                  placeholder=" "
                  className="block py-4 px-0 w-full text-sm text-luxury-offwhite bg-transparent border-0 border-b border-luxury-divider appearance-none focus:outline-none focus:ring-0 focus:border-luxury-offwhite peer transition-colors duration-300"
                />
                <label className="peer-focus:font-medium absolute text-sm text-luxury-muted duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-luxury-offwhite peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Name
                </label>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="relative group">
                <input 
                  type="email" 
                  required
                  placeholder=" "
                  className="block py-4 px-0 w-full text-sm text-luxury-offwhite bg-transparent border-0 border-b border-luxury-divider appearance-none focus:outline-none focus:ring-0 focus:border-luxury-offwhite peer transition-colors duration-300"
                />
                <label className="peer-focus:font-medium absolute text-sm text-luxury-muted duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-luxury-offwhite peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Email
                </label>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="relative group">
                <textarea 
                  required
                  rows={4}
                  placeholder=" "
                  className="block py-4 px-0 w-full text-sm text-luxury-offwhite bg-transparent border-0 border-b border-luxury-divider appearance-none focus:outline-none focus:ring-0 focus:border-luxury-offwhite peer transition-colors duration-300 resize-none"
                />
                <label className="peer-focus:font-medium absolute text-sm text-luxury-muted duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-luxury-offwhite peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Message
                </label>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="text-center mt-12">
                <button 
                  type="submit" 
                  disabled={formState === 'submitting'}
                  className="bg-luxury-offwhite text-luxury-black px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 disabled:opacity-50"
                >
                  {formState === 'submitting' ? 'Sending...' : 'Initiate Contact'}
                </button>
              </div>
            </FadeIn>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;