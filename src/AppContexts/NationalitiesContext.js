import { useState, createContext } from "react";

export const NationalitiesContext = createContext();

const NationalitiesContextProvider = (props) => {
  const [nationalityParams, setNationalityParams] = useState([]);

  const filterByCountry = (isChecked, value) => {
    if (isChecked) {
      nationalityParams.find((nat) => nat == value) ||
        setNationalityParams([...nationalityParams, value]);
    } else {
      let indexOfCurrNat = nationalityParams.indexOf(value);
      indexOfCurrNat > -1 && nationalityParams.splice(indexOfCurrNat, 1);
      setNationalityParams([...nationalityParams]);
    }
  };

  return (
    <NationalitiesContext.Provider
      value={{ nationalityParams, setNationalityParams, filterByCountry }}
    >
      {props.children}
    </NationalitiesContext.Provider>
  );
};

export default NationalitiesContextProvider;
