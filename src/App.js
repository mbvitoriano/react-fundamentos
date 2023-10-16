import React, { Fragment } from 'react';

import Post from './Post';
import Header from './Header'

const category = 'Belo Horizonte'

const posts = [
  { title: 'Title#01', subtitle: 'Sub#01', valor: 100 },
  { title: 'Title#02', subtitle: 'Sub#02', valor: 120 },
  { title: 'Title#03', subtitle: 'Sub#03', valor: 130 },
  { title: 'Title#04', subtitle: 'Sub#04', valor: 140 },
  { title: 'Title#05', subtitle: 'Sub#05', valor: 150 },
  { title: 'Title#06', subtitle: 'Sub#06', valor: 160 },
  { title: 'Title#07', subtitle: 'Sub#07', valor: 170 },
  { title: 'Title#08', subtitle: 'Sub#08', valor: 180 },
]

function App() {
  return (
    <Fragment>

      <Header>
        <h1 id="title">Agenda Shows</h1>
        <h2>{category}</h2>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key = {post.title}
          valor = {post.valor}
          post={{
            title: post.title,
            subtitle: post.subtitle,
          }}
        />
      ))}


    </Fragment>
  )
}

export default App;