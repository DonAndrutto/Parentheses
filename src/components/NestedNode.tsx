import React, { useState, useContext, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NodeData } from '../content';
import { SpecialText } from './SpecialText';
import { AppContext } from '../App';

interface NestedNodeProps {
  node: NodeData;
  depth?: number;
}

export const NestedNode: React.FC<NestedNodeProps> = ({ node, depth = 0 }) => {
  const { mode, setMode, isSpine, resetToRoot, setHasReachedEnd } = useContext(AppContext);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (mode === 'all-expanded') {
      setIsExpanded(true);
    } else if (mode === 'all-collapsed') {
      setIsExpanded(false);
    }
  }, [mode]);

  useEffect(() => {
    if (isExpanded) {
      const hasFree = node.content.some(item => typeof item === 'string' && item.includes('###FREE###'));
      if (hasFree) {
        setHasReachedEnd(true);
      }
    }
  }, [isExpanded, node.content, setHasReachedEnd]);

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
    if (mode !== 'manual') {
      setMode('manual');
    }
  };

  // Special handling for the Root node structure
  if (node.isRoot) {
    return (
      <div className="w-full max-w-4xl mx-auto p-4 md:p-12 font-serif text-zinc-900 bg-white min-h-screen border-x border-zinc-100 shadow-2xl flex flex-col items-center overflow-x-hidden">
        <button 
          onClick={toggle}
          className={`
            w-32 h-32 flex items-center justify-center rounded-full transition-all duration-1000 mt-[35vh] mb-12
            ${isExpanded 
              ? 'bg-zinc-900 text-white scale-125 shadow-[0_0_60px_rgba(0,0,0,0.15)] outline outline-8 outline-zinc-100' 
              : 'bg-transparent text-zinc-400 border border-zinc-200 hover:border-zinc-800 hover:text-zinc-800 hover:shadow-xl'}
            cursor-pointer text-5xl font-bold select-none
          `}
        >
          {node.preview}
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <div className="space-y-12">
                {node.content.map((item, index) => {
                  if (typeof item === 'string' && item.trim().startsWith('###FREE###')) {
                    const cleanText = item.trim().replace('###FREE###', '');
                    return (
                      <div 
                        key={index} 
                        className="pt-16 pb-20 text-center w-full animate-in fade-in slide-in-from-bottom-12 duration-[2s] block"
                      >
                        <div className="w-12 h-[1px] bg-zinc-300 mx-auto mb-10 opacity-50"></div>
                        <div className="text-xl md:text-3xl leading-relaxed italic text-zinc-900 font-extralight tracking-wider">
                          <SpecialText text={cleanText} />
                        </div>
                        <div className="mt-12 flex justify-center opacity-20">
                          <div className="w-1 h-1 rounded-full bg-zinc-900 mx-1"></div>
                          <div className="w-1 h-1 rounded-full bg-zinc-900 mx-1"></div>
                          <div className="w-1 h-1 rounded-full bg-zinc-900 mx-1"></div>
                        </div>
                      </div>
                    );
                  }
                  
                  if (typeof item === 'string') {
                    return <p key={index} className="text-zinc-400 italic text-center mb-8">{item}</p>;
                  }
                  
                  return (
                    <div key={index}>
                      <NestedNode node={item} depth={depth + 1} />
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Handle the Title Node specifically
  if (node.preview === 'On Collapse (And Expansion)') {
    const handleTitleClick = (action: 'collapse' | 'expand') => {
      if (action === 'expand') setIsExpanded(true);
      else {
        setIsExpanded(false);
        resetToRoot();
      }
      if (mode !== 'manual') setMode('manual');
    };

    return (
      <div className="flex flex-col items-center w-full">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-tighter mb-4 italic text-zinc-800 flex flex-col md:block">
            <span>
              On{' '}
              <span 
                onClick={(e) => { e.stopPropagation(); handleTitleClick('collapse'); }}
                className="cursor-pointer hover:text-zinc-500 transition-colors border-b border-transparent hover:border-zinc-300"
              >
                Collapse
              </span>
            </span>
            <span className="block md:inline">
              {' '}(And{' '}
              <motion.span 
                onClick={(e) => { e.stopPropagation(); handleTitleClick('expand'); }}
                animate={!isExpanded ? { 
                  opacity: [1, 0.4, 1],
                  scale: [1, 1.05, 1]
                } : { opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="cursor-pointer hover:text-zinc-500 transition-colors border-b border-transparent hover:border-zinc-300"
              >
                Expansion
              </motion.span>
              )
            </span>
          </h1>
          <div className="w-12 h-[1px] bg-zinc-300 mx-auto mb-4"></div>
          <p className="text-zinc-400 text-xs uppercase tracking-[0.3em] font-sans">Unified Nested Structure</p>
        </header>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="text-lg leading-[1.8] text-left px-4 md:px-8"
            >
              {node.content.map((item, index) => (
                <span key={index}>
                  {typeof item === 'string' ? <SpecialText text={item} /> : <NestedNode node={item} depth={depth + 1} />}
                </span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Handle spine mode: show sub-articles as standalone if requested
  if (isSpine && (node.preview === 'Honesty' || node.preview === 'Third Way' || node.preview === 'YOUR Mandala' || node.preview === 'exile from Eden')) {
    // In spine mode, these sections might be treated differently, but user asked to "reveal the 5 articles as standalone pieces"
    // For now, let's keep them in flow but style them more prominently if needed.
  }

  // Default Inline Node
  return (
    <span className="relative group inline">
      <button
        onClick={toggle}
        className={`
          inline cursor-pointer transition-all duration-300 rounded px-1
          ${isExpanded 
            ? 'bg-zinc-100 text-zinc-900 font-bold border-l-2 border-zinc-900 mx-1 shadow-sm' 
            : 'text-zinc-400 hover:text-zinc-800 italic underline decoration-zinc-200 decoration-dotted underline-offset-4'}
        `}
      >
        {node.preview}
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.span
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -5 }}
            transition={{ duration: 0.5 }}
            className="inline-block border-l border-zinc-100 pl-3 py-1 my-1 break-words text-left leading-relaxed"
            style={{ 
              marginLeft: `calc(${(depth - 1)} * var(--indent-unit))`,
              display: node.preview === 'Honesty' || node.preview === 'Third Way' || node.preview === 'YOUR Mandala' || node.preview === 'exile from Eden' ? 'block' : 'inline-block',
              width: node.preview === 'Honesty' || node.preview === 'Third Way' || node.preview === 'YOUR Mandala' || node.preview === 'exile from Eden' ? `calc(100% - (${(depth - 1)} * var(--indent-unit)))` : 'auto',
              maxWidth: '100%'
            }}
          >
             {node.content.map((item, index) => {
                if (typeof item === 'string' && item.trim().startsWith('###FREE###')) {
                  const cleanText = item.trim().replace('###FREE###', '');
                  return (
                    <div 
                      key={index} 
                      className="pt-16 pb-20 text-center relative animate-in fade-in slide-in-from-bottom-12 duration-[2s] block z-50 text-zinc-900 font-extralight"
                      style={{ 
                        // Center by pulling back the indent and using negative margins carefully
                        marginLeft: `calc(-1 * (${(depth-1)} * var(--indent-unit)) - 0.5rem)`,
                        width: `calc(100% + (${(depth-1)} * var(--indent-unit)) + 1rem)`,
                        maxWidth: '95vw'
                      }}
                    >
                      <div className="w-12 h-[1px] bg-zinc-300 mx-auto mb-10 opacity-50"></div>
                      <div className="text-xl md:text-3xl leading-relaxed italic tracking-wider">
                        <SpecialText text={cleanText} />
                      </div>
                      <div className="mt-12 flex justify-center opacity-30">
                        <div className="w-1.5 h-1.5 rounded-full border border-zinc-900 mx-1.5"></div>
                        <div className="w-1.5 h-1.5 rounded-full border border-zinc-900 mx-1.5"></div>
                        <div className="w-1.5 h-1.5 rounded-full border border-zinc-900 mx-1.5"></div>
                      </div>
                    </div>
                  );
                }

                if (typeof item === 'string') {
                  return <SpecialText key={index} text={item} />;
                }
                return <NestedNode key={index} node={item} depth={depth + 1} />;
             })}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};;
