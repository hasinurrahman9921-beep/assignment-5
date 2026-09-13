import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TechCard from './components/TechCard';
import StackSidebar from './components/StackSidebar';
import Footer from './components/Footer';

import bannerImg from "./assets/banner-stack.png";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech) => {
    if (selectedStack.length >= 8) {
      alert("You can select maximum 8 technologies!");
      return;
    }

    const isExist = selectedStack.find((item) => item.id === tech.id);
    if (!isExist) {
      setSelectedStack([...selectedStack, tech]);
    }
  };

  const handleRemoveFromStack = (id) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== id));
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
  };

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      <Navbar />

      <section id="home" className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Build Your Ideal
              <br />
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-xl">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that
              fits your next project.
            </p>

            <div className="flex gap-4">
              <a
                href="#tech-section"
                className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-medium text-sm px-6 py-3 rounded-xl shadow-md hover:opacity-95 transition-all"
              >
                Explore Technologies
              </a>

              <button className="bg-white border border-gray-200 text-gray-700 font-medium text-sm px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={bannerImg}
              alt="Development Stack"
              className="max-h-96 w-full object-contain"
            />
          </div>
        </div>
      </section>

      <main id="tech-section" className="max-w-7xl mx-auto px-8 py-12">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Explore the{' '}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-400">
            Loading technologies...
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {technologies.map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  onAdd={handleAddToStack}
                  isAdded={selectedStack.some((item) => item.id === tech.id)}
                />
              ))}
            </div>

            <div className="lg:col-span-1">
              <StackSidebar
                selectedTechs={selectedStack}
                onRemove={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        )}
      </main>

      <section className="max-w-7xl mx-auto px-8 py-6 mb-12">
        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-purple-900">
              Stack Overview Counter
            </h3>
            <p className="text-sm text-purple-700 mt-1">
              {selectedStack.length === 0 
                ? "No technology selected yet. Start adding items to your stack!" 
                : `You have selected ${selectedStack.length} out of 8 allowed items.`}
            </p>
          </div>

          <div className="bg-white px-5 py-2.5 rounded-xl border border-purple-200 shadow-sm text-center">
            <span className="text-xs text-gray-500 font-medium block">Total Added</span>
            <span className="text-xl font-bold text-purple-600">{selectedStack.length} / 8</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;