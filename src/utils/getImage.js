import logo from '../icons/logo.svg'
import circleTop from '../icons/circle-top.png'
import circleBot from '../icons/circle-bottom.png'
import report from '../icons/report.png'
import human from '../icons/human.png'
import exit from '../icons/exit.png'
import voting from '../icons/voting.png'
import burgerStyle from '../icons/burgerStyle.png'

const images = {
    logo,
    circleTop,
    circleBot,
    report,
    human,
    exit,
    voting,
    burgerStyle
}

function getImage(key) {
    return images[key]
}

export default getImage;