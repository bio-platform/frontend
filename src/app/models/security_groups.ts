export class SecurityGroup{
    name:string;
    id:string;
    security_group_rules:SecurityGroupRules[];
}

export class SecurityGroupRules{
    direction:string;
    protocol:string;
}