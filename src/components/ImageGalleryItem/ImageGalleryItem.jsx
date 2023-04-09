import { Component } from 'react';
import { Item } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export class CardItem extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown, false);
  }

  handleKeyDown = e => {
    if (e.keyCode === 27) {
      this.setState({ showModal: false });
    }
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  render() {
    const { image } = this.props;
    return (
      <Item onClick={this.handleOpenModal}>
        <img src={image.webformatURL} alt={image.tags} width="350" />
        {this.state.showModal && <Modal image={image} />}
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
