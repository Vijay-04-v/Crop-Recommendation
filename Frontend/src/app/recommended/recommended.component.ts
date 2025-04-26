import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent implements OnInit {
  prediction = '';
  inputs: number[] = [];
  imagePath = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const qp = this.route.snapshot.queryParamMap;

    this.prediction = qp.get('prediction') || '';
    this.inputs = [
      +(qp.get('n') || 0),
      +(qp.get('p') || 0),
      +(qp.get('k') || 0),
      +(qp.get('temperature') || 0),
      +(qp.get('humidity') || 0),
      +(qp.get('ph') || 0),
      +(qp.get('rainfall') || 0)
    ];

    const cropImages: { [key: string]: string } = {
      rice        : 'rice.jpg',
      maize       : 'maize.jpg',
      kidneybeans : 'kidneybeans.jpg',
      pigeonpeas  : 'pigeonpeas.jpg',
      chickpea    : 'chickpea.jpg',
      mungbean    : 'mungbean.jpg',
      blackgram   : 'blackgram.jpg',
      mothbeans   : 'mothbeans.jpg',
      pomegranate : 'pomegranate.jpg',
      banana      : 'banana.jpg',
      lentil      : 'lentil.jpg',
      mango       : 'mango.jpg',
      grapes      : 'grapes.jpg',
      watermelon  : 'watermelon.jpg',
      apple       : 'apple.jpg',
      papaya      : 'papaya.jpg', 
      muskmelon   : 'muskmelon.jpg',
      coconut     : 'coconut.jpg',
      orange      : 'orange.jpg',
      cotton      : 'cotton.jpg',
      jute        : 'jute.jpg',
      coffee      : 'coffee.jpg',
    };

    this.imagePath = `../assets/crops/${cropImages[this.prediction.toLowerCase()] || 'default.jpg'}`;
  }
}
