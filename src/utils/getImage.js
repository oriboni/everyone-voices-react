import logo from '../icons/logo.svg'
import circleTop from '../icons/circle-top.png'
import circleBot from '../icons/circle-bottom.png'

const images = {
    logo,
    circleTop,
    circleBot
}

function getImage(key) {
    return images[key]
}

export default getImage;