import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center justify-center px-6 md:px-12 py-12 md:py-20 overflow-hidden font-body bg-workable-bg">

      <div className="absolute top-24 left-12 w-3 h-3 bg-amber-400 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute bottom-24 left-1/4 w-4 h-4 bg-orange-400 rounded-full opacity-50"></div>
      <div className="absolute top-1/4 right-16 w-3 h-3 bg-teal-400 rounded-full opacity-60"></div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">

        <div className="text-center lg:text-left space-y-6 max-w-2xl mx-auto lg:mx-0 order-2 lg:order-1">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-workable-text-dark leading-[1.15] tracking-tight">
            Shape your career<br/> 
            Scale your <span className="text-workable-dark-green">dream team</span>
          </h1>

          <p className="text-base md:text-lg text-workable-text-muted font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Streamline your recruiting workflow, from sourcing to onboarding. Explore JobVista's smart tools designed to connect top-tier professionals with fast-growing companies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Link
              href="/jobs"
              className="w-full sm:w-auto btn bg-workable-primary hover:bg-workable-dark-green text-white border-none rounded-full px-8 min-h-0 h-12 flex items-center justify-center font-semibold tracking-wide transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Explore Jobs
            </Link>

            <Link
              href="/resources"
              className="w-full sm:w-auto btn btn-outline border-2 border-workable-dark-green text-workable-dark-green hover:bg-workable-dark-green hover:text-white hover:border-workable-dark-green rounded-full px-8 min-h-0 h-12 flex items-center justify-center font-semibold transition-all active:scale-95"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center relative h-[320px] md:h-[450px] w-full order-1 lg:order-2">
          <div className="absolute w-[280px] h-[280px] md:w-[420px] md:h-[420px] bg-workable-dark-green/10 rounded-[50%_40%_30%_70%_/_50%_60%_40%_60%] animate-[pulse_6s_infinite_alternate]"></div>

          <div className="relative w-[300px] h-[300px] md:w-[440px] md:h-[440px] bg-workable-text-dark rounded-[40%_60%_70%_30%_/_40%_40%_60%_60%] shadow-2xl overflow-hidden border-4 border-white flex items-center justify-center transition-all duration-700 hover:rounded-[60%_40%_50%_50%_/_50%_50%_50%_50%] group">
            <Image
              src="/hiring_pana.png"
              alt="JobVista Hiring Recruitment Illustration" fill
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-workable-dark-green/20 to-transparent pointer-events-none"></div>
          </div>
        </div>

      </div>
    </div>
  );
}