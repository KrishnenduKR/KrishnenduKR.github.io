import { Component } from '@angular/core';
import { faCoffee} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { Router} from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor (
    router: Router){

  }

  selectedItem:any;

  title = 'krish';
  faCoffee = faCoffee;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faGithub = faGithub;

  navlist = [
    { linkTitle: 'Home', link: 'home' },
    { linkTitle: 'About Me', link: 'about-me' },
    { linkTitle: 'Resume', link: 'resume' },
    { linkTitle: 'Portfolio', link: 'portfolio' },
    { linkTitle: 'Blogs', link: 'blog' },
    { linkTitle: 'Contact', link: 'contact' }
  ];

  handleClick(selectedItem) {
    if(selectedItem.linkTitle == 'Home'){
      this.selectedItem = "";
    }else
    {
      this.selectedItem = selectedItem.linkTitle;
    }
    
  } 
}
