"use client";

import { useState } from "react";
import { Calculator, BookOpen, Brain, FileText, GraduationCap } from "lucide-react";

const MATHS_IMG = "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=400&q=80";
const ENGLISH_IMG = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80";
const REASONING_IMG = "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80";

const FREE_TESTS = [
  {
    id: "f1",
    subject: "Mathematics",
    title: "Maths Free Test",
    description: "Try a full-length mock test matching the school curriculum.",
    icon: Calculator,
    image: MATHS_IMG,
  },
  {
    id: "f2",
    subject: "Reasoning",
    title: "Reasoning Free Test",
    description: "Challenge your logic with a sample reasoning paper.",
    icon: Brain,
    image: REASONING_IMG,
  },
  {
    id: "f3",
    subject: "English",
    title: "English Free Test",
    description: "Assess reading and writing skills with our sample test.",
    icon: BookOpen,
    image: ENGLISH_IMG,
  },
];

const PAID_BUNDLES = [
  {
    id: "p1",
    subject: "Mathematics",
    title: "Maths Practice Pack A",
    description: "5 Full-length mock exams with detailed solutions.",
    price: "$49",
    icon: Calculator,
    iconBg: "bg-[#6366F1]/15",
    iconColor: "text-[#6366F1]",
    badgeBg: "bg-[#6366F1]",
    image: MATHS_IMG,
  },
  {
    id: "p2",
    subject: "Mathematics",
    title: "Maths Practice Pack B",
    description: "5 Advanced mock exams for extra practice.",
    price: "$49",
    icon: Calculator,
    iconBg: "bg-[#6366F1]/15",
    iconColor: "text-[#6366F1]",
    badgeBg: "bg-[#6366F1]",
    image: MATHS_IMG,
  },
  {
    id: "p3",
    subject: "Reasoning",
    title: "Reasoning Practice Pack A",
    description: "Comprehensive reasoning practice tests.",
    price: "$49",
    icon: Brain,
    iconBg: "bg-[#8B5CF6]/15",
    iconColor: "text-[#8B5CF6]",
    badgeBg: "bg-[#8B5CF6]",
    image: REASONING_IMG,
  },
  {
    id: "p4",
    subject: "Reasoning",
    title: "Reasoning Practice Pack B",
    description: "Advanced reasoning challenges.",
    price: "$49",
    icon: Brain,
    iconBg: "bg-[#8B5CF6]/15",
    iconColor: "text-[#8B5CF6]",
    badgeBg: "bg-[#8B5CF6]",
    image: REASONING_IMG,
  },
  {
    id: "p5",
    subject: "English",
    title: "English Practice Pack A",
    description: "Reading comprehension and language skills.",
    price: "$49",
    icon: BookOpen,
    iconBg: "bg-[#14B8A6]/15",
    iconColor: "text-[#14B8A6]",
    badgeBg: "bg-[#14B8A6]",
    image: ENGLISH_IMG,
  },
  {
    id: "p6",
    subject: "English",
    title: "English Practice Pack B",
    description: "Advanced literature and writing practice.",
    price: "$49",
    icon: BookOpen,
    iconBg: "bg-[#14B8A6]/15",
    iconColor: "text-[#14B8A6]",
    badgeBg: "bg-[#14B8A6]",
    image: ENGLISH_IMG,
  },
];

export default function CoursesPage() {
  const [selectedSubject, setSelectedSubject] = useState("All");

  const filteredPaid = PAID_BUNDLES.filter(course => {
    return selectedSubject === "All" || selectedSubject === "FREE" || course.subject === selectedSubject;
  });

  const filteredFree = FREE_TESTS.filter(course => {
    return selectedSubject === "All" || selectedSubject === "FREE" || course.subject === selectedSubject;
  });

  return (
    <div className="min-h-screen pt-[80px] bg-[--bg-base]">
      {/* Hero */}
      <div className="h-[220px] md:h-[300px] flex flex-col items-center justify-center bg-[--surface] border-b border-[--border-color] text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[--text-heading] mb-4">
          Choose Your Test Bundle
        </h1>
        <p className="text-lg text-[--text-body] max-w-2xl">
          Practice bundles designed to match school learning — with timed tests and clear performance insights.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-10 flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filter */}
        <aside className="w-full lg:w-[280px] shrink-0">
          <div className="bg-[--surface] p-6 rounded-2xl border border-[--border-color] shadow-sm sticky top-32">
            <h3 className="font-serif font-bold text-xl text-[--text-heading] mb-6">Filter Tests</h3>
            
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => setSelectedSubject("All")}
                className={`text-left px-4 py-2.5 rounded-xl font-medium transition-colors ${selectedSubject === "All" ? "bg-[--section-alt] text-[--text-heading]" : "text-[--text-body] hover:bg-[--section-alt]"}`}
              >
                All Subjects
              </button>
              <button 
                onClick={() => setSelectedSubject("FREE")}
                className={`text-left px-4 py-2.5 rounded-full font-semibold transition-colors ${selectedSubject === "FREE" ? "bg-[#6366F1] text-white" : "bg-[#6366F1]/10 text-[#6366F1] hover:bg-[#6366F1]/20"}`}
              >
                FREE Tests
              </button>
              <button 
                onClick={() => setSelectedSubject("Mathematics")}
                className={`text-left px-4 py-2.5 rounded-xl font-medium transition-colors ${selectedSubject === "Mathematics" ? "bg-[--section-alt] text-[--text-heading]" : "text-[--text-body] hover:bg-[--section-alt]"}`}
              >
                Mathematics
              </button>
              <button 
                onClick={() => setSelectedSubject("Reasoning")}
                className={`text-left px-4 py-2.5 rounded-xl font-medium transition-colors ${selectedSubject === "Reasoning" ? "bg-[--section-alt] text-[--text-heading]" : "text-[--text-body] hover:bg-[--section-alt]"}`}
              >
                Reasoning
              </button>
              <button 
                onClick={() => setSelectedSubject("English")}
                className={`text-left px-4 py-2.5 rounded-xl font-medium transition-colors ${selectedSubject === "English" ? "bg-[--section-alt] text-[--text-heading]" : "text-[--text-body] hover:bg-[--section-alt]"}`}
              >
                English
              </button>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <div className="w-full lg:flex-1">
          
          {/* Section 1: Free Tests */}
          {(selectedSubject === "All" || selectedSubject === "FREE" || filteredFree.length > 0) && (
            <div className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl font-serif font-bold text-[--text-heading] mb-2">Start with a Free Test</h2>
                <p className="text-[--text-muted]">See how the tests work before choosing a bundle.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredFree.map((course) => {
                  return (
                    <div key={course.id} className="relative bg-[--surface] border-2 border-[#6366F1] rounded-2xl flex flex-col min-h-[320px] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md overflow-hidden">
                      <div className="absolute top-3 left-3 z-10">
                        <span className="bg-[#6366F1] text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide shadow-sm">FREE</span>
                      </div>
                      
                      <div className="w-full h-44 relative">
                        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                      </div>
                      
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-serif font-bold text-[--text-heading] mb-2">{course.title}</h3>
                        <p className="text-[--text-body] text-sm mb-6 flex-grow">{course.description}</p>
                        
                        <button className="w-full py-2 rounded-full bg-[#6366F1] text-white font-medium hover:bg-indigo-600 transition-colors">
                          Start Free Test →
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Section 2: Paid Bundles */}
          {selectedSubject !== "FREE" && (
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-serif font-bold text-[--text-heading] mb-2">Choose a Test Bundle</h2>
                <p className="text-[--text-muted]">Practice bundles designed to match school learning — with timed tests and clear performance insights.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPaid.map((course) => {
                  const Icon = course.icon;
                  return (
                    <div key={course.id} className="bg-[--surface] rounded-2xl border border-[--border-color] shadow-sm flex flex-row overflow-hidden transition-all duration-200 hover:-translate-y-[3px] hover:shadow-md min-h-[220px]">
                      
                      {/* Image Left */}
                      <div className="w-2/5 relative h-full min-h-[220px]">
                        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                      </div>
                      
                      {/* Content Right */}
                      <div className="w-3/5 p-5 flex flex-col relative">
                        <div className="absolute top-5 right-5">
                          <span className={`${course.badgeBg} text-white text-xs font-semibold px-2.5 py-0.5 rounded-full`}>{course.subject}</span>
                        </div>

                        <div className={`w-10 h-10 rounded-xl ${course.iconBg} flex items-center justify-center ${course.iconColor} mb-3`}>
                          <Icon size={20} />
                        </div>
                        
                        <h3 className="text-xl font-serif font-bold text-[--text-heading] mb-2 pr-16">{course.title}</h3>
                        
                        <div className="flex items-center gap-3 text-[--text-muted] text-sm mb-3">
                          <div className="flex items-center gap-1.5"><FileText size={14} /> <span>5 Tests</span></div>
                          <span className="w-1 h-1 rounded-full bg-[--text-muted]/40"></span>
                          <div className="flex items-center gap-1.5"><GraduationCap size={14} /> <span>Year 6</span></div>
                        </div>

                        <div className="border-b border-[--border-color] my-3"></div>
                        
                        <p className="text-[--text-body] text-sm line-clamp-2 mb-4 flex-grow">{course.description}</p>
                        
                        <button className="text-[#14B8A6] font-medium text-sm hover:underline self-start mt-auto flex items-center gap-1">
                          View Bundle →
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}
