
export const timestampPost = (timestamp) => {
    const month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
    const date = new Date()
    const dayNow = date.getDate()
    const monthNow = date.getMonth()
    let datePost = timestamp.split(" ")[0].split("/")
    const timePost = timestamp.split(" ")[1].split(":")
    timePost.pop()
    if (dayNow === parseInt(datePost[1]) && monthNow === parseInt(datePost[0])) {
        datePost = "сегодня"
        return datePost + " в " + timePost.join(":")
    }
    if (dayNow - parseInt(datePost[1]) === 1 && monthNow === parseInt(datePost[0])) {
        datePost = "вчера"
        return datePost + " в " + timePost.join(":")
    }
    datePost = datePost[1] + " " + month[parseInt(datePost[0]) - 1]
    return datePost + " в " + timePost.join(":")
}