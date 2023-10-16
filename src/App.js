import React, { Fragment, useState } from 'react';

import Post from './Post';
import Header from './Header';

const category = 'Belo Horizonte';

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', valor: 100,
    },
    {
      id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', valor: 120,
    },
    {
      id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', valor: 130,
    },
    {
      id: Math.random(), title: 'Title#04', subtitle: 'Sub#04', valor: 140,
    },
  ]);

  function handleRefresh() {
    setPosts([
      ...posts,
      {
        id: Math.random(),
        title: `Title#0${posts.length + 1}`,
        subtitle: `Sub#0${posts.length + 1}`,
        valor: 50,
      },
    ]);
  }

  console.log({ posts });

  return (
    <>

      <Header>
        <h1 id="title">Agenda Shows</h1>
        <h2>
          {category}
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post
          key={post.id}
          valor={post.valor}
          post={{
            title: post.title,
            subtitle: post.subtitle,
          }}
        />
      ))}

    </>
  );
}

export default App;
