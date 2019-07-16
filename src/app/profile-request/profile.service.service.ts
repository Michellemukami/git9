import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../user';
import { environment } from '../../environments/environment';
import { Repository } from '../repository';
import { Observable} from 'rxjs'

 
@Injectable()
export class ProfileService {
  baseurl=environment.apiUrl
  apikey=environment.access_token
  // access_token:'?access_token=8b95c9c8bdfb194bb5efa4582e40c05c6fe11377'
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