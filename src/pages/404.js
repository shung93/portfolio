import React from 'react';
import Layout from '../components/layout/layout';
import { Link } from 'gatsby';

const NotFoundPage = () => {
  return (
    <Layout>
      <title>Not found</title>
      <h1>Sorry - We couldn't find the page you're looking for.</h1>
      <p>
        The address may be incorrect or the page has moved. 
      </p>
    </Layout>
  )
}

export default NotFoundPage;