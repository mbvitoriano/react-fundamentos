import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default function Post(props) {
  return (
    <Fragment>
      <article>
      <strong>{props.post.read ? <s>{props.post.title}</s> : props.post.title}</strong>
      <button onClick={() => props.onRemove(props.post.id)}>Remover</button>
      <button onClick={() => props.onRead(props.post.id)}>Marcar como Lido</button><br />
      <small>{props.post.subtitle}</small><br />
      <small>Valor: R${props.post.valor}</small>
    </article>
    <br />
    </Fragment>
  )
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  onRead: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    valor: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired
  }).isRequired

}
