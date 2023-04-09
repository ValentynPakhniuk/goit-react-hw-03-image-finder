import PulseLoader from 'react-spinners/PulseLoader';
import { BoxLoader } from './Loader.styled';
import PropTypes from 'prop-types';

export const Loader = ({ isLoading }) => {
  return (
    <BoxLoader>
      <PulseLoader
        color="#36d7b7"
        loading={isLoading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </BoxLoader>
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
