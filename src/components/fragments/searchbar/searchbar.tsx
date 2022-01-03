import React, { FC, useState } from 'react';

interface Props {
  onChange: (input: string) => void;
}

export const SearchBar = ({ onChange }: Props) => (
  <div className="searchbar">
    <input
      type="text"
      className="searchbar__input"
      placeholder="item..."
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default SearchBar;
