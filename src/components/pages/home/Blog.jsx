import React, { useState } from 'react';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: 'The Rise of Valorant: A Game-Changer in Competitive FPS',
      date: 'October 15, 2024',
      author: 'Aaditya Devadiga',
      readTime: '5 min read',
      category: 'Gaming Insights',
      featured: true,
      excerpt: 'Discover how Valorant revolutionized the FPS genre with its unique blend of tactical gameplay and character abilities.',
      image: '🎮',
      tags: ['Valorant', 'FPS', 'Competitive Gaming'],
      content: `
        Valorant has quickly become a household name in the competitive gaming scene. Released in June 2020 by Riot Games, this tactical first-person shooter has captured the hearts of players worldwide. With its unique blend of character abilities and precise gunplay, Valorant offers a refreshing take on the FPS genre.

        One of the most significant factors contributing to Valorant's success is its character-driven gameplay. Each agent has unique abilities that can turn the tide of battle, making team composition crucial. This dynamic encourages players to experiment with different strategies, keeping the gameplay fresh and exciting.

        Moreover, Valorant's emphasis on teamwork sets it apart from other shooters. Coordination and communication are vital, as players must work together to secure objectives and outsmart opponents. This fosters a sense of community among players, with many forming long-lasting friendships through the game.

        As the competitive scene continues to grow, more players are looking to buy accounts that reflect their skills and dedication. Our Valorant ID Marketplace offers a platform for players to buy and sell accounts securely, ensuring that everyone can find the perfect account to match their playstyle. 

        Whether you're a seasoned veteran looking to expand your collection or a newcomer eager to dive into the game, our marketplace has something for everyone. Join the Valorant revolution today and elevate your gaming experience!
      `,
    },
    {
      id: 2,
      title: 'Tips for Climbing the Ranks in Valorant',
      date: 'October 10, 2024',
      author: 'Jane Smith',
      readTime: '7 min read',
      category: 'Strategy Guide',
      featured: false,
      excerpt: 'Master the essential strategies and mindset needed to climb the competitive ladder in Valorant.',
      image: '🏆',
      tags: ['Tips', 'Ranking', 'Strategy'],
      content: `
        Climbing the ranks in Valorant can be a challenging journey, but with the right strategies and mindset, you can achieve your desired rank. Here are some tips to help you on your journey:

        1. **Master Your Agents**: Focus on a few agents and learn their abilities inside out. Understanding how to use their skills effectively can significantly impact your gameplay.

        2. **Communication is Key**: Valorant is a team-based game, so communicating with your teammates is essential. Use voice chat or the in-game ping system to share information about enemy locations and strategies.

        3. **Practice Your Aim**: Consistent aim is crucial in Valorant. Spend time in aim trainers or practice in the shooting range to improve your accuracy and reflexes.

        4. **Watch and Learn**: Analyze your gameplay and watch professional players to learn new strategies and techniques. You can gain valuable insights into positioning, agent synergy, and game sense.

        5. **Stay Positive**: Rank climbing can be frustrating at times. Maintaining a positive mindset and focusing on improvement rather than solely on winning can enhance your experience.

        Remember, every player was a beginner once. With dedication and practice, you'll find yourself climbing the ranks and enjoying all that Valorant has to offer!
      `,
    },
    {
      id: 3,
      title: 'Valorant Game Sense & Aiming: Mastering the Art of Competitive Play 🎯',
      date: 'October 16, 2024',
      author: 'Sandesh Bramhane',
      readTime: '6 min read',
      category: 'Training Guide',
      featured: true,
      excerpt: 'Develop superior game sense and precision aiming to dominate the competitive scene.',
      image: '🎯',
      tags: ['Aiming', 'Game Sense', 'Training'],
      content: `
        In Valorant, climbing the ranks isn't just about aiming better—it's about mastering your game sense and strategic play. While flashy kills and highlight-worthy moments are great, consistency in decision-making and sharpening your mechanics will take your gameplay to the next level. Ready to dominate? Let's dive into some essential tips to elevate your game sense and aiming skills! 💥

        1. 🧠 **Develop Your Game Sense**: 
        Game sense is your ability to predict enemy moves, make smart plays, and always be one step ahead. Here's how to refine it:
        - Map Awareness: Know the maps like the back of your hand.
        - Economy Management: Learn when to save or force-buy.
        - Crosshair Placement: Always keep your crosshair at head level.

        2. 🎯 **Aiming Training: The Path to Precision**:
        Improving aim takes dedication. Use tools like Aim Lab or Valorant's shooting range to perfect your mechanics.

        3. 💪 **Keep the Right Mentality**:
        Valorant can be mentally challenging. Stay positive, learn from your losses, and avoid tilt!
      `,
    },
  ];

  const categories = ['All', 'Gaming Insights', 'Strategy Guide', 'Training Guide'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="text-center py-16 px-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-4xl"></span>
            <h1 className="text-4xl lg:text-6xl font-bold text-red-500">
              VALORANT BLOG
            </h1>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest strategies, tips, and insights from the Valorant universe
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="flex justify-center mb-10">
          <div className="bg-gray-800 p-1 rounded-lg">
            <div className="flex gap-1">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-red-500 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && activeCategory === 'All' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-6 text-red-500">Featured Article</h2>
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-red-500 transition-all duration-300">
              
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">{featuredPost.image}</span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  FEATURED
                </span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                {featuredPost.title}
              </h3>
              
              <p className="text-gray-400 mb-4">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span>👤</span>
                  {featuredPost.author}
                </div>
                <div className="flex items-center gap-2">
                  <span>📅</span>
                  {featuredPost.date}
                </div>
                <div className="flex items-center gap-2">
                  <span>⏱️</span>
                  {featuredPost.readTime}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {featuredPost.tags.map(tag => (
                  <span key={tag} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <button
                onClick={() => setSelectedPost(featuredPost)}
                className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg font-bold transition-colors duration-200 flex items-center gap-2"
              >
                Read Full Article
                <span>➤</span>
              </button>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-red-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{post.image}</span>
                <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                  {post.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-gray-400 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-3 mb-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <span>👤</span>
                  {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <span>📅</span>
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <span>⏱️</span>
                  {post.readTime}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map(tag => (
                  <span key={tag} className="bg-gray-700 text-gray-400 px-2 py-1 rounded text-xs">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <button
                onClick={() => setSelectedPost(post)}
                className="w-full bg-red-500 hover:bg-red-600 py-2 rounded-lg font-bold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Read More
                <span>➤</span>
              </button>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-xl font-bold text-white mb-2">Pro Strategies</h3>
            <p className="text-gray-400">Learn from the best players</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg text-center">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="text-xl font-bold text-white mb-2">Rank Up Fast</h3>
            <p className="text-gray-400">Climb the competitive ladder</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-xl font-bold text-white mb-2">Latest Updates</h3>
            <p className="text-gray-400">Stay ahead of the meta</p>
          </div>
        </div>
      </div>

      {/* Modal for Full Article */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
          <div className="bg-gray-800 rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{selectedPost.image}</span>
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-white">
                      {selectedPost.title}
                    </h2>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                      <span>{selectedPost.author}</span>
                      <span>{selectedPost.date}</span>
                      <span>{selectedPost.readTime}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-gray-400 hover:text-white text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {selectedPost.content}
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map(tag => (
                    <span key={tag} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;