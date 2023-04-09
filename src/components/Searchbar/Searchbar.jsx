import { Component } from 'react';
import { toast } from 'react-hot-toast';
import { FaSistrix } from 'react-icons/fa';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchbarStyled,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.value.trim()) {
      return toast.error(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    this.props.createSearchText(this.state.value);
  };
  render() {
    return (
      <SearchbarStyled>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <FaSistrix size="20" />
            <span>Search</span>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </SearchForm>
      </SearchbarStyled>
    );
  }
}

Searchbar.propTypes = {
  createSearchText: PropTypes.func.isRequired,
};
