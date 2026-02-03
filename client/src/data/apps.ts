// Neo-Brutalism Design: Bold colors for each app card
// Color scheme: Bright Yellow (#ffed00), Electric Blue (#0066ff), Vivid Red (#ff3333), Deep Green (#00cc66)

export interface AndroidTVApp {
  id: string;
  name: string;
  nameRu: string;
  description: string;
  packageName: string;
  playStoreUrl: string;
  apkMirrorUrl?: string;
  color: 'yellow' | 'blue' | 'red' | 'green';
  icon?: string;
}

export const apps: AndroidTVApp[] = [
  {
    id: 'kinopoisk',
    name: 'Kinopoisk',
    nameRu: 'КиноПоиск',
    description: 'Russian streaming platform with movies, series, and sports in excellent quality',
    packageName: 'ru.kinopoisk.tv',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=ru.kinopoisk.tv',
    apkMirrorUrl: 'https://www.apkmirror.com/apk/direct-cursus-computer-systems-trading-llc/',
    color: 'yellow',
  },
  {
    id: 'start',
    name: 'START',
    nameRu: 'START',
    description: 'Online cinema with 200+ TV channels including STS, TNT, Match TV and more',
    packageName: 'ru.start.androidmobile',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=ru.start.androidmobile',
    apkMirrorUrl: 'https://www.apkmirror.com/apk/start-ru-llc/',
    color: 'red',
  },
  {
    id: 'kion',
    name: 'KION',
    nameRu: 'KION',
    description: 'Streaming service with wide variety of films, TV series, and documentaries',
    packageName: 'ru.mts.mtstv',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=ru.mts.mtstv',
    color: 'blue',
  },
  {
    id: 'yandex-browser',
    name: 'Yandex Browser for TV',
    nameRu: 'Яндекс Браузер для ТВ',
    description: 'Fast and secure browser optimized for Android TV with voice search',
    packageName: 'com.yandex.tv.home',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.yandex.tv.home',
    color: 'green',
  },
  {
    id: 'rutube',
    name: 'Rutube',
    nameRu: 'Rutube',
    description: 'Russian video platform with entertaining and educational content',
    packageName: 'ru.rutube.app',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=ru.rutube.app',
    apkMirrorUrl: 'https://www.apkmirror.com/apk/rutube-ru/',
    color: 'yellow',
  },
  {
    id: 'vk-video',
    name: 'VK Video',
    nameRu: 'VK Видео',
    description: 'Top shows, movies, TV series, online channels, and live broadcasts',
    packageName: 'com.vk.tv',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.vk.tv',
    color: 'red',
  },
  {
    id: 'ivi',
    name: 'IVI',
    nameRu: 'ИВИ',
    description: 'Movies, series, cartoons, and 150+ TV channels online',
    packageName: 'ru.ivi.client',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=ru.ivi.client',
    apkMirrorUrl: 'https://www.apkmirror.com/apk/ivi-ru/',
    color: 'blue',
  },
  {
    id: 'amediateka',
    name: 'Amediateka',
    nameRu: 'AMEDIATEKA',
    description: 'Premium streaming service with exclusive series and movies',
    packageName: 'ru.amediateka',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=ru.amediateka',
    color: 'green',
  },
  {
    id: 'okko',
    name: 'Okko',
    nameRu: 'Okko',
    description: 'Online movie theater with 90,000+ movies, series, and cartoons',
    packageName: 'ru.more.play',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=ru.more.play',
    apkMirrorUrl: 'https://www.apkmirror.com/apk/okko/',
    color: 'yellow',
  },
  {
    id: 'tricolor',
    name: 'Tricolor',
    nameRu: 'ТРИКОЛОР',
    description: 'Russian satellite television service with live TV and on-demand content',
    packageName: 'ru.tricolor.tv',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=ru.tricolor.tv',
    color: 'red',
  },
  {
    id: 'movix',
    name: 'Movix',
    nameRu: 'Movix',
    description: 'Online cinema with huge library of popular films and exclusive premieres',
    packageName: 'com.ertelecom.movix',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ertelecom.movix',
    color: 'blue',
  },
];
