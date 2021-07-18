import React from 'react';
import { useParams } from 'react-router-dom';

export const Show = () => {
    const params = useParams();
    console.log('params', params);

    return <div>This is Show Page</div>;
};
