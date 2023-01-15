import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.css']
})
export class CasaComponent implements OnInit {

  @Input() valor: number;
  @Input() direccion: string;

  constructor() { }

  ngOnInit(): void {
  }

}
