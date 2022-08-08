let DateCalc = class{

    diffDays = (date1,date2) => {
        if (!date1||!date2) throw new Error('Must provide a date.');
        let timeDifference = Math.abs(date1.getTime() - date2.getTime());
        let differentDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
        return differentDays;
    }

    diffMonth = (date1,date2) => {
        if (!date1||!date2) throw new Error('Must provide a date.');
        let timeDifference = Math.abs(date1.getTime() - date2.getTime());
        let differentMonth = Math.ceil(timeDifference / (1000 * 3600 * 24 * 30));
        return differentMonth;
    }

    diffYear = (date1,date2) => {
        if (!date1||!date2) throw new Error('Must provide a date.');
        let timeDifference = Math.abs(date1.getTime() - date2.getTime());
        let differentYear = Math.floor(timeDifference / (1000 * 3600 * 24 * 30  * 12));
        return differentYear;
    }

    addDays = (date, days) => {
        if (!date) throw new Error('Must provide a date.');
        
        if (days === null || days === undefined) throw new Error('Must provide number of days.');
        if (typeof days !== 'number') throw new Error('Number of days must be a number type.');
        if (Number.isNaN(days)) throw new Error('Number of days cannot be NaN.');
    
        const milliseconds = days * 24 * 60 * 60 * 1000;
        const result = new Date(date.valueOf() + milliseconds);
        return result;
    };
    
    subDays = (date, days) => {
        if (!date) throw new Error('Must provide a date.');
        
        if (days === null || days === undefined) throw new Error('Must provide number of days.');
        if (typeof days !== 'number') throw new Error('Number of days must be a number type.');
        if (Number.isNaN(days)) throw new Error('Number of days cannot be NaN.');
    
        const milliseconds = days * 24 * 60 * 60 * 1000;
        const result = new Date(date.valueOf() - milliseconds);
        return result;
    };
}

module.exports = DateCalc;