import { LoyaltyUser } from "./enums";

const reviewTotalDisplay = document.querySelector<HTMLHeadingElement>('#reviews') 

export function displayReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser): void {
  const iconDisplay = (isLoyalty === LoyaltyUser.GOLD_USER) ? '⭐' : '';
  reviewTotalDisplay!.innerText = value.toString() + ' review' + (value > 1 ? 's' : '') + ' | last reviewed by ' + reviewer + ' ' + iconDisplay;
}