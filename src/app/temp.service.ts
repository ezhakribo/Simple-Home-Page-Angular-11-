import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class TempService {
  constructor(private httpClient: HttpClient) {}

  private MOCK_API = "https://6014d695b5389800175695e2.mockapi.io/api/";

  getVideo() {
    return this.httpClient.get(this.MOCK_API + "videos");
  }

  getActivity() {
    return this.httpClient.get(this.MOCK_API + "activity");
  }

  getPeople() {
    return this.httpClient.get(this.MOCK_API + "people");
  }

  getChannel() {
    return this.httpClient.get(this.MOCK_API + "channel");
  }
}
