import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workpage',
  templateUrl: './workpage.component.html',
  styleUrls: ['./workpage.component.scss']
})
export class WorkpageComponent implements OnInit {
  pdfSrc = '../../../assets/DMitic_Rsm_2020.pdf';
  constructor() { }

  ngOnInit(): void {
  }

}
