import React, { useState } from 'react';
import PDFViewer from './PDFViewer';

interface Sketchbook {
  id: number;
  title: string;
  description: string;
  url: string;
  category: 'animation' | 'pixel-art' | 'character-design';
  date: string;
}

const Sketchbooks: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const sketchbooks: Sketchbook[] = [
    {
      id: 1,
      title: "Animation Studies 2024",
      description: "A collection of animation studies focusing on movement, timing, and expression. Includes frame-by-frame breakdowns and motion analysis.",
      url: "/sketchbooks/animation-studies-2024.pdf",
      category: "animation",
      date: "2024"
    },
    {
      id: 2,
      title: "Pixel Art Character Designs",
      description: "Character design explorations in pixel art, including sprite sheets, animations, and design iterations.",
      url: "/sketchbooks/pixel-characters-2024.pdf",
      category: "pixel-art",
      date: "2024"
    },
    {
      id: 3,
      title: "Character Design Process",
      description: "From rough sketches to final designs - a look into my character design process and development.",
      url: "/sketchbooks/character-design-process.pdf",
      category: "character-design",
      date: "2024"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Sketchbooks' },
    { id: 'animation', label: 'Animation Studies' },
    { id: 'pixel-art', label: 'Pixel Art' },
    { id: 'character-design', label: 'Character Design' }
  ];

  const filteredSketchbooks = selectedCategory === 'all'
    ? sketchbooks
    : sketchbooks.filter(book => book.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-900 py-12 pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-yellow-400 font-pixel">My Sketchbooks</h1>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Browse through my collection of sketchbooks and studies. Each book represents a journey
          of learning and exploration in animation and pixel art.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full font-pixel text-sm transition-colors
                ${selectedCategory === category.id
                  ? 'bg-yellow-400 text-gray-900'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="space-y-16">
          {filteredSketchbooks.map((book) => (
            <div key={book.id} className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2 font-pixel">{book.title}</h3>
                <p className="text-gray-300 mb-4">{book.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="bg-gray-700 px-3 py-1 rounded-full">
                    {book.category.split('-').map(word => 
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')}
                  </span>
                  <span>{book.date}</span>
                </div>
              </div>
              <PDFViewer url={book.url} title={book.title} />
            </div>
          ))}
        </div>

        {filteredSketchbooks.length === 0 && (
          <div className="text-center text-gray-400 py-12">
            No sketchbooks found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Sketchbooks; 