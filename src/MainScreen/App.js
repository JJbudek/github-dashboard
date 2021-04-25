import React, { useEffect, useState } from 'react';

import '../MainScreen/styleVariables/Global.scss'
import './App.scss';

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Repositories from './components/Repositories/Repositories';

import { getUserData, getAllRepos } from '../api/api';

import { sortArrayByStargazersCount } from './helpers/helpers'

const App = () => {
  const [userReposData, setUserReposData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [currentUser, setCurrentUser] = useState('frozenfang');

  const handleUserChange = async (username) => {
    try {
      const userData = await getUserData(username);
      const reposData = await getAllRepos(username, userData.public_repos);
      
      let sortedReposArray = sortArrayByStargazersCount(reposData);

      setUserReposData(sortedReposArray)
      setUserData(userData)
      
    } catch {
      alert('Are you sure that you entered an exisiting username?')
    }
  }

  useEffect(() => {
    handleUserChange(currentUser);
  }, [])

  return (
    <div>
    <main className="App-wrapper">
      <Header data={userData}></Header>
      <section className="content-wrapper">
        <Navbar fct={handleUserChange}></Navbar>
        <Repositories data={userReposData} />
      </section>
    </main>
    </div>
  );
}

export default App;