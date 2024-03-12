import React, { useEffect, useState } from 'react';
import style from './Tabs.module.css';
import assignId from '../../../utils/randomID';
import { ReactComponent as ArrowIcon } from './img/arrow.svg';
import { ReactComponent as HomeIcon } from './img/home.svg';
import { ReactComponent as PostIcon } from './img/post.svg';
import { ReactComponent as SaveIcon } from './img/save.svg';
import { ReactComponent as EyeIcon } from './img/eye.svg';
import debounceRaf from '../../../utils/debounce';

const LIST = [
  { value: 'Главная', Icon: HomeIcon },
  { value: 'Просмотренные', Icon: PostIcon },
  { value: 'Сохраненые', Icon: SaveIcon },
  { value: 'Мои посты', Icon: EyeIcon }
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);
  return (
    <div className={style.container}>
      {isDropdown && (<div className={style.wrapperBtn}>
        <button
          className={style.btn}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          open
          <ArrowIcon />
        </button>
      </div>)}

      {(isDropdownOpen || !isDropdown) && (<ul className={style.list} >
        {
          LIST.map(({ value, id, Icon }) => (
            <li className={style.item} key={id}>
              <button className={style.btn} onClick={() => { }}>{value}
                <Icon width={30} height={30} />
              </button>
            </li>
          ))
        }
      </ul>)}
    </div>
  );
};
