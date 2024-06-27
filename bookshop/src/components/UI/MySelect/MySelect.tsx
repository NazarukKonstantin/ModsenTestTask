import classes from './MySelect.module.css';

interface MySelectProps {
  options: { name: string; value: string }[];
  onChange: (value: string) => void;
  selectValue: string;
  selectTitle: string;
}

const MySelect = (
  { options, onChange, selectValue, selectTitle = 'select' }: MySelectProps,
  className: HTMLSelectElement
) => {
  return (
    <select
      className={classes.mySelect + ' ' + className}
      title={selectTitle}
      value={selectValue}
      onChange={(event) => onChange(event.target.value)}
    >
      {options.map((opt) => {
        return (
          <option
            key={opt.value}
            value={opt.value}
            className={classes.myOption}
          >
            {opt.name}
          </option>
        );
      })}
    </select>
  );
};

export default MySelect;
