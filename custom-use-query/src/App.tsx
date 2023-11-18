// import UseFetchApp from './example1/App';
// import UseQueryApp from './example2/App.tsx';
// import Example3 from './example3/App.tsx';
import Example4 from './example4/App.tsx';

function App() {
  return (
    // <UseFetchApp />
    // <UseQueryApp />
    // <Example3 />

    // GYU-TEST-example4 - error boundary 미적용
    <Example4 />

    // GYU-TEST-example4 - error boundary 적용
    // <ErrorBoundary>
    //   <Example4 />
    // </ErrorBoundary>
  );
}

export default App;
