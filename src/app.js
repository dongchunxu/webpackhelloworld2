import Layer from './components/layer/layer.js'
import './css/common/style.css';


const app = function() {
    let dom = document.getElementById('app');
    // let layer = new Layer();
    // dom.innerHTML = layer.tpl;
    var layer = new Layer();
    dom.innerHTML = layer.tpl({
        name:'hellowo',
        arr: ["hello", "1", "2"]
    });

};

new app();

