import "./App.css";
import { useState, useEffect, useRef } from "react";
import Image from "./components/Image";
import Paginate from "./components/Paginate";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(30);
  // Fetch posts
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const data = await res.json();
      setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const lastIdx = currentPage * postsPerPage;
  const firstIdx = lastIdx - postsPerPage;
  const currentPosts = posts.slice(firstIdx, lastIdx);

  const nextpage = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="App">
      <h1>Get Free Images, Up to 5000</h1>
      <Image posts={currentPosts} loading={loading} />
      {!loading && (
        <Paginate
          totalPosts={1000}
          postPerPage={postsPerPage}
          nextpage={nextpage}
          currentPage={currentPage}
        />
      )}
    </div>
  );
}

export default App;
