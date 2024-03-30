
export const timestampPost = (post) => {
    const month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
    const date = new Date()
    const dayNow = date.getDate()
    const monthNow = date.getMonth()
    let datePost = post.timestamp.split(" ")[0].split(".")
    const timePost = post.timestamp.split(" ")[1].split(":")
    if (timePost[1].length === 1) {
        timePost[1] =  "0" + timePost[1]
    }
    if (dayNow === parseInt(datePost[0]) && monthNow === parseInt(datePost[1])) {
        datePost = "сегодня"
        return datePost + " в " + timePost.join(":")
    }
    if (dayNow - parseInt(datePost[0]) === 1 && monthNow === parseInt(datePost[1])) {
        datePost = "вчера"
        return datePost + " в " + timePost.join(":")
    }
    datePost = datePost[0] + " " + month[parseInt(datePost[1]) - 1]
    return datePost + " в " + timePost.join(":")
}