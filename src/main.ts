import { Review } from './interfaces'
import { LoyaltyUser } from './enums'
import './style.css'

// Reviews
const reviews: Review[] = [
  {
      name: 'Sheila',
      stars: 5,
      loyaltyUser: LoyaltyUser.GOLD_USER,
      date: '01-04-2021'
  },
  {
      name: 'Andrzej',
      stars: 3,
      loyaltyUser: LoyaltyUser.BRONZE_USER,
      date: '28-03-2021'
  },
  {
      name: 'Omar',
      stars: 4,
      loyaltyUser: LoyaltyUser.SILVER_USER,
      date: '27-03-2021',
  },
]