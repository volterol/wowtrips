import React, { useState, useEffect } from 'react';
import Pagination from './pagination';
import './main.css';

const apiDomain = `https://wp.wowtrips.eu`;

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10; // Number of posts per page
  const [totalPosts, setTotalPosts] = useState(0);

  // Fetch search results
  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get('query');
    const fetchPosts = async () => {
      const response = await fetch(`${apiDomain}/wp-json/wp/v2/posts?search=${query}&_embed&per_page=10`);
      const data = await response.json();
      setSearchResults(data);
      setTotalPosts(data.length); // Update totalPosts for pagination
    };
    fetchPosts();
  }, []);

  // Get current posts (for pagination)
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = searchResults.slice(indexOfFirstPost, indexOfLastPost);

  // Handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Heading and description */}
      <h1 className="text-2xl font-bold mb-4 p-5">Search Results</h1>
      <h2 className="text-1xl mb-4 p-5">Found {totalPosts} results for your search.</h2>

      {/* Blog list */}
      <div className="blog-list"> {/* 2-column layout */}
        {currentPosts.map((post) => (
          <div className="item" key={post.id}>
            <a href={`/${post.slug}`} className="block mb-4">
              {/* Featured image */}
              {post?._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.thumbnail?.source_url && (
                <img
                  src={post._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url}
                  alt={post.title.rendered}
                  className="w-full h-48 object-cover rounded-md"
                />
              )}
            </a>
            <h2 className="text-xl font-semibold mb-2">
              <a href={`/${post.slug}`} className="text-blue-600 hover:underline">
                {post.title.rendered.replace(/&#8211;/g, '–')}
              </a>
            </h2>
            <div className="text-sm text-gray-600 mb-2">
              {/* Format date */}
              {new Date(post.date).toLocaleDateString("en-GB")}
            </div>
            <div className="excerpt text-gray-700" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={totalPosts}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default SearchResults;
