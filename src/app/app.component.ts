import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Ci/Cd';

  data = [
    {
      title: "Congratulations! This is first version. 🎉",
      creator: "Mahdi Ghorbani"
    },
    {
      title: "And this is another version with another title.",
      creator: "Another User"
    }
  ]
}
