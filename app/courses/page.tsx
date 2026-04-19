"use client";

import { useState } from "react";
import { Calculator, BookOpen, BrainCircuit, Code, Globe, Beaker, User, Clock, ChevronRight } from "lucide-react";

const ALL_COURSES = [
  {
    id: 1,
    title: "Advanced Mathematics",
    description: "Master calculus, algebra, and geometry through highly interactive challenges.",
    icon: Calculator,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    category: "Math",
    difficulty: "Advanced",
    duration: "12 Weeks",
    instructor: "Dr. Alan Turing"
  },
  {
    id: 2,
    title: "English Literature",
    description: "Enhance your critical reading by exploring classical and modern masterpieces.",
    icon: BookOpen,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    category: "Humanities",
    difficulty: "Beginner",
    duration: "8 Weeks",
    instructor: "Prof. Jane Austen"
  },
  {
    id: 3,
    title: "Critical Thinking",
    description: "Learn how to construct, deconstruct, and evaluate complex arguments.",
    icon: BrainCircuit,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    category: "Philosophy",
    difficulty: "Intermediate",
    duration: "6 Weeks",
    instructor: "Dr. Socrates"
  },
  {
    id: 4,
    title: "Web Development Bootcamp",
    description: "From HTML to advanced React. Build fully functional web applications.",
    icon: Code,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    category: "Technology",
    difficulty: "Beginner",
    duration: "16 Weeks",
    instructor: "Ada Lovelace"
  },
  {
    id: 5,
    title: "Global Economics",
    description: "Understand the financial systems that drive our modern globalized world.",
    icon: Globe,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
    category: "Social Sciences",
    difficulty: "Intermediate",
    duration: "10 Weeks",
    instructor: "Adam Smith"
  },
  {
    id: 6,
    title: "Organic Chemistry",
    description: "Dive deep into molecular structures and chemical reactions.",
    icon: Beaker,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    category: "Science",
    difficulty: "Advanced",
    duration: "14 Weeks",
    instructor: "Marie Curie"
  }
];

export default function CoursesPage() {
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  const filteredCourses = ALL_COURSES.filter(course => {
    return (selectedSubject === "All" || course.category === selectedSubject) &&
           (selectedDifficulty === "All" || course.difficulty === selectedDifficulty);
  });

  return (
    <div className="min-h-screen pt-[80px] bg-[--background]">
      {/* Hero */}
      <div className="h-[220px] md:h-[300px] flex flex-col items-center justify-center bg-[--alt-bg] border-b border-[--accent] text-center px-4 relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[--primary] animate-[fade-in-up_0.5s_ease-out] mb-4">
          Our Courses
        </h1>
        <p className="text-lg text-[--secondary] max-w-2xl animate-[fade-in-up_0.7s_ease-out]">
          Expand your horizons with our expertly crafted curricula designed to challenge and inspire.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-12 lg:py-20 flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Sidebar Filters (Desktop) / Dropdown (Mobile) */}
        <aside className="w-full lg:w-1/4 shrink-0">
          <div className="bg-[--background] p-6 lg:p-8 rounded-3xl border border-[--accent] sticky top-32 shadow-sm">
            <h3 className="font-serif font-bold text-xl text-[--primary] mb-8">Filter Courses</h3>
            
            {/* Subject Filter */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-[--secondary] mb-3 uppercase tracking-wider">Subject</label>
              <select 
                className="w-full p-3.5 bg-[--alt-bg] dark:bg-[--alt-bg] border-2 border-transparent rounded-xl outline-none focus:border-[--cta] transition-colors appearance-none cursor-pointer font-medium"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
              >
                <option value="All" className="bg-white text-black dark:bg-[#0A1F26] dark:text-white">All Subjects</option>
                <option value="Math" className="bg-white text-black dark:bg-[#0A1F26] dark:text-white">Math</option>
                <option value="Humanities" className="bg-white text-black dark:bg-[#0A1F26] dark:text-white">Humanities</option>
                <option value="Philosophy" className="bg-white text-black dark:bg-[#0A1F26] dark:text-white">Philosophy</option>
                <option value="Technology" className="bg-white text-black dark:bg-[#0A1F26] dark:text-white">Technology</option>
                <option value="Social Sciences" className="bg-white text-black dark:bg-[#0A1F26] dark:text-white">Social Sciences</option>
                <option value="Science" className="bg-white text-black dark:bg-[#0A1F26] dark:text-white">Science</option>
              </select>
            </div>

            {/* Difficulty Filter */}
            <div>
              <label className="block text-xs font-bold text-[--secondary] mb-3 uppercase tracking-wider">Difficulty</label>
              <select 
                className="w-full p-3.5 bg-[--alt-bg] dark:bg-[--alt-bg] border-2 border-transparent rounded-xl outline-none focus:border-[--cta] transition-colors appearance-none cursor-pointer font-medium"
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
              >
                <option value="All" className="bg-white text-black dark:bg-[#0A1F26] dark:text-white">All Levels</option>
                <option value="Beginner" className="bg-white text-black dark:bg-[#0A1F26] dark:text-white">Beginner</option>
                <option value="Intermediate" className="bg-white text-black dark:bg-[#0A1F26] dark:text-white">Intermediate</option>
                <option value="Advanced" className="bg-white text-black dark:bg-[#0A1F26] dark:text-white">Advanced</option>
              </select>
            </div>
            
            {(selectedSubject !== "All" || selectedDifficulty !== "All") && (
              <button 
                onClick={() => { setSelectedSubject("All"); setSelectedDifficulty("All"); }}
                className="w-full mt-6 py-2.5 text-sm font-semibold text-[--cta] hover:bg-[--cta]/10 rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            )}
          </div>
        </aside>

        {/* Content Grid */}
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredCourses.length === 0 ? (
              <div className="col-span-full py-16 text-center text-[--secondary] bg-[--alt-bg] rounded-3xl border border-[--accent]">
                <BookOpen size={48} className="mx-auto mb-4 opacity-50" />
                <p className="text-xl font-medium">No courses found matching your filters.</p>
                <button 
                  onClick={() => { setSelectedSubject("All"); setSelectedDifficulty("All"); }}
                  className="mt-4 text-[--cta] font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              filteredCourses.map((course) => {
                const Icon = course.icon;
                return (
                  <div 
                    key={course.id}
                    className="bg-[--background] border border-[--accent] rounded-3xl p-6 sm:p-8 flex flex-col transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(11,44,53,0.1)] dark:hover:shadow-[0_10px_30px_rgba(23,184,213,0.1)] group relative overflow-hidden"
                  >
                    <div className="flex justify-between items-start mb-8">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${course.bg} ${course.color} transition-transform duration-300 group-hover:scale-110`}>
                        <Icon size={28} />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[--alt-bg] text-[--primary] text-[11px] font-bold uppercase tracking-wider mt-1">
                        {course.difficulty}
                      </span>
                    </div>
                    
                    <h3 className="text-[22px] font-serif font-bold text-[--primary] mb-3 leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-[16px] text-[--secondary] mb-8 flex-grow leading-relaxed">
                      {course.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-[--secondary] font-medium mb-8 pt-5 border-t border-[--accent]">
                      <div className="flex items-center gap-2.5">
                        <User size={16} className="text-[--cta]" />
                        <span>{course.instructor}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Clock size={16} className="text-[--cta]" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    
                    <button className="mt-auto flex items-center justify-center space-x-2 w-full py-3.5 rounded-xl bg-[--alt-bg] text-[--cta] font-bold transition-all duration-200 group-hover:bg-[--cta] group-hover:text-white shadow-sm group-hover:shadow-md active:scale-95">
                      <span>Explore Course</span>
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
