import { Component, Input } from "@angular/core";
import { Talk } from "../../../core/store/talk/talk.model";

@Component({
    selector: 'jhi-talk',
    templateUrl: './talk.component.html',
    styleUrls: ['./talk.component.css']
})
export class TalkComponent {
    @Input() talk: Talk;
}
