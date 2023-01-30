import React, {useEffect, useState} from 'react';
import { Dropdown} from "semantic-ui-react";
import lang from "./../../lang/lang";

function LangSwitcher() {
  return <Dropdown
      text={lang.get().toUpperCase()}
      options={[
        {
          "key": "ru",
          "text": "RU",
          "value": "ru"
        },
        {
          "key": "en",
          "text": "EN",
          "value": "en"
        }
      ]}
      onChange={(e, { value })=>{
        lang.set(value as string)
      }}/>;
}

export default LangSwitcher;
