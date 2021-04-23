import './SingleRepo.scss';
import { BiGitRepoForked, BiStar, BiAlarmExclamation, BiRefresh } from 'react-icons/bi';

function SingleRepo({
  name,
  description,
  language,
  stargazers,
  openIssues,
  forks,
  updatedAt
}) {
  return (
    <div className="single-repository">
      <span className="single-repository-title">{name || 'Name not specified'}</span>
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
