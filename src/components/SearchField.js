export default function SearchField({ changeLinks, filterSearch, setFilterSearch }) {
    return (
        <div className="search-field">
            <input type="text" className="form-control"
                value={filterSearch}
                autoFocus={true}
                placeholder="Search..."
                list="key"

                onChange={(e) => {
                    changeLinks(e.target.value);
                    setFilterSearch(e.target.value)
                }} />
        </div>
    )
}