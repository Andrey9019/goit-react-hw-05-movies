import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <h1>
      Page is not found. Please go back to <Link to="/">Home page</Link>
    </h1>
  );
};

export default NotFound;
