import {Component} from '@angular/core';
import {VideoModel} from "../../models/video-model";
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {ClientModel} from "../../models/client-model";

@Component({
  selector: 'app-our-project',
  templateUrl: './our-project.component.html',
  styleUrls: ['./our-project.component.css']
})
export class OurProjectComponent {

  constructor(private sanitizer: DomSanitizer) {
  }

  videoModels: VideoModel [] = [
    {
      title: 'T2 S O X 2013 Finale in Berjaya Times Square',
      videoLink: 'https://www.youtube.com/embed/wGT0FZLSekE?si=YRl1qslVfwLnD3lT'
    },
    {
      title: 'T2 Interactive Doraemon Media Event',
      videoLink: 'https://www.youtube.com/embed/66HJ6p6jdI8?si=OCADfkueZo-vkjnb'
    },
    {
      title: 'T2 McDonalds National Breakfast Day',
      videoLink: 'https://www.youtube.com/embed/rHfjyV9JZ1Q?si=97xA9oot2lTajqmp'
    },
    {
      title: 'T2 Gatsby Dance Competition',
      videoLink: 'https://www.youtube.com/embed/c8_AAO5fv9Q?si=5Fk8jSW61zVlYsHu'
    },
    {
      title: 'T2 BMX Skateboard 2009',
      videoLink: 'http://www.youtube.com/watch?v=WtMXUNH0mUg'
    },
    {
      title: 'T2 Putrajaya Night Marathon',
      videoLink: 'https://www.youtube.com/embed/uo7gyC5GScs?si=72tX-31x-_iXNTM5'
    },
  ];

  clientList: ClientModel[] = [
    {
      category: 'Telecommunications',
      clients: ['Celcom']
    },
    {
      category: 'Food & Baverage',
      clients: ['Mcdonals', 'tigerbeer', 'guiness', 'poweroot', 'super']
    },
    {
      category: 'Automobile',
      clients: ['Shell', 'VW', 'BS', 'Proton']
    },
    {
      category: 'MLM',
      clients: ['Elken', 'Klink', 'SNE', 'EASE',]
    },
    {
      category: 'Banking',
      clients: ['Maybank', 'UOB', 'SC', 'MBF',]
    },
    {
      category: 'Electronic',
      clients: ['Hitachi', 'FUJI',  'Mitsu', 'York', 'ACSON']
    },
    {
      category: 'Insurance',
      clients: ['Prudent', 'GE', 'AM', 'Kurnia', 'Manulife']
    },
    {
      category: 'Other',
      clients: ['Cathay', 'Genting', 'Modvalley', 'SKF', 'Sokong', 'MSC', 'Marlboro', '7aste',
        'KLCC,T&G Govern', 'bio', 'bursa', 'nokia', 'brah', 'pico', 'king']
    },
  ];

  convertSafeUrl(videoUrl: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }
}
