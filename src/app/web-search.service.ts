import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';

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

  chat(val:any){
    let headers = new HttpHeaders({
      'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
      'x-rapidapi-key': '161093014amsh6516ff8df6a5904p14c013jsnb056e3345b2d',
      'content-type': 'application/json'
		});
    const body = ({
      'messages': [{
        'role':'user',
        'content': val
        }
      ],
      'system_prompt':'',
      'temperature': '0.9',
      'top_k': '5',
      'top_p': '0.9',
      'image': '',
      'max_tokens': '256'
    })
    return this.httpClient.
      post<any>('https://chatgpt-42.p.rapidapi.com/matag2', body, {
          headers: headers
        }
      )
  }


}
