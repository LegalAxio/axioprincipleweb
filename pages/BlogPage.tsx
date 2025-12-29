
import React, { useEffect, useState } from 'react';
import { Search, ArrowRight, Clock, Tag } from 'lucide-react';

const POSTS = [
  { id: 1, category: 'ORM', title: 'The Anatomy of a Reputation Crisis', excerpt: 'How one bad search result can spiral, and the exact steps to contain it.', author: 'Darren Mills', date: 'Oct 12, 2024', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800' },
  { id: 2, category: 'Marketing', title: 'Why MER is the Only Metric That Matters', excerpt: 'Moving beyond ROAS to find the true efficiency of your growth engine.', author: 'Leo Fernandez', date: 'Oct 08, 2024', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
  { id: 3, category: 'Security', title: 'Zero-Trust Architecture for D2C Brands', excerpt: 'Protecting customer data is no longer optional. Its a marketing asset.', author: 'Elena Rossi', date: 'Oct 05, 2024', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800' },
  { id: 4, category: 'ORM', title: 'Legally Suppressing Defamatory Content', excerpt: 'The intersection of legal rights and technical SEO in content removal.', author: 'Nadya Rahim', date: 'Sep 28, 2024', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800' },
  { id: 5, category: 'Marketing', title: 'Category Creation vs Category Capture', excerpt: 'How to build a brand that defines the market instead of just competing.', author: 'Sasha Volkov', date: 'Sep 22, 2024', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800' },
  { id: 6, category: 'Security', title: 'The Future of AI in Threat Detection', excerpt: 'Predicting breaches before they happen with neural network analysis.', author: 'Aria Tanaka', date: 'Sep 15, 2024', image: 'https://images.unsplash.com/photo-1525373612132-b3e820915734?auto=format&fit=crop&q=80&w=800' },
];

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const categories = ['All', 'ORM', 'Marketing', 'Security'];
  const filteredPosts = activeCategory === 'All' ? POSTS : POSTS.filter(p => p.category === activeCategory);

  return (
    <div className="bg-[#030303] pt-40 pb-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4">Insights & <br /><span className="text-[#4ade80]">Intelligence.</span></h1>
            <p className="text-gray-500 max-w-md">Expert analysis on reputation, security, and exponential growth.</p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={20} />
            <input type="text" placeholder="Search insights..." className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-[#4ade80] outline-none transition-all" />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat ? 'bg-[#4ade80] text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, i) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-video rounded-[32px] overflow-hidden mb-6 relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2">
                  <Tag size={12} className="text-[#4ade80]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{post.category}</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                <span className="flex items-center gap-1.5"><Clock size={14} /> {post.date}</span>
                <span>by {post.author}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#4ade80] transition-colors leading-snug">{post.title}</h3>
              <p className="text-gray-500 text-sm mb-6 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center gap-2 text-[#4ade80] font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                Read Article <ArrowRight size={16} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
