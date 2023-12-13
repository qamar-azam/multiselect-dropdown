import { list as listType } from './index';

type MenuProps = {
  list: listType[];
  updateList: (id: number) => void;
};

function Menu({ list, updateList }: MenuProps) {
  if (list.length === 0) {
    return null;
  }
  return (
    <div className='dropdown-menu'>
      <ul>
        {list.map((item) => (
          <li
            key={item.id}
            className={item.selected ? 'selected' : ''}
            onClick={() => updateList(item.id)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
