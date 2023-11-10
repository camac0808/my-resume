import { useRouteError } from 'react-router-dom';

export default function ErrorBoundary() {
  let error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Error {error.status}</h1>
      <p>{error.data}</p>
    </div>
  );
}

