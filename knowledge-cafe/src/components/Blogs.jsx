import blogs from "../data/blogs.json";
import Blog from "./Blog";

const Blogs = ({ onRead, onBookmark }) => {
  return (
    <>
      {blogs.map(blog => (
        <Blog
          key={blog.id}
          blog={blog}
          onRead={onRead}
          onBookmark={onBookmark}
        />
      ))}
    </>
  );
};

export default Blogs;
