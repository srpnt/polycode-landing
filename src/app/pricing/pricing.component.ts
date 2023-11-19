import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  pricingType: 'month' | 'year' = 'month'

  existingUser = this.route.snapshot.queryParams['existingUser']

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  priceItems: PricingItem[] = [
    {
      name: 'Free',
      description: 'Best for students and hobbyists.',
      accented: false,
      prices: {
        buyNowMonthly: { amount: 0, stripeURL: '' },
        buyNowYearly: { amount: 19, stripeURL: '' },
        trialMonthly: { amount: 19, stripeURL: '' },
        trialYearly: { amount: 19, stripeURL: '' },
      },
      features: {
        seats: "1 user",
        trackedWallets: '100',
        domains: "1",
        other: ['200 blockchain transactions', 'Unlimited blockchain read requests' , 'Community Support', 'Great for building PoC']
      },
      limitedClaims: {
        claimed: 27,
        total: 50
      }
    },
    
    {
      name: 'Pro',
      description: 'Best for advanced users, scaleups & large devshops.',
      accented: false,
      prices: {
        buyNowMonthly: { amount: 0.2, stripeURL: 'https://buy.stripe.com/test_5kA9Ee7rP07Feuk5kl' },
        buyNowYearly: { amount: 91, stripeURL: '' },
        trialMonthly: { amount: 19, stripeURL: '' },
        trialYearly: { amount: 19, stripeURL: '' },
      },
      features: {
        seats: "Additional seats for teamwork",
        domains: "Unlimited",
        trackedWallets: '5.000',
        other: ['200 blockchain transactions', 'Unlimited blockchain read requests', 'Third Party Plugins', 'Email Support', 'Private onboarding', 'Whitelabel', 'Self-Hosted', 'Priority Support']
      },
      limitedClaims: {
        claimed: 19,
        total: 20
      }
    },
    
  ]

}

interface PricingItem {
  name: string,
  description: string,
  accented: boolean,
  prices: {
    buyNowMonthly: { amount: number, stripeURL: string },
    buyNowYearly: { amount: number, stripeURL: string },
    trialMonthly: { amount: number, stripeURL: string },
    trialYearly: { amount: number, stripeURL: string }
  }
  features: {
    seats: string
    domains: string,
    trackedWallets: string,
    other: string[]
  },
  limitedClaims: {
    claimed: number,
    total: number
  }
}
