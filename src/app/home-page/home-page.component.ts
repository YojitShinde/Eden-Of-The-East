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
  
  results:any = []

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

  onSearchClick(){
    console.log(this.query);
    this.webSearchService.basicSearch(this.query).subscribe(res=>{
      this.results[0] = res.value[0];
      this.results[1] = res.value[1];
      this.results[2] = res.value[2];
      this.results[3] = res.value[3];
      this.results[4] = res.value[4];
      this.results[5] = res.value[5];
      this.results[6] = res.value[6];
      this.results[7] = res.value[7];
      this.results[8] = res.value[8];
      this.results[9] = res.value[9];
    })
	}
  
}


