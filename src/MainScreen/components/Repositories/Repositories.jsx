import SingleRepo from './SingleRepo/SingleRepo'
import './Repositories.scss';


function Repositories({data}) {
  if(data.length < 1){
    return(<p>loading..</p>);
  }
  return (
    <section className="repositories">
      <span className="repositories-counter">Total repositories (<span>{data.length}</span>)</span>
      {data.map(user => {
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
          />
        )
      })}

    </section>
  );
}

export default Repositories;
