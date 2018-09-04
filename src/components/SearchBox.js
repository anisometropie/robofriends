import React from 'react';

function SearchBox( {searchChange} ) {
	return (
		<input type='search' placeholder='search robots' onChange={searchChange} />
	);
}

export default SearchBox;
