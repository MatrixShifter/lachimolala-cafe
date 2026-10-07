export interface MenuItem {
  id: string;
  name: string;
  koreanName?: string;
  category: 'Korean Food' | 'Bubble Tea' | 'Non-Coffee' | 'Coffee' | 'Desserts' | 'Snacks';
  price: number;
  description: string;
  image: string;
  popular?: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
}

export const MENU_CATEGORIES = [
  'All',
  'Korean Food',
  'Bubble Tea',
  'Non-Coffee',
  'Coffee',
  'Desserts',
  'Snacks',
] as const;

export type MenuCategoryType = typeof MENU_CATEGORIES[number];

export const SPECIALTIES: MenuItem[] = [
  {
    id: 'shin-ramyun',
    name: 'Shin Ramyun',
    koreanName: '신라면',
    category: 'Korean Food',
    price: 180,
    description: 'Steaming Korean instant ramyun in spicy aromatic broth with soft egg, scallions, and roasted sesame.',
    image: '/images/specialty-ramyun.jpg',
    popular: true,
    spicy: true,
    vegetarian: false
  },
  {
    id: 'bubble-tea',
    name: 'Bubble Tea',
    koreanName: '버블티',
    category: 'Bubble Tea',
    price: 120,
    description: 'Refreshing chilled strawberry boba tea with chewy black tapioca pearls.',
    image: '/images/specialty-boba.jpg',
    popular: true,
    vegetarian: true
  },
  {
    id: 'korean-sandwich',
    name: 'Korean Sandwich',
    koreanName: '길거리 토스트',
    category: 'Korean Food',
    price: 160,
    description: 'Thick fluffy brioche toast loaded with sweet egg scramble, melted cheddar, and secret café sauce.',
    image: '/images/specialty-sandwich.jpg',
    popular: true,
    vegetarian: true
  },
  {
    id: 'tteokbokki',
    name: 'Tteokbokki',
    koreanName: '떡볶이',
    category: 'Korean Food',
    price: 160,
    description: 'Chewy cylindrical rice cakes simmered in sweet & spicy gochujang sauce with scallions and sesame.',
    image: '/images/specialty-tteokbokki.jpg',
    popular: true,
    spicy: true,
    vegetarian: true
  },
  {
    id: 'bingsu-mango',
    name: 'Bingsu (Mango)',
    koreanName: '망고 빙수',
    category: 'Desserts',
    price: 220,
    description: 'Snowy Korean shaved milk ice crowned with sweet juicy mango cubes, condensed milk, and ice cream.',
    image: '/images/specialty-bingsu.jpg',
    popular: true,
    vegetarian: true
  }
];

export const FULL_MENU: MenuItem[] = [
  ...SPECIALTIES,
  {
    id: 'taro-boba',
    name: 'Classic Taro Boba',
    koreanName: '타로 버블티',
    category: 'Bubble Tea',
    price: 130,
    description: 'Velvety purple taro milk tea infused with brown sugar boba pearls.',
    image: '/images/specialty-boba.jpg',
    popular: false,
    vegetarian: true
  },
  {
    id: 'brown-sugar-boba',
    name: 'Brown Sugar Tiger Milk',
    koreanName: '흑당 버블티',
    category: 'Bubble Tea',
    price: 140,
    description: 'Fresh creamy milk marbled with warm caramel brown sugar tapioca pearls.',
    image: '/images/specialty-boba.jpg',
    popular: true,
    vegetarian: true
  },
  {
    id: 'kimchi-ramyun',
    name: 'Kimchi Cheese Ramyun',
    koreanName: '김치 치즈 라면',
    category: 'Korean Food',
    price: 195,
    description: 'Tangy kimchi broth noodles blanketed with melted mozzarella and scallions.',
    image: '/images/specialty-ramyun.jpg',
    popular: true,
    spicy: true,
    vegetarian: false
  },
  {
    id: 'rabokki',
    name: 'Rabokki (Ramyun + Tteokbokki)',
    koreanName: '라볶이',
    category: 'Korean Food',
    price: 210,
    description: 'The ultimate combo: chewy rice cakes and wavy ramen noodles cooked together in spicy gochujang glaze.',
    image: '/images/specialty-tteokbokki.jpg',
    popular: true,
    spicy: true,
    vegetarian: true
  },
  {
    id: 'iced-dalgona-latte',
    name: 'Iced Dalgona Coffee',
    koreanName: '달고나 커피',
    category: 'Coffee',
    price: 140,
    description: 'Velvety whipped honeycomb toffee coffee foam layered over iced milk.',
    image: '/images/specialty-boba.jpg',
    popular: true,
    vegetarian: true
  },
  {
    id: 'korean-iced-americano',
    name: 'Iced Americano (Ah-Ah)',
    koreanName: '아이스 아메리카노',
    category: 'Coffee',
    price: 110,
    description: 'South Korea’s favorite coffee order: bold, crisp, chilled espresso over ice cubes.',
    image: '/images/specialty-boba.jpg',
    popular: false,
    vegetarian: true
  },
  {
    id: 'korean-strawberry-milk',
    name: 'Fresh Strawberry Milk',
    koreanName: '딸기 우유',
    category: 'Non-Coffee',
    price: 130,
    description: 'Handmade strawberry compote made with real chunks stirred into chilled dairy milk.',
    image: '/images/specialty-boba.jpg',
    popular: true,
    vegetarian: true
  },
  {
    id: 'matcha-latte',
    name: 'Iced Uji Matcha Latte',
    koreanName: '말차 라떼',
    category: 'Non-Coffee',
    price: 150,
    description: 'Earthy premium Japanese matcha gently layered over sweetened whole milk.',
    image: '/images/specialty-boba.jpg',
    popular: false,
    vegetarian: true
  },
  {
    id: 'korean-corn-dog',
    name: 'Korean Crispy Corndog',
    koreanName: '핫도그',
    category: 'Snacks',
    price: 140,
    description: 'Crunchy panko-crusted sausage and stretchy mozzarella coated with sugar and ketchup drizzle.',
    image: '/images/specialty-sandwich.jpg',
    popular: true,
    vegetarian: false
  },
  {
    id: 'choco-bingsu',
    name: 'Oreo Choco Bingsu',
    koreanName: '초코 오레오 빙수',
    category: 'Desserts',
    price: 210,
    description: 'Milk snow bingsu loaded with crushed Oreos, chocolate drizzle, and vanilla ice cream.',
    image: '/images/specialty-bingsu.jpg',
    popular: false,
    vegetarian: true
  }
];
