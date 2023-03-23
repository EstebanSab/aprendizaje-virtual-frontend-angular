export interface CourseModel{
    id:number;
    name:string;
    professors:Professor[];
}

export interface Professor{
    id: 0,
    name: string,
    especiality: string
}