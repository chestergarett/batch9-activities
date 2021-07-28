const dateHelper = (date) => {
    const d = new Date(date)
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = d.getFullYear();

    // current hours
    const hours = d.getHours();
    // current minutes
    const minutes = d.getMinutes();

    // current seconds
    const seconds = d.getSeconds();

    return `${mm}/${dd}/${yyyy} ${hours}:${minutes}:0${seconds}`
}

export default dateHelper;