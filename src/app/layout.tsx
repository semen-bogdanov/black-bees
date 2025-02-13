import type { Metadata, Viewport } from 'next';
import './sass/globals.scss';
import ProviderQuery from './_provider';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import ProvidersStore from './providerStore';

export const metadata: Metadata = {
  title: 'BloCK SV блог про пчёл',
  description:
    'Сайт о пчеловодстве — это информационный ресурс, который предоставляет информацию о различных аспектах пчеловодства, таких как выбор места для пасеки, приобретение оборудования, уход за пчёлами и пасекой, борьба с болезнями и вредителями, сбор и переработка продукции, экологическая значимость и обучение для начинающих. Сайт предназначен для людей, желающих начать заниматься пчеловодством, особенно для тех, кто живёт в городе и хочет развивать городское пчеловодство.',
};

// устанавливает параметры стиля макета
// Viewport используется для настройки внешнего вида макета, включая цвета, шрифты и другие визуальные аспекты. Он применяется для всех страниц, которые используют этот макет.
export const viewport: Viewport = {
  themeColor: '#2b2b2b',
  // colorScheme: 'light',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" type="image/ico" href="./favicon.ico" />
      </head>
      <body>
        <ProvidersStore>
          <ProviderQuery>
            <div>{children}</div>
          </ProviderQuery>
        </ProvidersStore>
      </body>
    </html>
  );
}
