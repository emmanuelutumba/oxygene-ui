import {NgModule} from '@angular/core';
import {ButtonModelComponent} from './ui/button-model/button-model.component';
import {SelectModelComponent} from './ui/select-model/select-model.component';
import {CheckBoxModelComponent} from './ui/check-box-model/check-box-model.component';
import {DialogModelComponent} from './ui/dialog-model/dialog-model.component';
import {InputModelComponent} from './ui/input-model/input-model.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [ButtonModelComponent, SelectModelComponent, CheckBoxModelComponent, DialogModelComponent, InputModelComponent],
    imports: [ReactiveFormsModule, CommonModule],
  exports: [ButtonModelComponent, SelectModelComponent, CheckBoxModelComponent, DialogModelComponent, InputModelComponent]
})
export class OxygeneUiModule {
}
