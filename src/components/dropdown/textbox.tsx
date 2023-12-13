import React, { useState } from 'react';

type TextBoxProps = {
  showMenu: boolean;
  setShowMenu: (arg: boolean) => void;
  updateList: (arg: string) => void;
};

function TextBox({ updateList, showMenu, setShowMenu }: TextBoxProps) {
  const [input, setInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (!showMenu) {
      setShowMenu(true);
    }
  };

  const checkKeyPress = (e: React.KeyboardEvent) => {
    const { keyCode } = e;
    if (keyCode === 13) {
      updateList(input);
      setInput('');
    }
  };

  const handleClick = () => {
    if (!showMenu) {
      setShowMenu(true);
    }
  };

  return (
    <>
      <input
        type='text'
        value={input}
        placeholder='Type here...'
        onClick={handleClick}
        onChange={handleChange}
        onKeyDown={checkKeyPress}
      />
    </>
  );
}

export default TextBox;
