import { Subject } from 'node_modules/rxjs';

import { SoundItem } from '../components/sound-item/sound-item.model';

export class SoundItemManager {
  private static _soundItems = [
    new SoundItem(
      'Ask Questions',
      'arnold',
      'arnold',
      '/src/assets/audio/ask-ques.mp3',
      '/src/assets/images/arnold.png'
    ),
    new SoundItem(
      'Cookie Down',
      'arnold',
      'arnold',
      '/src/assets/audio/put-that-cookie-down-now-arnold-schwarzenegger.mp3',
      '/src/assets/images/arnold.png'
    ),
    new SoundItem(
      'Fuck You',
      'arnold',
      'arnold',
      '/src/assets/audio/fuck-you-arnold.mp3',
      '/src/assets/images/arnold.png'
    ),
    new SoundItem(
      'Blackjack/Hookers',
      'futurama',
      'bender',
      '/src/assets/audio/blackjack-and-hookers-the-great-and-powerful-trixie-futurama-mo1p-gojsqe.mp3',
      '/src/assets/images/Bender.png'
    ),
    new SoundItem(
      'Take My Money',
      'futurama',
      'fry',
      '/src/assets/audio/shut_up_and_take_my_moneymp3converter.mp3',
      '/src/assets/images/Fry.png'
    ),
    new SoundItem(
      'Dooooooom',
      'futurama',
      'morbo',
      '/src/assets/audio/futurama-morbo-doom.mp3',
      '/src/assets/images/Morbo.png'
    ),
    new SoundItem(
      'Good News',
      'futurama',
      'professor_farnsworth',
      '/src/assets/audio/goodnews_vVTJocq.mp3',
      '/src/assets/images/Farnsworth.png'
    ),
    new SoundItem(
      'We Need Math',
      'futurama',
      'professor_farnsworth',
      '/src/assets/audio/im-afraid-we-need-to-use.mp3',
      '/src/assets/images/Farnsworth.png'
    ),
    new SoundItem(
      'Cartman Laughs',
      'south_park',
      'cartman',
      '/src/assets/audio/cartman-laughs.mp3',
      '/src/assets/images/Cartman.png'
    ),
    new SoundItem(
      'God Dammit',
      'south_park',
      'cartman',
      '/src/assets/audio/god-damn-it-cartman.mp3',
      '/src/assets/images/Cartman.png'
    ),
    new SoundItem(
      'Beefcake',
      'south_park',
      'cartman',
      '/src/assets/audio/southpark_cartman_beefcake.mp3',
      '/src/assets/images/Cartman.png'
    ),
    new SoundItem(
      'My Authority',
      'south_park',
      'cartman',
      '/src/assets/audio/you-will-respect-my-authoritah_1.mp3',
      '/src/assets/images/Cartman.png'
    ),
    new SoundItem(
      'Do What I Want',
      'south_park',
      'cartman',
      '/src/assets/audio/i-do-what-i-want.mp3',
      '/src/assets/images/Cartman.png'
    ),
  ];

  private static _listChanged = new Subject<SoundItem[]>();

  constructor() {}

  public static changeLists(source: string) {
    let newList: SoundItem[] = [];
    if (source === 'all') {
      newList = this.soundItems;
    } else {
      newList = this.soundItems.filter((item) => {
        console.log(`item.source: ${item.source}`);
        console.log(`source: ${source}`);
        console.log(item.source === source);

        return item.source === source;
      });
      // for (const item of SoundItemManager.soundItems) {
      //   if (item.source === source) {
      //     newList.push(item);
      //   }
      // }
    }
    console.log(newList);
    this.listChanged.next(newList);
    // this.listChanged.next([
    //   new SoundItem(
    //     'Ask Questions',
    //     'arnold',
    //     'arnold',
    //     '/src/assets/audio/ask-ques.mp3',
    //     '/src/assets/images/arnold.png'
    //   ),
    //   new SoundItem(
    //     'Cookie Down',
    //     'arnold',
    //     'arnold',
    //     '/src/assets/audio/put-that-cookie-down-now-arnold-schwarzenegger.mp3',
    //     '/src/assets/images/arnold.png'
    //   ),
    //   new SoundItem(
    //     'Fuck You',
    //     'arnold',
    //     'arnold',
    //     '/src/assets/audio/fuck-you-arnold.mp3',
    //     '/src/assets/images/arnold.png'
    //   ),
    // ]);
  }

  public static get soundItems() {
    return [...this._soundItems];
  }

  public static get listChanged() {
    return SoundItemManager._listChanged;
  }
}
