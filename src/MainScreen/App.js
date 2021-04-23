import React, { useEffect, useState } from 'react';

import '../MainScreen/styleVariables/Global.scss'
import './App.scss';

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Repositories from './components/Repositories/Repositories';

import { getUserData, getUserRepos } from '../api/api';

function App() {

  const [userReposData, setUserReposData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [currentUser, setCurrentUser] = useState('frozenfang');

  useEffect(() => {
    let mounted = true;
    getUserRepos(currentUser)
      .then(data => {
        if (mounted) {
          setUserReposData(data)
        }
      })
    getUserData(currentUser)
    .then(data => {
      if (mounted) {
        setUserData(data)
      }
    })
    return () => mounted = false;
  }, [])

  const handleUserChange = async (username) => {
    const reposData = await getUserRepos(username);
    const userData = await getUserData(username);
    setUserReposData(reposData)
    setUserData(userData)
    console.log(reposData)
    console.log(userData)
  }

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
