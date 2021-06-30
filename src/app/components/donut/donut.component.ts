import { Component, Input } from '@angular/core';

import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent {

  @Input() titulo: string = 'Sin titulo';
  @Input() data: MultiDataSet = [
    [350, 450, 200],
  ];

  @Input() labels: Label[] = ['Label1', 'Label2', 'Label3'];
  
  public colors: Color[] = [
    { backgroundColor: ['#6857e6', '#009fee', '#f02059'] }
  ]

}
