import { Link } from 'react-router-dom';
import { GoBackBtn } from './BackLink.styled';
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi';

const BackLink = ({ to, children }) => {
  return (
    <>
      <Link to={to}>
        <GoBackBtn>
          <HiOutlineChevronDoubleLeft
            style={{
              width: '25px',
              height: '25px',
            }}
          />
          Go back
        </GoBackBtn>
        {children}
      </Link>
    </>
  );
};
export default BackLink;
