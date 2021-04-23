import './SingleRepo.scss';
import { BiGitRepoForked, BiStar, BiAlarmExclamation, BiRefresh } from 'react-icons/bi';

function SingleRepo(data) {
  return (
    <div className="single-repository">
      <span className="single-repository-title">{data.name}</span>
      <p className="single-repository-description">{data.description}</p>
      <ul className="single-repository-specs">
        <li>{data.language}</li>
        <li><BiStar/>{data.stargazers}</li>
        <li><BiAlarmExclamation/>{data.openIssues}</li>
        <li><BiGitRepoForked/>{data.forks}</li>
        <li><BiRefresh/>Last update: {data.updatedAt}</li>
      </ul>
    </div>
  );
}

export default SingleRepo;
