import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Talk } from "../../../core/store/talk/talk.model";

@Component({
    selector: 'watch-button',
    templateUrl: './watch-button.component.html',
    styleUrls: ['./watch-button.component.css']
})
export class WatchButtonComponent {
    @Input() talk: Talk;
    @Input() watched: boolean;
    @Output() watch = new EventEmitter();

    handleWatch(): void {
        this.watch.next(null);
    }
}
