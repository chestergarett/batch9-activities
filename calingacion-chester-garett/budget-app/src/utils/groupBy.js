const groupBy = (items, key) => {
    return items.reduce((result, currentValue) => {
        (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue)
        return result;
    }, {})
};

export default groupBy;
