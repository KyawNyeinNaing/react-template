import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';
import Loading from './components/Loading';

const App = lazy(() => import('./App'))

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loading text="app loading ..."/>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
