import React, { useState } from 'react';
import { MainPageLayout } from '../myComponents/MainPageLayout';
import { apiGet } from '../misc/config';
import { ShowCard } from '../myComponents/shows/ShowCard';
import { ShowGrid } from '../myComponents/shows/ShowGrid';
import { ActorGrid } from '../myComponents/actors/ActorGrid';

export const HomePage = () => {
    const [input, setInput] = useState('');
    const [result, setResults] = useState(null);
    const [searchOption, setSearchOption] = useState('shows');

    const isShowsSearch = searchOption === 'shows';

    const onInputChange = ev => {
        setInput(ev.target.value);
    };

    const onSearch = () => {
        apiGet(`/search/${searchOption}?q=${input}`).then(result => {
            setResults(result);
            console.log(result);
        });
    };

    // ***search URL***
    //     https://api.tvmaze.com/search/shows?q=aliens

    // ***ENCAPSULATED THE FETCH LOGIC IN A CUSTOM FUNCTION***

    //     fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
    //         .then(r => r.json())
    //         .then(result => {
    //             setResults(result);
    //             console.log(result);
    //         });
    // };

    const onKeyDown = ev => {
        if (ev.keyCode === 13) {
            onSearch();
        }
    };

    const onRadioChange = ev => {
        setSearchOption(ev.target.value);
    };
    console.log(searchOption);

    const renderResults = () => {
        if (result && result.length === 0) {
            return <div>No Desired Result Found!</div>;
        }

        if (result && result.length > 0) {
            return result[0].show ? (
                <ShowGrid data={result} />
            ) : (
                <ActorGrid data={result} />
            );
        }

        return null;
    };

    return (
        <MainPageLayout>
            <input
                type="text"
                placeholder="Search Something"
                onChange={onInputChange}
                onKeyDown={onKeyDown}
                value={input}
            />

            <div>
                <label htmlFor="shows-search">
                    Shows
                    <input
                        type="radio"
                        name=""
                        id="shows-search"
                        value="shows"
                        checked={isShowsSearch}
                        onChange={onRadioChange}
                    />
                </label>

                <label htmlFor="actors-search">
                    Actors
                    <input
                        type="radio"
                        name=""
                        id="actors-search"
                        value="people"
                        checked={!isShowsSearch}
                        onChange={onRadioChange}
                    />
                </label>
            </div>

            <button type="button" onClick={onSearch}>
                Search
            </button>
            {renderResults()}
        </MainPageLayout>
    );
};
