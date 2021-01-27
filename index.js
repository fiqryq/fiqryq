const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar = Array(progressBarCapacity)
        .fill('▁')
        .map((value, index) => index < passedProgressBarIndex ? '█' : value)
        .join('')
    return `{ ${progressBar} }`
}

const readme = `\
### Hi there 👋, I'm Bot

## Just learn programming , u can call me piq.
- 🔭 I’m currently freelance
- 🌱 I’m currently learning everything
- 🚧 I'm open for collaboration and project
- 🎹 I like music. 
- 📫 How to reach me: DM me at instagram [@fiqryq](https://instagram.com/fiqryq)
- 📱 Visit my [playstore](https://tinyurl.com/suncodeid)
- ⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
- ⏰ Updated on ${new Date().toUTCString()}

### Connect with me
[![Instagram Badge](https://img.shields.io/badge/-@fiqryq-purple?style=flat-square&logo=Instagram&logoColor=white&link=https://instagram.com/fiqryq/)](https://instagram.com/fiqryq)
[![Youtube Badge](https://img.shields.io/badge/-fiqrychoerudin-darkred?style=flat-square&logo=Youtube&logoColor=white&link=https://www.youtube.com/channel/UCAFAEpUDZ4QUkG-yLnBSAMg)](https://www.youtube.com/channel/UCAFAEpUDZ4QUkG-yLnBSAMg)
[![Medium Badge](https://img.shields.io/badge/-fiqryq-black?style=flat-square&logo=Medium&logoColor=white&link=https://medium.com/@fiqryq)](https://medium.com/@fiqryq)
[![Artstation Badge](https://img.shields.io/badge/-fiqryq-blue?style=flat-square&logo=Artstation&logoColor=white&link=https://www.artstation.com/fiqryq)](https://www.artstation.com/fiqryq)
[![Gmail Badge](https://img.shields.io/badge/-work.fiqrychoerudin@gmail.com-red?style=flat-square&logo=Gmail&logoColor=white&link=mailto:work.fiqrychoerudin@gmail.com)](mailto:work.fiqrychoerudin@gmail.com)
[![Dribble Badge](https://img.shields.io/badge/-fiqrychoerudin-magenta?style=flat-square&logo=Dribbble&logoColor=white&link=https://dribbble.com/fiqrychoerudin)](https://dribbble.com/fiqrychoerudin)
[![Reddit Badge](https://img.shields.io/badge/-bleki99-orange?style=flat-square&logo=Reddit&logoColor=white&link=https://www.reddit.com/user/bleki99)](https://www.reddit.com/user/bleki99)
`
console.log(readme)


