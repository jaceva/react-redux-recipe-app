import { useSelector } from 'react-redux';

import { selectSearchTerm } from 'searchSlice';
import { setSearchTerm, clearSearchTerm } from './searchSlice.js';

export const Search = () => {
  const searchTerm = useSelector(selectSearchTerm);

  const onSearchChangeHandler = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };
  
  const onClearSearchTermHandler = () => {
    dispatch(clearSearchTerm());
  };

  return (
  <>
    <input type="text" value={searchTerm} onChange={onSearchChangeHandler} />
    <button onClick={onClearSearchTermHandler}>X</button>
  </>
)};