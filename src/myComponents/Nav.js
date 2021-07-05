import React from 'react';
import { Link } from 'react-router-dom';

// definig routes
const LINKS = [
    {
        to: '/',
        text: 'HomePage',
    },
    {
        to: '/starred',
        text: 'Starred',
    },
];

export const Nav = () => {
    return (
        <div>
            <ul>
                {LINKS.map(item => (
                    <li key={item.to}>
                        <Link to={item.to}> {item.text} </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
