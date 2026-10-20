const currentDate = new Date();
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const day = currentDate.getDate();
const month = monthNames[currentDate.getMonth()];
const year = currentDate.getFullYear();

export const TodayDate = `${day} ${month} ${year}`;