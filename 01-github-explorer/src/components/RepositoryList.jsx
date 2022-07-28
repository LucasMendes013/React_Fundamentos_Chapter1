import React, { useEffect } from 'react'
import { useState } from 'react'
import { RepositoryItem } from './RepositoryItem'
import '../styles/repositories.scss'

export function RepositoryList(){
  const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'www.google.com'
  }

  const [repositories, setRepositories] = useState([])

  //useEffect recebe dois parâmetros, o primeiro deles é:
  //Qual função eu quero executar, e segundo:
  //Quando que eu quero executar essa função.

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())
    .then(data => console.log(data))
  }, [repositories])

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
      <RepositoryItem repository={repository} />
      <RepositoryItem repository={repository} />
      <RepositoryItem repository={repository} />
      <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}

export default RepositoryList