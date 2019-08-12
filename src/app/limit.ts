export class Limit{
    constructor(json:any){
        floating_ips:json["floating_ips"]
    }

    floating_ips: limits;
    instances : limits;
    cores : limits;
    ram : limits;


}

export class limits{
    limit: number;
    used: number;
}