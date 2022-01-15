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
    <div>
      <div>
        <select name="" id="">
          <option value="hello">hello</option>
          <option value="hello">hello</option>
          <option value="hello">hello</option>
        </select>
      </div>

      <div className="sortYear">
        <button onClick={handleLtH}>sort by old song</button>
        <button onClick={handleHtL}>sort Year- High to Low</button>
      </div>
    </div>
  );
};
