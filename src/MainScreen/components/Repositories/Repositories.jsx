import SingleRepo from './SingleRepo/SingleRepo'
import './Repositories.scss';

function Repositories() {
  return (
    <section>
        <h1>Repositiores</h1>
        <SingleRepo></SingleRepo>
        <SingleRepo></SingleRepo>
        <SingleRepo></SingleRepo>
    </section>
  );
}

export default Repositories;
