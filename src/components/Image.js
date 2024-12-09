const Image = ({ posts, loading }) => {
  console.log(posts);
  return (
    <div>
      {loading && <p>Loading...</p>}
      <div className="grid">
        {posts.map((post) => (
          <div key={post.id} className="card">
            <img src={post.url} alt={post.title} />
            <p>{post.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Image;
