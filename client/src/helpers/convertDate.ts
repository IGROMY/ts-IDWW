export const convertDate = (timestamp:string):string => {
    const date: Date = new Date(timestamp);
    const months: string[] = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const day:number = date.getDate()
    const monthName:string = months[date.getMonth()]
    const year: number = date.getFullYear()
    return `${day} ${monthName}, ${year}`
}