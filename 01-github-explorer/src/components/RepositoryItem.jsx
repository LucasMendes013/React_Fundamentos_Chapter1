import React from 'react'

export function RepositoryItem(props){
  return (
    <li>
      {/* Caso o repositóry esteja vazio , coloque Default */}
      {/* <strong>{props.repository ?? 'Default'}</strong> */}
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.link}>Acessar Repositório</a>
    </li>
  )
}
