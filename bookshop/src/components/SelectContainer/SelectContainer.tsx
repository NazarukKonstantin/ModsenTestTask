import MySelect from '@uiMySelect/MySelect';
import '@components/SelectContainer/SelectContainer.css';

interface SelectContainerProps {
  optionsArr: { name: string; value: string }[];
  selectTitle: string;
  selectValueFunc: (value: string) => void;
  chosenValue: string;
}

const SelectContainer = ({
  optionsArr,
  selectTitle,
  selectValueFunc: selectValue,
  chosenValue,
}: SelectContainerProps) => {
  return (
    <div className="selectWithTitle">
      <h4 className="selectTitle">{selectTitle}</h4>
      <MySelect
        selectTitle={selectTitle}
        options={optionsArr}
        onChange={(value: string) => selectValue(value)}
        selectValue={chosenValue}
      />
    </div>
  );
};

export default SelectContainer;
