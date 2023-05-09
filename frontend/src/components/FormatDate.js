function formatDate(isoDate) {
    let year = isoDate.substring(0,4);
    let month_num = isoDate.substring(5,7);
    let day = isoDate.substring(8);
    let month = "";

    if (day[0] === '0') {
        day = day.substring(1);
    }

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month_index = parseInt(month_num);
    month = months[month_index - 1];

    return `${month} ${day}, ${year}`;
}

export default formatDate;