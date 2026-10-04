// App fields:
// Required:
// - name: app name, used as the card title and list key.
// - platforms: array of platform names shown on the card and used by the platform filter.
// - href: URL opened when the card is selected.
// - description: short summary shown on the card.
// - tags: array of media types. Valid options are 'Audiobooks', 'Podcasts', or 'Ebooks'; shown as icons
//   and used by the media type filter.
// Optional:
// - auth: object describing supported authentication methods. Each method is a key
//   whose value is true, except oidc, which requires its app-specific redirectUri.
//   Never use 'audiobookshelf://oauth', which belongs to the official app.
export const communityApps = [
  {
    name: 'plappa',
    auth: {oidc: {redirectUri: 'plappa://oauth'}},
    platforms: ['iOS', 'iPadOS'],
    href: 'https://plappa.me/',
    tags: ['Audiobooks', 'Podcasts'],
    description:
      'Audiobook/Podcast client for Jellyfin and AudioBookShelf, written in Swift/SwiftUI.',
  },
  {
    name: 'Still',
    auth: {oidc: {redirectUri: 'stillapp://oauth'}},
    platforms: ['iOS', 'iPadOS', 'watchOS', 'macOS'],
    href: 'https://github.com/7enChan/stillapp',
    tags: ['Audiobooks', 'Podcasts', 'Ebooks'],
    description: 'A clean, native Audiobookshelf client designed for Apple devices.',
  },
  {
    name: 'SoundLeaf',
    platforms: ['iOS', 'iPadOS', 'macOS'],
    href: 'https://soundleafapp.com/',
    tags: ['Audiobooks', 'Podcasts'],
    description: 'A native Audiobookshelf client for iPhone, iPad, and Mac. Listen to audiobooks and podcasts with CarPlay, offline downloads, a drag-to-reorder queue, sleep timer, chapter navigation, and automatic progress sync, all wrapped in a polished, native iOS design.',
  },
  {
    name: 'yaabsa',
    auth: {
      oidc: {redirectUri: 'yaabsa://oauth'},
      apiKey: true,
    },
    platforms: ['Android', 'AAOS', 'wearOS', 'Windows', 'Linux', 'Web', 'iOS', 'iPadOS', 'macOS'],
    href: 'https://github.com/Vito0912/yaabsa/',
    tags: ['Audiobooks', 'Podcasts', 'Ebooks'],
    description:
      'A responsive client for mobile, desktop, cars and watch (alpha) for listening or managing. A complete replacement for the ABS web app. It includes unique features like synced annotations for ebooks, subtitles and whispersync-like support for EPUB Media 3.',
  },
  {
    name: 'Harmshelf',
    platforms: ['HarmonyOS'],
    href: 'https://github.com/shanyan-wcx/Harmshelf',
    tags: ['Audiobooks', 'Podcasts'],
    description:
      'A native Audiobookshelf client for HarmonyOS, supporting mobile phones, tablets, and PC/2in1.',
  },
  {
    name: 'Lissen',
    auth: {oidc: {redirectUri: 'lissen://oauth'}},
    platforms: ['Android'],
    href: 'https://github.com/GrakovNe/lissen-android',
    tags: ['Audiobooks', 'Podcasts'],
    description:
      'A clean, minimalistic Audiobookshelf client for Android and Android Auto. Stream or download audiobooks and podcasts, with cloud sync of progress across devices.',
  },
  {
    name: 'AudioBooth',
    auth: {
      oidc: {redirectUri: 'audiobooth://oauth'},
      apiKey: true,
    },
    platforms: ['iOS', 'iPadOS', 'watchOS', 'macOS'],
    href: 'https://github.com/AudioBooth/AudioBooth',
    tags: ['Audiobooks', 'Podcasts', 'Ebooks'],
    description: 'A free and open source native client packed with features, including offline downloads, CarPlay, widgets, and more.'
  },
  {
    name: 'Storii',
    auth: {oidc: {redirectUri: 'storii://oauth'}},
    platforms: ['Android'],
    href: 'https://github.com/likhithpraveenk/storii',
    tags: ['Audiobooks', 'Podcasts'],
    description: 'Storii is an abs client that focuses on a clean user experience and maintainable architecture, written in flutter.'
  },
  {
    name: 'Absorb',
    platforms: ['Android', 'iOS', 'iPadOS'],
    href: 'https://github.com/pounat/absorb',
    tags: ['Audiobooks', 'Podcasts'],
    description: 'A full-featured Audiobookshelf client for Android and iOS with a unique card-based library layout. Listen to audiobooks and podcasts with Android Auto and CarPlay support, offline downloads, customizable themes and per-library settings, and detailed listening stats, all with live sync, home screen widgets, and a sleep timer.'
  },
  {
    name: 'Auribook',
    platforms: ['watchOS'],
    href: 'https://auribook.jminke.com',
    tags: ['Audiobooks', 'Podcasts'],
    description: 'A standalone Apple Watch (watchOS) client designed for downloading your audiobooks and podcasts directly on your wrist, without any iPhone. Perfect for doing sports and for kids having only an Apple Watch.'
  },
  {
    name: 'Voca',
    platforms: ['iOS', 'iPadOS', 'watchOS', 'tvOS', 'Android'],
    href: 'https://voca.velosec.au',
    tags: ['Audiobooks', 'Podcasts', 'Ebooks'],
    description:
      'A native audiobook and podcast player for iPhone, iPad, Apple Watch, Apple TV, and Android. Includes CarPlay and Android Auto, offline downloads, chapter navigation, a sleep timer, and extras support for ePubs and PDFs.',
  },
  {
    name: 'Verbara',
    platforms: ['iOS', 'iPadOS'],
    href: 'https://verbara.app',
    tags: ['Podcasts'],
    description: 'Verbara is a podcast app for Plex, Audiobookshelf and RSS. Store your shows in one library with smart download, transcription, ad detection, metadata correction and more.'
  },
  {
    name: 'Tonspur',
    platforms: ['iOS', 'iPadOS', 'watchOS', 'macOS'],
    href: 'https://tonspur.app',
    tags: ['Audiobooks', 'Podcasts', 'Ebooks'],
    description: 'Inspired by Apple Music, Tonspur is an opinionated client supporting large libraries, multiple servers, CarPlay, Shortcuts, widgets and more.'
  }
];
