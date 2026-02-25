export interface AlbumPhoto {
  src: string;
  note: {
    en: string;
    tr: string;
  };
}

export interface SubAlbum {
  slug: string;
  icon: string;
  photos: AlbumPhoto[];
}

export interface Album {
  slug: string;
  icon: string;
  photos: AlbumPhoto[];
  subAlbums?: SubAlbum[];
}

// =============================================================================
// HOW TO ADD PHOTOS
// =============================================================================
//
// 1. Upload your image to the matching folder inside  public/images/gallery/:
//
//    public/images/gallery/research-lab/        -> Research Lab photos
//    public/images/gallery/athletic-training/   -> Athletic Training photos
//    public/images/gallery/apitherapy/          -> Apitherapy / Beekeeping photos
//    public/images/gallery/conferences/         -> Conferences photos
//
// 2. Add an entry to the matching album below. Example:
//
//    {
//      src: '/images/gallery/research-lab/my-photo.jpg',
//      note: {
//        en: 'English description of the photo',
//        tr: 'Fotoğrafın Türkçe açıklaması',
//      },
//    },
//
// That's it! The photo will appear in the album automatically.
// =============================================================================

export const albums: Album[] = [
  // ── Research Lab ──────────────────────────────────────────────────────
  {
    slug: 'research-lab',
    icon: '🔬',
    photos: [
      // Add your Research Lab photos here:
      //
      // { src: '/images/gallery/research-lab/FILENAME.jpg', note: { en: 'English note', tr: 'Türkçe not' } },
    ],
  },

  // ── Athletic Training ─────────────────────────────────────────────────
  {
    slug: 'athletic-training',
    icon: '🏋️',
    photos: [],
    subAlbums: [
      // ── Strength ──
      {
        slug: 'strength',
        icon: '💪',
        photos: [
          // { src: '/images/gallery/athletic-training/strength/FILENAME.jpg', note: { en: 'English note', tr: 'Türkçe not' } },
        ],
      },
      // ── Stretching & Mobility ──
      {
        slug: 'stretching-mobility',
        icon: '🧘',
        photos: [
          // { src: '/images/gallery/athletic-training/stretching-mobility/FILENAME.jpg', note: { en: 'English note', tr: 'Türkçe not' } },
        ],
      },
      // ── Diet ──
      {
        slug: 'diet',
        icon: '🥗',
        photos: [
          // { src: '/images/gallery/athletic-training/diet/FILENAME.jpg', note: { en: 'English note', tr: 'Türkçe not' } },
        ],
      },
      // ── Mountaineering ──
      {
        slug: 'mountaineering',
        icon: '🏔️',
        photos: [
          {
            src: '/images/gallery/athletic-training/mountaineering/20201104_123612.jpg',
            note: {
              en: 'Goats, November 04, 2020 - Çaldede Dağı',
              tr: 'Keçiler, 04 Kasım 2020 - Çaldede Dağı',
            },
          },
          {
            src: '/images/gallery/athletic-training/mountaineering/20201104_133904.jpg',
            note: {
              en: 'Greetings from the air, November 04, 2020 - Çaldede Dağı',
              tr: 'Havadan selamlar, 04 Kasım 2020 - Çaldede Dağı',
            },
          },
          {
            src: '/images/gallery/athletic-training/mountaineering/20201104_134607.jpg',
            note: {
              en: 'Scenery, November 04, 2020 - Çaldede Dağı',
              tr: 'Manzara, 04 Kasım 2020 - Çaldede Dağı',
            },
          },
          {
            src: '/images/gallery/athletic-training/mountaineering/20201223_153110.jpg',
            note: {
              en: 'Reflection, December 23, 2020 - Yamanlar Dağı',
              tr: 'Yansıma, 23 Aralık 2020 - Yamanlar Dağı',
            },
          },
          {
            src: '/images/gallery/athletic-training/mountaineering/20201223_153327.jpg',
            note: {
              en: 'Reflection & Hüseyin, December 23, 2020 - Yamanlar Dağı',
              tr: 'Yansıma & Hüseyin, 23 Aralık 2020 - Yamanlar Dağı',
            },
          },
          {
            src: '/images/gallery/athletic-training/mountaineering/20210105_123011.jpg',
            note: {
              en: 'The Gulf of Izmir, January 05, 2021 - Çatalkaya, Balçova',
              tr: 'İzmir Körfezi, 05 Ocak 2021 - Çatalkaya, Balçova',
            },
          },
          {
            src: '/images/gallery/athletic-training/mountaineering/20210105_165300.jpg',
            note: {
              en: 'Forest, January 05, 2021 - Çatalkaya, Balçova',
              tr: 'Orman, 05 Ocak 2021 - Çatalkaya, Balçova',
            },
          },
          {
            src: '/images/gallery/athletic-training/mountaineering/20211003_124047.jpg',
            note: {
              en: 'The Gulf of Izmir, October 03, 2021 - Yamanlar Dağı',
              tr: 'İzmir Körfezi, 03 Ekim 2021 - Yamanlar Dağı',
            },
          },
          {
            src: '/images/gallery/athletic-training/mountaineering/20211017_130406.jpg',
            note: {
              en: 'Mumkayası, October 17, 2021 - Ödemiş, Izmir',
              tr: 'Mumkayası, 17 Ekim 2021 - Ödemiş, İzmir',
            },
          },
          {
            src: '/images/gallery/athletic-training/mountaineering/20220123_104912.jpg',
            note: {
              en: 'Zirve Dağcılık, January 23, 2022 - Bozdağ, Izmir',
              tr: 'Zirve Dağcılık, 23 Ocak 2022 - Bozdağ, İzmir',
            },
          },
          {
            src: '/images/gallery/athletic-training/mountaineering/20220123_125559.jpg',
            note: {
              en: 'Snowwyyy, January 23, 2022 - Bozdağ, Izmir',
              tr: 'Karrrr, 23 Ocak 2022 - Bozdağ, İzmir',
            },
          },
          {
            src: '/images/gallery/athletic-training/mountaineering/image.png',
            note: {
              en: 'Strive, January 23, 2022 - Bozdağ, Izmir',
              tr: 'Çabalamak, 23 Ocak 2022 - Bozdağ, İzmir',
            },
          },
          {
            src: '/images/gallery/athletic-training/mountaineering/IMG-20231210-WA0012.jpg',
            note: {
              en: 'Starting point, December 10, 2023 - Nif Dağı',
              tr: 'Başlangıç noktası, 10 Aralık 2023 - Nif Dağı',
            },
          },
          {
            src: '/images/gallery/athletic-training/mountaineering/IMG-20240121-WA0011.jpg',
            note: {
              en: 'Thyme and rucking, January 21, 2024 - Yamanlar Dağı',
              tr: 'Kekik ve çantayla yürüyüş, 21 Ocak 2024 - Yamanlar Dağı',
            },
          },
          {
            src: '/images/gallery/athletic-training/mountaineering/IMG-20240128-WA0002.jpg',
            note: {
              en: 'Lake with my dad, January 28, 2024 - Yamanlar Dağı',
              tr: 'Babamla göl başında, 28 Ocak 2024 - Yamanlar Dağı',
            },
          },
          {
            src: '/images/gallery/athletic-training/mountaineering/IMG-20240218-WA0015.jpg',
            note: {
              en: 'Freezing water, February 18, 2024 - Spil Dağı',
              tr: 'Dondurucu soğukta su, 18 Şubat 2024 - Spil Dağı',
            },
          },
          {
            src: '/images/gallery/athletic-training/mountaineering/20240405-team.jpeg',
            note: {
              en: 'Friends, April 05, 2025 - Su Uçuran Şelalesi',
              tr: 'Arkadaşlar, 05 Nisan 2025 - Su Uçuran Şelalesi',
            },
          },
          {
            src: '/images/gallery/athletic-training/mountaineering/20240405.jpeg',
            note: {
              en: 'Waterfall, April 05, 2025 - Su Uçuran Şelalesi',
              tr: 'Şelale, 05 Nisan 2025 - Su Uçuran Şelalesi',
            },
          },
          {
            src: '/images/gallery/athletic-training/mountaineering/20240413-Ozdere.jpeg',
            note: {
              en: 'Night walk, April 13, 2025 - Ozdere, Izmir',
              tr: 'Gece yürüyüşü, 13 Nisan 2025 - Özdere, İzmir',
            },
          },
        ],
      },
      // ── Running ──
      {
        slug: 'running',
        icon: '🏃',
        photos: [
          // { src: '/images/gallery/athletic-training/running/FILENAME.jpg', note: { en: 'English note', tr: 'Türkçe not' } },
        ],
      },
    ],
  },

  // ── Apitherapy ────────────────────────────────────────────────────────
  {
    slug: 'apitherapy',
    icon: '🐝',
    photos: [
      // Add your Apitherapy photos here:
      //
      // { src: '/images/gallery/apitherapy/FILENAME.jpg', note: { en: 'English note', tr: 'Türkçe not' } },
    ],
  },

  // ── Conferences ───────────────────────────────────────────────────────
  {
    slug: 'conferences',
    icon: '🎤',
    photos: [
      // Add your Conferences photos here:
      //
      // { src: '/images/gallery/conferences/FILENAME.jpg', note: { en: 'English note', tr: 'Türkçe not' } },
      {
        src: '/images/gallery/conferences/TURSEV1.jpg',
        note: {
          en: 'My proud moment with my Poster',
          tr: 'Gururla posterimin başındayım.',
        },
      },
      {
        src: '/images/gallery/conferences/TURsEV2.jpg',
        note: {
          en: 'Presenting to the Sherif Ibrahim at the TURSEV-1 ',
          tr: 'TURSEV-1de Sherif Ibrahim posterim hakkında bilgi alıyor',
        },
      },
      {
        src: '/images/gallery/conferences/TURSEV2024.jpeg',
        note: {
          en: '1st TURSEV Conference, 2024',
          tr: '1. TURSEV konferansı, 2024',
        },
      },
      {
        src: '/images/gallery/conferences/Poster.jpeg',
        note: {
          en: 'Ready to present latest data at the 8th Venusberg Meeting on Neuroinflammation',
          tr: '8. Nöroinflamasyon Venusberg Toplantısı\'nda son verileri sunmaya hazırım.',
        },
      },
      {
        src: '/images/gallery/conferences/Presenting.jpeg',
        note: {
          en: 'Discussing the recent findings of our project with the audience at Luxemburg.',
          tr: 'Lüksemburg\'da dinleyicilerle projemizin son bulgularını tartışıyorum.',
        },
      },
    ],
  },
];
