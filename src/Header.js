import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default function Header(props) {
  return (
    <Fragment>
      <h1>{props.title}</h1>
      {props.children}
    </Fragment>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node

}