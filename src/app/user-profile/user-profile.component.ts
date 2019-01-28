import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  username = 'michael23';
  email = 'hello@creative-tim.com';
  firstName = 'Mike';
  lastName = 'Andrew';
  address = 'Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09';
  city = 'Bucharest';
  country = 'Romania';
  zipCode = '050107';
  description = 'Lamborghini Mercy, Your chick she so thirsty, I\'m in that two seat Lambo.';

  constructor() {
  }

  ngOnInit() {
  }

}
