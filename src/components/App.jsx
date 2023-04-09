import { Component } from 'react';
import { Container } from './Container.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Toaster } from 'react-hot-toast';
export class App extends Component {
  state = {
    searchText: '',
    page: 1,
  };

  createSearchText = searchText => {
    this.setState({ searchText, page: 1 });
  };

  handleLoad = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const searchText = this.state.searchText;
    return (
      <Container>
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
        <Searchbar createSearchText={this.createSearchText} />
        <ImageGallery
          createSearch={searchText}
          searchText={this.state.searchText}
          page={this.state.page}
          handleLoad={this.handleLoad}
        />
      </Container>
    );
  }
}
