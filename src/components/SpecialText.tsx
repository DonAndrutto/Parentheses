import React, { useContext } from 'react';
import { ExternalLink } from 'lucide-react';
import { AppContext } from '../App';

interface SpecialTextProps {
  text: string;
}

export const SpecialText: React.FC<SpecialTextProps> = ({ text }) => {
  const { resetToRoot } = useContext(AppContext);
  // Use a regex that catches the keywords to apply specific styles and links
  const parts = text.split(/(\bsharpen\b|\bfocus\b|\bresolution increases\b|\bblurry\b|\bcrystallizes\b|\bdetail\b|\bsharper and sharper\b|\bpixelated\b|\bRevolution\b|\bAccelerationism\b|\bretreat\b|\b100,000 verses\b|\bPrajñāpāramitā in a Single Syllable\b|\bCloud Of Unknowing\b|\byou're nothing but a speck\b|\bflat earth\b|\bNamaste\b|\bThe Symbolism of the Center\b)/gi);

  let flatEarthLinked = false;

  return (
    <>
      {parts.map((part, index) => {
        const lowerPart = part.toLowerCase();
        
        // Link styling helper
        const linkClass = "inline-flex items-center gap-0.5 text-zinc-600 border-b border-zinc-200 hover:text-zinc-950 hover:border-zinc-800 transition-all cursor-pointer group/link px-0.5";
        const linkIcon = <ExternalLink size={10} className="inline opacity-20 group-hover/link:opacity-60 transition-opacity -mt-0.5" />;

        // Links
        if (lowerPart === 'revolution') {
          return (
            <a 
              key={index} 
              href="https://ia801301.us.archive.org/11/items/TheGulagArchipelago-Threevolumes/The-Gulag-Archipelago__vol1__I-II__Solzhenitsyn.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${linkClass} text-red-950 border-red-200 hover:border-red-900`}
            >
              {part} {linkIcon}
            </a>
          );
        }
        if (lowerPart === 'accelerationism') {
          return (
            <a 
              key={index} 
              href="https://www.palantir.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${linkClass} text-blue-950 border-blue-200 hover:border-blue-900`}
            >
              {part} {linkIcon}
            </a>
          );
        }
        if (lowerPart === 'retreat') {
          return (
            <a 
              key={index} 
              href="https://benchenkrakow.pl/benchen-centre-in-grabnik-the-seat-of-the-association/drubkhang-the-three-year-retreat-centre-in-grabnik/?lang=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${linkClass} text-emerald-950 border-emerald-200 hover:border-emerald-900`}
            >
              {part} {linkIcon}
            </a>
          );
        }
        if (lowerPart === '100,000 verses') {
          return (
            <a key={index} href="https://84000.co/translation/toh8" target="_blank" rel="noopener noreferrer" className={linkClass}>
              {part} {linkIcon}
            </a>
          );
        }
        if (lowerPart === 'prajñāpāramitā in a single syllable') {
          return (
            <a key={index} href="https://84000.co/translation/toh23" target="_blank" rel="noopener noreferrer" className={linkClass}>
              {part} {linkIcon}
            </a>
          );
        }
        if (lowerPart === 'cloud of unknowing') {
          return (
            <a key={index} href="https://music.youtube.com/watch?v=V4wPwCVJQUQ&si=n9oFSNPz4cBoh6ys&t=315" target="_blank" rel="noopener noreferrer" className={linkClass}>
              {part} {linkIcon}
            </a>
          );
        }
        if (lowerPart.includes("you're nothing but a speck")) {
          return (
            <a key={index} href="https://x.com/neiltyson/status/1113426221038284805" target="_blank" rel="noopener noreferrer" className={linkClass}>
              {part} {linkIcon}
            </a>
          );
        }
        if (lowerPart === 'flat earth') {
          if (flatEarthLinked) return part;
          flatEarthLinked = true;
          return (
            <a key={index} href="https://www.youtube.com/watch?v=kvERqiuPwOs" target="_blank" rel="noopener noreferrer" className={linkClass}>
              {part} {linkIcon}
            </a>
          );
        }

        if (lowerPart === 'namaste') {
          return (
            <span 
              key={index} 
              onClick={() => resetToRoot()}
              className="text-zinc-500 hover:text-zinc-900 underline underline-offset-8 decoration-zinc-300 decoration-dotted cursor-pointer transition-all px-1 font-light tracking-widest uppercase text-sm"
            >
              {part}
            </span>
          );
        }

        if (lowerPart === 'the symbolism of the center') {
          return (
            <a 
              key={index} 
              href="https://archive.org/details/in.gov.ignca.11012/page/41/mode/2up" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={linkClass}
            >
              {part} {linkIcon}
            </a>
          );
        }

        // Sharper keywords
        if (['sharpen', 'focus', 'resolution increases', 'crystallizes', 'sharper and sharper', 'detail'].includes(lowerPart)) {
          return (
            <span 
              key={index} 
              className="inline-block text-zinc-950 font-bold tracking-[-0.05em] transition-all duration-700"
              style={{ 
                textShadow: '0 0 0.5px rgba(0,0,0,0.8), 0 0 0.2px rgba(0,0,0,1)',
                letterSpacing: '-0.03em',
                filter: 'contrast(150%) brightness(80%)'
              }}
            >
              {part}
            </span>
          );
        }
        
        // Blurry/Pixelated keywords
        if (['blurry', 'pixelated'].includes(lowerPart)) {
          return (
            <span 
              key={index} 
              className="inline-block transition-all duration-1000 cursor-help"
              style={{ 
                filter: 'blur(3.5px)', 
                opacity: 0.4,
                userSelect: 'none',
                letterSpacing: '0.1em'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'blur(0px)';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'blur(3.5px)';
                e.currentTarget.style.opacity = '0.4';
              }}
            >
              {part}
            </span>
          );
        }
        
        return part;
      })}
    </>
  );
};
