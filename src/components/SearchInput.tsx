import React, {
  ChangeEventHandler,
  KeyboardEventHandler,
  useCallback,
} from 'react';
import styled from 'styled-components';

const Input = styled.input`
  line-height: 20px;
  flex: 1 1 auto;
  height: 100%;
  padding: 5px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 200;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.8);
  filter: drop-shadow(0 3px 3px rgba(0, 0, 0, 0.1));
`;

const Wrapper = styled.div`
  display: flex;
  flex: 0 0 50px;
`;

const Button = styled.button`
  border-radius: 5px;
  flex: 0 0 auto;
  margin-left: 10px;
  height: 100%;
  display: block;
  background: #090979;
  border: none;
  color: white;
  padding: 5px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #00d4ff;
  }
  &:disabled {
    background-color: rgba(0, 0, 0, 0.5);
    cursor: not-allowed;
  }
`;

type Props = {
  handleSearch: () => void;
  searchTerm: string;
  handleInputUpdate: (term: string) => void;
  disabled: boolean;
};

export default function SearchInput({
  searchTerm,
  handleSearch,
  handleInputUpdate,
  disabled,
}: Props) {
  const handleKeyDown: KeyboardEventHandler = useCallback(
    (event) => {
      if (event.key === 'Enter') handleSearch();
    },
    [handleSearch]
  );

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      handleInputUpdate(event.target.value);
    },
    [handleInputUpdate]
  );

  return (
    <Wrapper>
      <Input
        type="text"
        value={searchTerm}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        disabled={disabled}
      />
      <Button onClick={handleSearch} disabled={disabled}>
        Search
      </Button>
    </Wrapper>
  );
}
