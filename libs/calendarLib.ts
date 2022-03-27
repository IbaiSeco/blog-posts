type Date = {
    date: string
}

function DateFormat({ date }: Date) {
    const createdDate = new Date(date);
    const month = createdDate.getMonth(); //months from 1-12
    const day = createdDate.getUTCDate();
    const year = createdDate.getUTCFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

   return monthNames[month] + " " + day + ", " + year;
}

export { DateFormat }