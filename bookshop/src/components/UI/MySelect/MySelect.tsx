import React from 'react';

interface MySelectProps {
  options: { name: string; value: string }[];
  onChange: (value: string) => void;
  selectValue: string;
  selectTitle: string;
}

const MySelect = ({
  options,
  onChange,
  selectValue,
  selectTitle = 'select',
}: MySelectProps) => {
  return (
    <select
      title={selectTitle}
      value={selectValue}
      onChange={(event) => onChange(event.target.value)}
    >
      {options.map((opt) => {
        return (
          <option key={opt.value} value={opt.value}>
            opt.name
          </option>
        );
      })}
    </select>
  );
};

export default MySelect;
