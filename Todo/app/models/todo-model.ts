export class TodoModel {
    status: string = "started";
    title: string = "";

    toggled() {
        this.status = (this.status == 'started') ? this.status = 'completed': this.status = 'started'; 
    }
}