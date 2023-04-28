import { Component, OnInit } from '@angular/core';
import { HomeReaderComponent } from '../nav-bar/home-reader.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{


  constructor(private homeReaderComponent :HomeReaderComponent ){}
  ngOnInit(): void {
    
  }


  handleClick(){

    this.homeReaderComponent.categoryComponent=this;
  }
  getItemValue(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const item = target.textContent?.trim();
    this.homeReaderComponent.getCategory(item);
  }

}
