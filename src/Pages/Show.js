import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

export const Show = () => {
    const { id } = useParams();

    const [show, setShow] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
            .then(result => {
                setTimeout(() => {
                    setShow(result);
                    setIsLoading(false);
                }, 500);
            })
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            });
    }, [id]);

    console.log('show', show);

    if (isLoading) {
        return <div>Data is being loaded...</div>;
    }

    if (error) {
        return <div>Error occured: {error}</div>;
    }

    return <div>This is Show Page</div>;
};
