import React from 'react';
import { Gift, DollarSign, Users, Trophy } from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: 'Cash Rewards',
    description: 'Earn attractive cash rewards for each successful referral'
  },
  {
    icon: Users,
    title: 'No Limit',
    description: 'Refer as many students as you want, no upper limit on earnings'
  },
  {
    icon: Trophy,
    title: 'Special Bonuses',
    description: 'Additional bonuses for high-performing referrers'
  },
  {
    icon: Gift,
    title: 'Welcome Kit',
    description: 'Receive a welcome kit with marketing materials'
  }
];

export default function ReferralProgram() {
  return (
    <div id="referral" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Referral Program</h2>
          <p className="mt-4 text-xl text-gray-600">
            Join our referral program and earn rewards for helping others achieve their study abroad dreams
          </p>
        </div>
        {/* Referal rules */}
        {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <benefit.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div> */}

        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Register</h4>
              <p className="text-gray-600">Sign up for our referral program</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Refer Students</h4>
              <p className="text-gray-600">Share your unique referral code</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Earn Rewards</h4>
              <p className="text-gray-600">Get paid for successful referrals</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700">
              Join Referral Program
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}