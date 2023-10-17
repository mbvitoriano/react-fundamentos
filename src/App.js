import React, { Fragment, useState } from 'react';

import Post from './Post';
import Header from './Header';

const category = 'Belo Horizonte';

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', valor: 100, read: false
    },
    {
      id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', valor: 120, read: true
    },
    {
      id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', valor: 130, read: false
    },
    {
      id: Math.random(), title: 'Title#04', subtitle: 'Sub#04', valor: 140, read: false
    },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Sub#0${prevState.length + 1}`,
        valor: 50,
        read: false
      },
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => (
      prevState.filter(post => post.id !== postId)
    )
  )
  }

  function handleReadPost(postId) {
    setPosts((prevState) => (
      prevState.map((post) => post.id === postId ? {...post, read: true} : post)
    ))
  }

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
          onRemove={handleRemovePost}
          onRead={handleReadPost}
          valor={post.valor}
          post={post}
        />
      ))}

    </>
  );
}

export default App;
