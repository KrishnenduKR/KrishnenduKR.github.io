import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { faCoffee} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { Router, ActivatedRoute} from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor (router: Router, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, route: ActivatedRoute){
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    route.url.subscribe(() => {
      console.log(router.url);
     });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
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
    //{ linkTitle: 'Portfolio', link: 'portfolio' },
    { linkTitle: 'Blogs', link: 'blog' },
    { linkTitle: 'Contact', link: 'contact' }
  ];

  handleClick(selectedItem,sidenav) {
    if(selectedItem.linkTitle == 'Home'){
      this.selectedItem = "";
    }else
    {
      this.selectedItem = selectedItem.linkTitle;
    }

    if(this.mobileQuery.matches) {
      sidenav.toggle()
    }
    
  } 
}
