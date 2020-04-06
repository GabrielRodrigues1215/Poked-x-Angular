import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokes: any;

  constructor(private http: HttpClient) { }



  //Consumindo API DE POKEMONS
  ngOnInit() {
    this.http.get('https://pokeapi.co/api/v2/pokemon')
    .toPromise()
    .then(response => {
      let body = JSON.parse(JSON.stringify(response));
      this.pokes = body['results'];
      console.log(this.pokes[0].name)
    })
}
}
