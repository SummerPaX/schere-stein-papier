const emojis = ['✌', '👊', '✋']

const emojiPlayer = document.getElementById('emojiPlayer')
const emojiComputer = document.getElementById('emojiComputer')
const vsSpan = document.getElementById('vsSpan')
const pointsPlayer = document.getElementById('pointsPlayer')
const pointsComputer = document.getElementById('pointsComputer')

const points = {
    player: 0,
    computer: 0
}

function attack(emoji: string) {
    const randomNumber = Math.floor(Math.random() * 3)
    const randomEmoji = emojis[randomNumber]

    if (emojiPlayer != null)
        emojiPlayer.textContent = emoji

    if (emojiComputer != null)
        emojiComputer.textContent = randomEmoji

    if (emoji === randomEmoji) {
        vsSpan?.style.setProperty('background', 'yellow')
    } else if ( // Win condition
        (emoji === '✌' && randomEmoji === '✋') ||
        (emoji === '👊' && randomEmoji === '✌') ||
        (emoji === '✋' && randomEmoji === '👊')
    ) {
        vsSpan?.style.setProperty('background', 'green')

        points.player++ // points.player = points.player + 1

        if (pointsPlayer) {
            pointsPlayer.textContent = points.player.toString()
        }
    } else { // Lose condition
        vsSpan?.style.setProperty('background', 'red')

        points.computer++

        if (pointsComputer) {
            pointsComputer.textContent = points.computer.toString()
        }
    }
}