import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import $ from 'jquery';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'check-box-model',
    templateUrl: './check-box-model.component.html',
    styleUrls: ['./check-box-model.component.css']
})
export class CheckBoxModelComponent implements OnInit {

    @Input() id;
    @Input() isChecked = false;
    @Input() style = '';
    @Input() label = 'label';
    @Input() disabled = false;
    @Output() eventStateChanged: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit(): void {
    }

    onClick() {
        this.isChecked = this.isChecked === false ? true : false;
        this.eventStateChanged.emit({isChecked: this.isChecked});
    }

    isDisabled(el, disabled) {
        console.log(el);

        if (disabled) {
            $(el).attr('disabled', disabled);
            return {'pointer-events': 'none'};
        } else {
            $(el).attr('disabled', !disabled);
            return {'pointer-events': 'inherit'};
        }
    }
}
