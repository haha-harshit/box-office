import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';
import { Cast } from '../myComponents/shows/Cast';
import { Details } from '../myComponents/shows/Details';
import { Seasons } from '../myComponents/shows/Seasons';
import { ShowMainData } from '../myComponents/shows/ShowMainData';
import { InfoBlock, ShowPagerWrapper } from './Show.styled';

const reducer = (prevState, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS': {
            return { isLoading: false, error: null, show: action.show };
        }

        case 'FETCH_FAILED': {
            return { ...prevState, isLoading: false, error: action.error };
        }

        default:
            return prevState;
    }
};

const initialState = {
    show: null,
    isLoading: true,
    error: null,
};

export const Show = () => {
    const { id } = useParams();

    const [{ show, isLoading, error }, dispatch] = useReducer(
        reducer,
        initialState
    );

    // console.log('state', state);

    // const [show, setShow] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
            .then(result => {
                if (isMounted) {
                    dispatch({ type: 'FETCH_SUCCESS', show: result });
                }
            })
            .catch(err => {
                if (isMounted) {
                    dispatch({ type: 'FETCH_FAILED', error: err.message });
                }
            });
        return () => {
            isMounted = false;
        };
    }, [id]);

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
