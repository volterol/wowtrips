import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Assuming you're using React Router
import axios from 'axios';
import './article.css'; // Optional: for custom styles

export default function Article() {
  const { slug } = useParams(); // Get slug from URL params (e.g., local-gems-discovering-affordable-and-authentic-experiences)
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the post by slug from the WordPress REST API
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://wowtrips.eu/wp-json/wp/v2/posts?slug=${slug}&_embed`);
        if (response.data.length > 0) {
          setPost(response.data[0]); // Assuming the first result is the correct post
        } else {
          setError('Post not found');
        }
      } catch (error) {
        setError('Error fetching the post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="article">
      <h1 className='text-2xl font-bold mb-4'>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
}
