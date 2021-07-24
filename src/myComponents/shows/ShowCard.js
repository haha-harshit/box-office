import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Star } from '../styled';
import { StyledShowCard } from './ShowCard.styled';

export const ShowCard = ({
    id,
    image,
    name,
    summary,
    onStarClick,
    isStarred,
}) => {
    console.log('render');
    const summaryAsText = summary
        ? `${summary
              .split(' ')
              .slice(0, 10)
              .join(' ')
              .replace(/<.+?>/g, '')}...`
        : 'No Description';

    return (
        <StyledShowCard>
            <div className="img-wrapper">
                <img src={image} alt="showImage" />
            </div>

            <h1>{name}</h1>
            <p>{summaryAsText}</p>
            <div className="btns">
                <Link to={`/show/${id}`}>Read More</Link>
                <button type="button" onClick={onStarClick}>
                    <Star active={isStarred} />
                </button>
            </div>
        </StyledShowCard>
    );
};

export const MemoizedShowCard = React.memo(ShowCard);