import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebSearchService {

  constructor(private httpClient: HttpClient) { }

  basicSearch(val:any){
    let headers = new HttpHeaders({
			'x-rapidapi-host': 'joj-web-search.p.rapidapi.com',
			'x-rapidapi-key': '161093014amsh6516ff8df6a5904p14c013jsnb056e3345b2d'
		});
		return this.httpClient
			.get<any>('https://joj-web-search.p.rapidapi.com/', {
        params: {
          q: val,
          limit: '10',
          related_keywords: 'true'
        },
				headers: headers
			})
  }

  // imageSearch(val:any){
  //   let headers = new HttpHeaders({
	// 		'x-rapidapi-host': 'joj-web-search.p.rapidapi.com',
	// 		'x-rapidapi-key': '161093014amsh6516ff8df6a5904p14c013jsnb056e3345b2d'
	// 	});
	// 	return this.httpClient
	// 		.get<any>('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI', {
  //       params: {
  //         q: val,
  //         pageNumber: '1',
  //         pageSize: '5',
  //         autoCorrect: 'true'
  //       },
	// 			headers: headers
	// 		})
  // }
}
