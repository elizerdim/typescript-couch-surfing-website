import { LoyaltyUser, Permissions } from "./enums";
import { Property, Review } from "./interfaces";

const returningUser = document.querySelector<HTMLSpanElement>('#returning-user') 
const userName = document.querySelector<HTMLSpanElement>('#user') 
const reviewTotalDisplay = document.querySelector<HTMLHeadingElement>('#reviews') 
const getReviewsBtn = document.querySelector<HTMLButtonElement>('#get-reviews-btn');
const reviewContainer = document.querySelector<HTMLDivElement>('.reviews');
const propertiesContainer = document.querySelector<HTMLDivElement>('.properties') 
const citySpan = document.querySelector<HTMLSpanElement>('#city');
const weatherSpan = document.querySelector<HTMLSpanElement>('#weather');
const timeSpan = document.querySelector<HTMLSpanElement>('#time');

export function displayUser(isReturning: boolean, name: string): void {
  if (isReturning) {
    returningUser!.innerText = ' back';
  }

  userName!.innerText = name;
}

export function displayReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser): void {
  const iconDisplay = (isLoyalty === LoyaltyUser.GOLD_USER) ? '⭐' : '';
  reviewTotalDisplay!.innerText = value.toString() + ' review' + (value > 1 ? 's' : '') + ' | last reviewed by ' + reviewer + ' ' + iconDisplay;
}

export function displayTopTwoReviews(reviewsArray: Review[]): void {
  const topTwoReviews = reviewsArray.slice(0, 2);
  topTwoReviews.forEach(review => {
    const reviewCard = document.createElement('div');
    reviewCard.classList.add('review-card');
    reviewCard.innerText = `${review.stars} stars from ${review.name}`; 
    reviewContainer!.appendChild(reviewCard);
  })
  getReviewsBtn!.remove();
}

export function displayProperties(propertiesArray: Property[], permission: boolean | Permissions): void {
  propertiesArray.forEach(property => {
    const card = document.createElement('article');
    card.classList.add('card');
    card.innerText = property.title;

    const image = document.createElement('img');
    image.src = property.image;
    image.alt = 'Property image'
    card.appendChild(image);

    if (permission) {
      const price = document.createElement('div');
      price.innerText = property.price.toString() + '/night';
      card.appendChild(price);
    }

    propertiesContainer!.appendChild(card);
  })
}

export function displayFooterInfo(info: string, element: HTMLSpanElement ): void {
  element.innerText = info;
}

export function showCity(position: GeolocationPosition) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  
  displayCity(latitude, longitude)
}

async function displayCity(latitude: number, longitude: number) {
  let city;
  try {
    const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
    const data = await res.json();
    city = data.city;
    displayFooterInfo(data.city, citySpan!);
  } catch (err) {
    console.log(err);
  }

  displayWeather(city);
}

// weather temperature
async function displayWeather(city: string) {
  try {
    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}`);
    const data = await res.json();
    displayFooterInfo(data.current.temp_c, weatherSpan!);
    weatherSpan!.innerText += '°';
  } catch (err) {
    console.log(err);
  }
}

export function displayTime(): void {
  const date = new Date();
  timeSpan!.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}