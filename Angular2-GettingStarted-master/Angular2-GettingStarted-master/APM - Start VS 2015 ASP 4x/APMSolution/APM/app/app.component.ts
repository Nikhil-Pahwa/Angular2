import {Component} from "angular2/core";
import {ProductListComponent} from './product/product-list.component';

@Component({
    selector: "pm-am",
    template: `
        <div> {{pageTitle}} </div>
        <pm-products></pm-products>
    `,
    directives: [ProductListComponent]
})

export class AppComponent {
    pageTitle: String = "My Default Project";
}