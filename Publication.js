
// Publications.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Publications = () => {
  const [publications, setPublications] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await axios.get('http://localhost:5000/publications');
        setPublications(response.data);
      } catch (error) {
        console.error('Error fetching publications:', error);
      }
    };

    const fetchAuthors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/authors');
        setAuthors(response.data);
      } catch (error) {
        console.error('Error fetching authors:', error);
      }
    };

    fetchPublications();
    fetchAuthors();
  }, []);

  return (
    <div>
      <h2>Publications</h2>
      <ul>
        {publications.map((publication) => (
          <li key={publication.id}>
            <strong>Title:</strong> {publication.title}, <strong>Author:</strong> {publication.author}
          </li>
        ))}
      </ul>

      <h2>Authors</h2>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            <strong>Name:</strong> {author.name}, <strong>Email:</strong> {author.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Publications;
