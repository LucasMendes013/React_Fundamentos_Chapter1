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

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

  const [repositories, setRepositories] = useState<Repository[]>([])

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
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name}  repository={repository} />
        })}
      </ul>
    </section>
  )
}

export default RepositoryList