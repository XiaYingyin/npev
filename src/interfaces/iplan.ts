import { Input } from "@angular/core";

export class IPlan {
  id: string;
  name: string;
  content: any;
  query: string;
  createdOn: Date;
  planStats?: any;
  formattedQuery?: string;
}
