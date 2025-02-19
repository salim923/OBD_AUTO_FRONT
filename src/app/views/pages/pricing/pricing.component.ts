import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {HeaderComponent} from "../../../layout/header/header.component";
import {FooterComponent} from "../../../layout/footer/footer.component";

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, MatButtonModule, HeaderComponent, FooterComponent],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  plans = [
    {
      title: 'Basic',
      price: '$9.99/month',
      features: [
        'Up to 2 vehicles',
        'Basic maintenance reminders',
        'Digital maintenance history',
        'Email support'
      ]
    },
    {
      title: 'Pro',
      price: '$19.99/month',
      features: [
        'Up to 5 vehicles',
        'Advanced AI-powered scheduling',
        'Fuel efficiency tracking',
        'Priority email and chat support'
      ]
    },
    {
      title: 'Enterprise',
      price: 'Custom',
      features: [
        'Unlimited vehicles',
        'Custom integration options',
        'Dedicated account manager',
        '24/7 phone support'
      ]
    }
  ];
}
