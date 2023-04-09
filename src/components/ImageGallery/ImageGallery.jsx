import { getPixaBay } from 'components/fetch';
import { Component } from 'react';
import { CardItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { CardList } from './ImageGallery.styled';
import { Button } from 'components/Button/Button.styled';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';
import { PER_PAGE } from 'components/fetch';

export class ImageGallery extends Component {
  state = {
    cardsToShow: 0,
    picture: null,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const searchText = this.props.searchText.trim();

    if (
      (prevProps.searchText !== searchText && searchText) ||
      prevProps.page !== this.props.page
    ) {
      this.setState({ isLoading: true, error: null });
      getPixaBay(searchText, this.props.page)
        .then(data => {
          const hits = data.hits.length;
          const totalHits = data.totalHits;
          const quotientPage = Math.ceil(totalHits / PER_PAGE);
          this.setState({ cardsToShow: totalHits });
          if (hits === 0) {
            this.setState({
              picture: null,
            });
            return toast.error(
              'Sorry, there are no images matching your search query. Please try again.'
            );
          }
          if (this.props.page !== 1) {
            this.setState({ picture: [...this.state.picture, ...data.hits] });
          } else {
            this.setState({ picture: [...data.hits] });
          }
          if (this.props.page === quotientPage) {
            return toast(
              "We're sorry, but you've reached the end of search results."
            );
          }
        })
        .catch(error => {
          this.setState({ error });
          toast.error(error.response.data);
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  render() {
    const { picture, isLoading, cardsToShow, error } = this.state;
    return (
      <>
        <Loader isLoading={isLoading} />
        {error && <h1>{error.response.data}</h1>}
        {picture && (
          <>
            <CardList>
              {picture.map(el => (
                <CardItem key={el.id} image={el} />
              ))}
            </CardList>
            {cardsToShow > picture.length && (
              <Button type="button" onClick={this.props.handleLoad}>
                Load more
              </Button>
            )}
          </>
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  searchText: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
