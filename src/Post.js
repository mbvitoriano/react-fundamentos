import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default function Post(props) {
  return (
    <Fragment>
      <article>
      <strong>{props.post.title}</strong><br />
      <small>{props.post.subtitle}</small><br />
      <small>Valor: R${props.valor}</small>
    </article>
    <br />
    </Fragment>
  )
}

Post.propTypes = {
  valor: PropTypes.number.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired

}
