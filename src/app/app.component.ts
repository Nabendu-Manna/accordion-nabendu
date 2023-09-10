import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  heading = "FREQUENTLY ASKED QUESTIONS";

  faqList: {
    title: string,
    details: {
      type: string,
      data: string | null,
      text: string | null,
      src: string | null,
      url: string | null
    },
    status: boolean
  }[] = [
      {
        title: "Text",
        details: {
          type: "text",
          data: "Angular (also referred to as \"Angular 2+\") is a TypeScript-based, free and open-source single-page web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.",
          text: null,
          src: null,
          url: null
        },
        status: false
      }, {
        title: "Video",
        details: {
          type: "video",
          data: null,
          text: null,
          src: "//www.youtube.com/embed/HCL4_bOd3-4?si=obdaIZ3i-SKDmohq",
          url: null
        },
        status: false
      }, {
        title: "Link",
        details: {
          type: "link",
          data: null,
          text: "Kadane's Algorithm",
          src: null,
          url: "https://www.youtube.com/watch?v=HCL4_bOd3-4"
        },
        status: false
      }
    ]

  toggleStatus(index: number) {
    this.faqList.forEach((faq, i) => {
      faq.status = index == i ? !faq.status : false
    })
  }

}
