import React, { useState } from 'react';
import { MainPageLayout } from '../myComponents/MainPageLayout';

export const HomePage = () => {
    const [input, setInput] = useState('');
    const [result, setResults] = useState(null);
    const onInputChange = ev => {
        setInput(ev.target.value);
    };

    const onSearch = () => {
        // https://api.tvmaze.com/search/shows?q=aliens
        fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
            .then(r => r.json())
            .then(result => {
                setResults(result);
                console.log(result);
            });
    };

    const onKeyDown = ev => {
        if (ev.keyCode === 13) {
            onSearch();
        }
    };

    const renderResults = () => {
        if (result && result.length === 0) {
            return <div>No Desired Result Found!</div>;
        }

        if (result && result.length > 0) {
            return (
                <div>
                    {result.map(item => (
                        <div key={item.show.id}>{item.show.name}</div>
                    ))}
                </div>
            );
        }

        return null;
    };

    return (
        <MainPageLayout>
            <input
                type="text"
                onChange={onInputChange}
                onKeyDown={onKeyDown}
                value={input}
            />
            <button type="button" onClick={onSearch}>
                Search
            </button>
            {renderResults()}
        </MainPageLayout>
    );
};
