import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'temp',
    standalone:true
})

export class TempraturePipe implements PipeTransform{
    transform(value: string | number | null,inputType:'cel' | 'feh',outputType?:'cel' | 'feh') {
        if(!value){
            return;
        }
        let val:number;

        if(typeof value==='string'){
            val=parseFloat(value);
        }  
        else{
            val=value;
        }
        let outputTemp:number;

        if(inputType=="cel" && outputType==='feh'){
            outputTemp=val * (9/5)+32;
        }
        else if(inputType=="feh" && outputType==='cel')
        {
            outputTemp=(val - 32) * (5/9);
        }
        else{
            outputTemp=val;
        }

        return `${outputTemp.toFixed(2)} F`;
    }
}