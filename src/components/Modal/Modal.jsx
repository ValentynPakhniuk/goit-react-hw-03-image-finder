import { ModalCard, Overlay } from './Modal.styled';
import PropTypes from 'prop-types';

export const Modal = ({ image }) => {
  return (
    <Overlay>
      <ModalCard>
        <img src={image.largeImageURL} alt={image.tags} />
      </ModalCard>
    </Overlay>
  );
};

Modal.propTypes = {
  image: PropTypes.exact({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};
