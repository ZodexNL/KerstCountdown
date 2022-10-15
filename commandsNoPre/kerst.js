module.exports = {
    name: 'kerst',
    aliases: ['kerst'],
    cooldown: 1000 * 5,
    description: "kerst", 

    async run (message, emoji) {
        let year = new Date().getFullYear()
        let date = new Date(`12/25/${year}`)

        function addHours(numOfHours, now = new Date()) {
            now.setTime(now.getTime() + numOfHours * 60 * 60 * 1000);
          
            return now;
          }

        let nowResult = addHours(2)

        let difference = date.getTime() - nowResult.getTime()

        switch (totaldays = Math.ceil(difference / (1000 * 60 * 60 * 24))){
            case 0:
                message.reply(`Het is vandaag ${emoji}! Fijne dagen toegewenst`)
                break;

            case 1:
                message.reply(`Het is ${emoji} avond!`)
                break;

            case -1:
                message.reply(`Het is vandaag 2e ${emoji} dag! Weer gourmetten zeker?`)
                
                break;
            case -2:
                message.reply(`Restjes eten en uitbuiken....`)
                break;
            default:
                message.reply(`Over ${totaldays} dagen is het ${emoji}!`)
                break;
        }
    }

}