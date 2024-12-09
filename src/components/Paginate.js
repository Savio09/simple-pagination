const Paginate = ({ totalPosts, postPerPage, currentPage, nextpage }) => {
  console.log(totalPosts, postPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  /** If the a tag has the active class then you want to remove the active class and put it on the next one you click */
  console.log(pageNumbers);
  return (
    <nav>
      {pageNumbers.map((number) => (
        <a
          onClick={(e) => nextpage(e, number)}
          href="#"
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </a>
      ))}
    </nav>
  );
};

export default Paginate;
