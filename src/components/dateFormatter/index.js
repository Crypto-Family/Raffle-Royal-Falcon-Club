const getDate = (date) => {
    const d = new Date(date * 1000);
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const hours = d.getHours();
    const minutes = d.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const day = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    const time = `${hours % 12}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    return `${month} ${day}, ${year} @ ${time}`;
};

export default getDate;
