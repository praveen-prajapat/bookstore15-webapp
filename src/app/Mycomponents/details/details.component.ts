import { Component } from '@angular/core';
import { book } from 'src/app/book';
import { SharedService } from 'src/app/shareddetails/shared.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  constructor(public sharedService: SharedService) {}
}
