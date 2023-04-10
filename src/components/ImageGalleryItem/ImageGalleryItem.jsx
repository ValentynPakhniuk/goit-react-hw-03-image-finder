import { Component } from 'react';
import { Item } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export class CardItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  render() {
    const { image } = this.props;
    // const { showModal } = this.state;
    return (
      <Item onClick={this.toggleModal}>
        <img src={image.webformatURL} alt={image.tags} width="350" />
        {this.state.showModal && (
          <Modal image={image} onClose={this.toggleModal} />
        )}
      </Item>
    );
  }
}

CardItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};
