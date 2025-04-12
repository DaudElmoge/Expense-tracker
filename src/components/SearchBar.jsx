function SearchBar({ onSearch }) { // send the value of the search bar to the App component
  return (
    <input
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search expenses..."
      className="mb-4 p-2 w-full border rounded-3xl"
    />
  );
}

export default SearchBar;