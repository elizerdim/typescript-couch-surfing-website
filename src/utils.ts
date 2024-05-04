import { LoyaltyUser, Permissions } from "./enums";
import { Property } from "./interfaces";

const reviewTotalDisplay = document.querySelector<HTMLHeadingElement>('#reviews') 
const returningUser = document.querySelector<HTMLSpanElement>('#returning-user') 
const userName = document.querySelector<HTMLSpanElement>('#user') 
const propertiesContainer = document.querySelector<HTMLDivElement>('.properties') 

export function displayReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser): void {
  const iconDisplay = (isLoyalty === LoyaltyUser.GOLD_USER) ? '⭐' : '';
  reviewTotalDisplay!.innerText = value.toString() + ' review' + (value > 1 ? 's' : '') + ' | last reviewed by ' + reviewer + ' ' + iconDisplay;
}

export function displayUser(isReturning: boolean, name: string): void {
  if (isReturning) {
    returningUser!.innerText = ' back';
  }

  userName!.innerText = name;
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