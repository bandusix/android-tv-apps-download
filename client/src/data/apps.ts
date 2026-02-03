// TV Interface Design: Each app uses its brand colors

export interface AndroidTVApp {
  id: string;
  name: string;
  nameRu: string;
  description: string;
  packageName: string;
  playStoreUrl: string;
  apkMirrorUrl?: string;
  brandColor: string; // Gradient or solid color
  textColor: string; // Text color for contrast
  icon?: string;
}

export const apps: AndroidTVApp[] = [
  {
    id: 'kinopoisk',
    name: 'Kinopoisk',
    nameRu: 'КиноПоиск',
    description: 'Movies, series, and sports',
    packageName: 'ru.kinopoisk.tv',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=ru.kinopoisk.tv',
    apkMirrorUrl: 'https://www.apkmirror.com/apk/direct-cursus-computer-systems-trading-llc/',
    brandColor: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    textColor: '#ffffff',
  },
  {
    id: 'start',
    name: 'START',
    nameRu: 'START',
    description: '200+ TV channels',
    packageName: 'ru.start.androidmobile',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=ru.start.androidmobile',
    apkMirrorUrl: 'https://www.apkmirror.com/apk/start-ru-llc/',
    brandColor: 'linear-gradient(135deg, #e63946 0%, #d62828 100%)',
    textColor: '#ffffff',
  },
  {
    id: 'kion',
    name: 'KION',
    nameRu: 'KION',
    description: 'Films and series',
    packageName: 'ru.mts.mtstv',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=ru.mts.mtstv',
    brandColor: 'linear-gradient(135deg, #e91e63 0%, #d81b60 100%)',
    textColor: '#ffffff',
  },
  {
    id: 'yandex-browser',
    name: 'Yandex Browser',
    nameRu: 'Яндекс Браузер для ТВ',
    description: 'Browser for TV',
    packageName: 'com.yandex.tv.home',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.yandex.tv.home',
    brandColor: 'linear-gradient(135deg, #9c27b0 0%, #7b1fa2 100%)',
    textColor: '#ffffff',
  },
  {
    id: 'rutube',
    name: 'Rutube',
    nameRu: 'Rutube',
    description: 'Video platform',
    packageName: 'ru.rutube.app',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=ru.rutube.app',
    apkMirrorUrl: 'https://www.apkmirror.com/apk/rutube-ru/',
    brandColor: 'linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)',
    textColor: '#ffffff',
  },
  {
    id: 'vk-video',
    name: 'VK Video',
    nameRu: 'VK Видео',
    description: 'Shows and movies',
    packageName: 'com.vk.tv',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.vk.tv',
    brandColor: 'linear-gradient(135deg, #2a2a3e 0%, #1a1a2e 100%)',
    textColor: '#ffffff',
  },
  {
    id: 'ivi',
    name: 'IVI',
    nameRu: 'ИВИ',
    description: 'Movies and 150+ channels',
    packageName: 'ru.ivi.client',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=ru.ivi.client',
    apkMirrorUrl: 'https://www.apkmirror.com/apk/ivi-ru/',
    brandColor: 'linear-gradient(135deg, #e91e63 0%, #c2185b 100%)',
    textColor: '#ffffff',
  },
  {
    id: 'amediateka',
    name: 'Amediateka',
    nameRu: 'AMEDIATEKA',
    description: 'Premium streaming',
    packageName: 'ru.amediateka',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=ru.amediateka',
    brandColor: 'linear-gradient(135deg, #1a1a2e 0%, #0a0a0a 100%)',
    textColor: '#ffffff',
  },
  {
    id: 'okko',
    name: 'Okko',
    nameRu: 'Okko',
    description: '90,000+ movies',
    packageName: 'ru.more.play',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=ru.more.play',
    apkMirrorUrl: 'https://www.apkmirror.com/apk/okko/',
    brandColor: 'linear-gradient(135deg, #0f3460 0%, #16213e 100%)',
    textColor: '#ffffff',
  },
  {
    id: 'tricolor',
    name: 'Tricolor',
    nameRu: 'ТРИКОЛОР',
    description: 'Satellite TV',
    packageName: 'ru.tricolor.tv',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=ru.tricolor.tv',
    brandColor: 'linear-gradient(135deg, #1565c0 0%, #0d47a1 100%)',
    textColor: '#ffffff',
  },
  {
    id: 'movix',
    name: 'Movix',
    nameRu: 'Movix',
    description: 'Popular films',
    packageName: 'com.ertelecom.movix',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ertelecom.movix',
    brandColor: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
    textColor: '#ffffff',
  },
];
