import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BikeApiService } from 'src/app/services/bike-api.service';

@Component({
  selector: 'app-show-brands',
  templateUrl: './show-brands.component.html',
  styleUrls: ['./show-brands.component.css']
})
export class ShowBrandsComponent implements OnInit {

  brands$!: Observable<any[]>;

  constructor(private service: BikeApiService) { }

  ngOnInit(): void {
    this.brands$ = this.service.Brands();
  }

}
