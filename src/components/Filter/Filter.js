import { PropTypes } from 'prop-types';
import { FindWrapper, FindTitle, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export default function Filter({ title }) {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onFilterChange = event => {
    dispatch(setFilter(event.currentTarget.value));
  };
  return (
    <FindWrapper>
      <FindTitle>{title}</FindTitle>
      <Input
        type="text"
        name="filter"
        placeholder="Enter search name"
        value={filter.value}
        onChange={onFilterChange}
      />
    </FindWrapper>
  );
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
};
