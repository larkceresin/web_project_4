class Section{
    constructor({items, renderer}, containerElement){
        this._items = items;
        this._renderer = renderer;
        this._containerElement = containerElement;
    }
    renderer(){
        this._items.forEach((item) => this._renderer(item))
        
    }
    addItem(element){
        this._containerElement.append(element)
    }
}
export default Section