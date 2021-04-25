import './SingleRepo.scss';
import { BiGitRepoForked, BiStar, BiAlarmExclamation, BiRefresh } from 'react-icons/bi';

const handleRepoClick = (url) => {
  return window.open(url)
}

const SingleRepo = ({
  name,
  description,
  language,
  stargazers,
  openIssues,
  forks,
  updatedAt,
  url
}) => {
  return (
    <div className="single-repository">
      <span onClick={() => handleRepoClick(url)} className="single-repository-title">{name || 'Name not specified'}</span>
      <p className="single-repository-description">{description || 'Description not specified'}</p>
      <ul className="single-repository-specs">
        <li>{language || 'Language not specified'}</li>
        <li><BiStar/>{stargazers}</li>
        <li><BiAlarmExclamation/>{openIssues}</li>
        <li><BiGitRepoForked/>{forks}</li>
        <li><BiRefresh/>Last update: {updatedAt}</li>
      </ul>
    </div>
  );
}

export default SingleRepo;
