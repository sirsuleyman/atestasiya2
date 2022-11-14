class Message {
    constructor(name, text) {
        this.name = name;
        this.time = new Date();
        this.text = text;
    }

    toString() {
        let hour = this.time.getHours() > 9 ? this.time.getHours() : `0${this.time.getHours()}`;
        let minute = this.time.getMinutes() > 9 ? this.time.getMinutes() : `0${this.time.getMinutes()}`;

        return `${hour}:${minute} ${this.name} : ${this.text}`;
    }
   
}

class Messenger {
    constructor() {
        this.messages = [];
    }

    show_history() {
        for (let i = 0; i<this.messages.length; i++) {
            console.log(this.messages[i].toString());
        }
    }

    send(author, text) {
        this.messages.push(new Message(author, text))

    }

}

let messenger = new Messenger()
messenger.send('Brad Pitt', 'Angelina barisaq bagila meni')
messenger.send('Angelina', 'giden gitmisdir. Gitdiyi gun bitmisdir.')
messenger.send('Brad','bruhhhh');
messenger.show_history();
