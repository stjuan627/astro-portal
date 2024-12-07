export interface Game {
  id: string;
  title: string;
  imageUrl: string;
  rating: number;
  badge?: string;
}

export const relatedGames: Game[] = [
  {
    id: '1',
    title: 'Elden Ring',
    imageUrl: 'https://picsum.photos/seed/elden/800/450',
    rating: 4.8,
    badge: '热门'
  },
  {
    id: '2', 
    title: 'Zelda: Tears of the Kingdom',
    imageUrl: 'https://picsum.photos/seed/zelda/800/450',
    rating: 4.9,
  },
  {
    id: '3',
    title: 'Baldur\'s Gate 3',
    imageUrl: 'https://picsum.photos/seed/bg3/800/450',
    rating: 4.9,
    badge: '年度最佳'
  },
  {
    id: '4',
    title: 'Cyberpunk 2077',
    imageUrl: 'https://picsum.photos/seed/cp2077/800/450',
    rating: 4.5,
  },
  {
    id: '5',
    title: 'Red Dead Redemption 2',
    imageUrl: 'https://picsum.photos/seed/rdr2/800/450',
    rating: 4.7,
  },
  {
    id: '6',
    title: 'God of War Ragnarök',
    imageUrl: 'https://picsum.photos/seed/gow/800/450',
    rating: 4.6,
  },
  {
    id: '7',
    title: 'Final Fantasy XVI',
    imageUrl: 'https://picsum.photos/seed/ff16/800/450',
    rating: 4.4,
  },
  {
    id: '8',
    title: 'Resident Evil 4 Remake',
    imageUrl: 'https://picsum.photos/seed/re4/800/450',
    rating: 4.7,
    badge: '新品'
  },
];