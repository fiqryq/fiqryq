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
### Hi there 👋, I'm Fiqry choerudin

## Just learn programming , u can call me piq.
- 🔭 I’m currently intern dev.
- 🌱 I’m currently learning everything
- 🚧 I'm open for collaboration and project
- 🎹 I like music. 
- 📫 How to reach me: DM me at instagram [@fiqryq](https://instagram.com/fiqryq)
- 📱 Visit my [playstore](https://tinyurl.com/suncodeid)
- 🔗 Visit my [stackoverflow](https://stackoverflow.com/users/12970384/fiqry-choerudin?tab=profile)
- 🏤 Visit my [linkedIn](https://www.linkedin.com/in/fiqrychoerudin/)
- ⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
- ⏰ Updated on ${new Date().toUTCString()}
`
console.log(readme)


