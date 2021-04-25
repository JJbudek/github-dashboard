import React, { useEffect, useState } from 'react';

import SingleRepo from './SingleRepo/SingleRepo'
import Pagination from './Pagination/Pagination'

import './Repositories.scss';

const Repositories = ({ data }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  
  // When there is a props change (user switched) we reset current page to 1
  useEffect(() => {
    setCurrentPage(1)
  }, [data])

  if (!data || data.length === 0) return <p>No repos, sorry</p>;
  return (
    <section className="repositories">
      <span className="repositories-counter">Total repositories (<span>{data.length}</span>)</span>
      {currentPosts.map(user => {
        return (
          <SingleRepo
            key={user.id}
            name={user.name}
            description={user.description}
            language={user.language}
            stargazers={user.stargazers_count}
            forks={user.forks_count}
            openIssues={user.open_issues_count}
            updatedAt={user.updated_at.substring(0, 10)}
            url={user.html_url}
          />
        )
      })}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </section>
  );
}

export default Repositories;
