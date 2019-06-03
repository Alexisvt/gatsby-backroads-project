import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';

export default () => (
  <>
    <Layout>
      Hello world!
      <Link to="/blog/">blog page</Link>
    </Layout>
  </>
)
