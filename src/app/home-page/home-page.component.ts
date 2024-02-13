import { Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { WebSearchService } from '../web-search.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  
  web_results:any = [];
  chat_result:String = "";
  web: boolean = true;
  chat: boolean = true;

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
    console.log(this.query);
    this.webSearchService.basicSearch(this.query).subscribe(res=>{
      console.log(res)

      this.web_results[0] = res.results[0];
      this.web_results[1] = res.results[1];
      this.web_results[2] = res.results[2];
      this.web_results[3] = res.results[3];
      this.web_results[4] = res.results[4];
      this.web_results[5] = res.results[5];
      this.web_results[6] = res.results[6];
      this.web_results[7] = res.results[7];
      this.web_results[8] = res.results[8];
      this.web_results[9] = res.results[9];
    })
	}

  onChatClick(){
    this.chat = false;
    console.log(this.query);
    this.webSearchService.chat(this.query).subscribe(res=>{
      console.log(res)

      this.chat_result = res.result;
    })
  }

}
