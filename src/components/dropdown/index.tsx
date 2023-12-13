import { useState, useRef } from 'react';
import Menu from './menu';
import TextBox from './textbox';
import useClickOutside from '../../hooks/useClickOutside';

import './dropdown.scss';

export type list = {
  id: number;
  text: string;
  selected: boolean;
};

function Dropdown() {
  const [list, setList] = useState<list[] | []>([]);
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => {
    setShowMenu(false);
  });

  const addList = (value: string) => {
    setList([...list, { id: list.length, text: value, selected: false }]);
  };

  const updateList = (id: number) => {
    const newList = [...list].map((item) => {
      if (item.id === id) {
        item.selected = !item.selected;
      }
      return item;
    });

    setList(newList);
  };

  return (
    <div className='dropdown' ref={dropdownRef}>
      <TextBox
        updateList={addList}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />

      {showMenu && <Menu list={list} updateList={updateList} />}
    </div>
  );
}

export default Dropdown;
