import React, { useEffect, useState } from 'react';

import '../MainScreen/styleVariables/Global.scss'
import './App.scss';

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Repositories from './components/Repositories/Repositories';

import { getUserData, getAllRepos } from '../api/api';

import { sortArrayByStargazersCount } from './helpers/helpers'

function App() {
  const [userReposData, setUserReposData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [currentUser, setCurrentUser] = useState('frozenfang');

  const handleUserChange = async (username) => {
    const userData = await getUserData(username);
    const reposData = await getAllRepos(username, userData.public_repos)

    let temp = sortArrayByStargazersCount(reposData);

    setUserReposData(temp)
    setUserData(userData)
  }

  useEffect(() => {
    handleUserChange(currentUser);
  }, [])

  return (
    <main className="App-wrapper">
      <Header data={userData}></Header>
      <section className="content-wrapper">
        <Navbar fct={handleUserChange}></Navbar>
        <Repositories data={userReposData}/>
      </section>
    </main>
  );
}

export default App;