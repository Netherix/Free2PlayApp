

const SortingOptions = () => {
  return (
    <div>
      <div>
        <label htmlFor="platform">Platform:</label>
        <select name="platform" id="platform">
          <option value="pc">PC</option>
          <option value="browser">Browser</option>
        </select>
      </div>
      <div>
        <label htmlFor="sortBy">Sort By:</label>
        <select name="sortBy" id="sortBy">
          <option value="alphabetical">Alphabetical</option>
          <option value="release-date">Release Date</option>
          <option value="relevance">Relevance</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>
      <div>
        <label htmlFor="gameType">Game Type:</label>
        <select name="gameType" id="gameType">
          <option value="mmorpg">MMORPG</option>
          <option value="shooter">Shooter</option>
          <option value="social">Social</option>
          <option value="racing">Racing</option>
          <option value="sports">Sports</option>
          <option value="strategy">Strategy</option>
          <option value="fighting">Fighting</option>
          <option value="card-game">Card Game</option>
        </select>
      </div>
    </div>
  );
};

export default SortingOptions;
