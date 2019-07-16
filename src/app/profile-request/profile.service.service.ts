import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../user';
import { environment } from '../../environments/environment';
import { Repository } from '../repository';
import { Observable} from 'rxjs'

 
@Injectable()
export class ProfileService {
  baseurl='https://api.github.com'
  apikey='?access_token=6a4f54327a8893e7ff49b03781377478a915c665'
  
  user:User;
  repos:Repository[];
  username:string=''
  public newUsername:string;

  constructor(private http:HttpClient) {  
   } 

   getRepo(username:string):Observable<Repository[]>{
     return this.http.get<Repository[]>(this.baseurl+'/users/'+username+'/repos'+this.apikey)
   }

   getUser(username:string):Observable<User[]>{
    return this.http.get<User[]>(this.baseurl+'/users/'+username+this.apikey)
  }

  

  
  
}