import React from 'react';
import { Fetcher } from 'openapi-typescript-fetch';
import useSWR from 'swr';

import './App.css';
import { paths } from './openapi/openapi';

const fetcher = Fetcher.for<paths>();

fetcher.configure({
  baseUrl: 'http://localhost:8000',
});

const fetchRoot = fetcher.path('/').method('get').create();

function App() {
  const { data, error } = useSWR('/', fetchRoot);

  if (error) {
    return <div>error</div>
  }

  if (!data) {
    return <div>loading</div>
  }

  return (
    <div className="App">
      <p>{JSON.stringify(data.data)}</p>
    </div>
  );
}

export default App;
