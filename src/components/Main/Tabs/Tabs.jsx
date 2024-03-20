import React, { useEffect, useState } from 'react';
import style from './Tabs.module.css';
import assignId from '../../../utils/randomID';
import { ReactComponent as ArrowIcon } from './img/arrow.svg';
import { ReactComponent as HomeIcon } from './img/home.svg';
import { ReactComponent as HotIcon } from './img/hot.svg';
import { ReactComponent as TopIcon } from './img/top.svg';
import { ReactComponent as BestIcon } from './img/best.svg';
import debounceRaf from '../../../utils/debounce';
import { Text } from '../../../UI/Text';
import { useNavigate } from 'react-router-dom';

const LIST = [
  { value: 'Главная', Icon: HomeIcon, link: 'rising' },
  { value: 'Топ', Icon: TopIcon, link: 'top' },
  { value: 'Лучшее', Icon: BestIcon, link: 'best' },
  { value: 'Горячее', Icon: HotIcon, link: 'hot' }
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);
  const [dropDownMenu, setDropdownMenu] = useState(LIST[0].value);
  const navigate = useNavigate();

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  const changeMenu = (text) => {
    setDropdownMenu(text);
    setIsDropdownOpen(false);
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
          <Text >{dropDownMenu}</Text>
          <ArrowIcon />
        </button>
      </div>)}

      {(isDropdownOpen || !isDropdown) && (<ul className={style.list} >
        {
          LIST.map(({ value, id, Icon, link }) => (
            <li className={style.item} key={id}>
              <button className={style.btn}
                onClick={() => {
                  changeMenu(value);
                  navigate(`/category/${link}`);
                }}><Text>{value}</Text>
                <Icon width={30} height={30} />
              </button>
            </li>
          ))
        }
      </ul>)}
    </div>
  );
};
