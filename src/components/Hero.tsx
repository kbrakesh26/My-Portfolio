import React from 'react';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Hi, I'm <span className="text-blue-600">Rakesh Kumar</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              I am a computer science student with a solid background in Web Development (MERN Stack), DSA and ML. I am
very excited and looking to join opportunities as a fresher, eager to contribute and learn in a real-world industry.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/kbrakesh26"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/rakesh-kr-bind-a08aab24b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/roc_se06_23"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://x.com/Rocky_sep_11"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Twitter size={24} />
              </a>
            </div>
            <div className="mt-8">
              <a
                href="https://drive.google.com/file/d/1CZHuyZlSM8Rto9TDQ-_hsjxwnISWDNWt/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-block"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3"
              alt="Developer workspace"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}