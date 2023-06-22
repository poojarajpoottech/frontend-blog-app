import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';

HeadTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default function HeadTitle({ title }) {
  return (
    <Head>
      <title>{title} | DWS</title>
    </Head>
  );
}
