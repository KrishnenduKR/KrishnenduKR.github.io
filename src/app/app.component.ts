import { Component } from '@angular/core';
import { faCoffee} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'krish';
  faCoffee = faCoffee;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
}