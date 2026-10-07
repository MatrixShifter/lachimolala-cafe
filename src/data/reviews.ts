export interface CustomerReview {
  id: string;
  author: string;
  reviewCountInfo: string;
  rating: number;
  content: string;
  date: string;
  highlightDish?: string;
  avatarColor: string;
}

export const REVIEWS_SUMMARY = {
  rating: 4.4,
  maxRating: 5.0,
  totalReviews: 27,
  googleMapsReviewUrl: "https://maps.google.com/?q=2,+55,+W+Kal+Mandapam+Rd,+Pudumanaikuppam,+Old+Washermanpet,+Chennai,+Tamil+Nadu+600013"
};

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'review-1',
    author: 'Divya',
    reviewCountInfo: '2 reviews',
    rating: 5,
    content: 'They have a pleasant atmosphere to spend time with friends and family... Must try the ramyun! ❤️',
    date: 'Recent visit',
    highlightDish: 'Shin Ramyun',
    avatarColor: 'bg-rose-100 text-rose-700'
  },
  {
    id: 'review-2',
    author: 'Athira',
    reviewCountInfo: '4 reviews',
    rating: 5,
    content: 'Nice place to visit with family and friends. The ambience, food quality, taste and presentation is completely awesome 😍',
    date: 'Recent visit',
    highlightDish: 'Ambience & Food',
    avatarColor: 'bg-purple-100 text-purple-700'
  },
  {
    id: 'review-3',
    author: 'Santhi S',
    reviewCountInfo: '1 review',
    rating: 5,
    content: 'Love their food ❤️ no words to say just wow! Must recommended cafe 💯',
    date: 'Recent visit',
    highlightDish: 'Korean Specialties',
    avatarColor: 'bg-amber-100 text-amber-700'
  }
];
