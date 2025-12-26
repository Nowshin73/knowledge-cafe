import { useState } from "react";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  const [readTime, setReadTime] = useState(0);
  const [bookmarks, setBookmarks] = useState([]);

  const handleRead = (time) => {
    setReadTime(prev => prev + time);
  };

  const handleBookmark = (blog) => {
    if (!bookmarks.find(b => b.id === blog.id)) {
      setBookmarks([...bookmarks, blog]);
    }
  };

  return (
    <div className="App">
      <Header />
      <main>
        <section className="container">
          <Blogs onRead={handleRead} onBookmark={handleBookmark} />
          <Sidebar readTime={readTime} bookmarks={bookmarks} />
        </section>
      </main>
    </div>
  );
}

export default App;
