import React from 'react';
import { useParams } from 'react-router-dom';
// import { apiGet } from '../misc/config';
import { useShow } from '../misc/custom-hooks';
import { Cast } from '../myComponents/shows/Cast';
import { Details } from '../myComponents/shows/Details';
import { Seasons } from '../myComponents/shows/Seasons';
import { ShowMainData } from '../myComponents/shows/ShowMainData';
import { InfoBlock, ShowPagerWrapper } from './Show.styled';

export const Show = () => {
    const { id } = useParams();

    const { show, isLoading, error } = useShow(id);

    console.log('show', show);
    // console.log('isLoading', isLoading);

    if (isLoading) {
        return <div>Data is being loaded...</div>;
    }

    if (error) {
        return <div>Error occured: {error}</div>;
    }

    return (
        <ShowPagerWrapper>
            <ShowMainData
                image={show.image}
                name={show.name}
                rating={show.rating}
                summary={show.summary}
                tags={show.genres}
            />

            {/* SHOW_DETAILS */}
            <InfoBlock>
                <h2>DETAILS</h2>
                <Details
                    status={show.status}
                    network={show.network}
                    premiered={show.premiered}
                />
            </InfoBlock>

            {/* SEASONS */}
            <InfoBlock>
                <h2>SEASONS</h2>
                <Seasons seasons={show._embedded.seasons} />
            </InfoBlock>

            {/* CAST */}
            <InfoBlock>
                <h2>CAST</h2>
                <Cast cast={show._embedded.cast} />
            </InfoBlock>
        </ShowPagerWrapper>
    );
};
