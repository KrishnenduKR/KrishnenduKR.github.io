import { Component, OnInit } from '@angular/core';
import { faTwitter, faLinkedin, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faInstagram = faInstagram;

  ngOnInit(): void {
  }

}
