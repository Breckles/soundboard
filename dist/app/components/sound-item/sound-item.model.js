export class SoundItem {
    constructor(_title, _source, _speaker, _audioPath, _imagePath) {
        this._title = _title;
        this._source = _source;
        this._speaker = _speaker;
        this._audioPath = _audioPath;
        this._imagePath = _imagePath;
    }
    get title() {
        return this._title;
    }
    get imagePath() {
        return this._imagePath;
    }
    get audioPath() {
        return this._audioPath;
    }
    get speaker() {
        return this._speaker;
    }
    get source() {
        return this._source;
    }
}
//# sourceMappingURL=sound-item.model.js.map