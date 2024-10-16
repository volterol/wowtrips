import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams
import './article.css';

const Page = () => {
    const { slug } = useParams(); // Extract the slug from the URL
    const [page, setPage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPage = async () => {
            setLoading(true);
            try {
                // Fetch the page by slug
                const url = `https://wowtrips.eu/wp-json/wp/v2/pages?slug=${slug}`; // Use the slug
                const response = await axios.get(url);
                const pageData = Array.isArray(response.data) ? response.data[0] : response.data;
                setPage(pageData);  // Set the page data
                console.log('Page data:', response.data[0]);
            } catch (error) {
                setError('Error fetching page');
            } finally {
                setLoading(false);
            }
        };

        fetchPage();
    }, [slug]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="article">
            <h1 className="text-2xl font-bold mb-4">{page.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        </div>
    );
};

export default Page;
