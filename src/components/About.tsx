import { Code, Brain, Database } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 underline underline-offset-8 decoration-blue-500">ABOUT ME</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-blue-100 scale-100 hover:scale-105 duration-200">
            <Code className="w-14 h-14 text-blue-600 mb-4 drop-shadow" />
            <h3 className="text-2xl font-bold mb-2 text-blue-800">Full-Stack Developer</h3>
            <p className="text-gray-700">
              Passionate about creating responsive and user-friendly web sites using MERN Stack technologies.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-blue-100 scale-100 hover:scale-105 duration-200">
            <Brain className="w-14 h-14 text-blue-600 mb-4 drop-shadow" />
            <h3 className="text-2xl font-bold mb-2 text-blue-800">Machine Learning</h3>
            <p className="text-gray-700">
              Exploring the fascinating world of AI and machine learning to build intelligent solutions.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-blue-100 scale-100 hover:scale-105 duration-200">
            <Database className="w-14 h-14 text-blue-600 mb-4 drop-shadow" />
            <h3 className="text-2xl font-bold mb-2 text-blue-800">DSA</h3>
            <p className="text-gray-700">
              Continuously improving my problem-solving skills through Data Structures and Algorithms.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-blue-100 scale-100 hover:scale-105 duration-200 flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Coding Profiles</h3>
            <a href="https://leetcode.com/u/incertIAN/" target="_blank" rel="noopener noreferrer" className="block w-full text-blue-600 font-semibold hover:underline mb-2">LeetCode Profile</a>
            <a href="https://www.geeksforgeeks.org/user/rakeshkbvfss/" target="_blank" rel="noopener noreferrer" className="block w-full text-blue-600 font-semibold hover:underline">GeeksForGeeks Profile</a>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm a final year Computer Science Engineering student with a passion for technology and innovation.
            My journey in tech has led me to explore various domains while focusing on building efficient
            and scalable solutions.
          </p>
        </div>
      </div>
    </section>
  );
}