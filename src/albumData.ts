export interface AlbumPhoto {
  src: string;
  note: {
    en: string;
    tr: string;
  };
}

export interface Album {
  slug: string;
  icon: string;
  photos: AlbumPhoto[];
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
    photos: [
      // Add your Athletic Training photos here:
      //
      // { src: '/images/gallery/athletic-training/FILENAME.jpg', note: { en: 'English note', tr: 'Türkçe not' } },
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
    ],
  },
];
