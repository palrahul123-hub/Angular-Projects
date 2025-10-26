export class Ticket{
    id:string;
    title:string;
    description:string;
    status:'open'| 'close'
    
    constructor(){
        this.id='0';
        this.title='',
        this.description='';
        this.status = 'open';
    }
    

}