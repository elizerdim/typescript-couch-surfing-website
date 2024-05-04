import { LoyaltyUser } from "./enums";

const reviewTotalDisplay = document.querySelector<HTMLHeadingElement>('#reviews') 
const returningUser = document.querySelector<HTMLSpanElement>('#returning-user') 
const userName = document.querySelector<HTMLSpanElement>('#user') 

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