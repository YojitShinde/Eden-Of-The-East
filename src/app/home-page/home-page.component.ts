import { Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { WebSearchService } from '../web-search.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  web_results:any = []
  img_results:any = []
  web: boolean = true;
  img: boolean = true;

  @HostBinding('class.pc') pcMode = false;

  constructor(private router: Router, private element: ElementRef, private breakPointObserver: BreakpointObserver, private webSearchService: WebSearchService) {
    console.log("directive working!")
    this.breakPointObserver.observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape]).subscribe({
      next: (value: any) => {
        for(let breakpoint of Object.keys(value.breakpoints)){
          if(value.breakpoints[breakpoint]){
            console.log("working properly!")
            if(breakpoint == Breakpoints.HandsetPortrait){
              this.element.nativeElement.classList.remove('pc');
              console.log("mobile")
              this.pcMode = false;
            }
            if(breakpoint == Breakpoints.WebLandscape){
              this.element.nativeElement.classList.add('pc');
              console.log("pc")
              this.pcMode = true;
            }
          }
        }
      }
    })
   }

  @Input() 
  query:any;

  ngOnInit(): void {
  }

  onWebSearchClick(){
    this.web = false;
    this.img = true;
    console.log(this.query);
    this.webSearchService.basicSearch(this.query).subscribe(res=>{
      this.web_results[0] = res.value[0];
      this.web_results[1] = res.value[1];
      this.web_results[2] = res.value[2];
      this.web_results[3] = res.value[3];
      this.web_results[4] = res.value[4];
      this.web_results[5] = res.value[5];
      this.web_results[6] = res.value[6];
      this.web_results[7] = res.value[7];
      this.web_results[8] = res.value[8];
      this.web_results[9] = res.value[9];
    })
	}

  onImgSearchClick(){
    this.web = true;
    this.img = false;
    console.log(this.query);
    this.webSearchService.imageSearch(this.query).subscribe(res=>{
      console.log(res);
      this.img_results[0] = res.value[0];
      this.img_results[1] = res.value[1];
      this.img_results[2] = res.value[2];
      this.img_results[3] = res.value[3];
      this.img_results[4] = res.value[4];
    })
  }
  
}


