import React from 'react';
import { ShowCard } from './ShowCard';

export const ShowGrid = ({ data }) => {
    return (
        <div>
            {data.map(({ show }) => (
                <ShowCard
                    key={show.id}
                    id={show.id}
                    name={show.name}
                    image={show.image ? show.image.medium : `Image Not Found`}
                    summary={show.summary}
                />
            ))}
        </div>
    );
};
