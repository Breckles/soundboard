import { SoundItem } from '../components/sound-item/sound-item.model.js';
export class SoundItemManager {
    constructor() {
        this._soundItems = [
            new SoundItem('Ask Questions', 'Miscellaneous', 'Arnold', '/src/assets/audio/ask-ques.mp3', '/src/assets/images/arnold.png'),
            new SoundItem('Cookie Down', 'Miscellaneous', 'Arnold', '/src/assets/audio/put-that-cookie-down-now-arnold-schwarzenegger.mp3', '/src/assets/images/arnold.png'),
            new SoundItem('Fuck You', 'Miscellaneous', 'Arnold', '/src/assets/audio/fuck-you-arnold.mp3', '/src/assets/images/arnold.png'),
            new SoundItem('Blackjack/Hookers', 'Futurama', 'Bender', '/src/assets/audio/blackjack-and-hookers-the-great-and-powerful-trixie-futurama-mo1p-gojsqe.mp3', '/src/assets/images/Bender.png'),
            new SoundItem('Take My Money', 'Futurama', 'Fry', '/src/assets/audio/shut_up_and_take_my_moneymp3converter.mp3', '/src/assets/images/Fry.png'),
            new SoundItem('Dooooooom', 'Futurama', 'Morbo', '/src/assets/audio/futurama-morbo-doom.mp3', '/src/assets/images/Morbo.png'),
            new SoundItem('Good News', 'Futurama', 'Professor Farnsworth', '/src/assets/audio/goodnews_vVTJocq.mp3', '/src/assets/images/Farnsworth.png'),
            new SoundItem('We Need Math', 'Futurama', 'Professor Farnsworth', '/src/assets/audio/im-afraid-we-need-to-use.mp3', '/src/assets/images/Farnsworth.png'),
            new SoundItem('Cartman Laughs', 'South Park', 'Cartman', '/src/assets/audio/cartman-laughs.mp3', '/src/assets/images/Cartman.png'),
            new SoundItem('God Dammit', 'South Park', 'Cartman', '/src/assets/audio/god-damn-it-cartman.mp3', '/src/assets/images/Cartman.png'),
            new SoundItem('Beefcake', 'South Park', 'Cartman', '/src/assets/audio/southpark_cartman_beefcake.mp3', '/src/assets/images/Cartman.png'),
            new SoundItem('My Authority', 'South Park', 'Cartman', '/src/assets/audio/you-will-respect-my-authoritah_1.mp3', '/src/assets/images/Cartman.png'),
            new SoundItem('I Do What I Want', 'South Park', 'Cartman', '/src/assets/audio/i-do-what-i-want.mp3', '/src/assets/images/Cartman.png'),
        ];
    }
    get soundItems() {
        return [...this._soundItems];
    }
    getItemsBySource(source) {
        return this._soundItems.filter((item) => {
            item.source === source;
        });
    }
    getItemsBySpeaker(speaker) {
        return this._soundItems.filter((item) => {
            item.speaker === speaker;
        });
    }
}
//# sourceMappingURL=sound-item-manager.service.js.map