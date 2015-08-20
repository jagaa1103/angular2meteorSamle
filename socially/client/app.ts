
import {Component, NgFor, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'app'
})
@View({
    //template: "<p>Hello World!</p>"
    templateUrl: 'client/index.ng.html',
    directives: [NgFor]
})

class Socially {

    constructor(){
        Tracker.autorun(zone.bind(() => {
            this.parties = Parties.find().fetch();
        }));
    }

}

bootstrap(Socially);