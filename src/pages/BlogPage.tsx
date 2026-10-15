import React, { useState } from 'react';
import { Sparkles, Search, Clock, Calendar, User, ArrowRight, X } from 'lucide-react';
import { IslamicPattern } from '../components/IslamicPattern';
import { PageRoute, BlogPost } from '../types';
import { blogPosts } from '../data/academyData';

interface BlogPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenEnroll: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, onOpenEnroll }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);

  const categories = [
    'All',
    'Tajweed',
    'Islamic Parenting',
    'Quran Learning Tips',
    'Dua & Sunnah',
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCat =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesQuery =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="w-full relative overflow-hidden text-slate-800">
      {/* Header */}
      <section className="relative pt-12 pb-20 bg-[#FAF8F5] border-b border-slate-200">
        <IslamicPattern variant="light" opacity={0.045} patternType="star8" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/5 text-[#0A3826] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Islamic Insights & Tajweed Guides</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#072C1E]">
            Quran Learning Blog & Articles
          </h1>

          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Practical advice on mastering Tajweed, memorizing the Quran in a busy lifestyle, raising righteous children, and living the Sunnah.
          </p>

          {/* Search bar */}
          <div className="pt-6 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles (e.g. Tajweed, Kids, Memorization)..."
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826] shadow-xs"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0A3826] text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="relative py-20 bg-white">
        <IslamicPattern variant="subtle" opacity={0.02} patternType="girih" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-[#FAF8F5] rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-[#072C1E] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-7 space-y-3">
                    <div className="flex items-center gap-3 text-[11px] text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-emerald-700" />
                        {post.readTime}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-emerald-700" />
                        {post.date}
                      </span>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-[#072C1E] leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-2 border-t border-slate-200/60 mt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">
                    By {post.author}
                  </span>

                  <button
                    onClick={() => setReadingPost(post)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0A3826] hover:text-[#072C1E] group cursor-pointer"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Reader Modal */}
      {readingPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div
            onClick={() => setReadingPost(null)}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 my-8 border border-slate-200 text-left">
            <div className="relative aspect-[16/9] bg-slate-100 overflow-hidden">
              <img
                src={readingPost.image}
                alt={readingPost.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setReadingPost(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white transition-colors"
                aria-label="Close article modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-4 max-h-[60vh] overflow-y-auto">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-[#0A3826]">
                  {readingPost.category}
                </span>
                <span className="text-xs text-slate-500">{readingPost.readTime}</span>
              </div>

              <h2 className="text-2xl font-serif font-bold text-[#072C1E]">
                {readingPost.title}
              </h2>

              <p className="text-xs text-slate-500 italic pb-2 border-b border-slate-100">
                Published on {readingPost.date} by {readingPost.author}
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                {readingPost.content && readingPost.content.length > 0 ? (
                  readingPost.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))
                ) : (
                  <p>{readingPost.excerpt}</p>
                )}
              </div>

              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => {
                    setReadingPost(null);
                    onOpenEnroll();
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-[#0A3826] hover:bg-[#072C1E] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
                >
                  Book 3-Day Free Trial
                </button>
                <button
                  onClick={() => setReadingPost(null)}
                  className="w-full sm:w-auto px-5 py-3 bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
