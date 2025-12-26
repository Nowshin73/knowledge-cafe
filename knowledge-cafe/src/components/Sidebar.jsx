const Sidebar = ({ readTime, bookmarks }) => {
  return (
    <section className="side-part">
      <div className="readtime">
        <h2 className="spend-time">
          Spend time on read: {readTime} min
        </h2>
      </div>

      <h2>Bookmarked Blogs : {bookmarks.length}</h2>

      <div className="bookmarkdiv">
        {bookmarks.map(b => (
          <div key={b.id} className="bookmark">
            <h3>{b.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sidebar;
