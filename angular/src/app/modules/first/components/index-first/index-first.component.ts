import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-index-first',
  templateUrl: './index-first.component.html',
  styleUrls: ['./index-first.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexFirstComponent {

}
