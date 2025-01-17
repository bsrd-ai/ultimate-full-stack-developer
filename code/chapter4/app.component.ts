
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    template: `
        <h1>Rain Prediction: {{ rainPrediction || 'Loading...' }}</h1>
        <h1>Temperature Prediction: {{ temperaturePrediction || 'Loading...' }}</h1>
        <h1>Weather Condition: {{ weatherCondition || 'Loading...' }}</h1>
    `,
})
export class AppComponent implements OnInit {
    rainPrediction: string | null = null;
    temperaturePrediction: number | null = null;
    weatherCondition: string | null = null;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.post<{prediction: string}>("http://127.0.0.1:5000/api/rain-prediction", { humidity: 80 })
            .subscribe(data => this.rainPrediction = data.prediction);

        this.http.post<{prediction: number}>("http://127.0.0.1:8000/api/temperature-prediction", { humidity: 80 })
            .subscribe(data => this.temperaturePrediction = data.prediction);

        this.http.get<{prediction: string}>("http://127.0.0.1:8080/api/weather-condition-prediction?temperature=15")
            .subscribe(data => this.weatherCondition = data.prediction);
    }
}
