import React from 'react';

export const ActorCard = ({
    image,
    name,
    gender,
    country,
    birthday,
    deathday,
}) => {
    return (
        <div>
            <div>
                <img src={image} alt="actorImage" />
            </div>
            <h1>
                {name} {gender ? `(${gender})` : null}
            </h1>
            <p>{country ? `Comes from ${country}` : 'No Country Known'}</p>
            {birthday ? <p>Born {birthday}</p> : null}
            <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>
        </div>
    );
};
