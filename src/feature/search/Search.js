export const Search = ({ searchTerm, onChangeHandler, onClearSearchTermHandler }) => (
  <>
    <input type="text" value={searchTerm} onChange={onChangeHandler} />
    <button onClick={onClearSearchTermHandler}>X</button>
  </>
);