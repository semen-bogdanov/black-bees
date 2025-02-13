'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer__main">
      <div className="container">
        <div className="footer__block">
          <div className="footer__contact">
            <h1 className="header__label">BloCK SV</h1>
            <div className="footer__conect">
              <p>Контакты:</p>
              <p>Мобильный телефон:</p>
              <p>Электронная поста:</p>
            </div>
          </div>
          <div className="footer__nav">
            <nav>
              <div className="footer__navigation">
                <Link className="footer__link" href="/">
                  Главная
                </Link>
                <Link className="footer__link" href="/blog">
                  Блог
                </Link>
                <Link className="footer__link" href="/news">
                  Новости
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
