const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar = Array(progressBarCapacity)
        .fill('ā')
        .map((value, index) => index < passedProgressBarIndex ? 'ā' : value)
        .join('')
    return `{ ${progressBar} }`
}

const readme = `\
### Hi there š, I'm Fiqry choerudin

## Just learn programming , u can call me piq.
- š­ Iām currently intern dev.
- š± Iām currently learning everything
- š§ I'm open for collaboration and project
- š¹ I like music. 
- š« How to reach me: DM me at instagram [@fiqryq](https://instagram.com/fiqryq)
- š± Visit my [playstore](https://tinyurl.com/suncodeid)
- š Visit my [stackoverflow](https://stackoverflow.com/users/12970384/fiqry-choerudin?tab=profile)
- š¤ Visit my [linkedIn](https://www.linkedin.com/in/fiqrychoerudin/)
- ā³ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
- ā° Updated on ${new Date().toUTCString()}
`
console.log(readme)


