export function   getFirstDayPreviousMonth() {
    const date = new Date();
    const prevMonth = date.getMonth() - 1;
    const firstDay = 1;
    let yourDate = new Date(date.getFullYear(), prevMonth, firstDay);
    //handling timezone 
    const offset = yourDate.getTimezoneOffset()
    yourDate = new Date(yourDate.getTime() - (offset*60*1000))
    return yourDate.toISOString().split('T')[0];
}

export const NormalDateFormat = "Do, MMMM YYYY";