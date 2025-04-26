import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.scss']
})
export class PredictComponent {
  inputs: number[] = [];

  labels = [
    { name: 'n', placeholder: 'N' },
    { name: 'p', placeholder: 'P' },
    { name: 'k', placeholder: 'K' },
    { name: 'temperature', placeholder: 'Temperature' },
    { name: 'humidity', placeholder: 'Humidity' },
    { name: 'ph', placeholder: 'pH' },
    { name: 'rainfall', placeholder: 'Rainfall' }
  ];

  constructor(private http: HttpClient, private router: Router) {}

  submitForm(form: any) {
    if (form.invalid) {
      // If form is invalid, just trigger the error states
      return;
    }
  
    this.http.post<any>('http://localhost:5000/predict', { input: this.inputs })
      .subscribe(response => {
        localStorage.setItem('prediction', response.prediction);
        this.router.navigate(['/recommended'], {
          queryParams: {
            prediction: response.prediction,
            n: this.inputs[0],
            p: this.inputs[1],
            k: this.inputs[2],
            temperature: this.inputs[3],
            humidity: this.inputs[4],
            ph: this.inputs[5],
            rainfall: this.inputs[6]
          }
        });
      }, error => {
        console.error('Prediction error:', error);
      });
  }
  
}
