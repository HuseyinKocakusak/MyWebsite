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

export const albums: Album[] = [
  {
    slug: 'research-lab',
    icon: '🔬',
    photos: [
      // Add photos here:
      // { src: '/images/gallery/research-lab/photo1.jpg', note: { en: 'Working in the cell culture lab', tr: 'Hücre kültürü laboratuvarında çalışırken' } },
    ],
  },
  {
    slug: 'athletic-training',
    icon: '🏋️',
    photos: [
      // Add photos here:
      // { src: '/images/gallery/athletic-training/photo1.jpg', note: { en: 'Morning training session', tr: 'Sabah antrenman seansı' } },
    ],
  },
  {
    slug: 'apitherapy',
    icon: '🐝',
    photos: [
      // Add photos here:
      // { src: '/images/gallery/apitherapy/photo1.jpg', note: { en: 'Inspecting the hives', tr: 'Kovanları kontrol ederken' } },
    ],
  },
  {
    slug: 'conferences',
    icon: '🎤',
    photos: [
      // Add photos here:
      // { src: '/images/gallery/conferences/photo1.jpg', note: { en: 'Presenting at the neuroscience congress', tr: 'Sinirbilim kongresinde sunum yaparken' } },
    ],
  },
];
