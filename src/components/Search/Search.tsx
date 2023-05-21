import React from 'react';
import "./style.css";

interface Props {
    searchValue: string;
    setSearch: (arg: string) => void;
}

const Search: React.FC<Props> = ({ searchValue, setSearch }) => {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };


    return (
        <div className="search-box">
            <input className="search-container"
                type="text"
                value={searchValue}
                onChange={handleInputChange}
                placeholder="Search movies by title..."
            />
        </div>
    );
};

export default Search;