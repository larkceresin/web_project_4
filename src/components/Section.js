class Section{
    constructor({items, renderer}, containerElement){
        this._items = items;
        this.renderer = renderer;
        this.containerElement = containerElement;
    }
    renderer(){
        this.items.forEach((item) => this.renderer(item))
        
    }
    addItem(){
        this.containerElement.append(element)
    }
}
export default Section