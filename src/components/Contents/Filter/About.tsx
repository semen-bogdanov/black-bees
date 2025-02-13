'use client';
import Image from 'next/image';
import avatar from '../../../../public/Filter/Avatar.jpg';
import vk from '../../../../public/Header/vk.svg';

export default function About() {
  return (
    <div className="filter__block">
      <div className="filter__about">
        <div className="filter__line"></div>
        <h2 className="filter__text">About Me</h2>
        <div className="filter__line"></div>
      </div>
      <div className="filter__foto">
        <Image className="filter__img" src={avatar} width={120} height={120} alt="menu" />
      </div>
      <div className="filter__foto">
        <h3 className="filter__name">Rossalina D/ Williamson</h3>
      </div>
      <div className="filter__foto">
        <p className="filter__name2">Founder</p>
      </div>
      <div className="filter__foto">
        <p className="filter__name">
          Описание арточки аватара. Описать чем занимается и многое другое. Пиши мне в социальные
          сети!
        </p>
      </div>
      <div className="filter__socseti">
        <div className="filter__soc">
          <Image className="filter__img2" src={vk} width={25} height={25} alt="vkontakte" />
        </div>
      </div>
    </div>
  );
}
