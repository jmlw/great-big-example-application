import { Talk } from '../store/talk/talk.model';

export class TalkWatchService {
    watch(talk: Talk): void {
        console.log("watch", talk.id);
    }
}
