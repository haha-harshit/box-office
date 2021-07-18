import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { SearchCard } from '../styled';

export const ShowCard = ({ id, image, name, summary }) => {
    const summaryAsText = summary
        ? `${summary
              .split(' ')
              .slice(0, 10)
              .join(' ')
              .replace(/<.+?>/g, '')}...`
        : 'No Description';

    return (
        <SearchCard>
            <div className="img-wrapper">
                <img src={image} alt="showImage" />
            </div>

            <h1>{name}</h1>
            <p>{summaryAsText}</p>
            <div>
                <Link to={`/show/${id}`}>Read More</Link>
                <button type="button">Star Me</button>
            </div>
        </SearchCard>
    );
};
