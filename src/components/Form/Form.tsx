import React, { useState } from "react";
import { apiResponse } from "../../api-response";
import RadioButton from '../RadioButton/RadioButton';

const Form = ()  => {
  const [menuState, setMenuState] = useState<any>({});

  const handleSubmit = () => {
    alert('submitted');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {apiResponse.menus.map((group: MenusType[], index: number) => (
          <div key={index}>
           <br/>
           {group.map((menu: MenusType) => (
             <div key={menu.id}>
               <RadioButton 
                 menu={menu}
                 index={index}
                 menuState={menuState}
                 setMenuState={setMenuState}
               />
               <label>{menu.value}</label>
             </div>
           ))}
          </div>
        ))}
        <button type="submit" disabled={!menuState[2]}>
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;