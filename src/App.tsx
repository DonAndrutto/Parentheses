/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, createContext, useEffect } from 'react';
import { contentData, NodeData } from './content';
import { NestedNode } from './components/NestedNode';
import { Menu, X } from 'lucide-react';

type ExpansionMode = 'manual' | 'all-expanded' | 'all-collapsed' | 'none';

interface AppContextType {
  mode: ExpansionMode;
  setMode: (mode: ExpansionMode) => void;
  isSpine: boolean;
  hasReachedEnd: boolean;
  setHasReachedEnd: (val: boolean) => void;
  resetToRoot: () => void;
}

export const AppContext = createContext<AppContextType>({ 
  mode: 'manual', 
  setMode: () => {},
  isSpine: false,
  hasReachedEnd: false,
  setHasReachedEnd: () => {},
  resetToRoot: () => {}
});

export default function App() {
  const [mode, setMode] = useState<ExpansionMode>('manual');
  const [isSpine, setIsSpine] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);

  const resetToRoot = () => {
    setMode('all-collapsed');
    setIsSpine(false);
  };

  // Helper to extract the "spine" nodes from the nested structure
  const findSpineNodes = (node: NodeData): NodeData[] => {
    const spineNames = ['Honesty', 'Third Way', 'YOUR Mandala', 'exile from Eden', 'Mandala'];
    let found: NodeData[] = [];
    
    if (spineNames.includes(node.preview)) {
      found.push(node);
    }
    
    node.content.forEach(item => {
      if (typeof item !== 'string') {
        found = [...found, ...findSpineNodes(item)];
      }
    });
    
    return found;
  };

  const spineNodes = findSpineNodes(contentData);

  return (
    <AppContext.Provider value={{ mode, setMode, isSpine, hasReachedEnd, setHasReachedEnd, resetToRoot }}>
      <div className="min-h-screen bg-zinc-50 flex justify-center selection:bg-zinc-800 selection:text-white relative overflow-x-hidden">
        
        {/* Instructions Pop-up */}
        {showInstructions && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-900/10 backdrop-blur-sm cursor-pointer p-6"
            onClick={() => setShowInstructions(false)}
          >
            <div 
              className="relative max-w-sm w-full bg-white p-6 md:p-8 rounded-lg shadow-2xl border border-zinc-100 text-center animate-in fade-in zoom-in duration-500 cursor-default"
              onClick={(e) => e.stopPropagation()} // Prevent clicking inside from dismissing, user can click X or outside
            >
              <button 
                onClick={() => setShowInstructions(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 transition-colors"
                aria-label="Close instructions"
              >
                <X size={20} />
              </button>
              <h2 className="text-xl italic font-light tracking-wide text-zinc-800 mb-4 font-serif">Welcome</h2>
              <p className="text-zinc-600 leading-relaxed font-sans text-sm font-light">
                Click on the links to expand and collapse. Experiment and enjoy the contraction and expansion, explore new sections.
              </p>
            </div>
          </div>
        )}

        {/* Discrete Menu - Only appears after reaching the end */}
        {hasReachedEnd && (
          <div className="fixed top-6 right-6 z-50">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm border border-zinc-200 text-zinc-400 hover:text-zinc-900 transition-colors cursor-pointer"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            
            {isMenuOpen && (
              <div className="absolute top-12 right-0 w-48 bg-white rounded-lg shadow-xl border border-zinc-100 p-2 flex flex-col gap-1 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                <button 
                  onClick={() => { 
                    setMode('all-expanded'); 
                    setIsMenuOpen(false); 
                  }}
                  className="text-left px-4 py-2 text-xs font-sans tracking-widest uppercase hover:bg-zinc-50 rounded transition-colors text-zinc-600 hover:text-zinc-900"
                >
                  All Expanded
                </button>
                <button 
                  onClick={() => { 
                    setMode('all-collapsed'); 
                    setIsSpine(false);
                    setIsMenuOpen(false); 
                  }}
                  className="text-left px-4 py-2 text-xs font-sans tracking-widest uppercase hover:bg-zinc-50 rounded transition-colors text-zinc-600 hover:text-zinc-900"
                >
                  All Collapsed
                </button>
                <button 
                  onClick={() => { setIsSpine(!isSpine); setIsMenuOpen(false); }}
                  className={`text-left px-4 py-2 text-xs font-sans tracking-widest uppercase hover:bg-zinc-50 rounded transition-colors ${isSpine ? 'text-zinc-900 font-bold' : 'text-zinc-600'}`}
                >
                  {isSpine ? 'Hide Spine' : 'Show Spine'}
                </button>
              </div>
            )}
          </div>
        )}

        {isSpine ? (
          <div className="w-full max-w-4xl mx-auto p-12 bg-white min-h-screen shadow-2xl border-x border-zinc-100 mt-20 md:mt-0">
            <header className="mb-20 text-center">
              <h1 className="text-4xl font-light tracking-tighter mb-4 italic text-zinc-800">The Spine</h1>
              <p className="text-zinc-400 text-xs uppercase tracking-[0.3em] font-sans">Standalone Fragments</p>
            </header>
            <div className="space-y-16">
              {spineNodes.map((node, i) => (
                <div key={node.id} className="border-b border-zinc-100 pb-16">
                   <div className="text-xs font-sans tracking-widest text-zinc-300 mb-4">FRAGMENT 0{i + 1}</div>
                   <NestedNode node={node} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <NestedNode node={contentData} />
        )}
      </div>
    </AppContext.Provider>
  );
}
