import { setSearchTerm, clearSearchTerm } from './searchSlice.js';

export const Search = ({ searchTerm, dispatch }) => {
  
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