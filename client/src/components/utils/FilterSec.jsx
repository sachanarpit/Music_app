export const FilterSec = ({ artist, fetchData, setFetchData }) => {
  // console.log(fetchData);
  const handleLtH = () => {
    let ans = [...fetchData].sort((a, b) => a.year - b.year);
    setFetchData(ans);
  };
  const handleHtL = () => {
    let ans = [...fetchData].sort((a, b) => b.year - a.year);
    setFetchData(ans);
  };
  return (
    <div className="m-4">
      <div className="sortYear">
        <center>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={handleLtH}
          >
            sort by old song
          </button>

          <button
            type="button"
            className="btn btn-outline-success"
            onClick={handleHtL}
          >
            sort Year- High to Low
          </button>
        </center>
      </div>
    </div>
  );
};
