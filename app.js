function CalculateDueDate (submit, turnaround) {
    let submitDateMs = Date.parse( new Date( submit) )  ;
    
    let turnaroundDays = Math.floor(turnaround / 8) ;
    let turnaroundRemainingHours = turnaround % 8 ;

    let dueDateMs = submitDateMs + turnaroundDays * 1000 * 60 * 60 * 24 + turnaroundRemainingHours * 1000 * 60 * 60 ;

    let dueDateEnd = new Date(dueDateMs);
    dueDateEnd.setHours(17) ;
    dueDateEnd.setMinutes(0) ;
    dueDateEnd.setSeconds(0);
    dueDateEnd.setMilliseconds(0);
    let dueDateEndMs = Date.parse(dueDateEnd) - 1000*60 * dueDateEnd.getTimezoneOffset();

    if (dueDateMs > dueDateEndMs  ) {
        dueDateMs += 1000 * 60 * 60 * 16 ;
    }
    let dueDate = new Date(dueDateMs) ;

    return dueDate ;
}

module.exports = CalculateDueDate ;