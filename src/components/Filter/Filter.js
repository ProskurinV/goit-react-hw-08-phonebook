import { PropTypes } from 'prop-types';

import { FindWrapper, FindTitle, Input } from './Filter.styled';

export default function Filter({ title, onChange, value }) {
  return (
    <FindWrapper>
      <FindTitle>{title}</FindTitle>
      <Input
        type="text"
        name="filter"
        placeholder="Enter search name"
        value={value}
        onChange={onChange}
      />
    </FindWrapper>
  );
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
