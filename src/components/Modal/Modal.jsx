import { Component } from 'react';
import { ModalCard, Overlay } from './Modal.styled';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown, false);
  }

  handleKeyDown = e => {
    if (e.keyCode === 27) {
      this.props.onClose();
    }
  };

  render() {
    const { image, onClose } = this.props;
    return (
      <Overlay onClick={() => onClose}>
        <ModalCard onClick={e => e.stopPropagation()}>
          <img src={image.largeImageURL} alt={image.tags} />
        </ModalCard>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
