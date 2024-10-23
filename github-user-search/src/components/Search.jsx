import React, { useState, useEffect } from 'react';
import githubService from '../services/githubService';

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Debounced search function
    useEffect(() => {
        const handler = setTimeout(() => {
            if (query) {
                fetchUserData(query);
            }
        }, 300); // Adjust the debounce time as necessary

        return () => {
            clearTimeout(handler);
        };
    }, [query]);

    const fetchUserData = async (searchTerm) => {
        setLoading(true);
        setError('');
        try {
            const data = await githubService.fetchUserData(searchTerm);
            setResults(data);
        } catch (err) {
            setError('Looks like we can’t find the user');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search GitHub users..."
                className="border rounded p-2"
            />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div>
                {results.map(user => (
                    <div key={user.id}>
                        <img src={user.avatar_url} alt={user.login} className="rounded-full w-10 h-10" />
                        <p>{user.login}</p>
                        <a href={user.html_url} target="_blank" rel="noopener noreferrer">Profile</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
