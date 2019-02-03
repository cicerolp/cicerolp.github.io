import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationService {
  public Server = 'http://ec2-18-188-109-184.us-east-2.compute.amazonaws.com:7000/';
  public ApiUrl = 'api';
  public ServerWithApiUrl = this.Server + this.ApiUrl;

  public defaultDataset = 'health';
  
  constructor() { }

}
