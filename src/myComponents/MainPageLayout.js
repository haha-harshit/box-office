import React from 'react';
import { MemoizedNav, Nav } from './Nav';
import { MemoizedTitle, Title } from './Title';

export const MainPageLayout = ({ children }) => {
    return (
        <div>
            <MemoizedTitle
                title="Box-Office"
                subtitle="Are you looking for a Movie/Actor"
            />

            <MemoizedNav />
            {children}
        </div>
    );
};
