import React from 'react';
import Layout from '../../hoc/Layout';
import Quiz from '../../containers/Quiz';

const App: React.FC = (): JSX.Element => {
  return (
    <Layout>
      <Quiz />
    </Layout>
  );
};

export default App;
