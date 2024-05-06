import MainProperty from './classes';
import { Review, Property } from './interfaces'
import { LoyaltyUser, Permissions } from './enums'
import { displayUser, displayMainProperty, displayReviewTotal, displayTopTwoReviews, displayProperties, showCity, displayTime } from './utils'
import './style.css'

const getReviewsBtn = document.querySelector<HTMLButtonElement>('#get-reviews-btn');

// Current User
const you = {
  firstName: 'Bobby',
  lastName: 'Brown',
  permissions: Permissions.ADMIN,
  isReturning: true,
  age: 35,
  stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

// Main Property
const mainProperty = new MainProperty(
  'images/italian-property.jpg',
  'Italian House',
  [{
    name: 'Olive',
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: '12-04-2021'
  }]
);

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

// Properties
const properties: Property[] = [
  {
    image: '/images/colombia-property.jpg',
    title: 'Colombian Shack',
    price: 45,
    location: {
        firstLine: 'shack 37',
        city: 'Bogota',
        code: 45632,
        country: 'Colombia'
    },
    contact: [+112343823978921, 'marywinkle@gmail.com'],
    isAvailable: true  
  },
  {
    image: '/images/poland-property.jpg',
    title: 'Polish Cottage',
    price: 30,
    location: {
        firstLine: 'no 23',
        city: 'Gdansk',
        code: 343903,
        country: 'Poland'
    },
    contact: [+1298239028490830, 'garydavis@hotmail.com'],
    isAvailable: false 
  },
  {
    image: '/images/london-property.jpg',
    title: 'London Flat',
    price: 25,
    location: {
        firstLine: 'flat 15',
        city: 'London',
        code: 'SW4 5XW',
        country: 'United Kingdom',
    },
    contact: [+34829374892553, 'andyluger@aol.com'],
    isAvailable: true
  },
  {
    image: '/images/malaysian-hotel.jpeg',
    title: 'Malia Hotel',
    price: 35,
    location: {
        firstLine: 'Room 4',
        city: 'Malia',
        code: 45334,
        country: 'Malaysia'
    },
    contact: [ +60349822083, 'lee34@gmail.com'],
    isAvailable: false
  }
]

// Display current user
displayUser(you.isReturning, you.firstName);

// Display main property
displayMainProperty(mainProperty);

// Display review total
displayReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

// Display reviews on 'Get reviews' button click
getReviewsBtn!.addEventListener('click', () => {
  displayTopTwoReviews(reviews);
})

// Display properties
displayProperties(properties, you.permissions);

// Display location, time, and weather temperature in the footer
// location and weather temperature
navigator?.geolocation.getCurrentPosition(showCity); // showCity calls displayCity, which calls displayWeather

// time
setInterval(displayTime, 1000);