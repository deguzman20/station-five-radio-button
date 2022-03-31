import React, { useState, useCallback, useEffect } from "react";
import { apiResponse } from "../../api-response";

interface RadioButtonProps {
  index: number;
  menu: MenusType;
  menuState: any;
  setMenuState: any; 
}

const RadioButton: React.FC<RadioButtonProps> = ({ 
  index, 
  menu, 
  menuState,
  setMenuState  
}) => {

  const [updatedMenuState, setUpdatedMenuState] = useState(null);

  useEffect(() => {
    const keyCount = Object.keys(menuState).length;
    if(keyCount >= 2) {
      setUpdatedMenuState(menuState[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiResponse.rules[menuState[0]]]);
  
 
  const handleCheckValue = useCallback(
    (index: number, id: string): boolean => {
      const keyCount = Object.keys(menuState).length;
      const updatedId = updatedMenuState;
      const specificRule = apiResponse.rules[updatedId ? updatedId : menuState[keyCount >= 2 ? 1 : index - 1]] 
        ?? apiResponse.rules[updatedId ? updatedId : menuState[index - 1]];
   
      if (index === 0) return false;
      
      if (
        specificRule &&
        specificRule.length
      ) {
        return specificRule.includes(parseInt(id));
      } else {        
        if(keyCount >= 2) {
          return Boolean(apiResponse.rules[menuState[1]]);
        } else {
          return true;
        }
    }
  }, [menuState, updatedMenuState]);

  const handleChangeValue = (index: number, id: string) => {
    if (index === 0) {
      setMenuState({
        [index]: id,
      });
    }

    setMenuState({
      ...menuState,
      [index]: id,
    });
  };

  return (
    <input
      type="radio"
      id={menu.id}
      onChange={handleChangeValue.bind(null, index, menu.id)}
      disabled={handleCheckValue(index, menu.id)}
      name={index.toString()}
      value={menu.value}
    />
  );
};

export default RadioButton;
