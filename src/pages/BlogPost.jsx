import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchBlogById } from '../data/api';
import { ArrowLeft } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
    
    const loadPost = async () => {
      setLoading(true);
      const data = await fetchBlogById(id);
      setPost(data);
      setLoading(false);
    };
    loadPost();
  }, [id]);

  if (loading) {
    return <div className="min-h-screen bg-[#080D14] flex items-center justify-center text-white">Loading...</div>;
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#080D14] flex items-center justify-center font-['Plus_Jakarta_Sans',sans-serif]">
        <div className="text-center">
          <h1 className="text-4xl text-white mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-[#E94B3C] hover:underline flex items-center gap-2 justify-center">
            <ArrowLeft className="w-4 h-4" /> Return to Journal
          </Link>
        </div>
      </div>
    );
  }

  // Enhanced markdown parser for the dark theme
  const renderContent = (content) => {
    const lines = content.trim().split('\n');
    let inList = false;
    let listItems = [];
    const elements = [];

    const flushList = () => {
      if (inList && listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc pl-5 mb-8 space-y-3 text-slate-300">
            {listItems}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    const parseBold = (text) => {
      const parts = text.split(/\*\*(.*?)\*\*/g);
      return parts.map((part, i) => i % 2 === 1 ? <strong key={i} className="font-bold text-white">{part}</strong> : part);
    };

    lines.forEach((line, idx) => {
      line = line.trim();
      if (!line) {
        flushList();
        return;
      }

      if (line.startsWith('### ')) {
        flushList();
        elements.push(<h3 key={idx} className="text-2xl font-bold text-white mt-12 mb-6">{parseBold(line.replace('### ', ''))}</h3>);
      } else if (line.match(/^\d+\.\s/)) {
        flushList();
        const text = line.replace(/^\d+\.\s/, '');
        const number = line.match(/^\d+/)[0];
        elements.push(
          <h4 key={idx} className="text-xl font-bold text-[#E94B3C] mt-10 mb-4 flex items-start gap-3">
             <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E94B3C]/10 flex items-center justify-center text-sm">{number}</span>
             <span className="mt-1">{parseBold(text)}</span>
          </h4>
        );
      } else if (line.startsWith('- ')) {
        inList = true;
        listItems.push(<li key={idx} className="leading-relaxed">{parseBold(line.substring(2))}</li>);
      } else {
        flushList();
        elements.push(<p key={idx} className="text-slate-400 text-lg leading-relaxed mb-6">{parseBold(line)}</p>);
      }
    });

    flushList();
    return elements;
  };

  return (
    <article className="bg-[#080D14] min-h-screen font-['Plus_Jakarta_Sans',sans-serif] pb-24 sm:pb-32 text-white">
      
      {/* Hero Image */}
      <div className="w-full min-h-[50vh] sm:min-h-[60vh] relative overflow-hidden bg-[#0A111A] flex items-end pt-32 pb-8 md:pb-16">
        <img 
          src={post.image} 
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          onError={(e) => { e.target.onerror = null; e.target.src = '/interior_render.jpg'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080D14] via-[#080D14]/80 to-transparent" />
        
        <div className="relative z-10 w-full px-8 md:px-16 lg:px-24">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-semibold text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> BACK TO JOURNAL
          </Link>
          <div className="block mb-6">
            <span className="inline-block bg-[#E94B3C]/20 border border-[#E94B3C]/30 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-[#E94B3C] uppercase">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.2] max-w-4xl drop-shadow-md">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-12" data-aos="fade-up">
        
        <div className="flex items-center gap-4 border-b border-white/10 pb-8 mb-12">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-white/5 border border-white/10">
            <img src="/CADD.png" alt="Author" className="w-full h-full object-contain p-1" onError={(e) => { e.target.style.display = 'none'; }} />
          </div>
          <div>
            <p className="text-[15px] font-bold tracking-wide text-white">{post.author}</p>
            <p className="text-[13px] text-slate-400 font-semibold">{post.date}</p>
          </div>
        </div>

        <div className="prose-lg max-w-none">
          {renderContent(post.content)}
        </div>

      </div>

    </article>
  );
}
