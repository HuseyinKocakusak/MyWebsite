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
          // { src: '/images/gallery/athletic-training/mountaineering/FILENAME.jpg', note: { en: 'English note', tr: 'Türkçe not' } },
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
        src: '/images/gallery/conferences/poster.jpeg',
        note: {
          en: 'Ready to present latest data at the 8th Venusberg Meeting on Neuroinflammation',
          tr: '8. Nöroinflamasyon Venusberg Toplantısı\'nda son verileri sunmaya hazırım.',
        },
      },
      {
        src: '/images/gallery/conferences/presenting.jpeg',
        note: {
          en: 'Discussing the recent findings of our project with the audience at Luxemburg.',
          tr: 'Lüksemburg\'da dinleyicilerle projemizin son bulgularını tartışıyorum.',
        },
      },
    ],
  },
];
