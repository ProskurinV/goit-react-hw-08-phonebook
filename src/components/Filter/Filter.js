import { PropTypes } from 'prop-types';

import { FindWrapper, FindTitle, Input } from './Filter.styled';

export default function Filter({ title, onChange, filter }) {
  return (
    <FindWrapper>
      <FindTitle>{title}</FindTitle>
      <Input
        type="text"
        name="filter"
        placeholder="Enter search name"
        value={filter}
        onChange={onChange}
      />
    </FindWrapper>
  );
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
