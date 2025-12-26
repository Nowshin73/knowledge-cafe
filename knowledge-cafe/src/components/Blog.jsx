const Blog = ({ blog, onRead, onBookmark }) => {
  return (
    <div className="content">
      <div className="content-container">
        <img src={blog.cover} alt="" />

        <div className="author-min">
          <div className="author">
            <img src={blog.authorImg} alt="" />
            <div className="author-name">
              <h3>{blog.author}</h3>
              <p>{blog.date}</p>
            </div>
          </div>

          <div className="min">
            <span>{blog.readTime} min read</span>
            <button onClick={() => onBookmark(blog)}>🔖</button>
          </div>
        </div>

        <h1 className="blog-title">{blog.title}</h1>

        <button
          className="mark-read-btn"
          onClick={() => onRead(blog.readTime)}
        >
          Mark as read
        </button>
      </div>
    </div>
  );
};

export default Blog;
