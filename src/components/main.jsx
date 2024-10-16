import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './pagination.jsx'; 
import './main.css';

export default function Main({ categoryId, tagId }) {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10; // Number of posts per page
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [totalPosts, setTotalPosts] = useState(0); // State for total posts
    const [categoryName, setCategoryName] = useState('');
    const [tagName, setTagName] = useState('');
    const [categoryDescription, setCategoryDescription] = useState('');
    const [tagDescription, setTagDescription] = useState('');

    // Fetch posts and descriptions
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            let apiUrl = `https://wowtrips.eu/wp-json/wp/v2/posts?_embed`; // Base URL for fetching posts

            // Add filters for category and tag if provided
            if (categoryId) {
                apiUrl += `&categories=${categoryId}`;
            }
            if (tagId) {
                apiUrl += `&tags=${tagId}`;
            }

            try {
                const response = await axios.get(apiUrl, {
                    params: {
                        per_page: postsPerPage,
                        page: currentPage,
                    },
                });

                setPosts(response.data);

                // Get total posts from response headers
                const totalPosts = response.headers['x-wp-total'];
                setTotalPosts(parseInt(totalPosts, 10)); // Set total posts count
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        const fetchCategoryName = async () => {
            if (categoryId) {
                try {
                    const response = await axios.get(`https://wowtrips.eu/wp-json/wp/v2/categories/${categoryId}`);
                    setCategoryName(response.data.name); // set category name
                } catch (error) {
                    console.error('Error fetching category name:', error);
                }
            }
        }

        const fetchTagName = async () => {
            if (tagId) {
                try {
                    const response = await axios.get(`https://wowtrips.eu/wp-json/wp/v2/categories/${tagId}`);
                    setTagName(response.data.name); // set category name
                } catch (error) {
                    console.error('Error fetching tag name:', error);
                }
            }
        }

        const fetchCategoryDescription = async () => {
            if (categoryId) {
                try {
                    const response = await axios.get(`https://wowtrips.eu/wp-json/wp/v2/categories/${categoryId}`);
                    setCategoryDescription(response.data.description); // Set category description
                } catch (error) {
                    console.error('Error fetching category description:', error);
                }
            }
        };

        const fetchTagDescription = async () => {
            if (tagId) {
                try {
                    const response = await axios.get(`https://wowtrips.eu/wp-json/wp/v2/tags/${tagId}`);
                    setTagDescription(response.data.description); // Set tag description
                } catch (error) {
                    console.error('Error fetching tag description:', error);
                }
            }
        };

        fetchPosts();
        fetchCategoryName();
        fetchTagName();
        fetchCategoryDescription();
        fetchTagDescription();
    }, [currentPage, categoryId, tagId]); // Fetch posts whenever the current page, category, or tag changes

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const totalPages = Math.ceil(totalPosts / postsPerPage); // Calculate total pages

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Function to get dynamic heading
    const getHeading = () => {
        if (tagName) {
            return tagName; 
        }
        if (categoryName) {
            return categoryName; 
        }
        return `Posts Filtered by Category ${categoryId} or Tag ${tagId}`; // Fallback heading
    };

    // Function to get dynamic description
    const getDescription = () => {
        if (tagDescription) {
            return tagDescription; // Return the tag description if available
        }
        if (categoryDescription) {
            return categoryDescription; // Return the category description if available
        }
        return `Posts Filtered by Category ${categoryId} or Tag ${tagId}`; // Fallback heading
    };

    return (
        <div>
            {(categoryId || tagId) && (
                <>
                    <h1 className="text-2xl font-bold mb-4 p-5">{getHeading()}</h1>
                    <h2 className="text-1xl mb-4 p-5">{getDescription()}</h2>
                </>
            )}
            <div className="blog-list">
                {posts.map((post) => (
                    <div className="item" key={post.id}>
                        <a href={`/${post.slug}`}>
                            {/* Conditionally render featured image */}
                            {post?._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.thumbnail?.source_url && (
                                <img
                                    src={post._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url}
                                    alt={post.title.rendered}
                                />
                            )}
                        </a>
                        <h2>
                            <a href={`/${post.slug}`}>
                                {/* Replace &#8211; with en-dash */}
                                {post.title.rendered.replace(/&#8211;/g, '–')}
                            </a>
                        </h2>
                        <div className="text-sm">
                            {/* Format date as DD/MM/YYYY */}
                            {new Date(post.date).toLocaleDateString("en-GB")}
                        </div>
                        <div className="excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                    </div>
                ))}
            </div>

            {/* Pagination Component */}
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={totalPosts}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
    );
}
