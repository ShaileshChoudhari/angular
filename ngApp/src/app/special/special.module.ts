import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialComponent } from './special.component';
import { SpecialRoutingModule } from './special-routing.module';

@NgModule({
    declarations: [SpecialComponent],
    imports: [
        CommonModule,
        SpecialRoutingModule
    ],
    providers: []
})

export class SpecialModule { }
