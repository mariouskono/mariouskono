import React, { useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(Flip);

const flipData = [
  {
    id: 'item-1',
    number: '01',
    title: 'Hover States',
    img: 'https://cdn.prod.website-files.com/67fea42b19018db93e3fe132/68013f400877abe10cf73b0a_Frame%20107.png',
    bgColor: '#00c5c5',
  },
  {
    id: 'item-2',
    number: '02',
    title: 'Resizing Elements',
    img: 'https://cdn.prod.website-files.com/67fea42b19018db93e3fe132/68013f402e12f2a5d8f822a0_Frame%20111.png',
    bgColor: '#ff812d',
  },
  {
    id: 'item-3',
    number: '03',
    title: 'Timeline Control',
    img: 'https://cdn.prod.website-files.com/67fea42b19018db93e3fe132/68013f406244f6f297943269_Frame%20110.png',
    bgColor: '#f5c939',
  },
  {
    id: 'item-4',
    number: '04',
    title: 'Shuffling Positions',
    img: 'https://cdn.prod.website-files.com/67fea42b19018db93e3fe132/68013f406e676d84f8f18c68_Frame%20115.png',
    bgColor: '#ca9dfe',
  },
  {
    id: 'item-5',
    number: '05',
    title: 'Sequenced Motion',
    img: 'https://cdn.prod.website-files.com/67fea42b19018db93e3fe132/68013f40c6a9d3d00db05e58_socks.png',
    bgColor: '#7ae66a',
  },
  {
    id: 'item-6',
    number: '06',
    title: 'Flexible Layouts',
    img: 'https://cdn.prod.website-files.com/67fea42b19018db93e3fe132/6810b0479f6f5af7f25907b1_apple.png',
    bgColor: '#f897b4',
  }
];

const FlexibleLayout = () => {
  const containerRef = useRef(null);
  const itemsContainerRef = useRef(null);
  const q = gsap.utils.selector(containerRef);
  const [isGrid, setIsGrid] = useState(true);

  const toggleLayout = (toGrid) => {
    if (isGrid === toGrid) return;
    
    const items = q('.flip-item');
    const container = itemsContainerRef.current;
    
    // 1. Get the current state
    const state = Flip.getState(items);
    
    // 2. Make the DOM changes (toggle class)
    if (toGrid) {
      container.classList.remove('layout-list');
      container.classList.add('layout-grid');
    } else {
      container.classList.remove('layout-grid');
      container.classList.add('layout-list');
    }
    
    setIsGrid(toGrid);
    
    // 3. Animate from the previous state
    Flip.from(state, {
      duration: 0.8,
      ease: "expo.out",
      absolute: true,
      onComplete: () => {
        ScrollTrigger.refresh();
      }
    });
  };

  return (
    <section id="flexible-layout" className="relative z-10 py-24 md:py-32 bg-white dark:bg-navy-900 transition-colors duration-500 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-teal-400 font-mono text-xl">04.</span>
              <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 dark:text-white tracking-tighter">
                Show and Tell Flexible
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 font-sans max-w-xl text-lg">
              Create seamless transitions between two visual states smoothly, not instantly. It removes the visual chaos when layouts shift, making things feel smooth, considered, and intentional.
            </p>
          </div>
          
          {/* Toggle Controls */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => toggleLayout(false)}
              className={`px-6 py-2 rounded-md font-mono text-sm font-semibold transition-all duration-300 ${!isGrid ? 'bg-slate-900 text-white shadow-md' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              List
            </button>
            <button
              onClick={() => toggleLayout(true)}
              className={`px-6 py-2 rounded-md font-mono text-sm font-semibold transition-all duration-300 ${isGrid ? 'bg-slate-900 text-white shadow-md' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              Grid
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div 
          ref={itemsContainerRef}
          className="mx-auto transition-colors duration-300 layout-grid"
        >
          <style dangerouslySetInnerHTML={{__html: `
            .layout-grid {
              display: grid;
              grid-template-columns: repeat(1, minmax(0, 1fr));
              gap: 1.5rem;
            }
            @media (min-width: 768px) {
              .layout-grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
              }
            }
            @media (min-width: 1024px) {
              .layout-grid {
                grid-template-columns: repeat(3, minmax(0, 1fr));
              }
            }
            .layout-list {
              display: flex;
              flex-direction: column;
              gap: 1rem;
              max-width: 48rem;
              margin: 0 auto;
            }
            
            /* Item Styling logic based on parent class */
            .layout-grid .flip-item {
              flex-direction: column;
              justify-content: space-between;
              aspect-ratio: 4/3;
              padding: 2rem;
            }
            .layout-list .flip-item {
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              padding: 1.5rem;
              height: 8rem;
            }

            .layout-grid .flip-info {
              flex-direction: column;
              gap: 1rem;
            }
            .layout-list .flip-info {
              flex-direction: row;
              align-items: center;
              gap: 1.5rem;
            }

            .layout-grid .flip-title {
              font-size: 1.875rem;
            }
            .layout-list .flip-title {
              font-size: 1.5rem;
            }
            @media (min-width: 768px) {
              .layout-list .flip-title {
                font-size: 2.25rem;
              }
            }

            .layout-grid .flip-img {
              position: absolute;
              bottom: -2.5rem;
              right: -2.5rem;
              width: 75%;
              height: 75%;
              opacity: 0.9;
            }
            .layout-list .flip-img {
              position: relative;
              width: 8rem;
              height: 8rem;
              object-position: right bottom;
              transform: scale(1.25);
            }
          `}} />

          {flipData.map((item) => (
            <div
              key={item.id}
              data-flip-id={item.id}
              className="flip-item relative overflow-hidden rounded-2xl flex group cursor-pointer"
              style={{ backgroundColor: item.bgColor }}
            >
              {/* Text Info */}
              <div className="flip-info relative z-10 flex">
                <div className="bg-white/20 backdrop-blur-md w-10 h-10 rounded-lg flex items-center justify-center font-mono text-sm font-bold text-slate-900 flex-shrink-0">
                  {item.number}
                </div>
                <h3 className="flip-title font-display font-black text-slate-900 tracking-tight leading-none uppercase">
                  {item.title}
                </h3>
              </div>

              {/* Image */}
              <img 
                src={item.img} 
                alt={item.title} 
                className="flip-img object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FlexibleLayout;
