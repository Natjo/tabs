
# Tabs

![version](https://img.shields.io/github/manifest-json/v/Natjo/tabs)  

Element scrollable horizontally and swipable on non touchable devices
## Usage

### html
```html
<div class="tabs" role="tablist" data-module="modules/tabs" aria-label="Choisir une thématique">
    <button role="tab" aria-selected="true" tabindex="0" aria-controls="panel-1">Tab 1</button>
    <button role="tab" aria-selected="false" tabindex="-1" aria-controls="panel-2">Tab 2</button>
    <button role="tab" aria-selected="false" tabindex="-1" aria-controls="panel-3">Tab 3</button>
</div>
		
<div class="tabs-content">
    <div class="tabs-panel" role="tabpanel" aria-expanded="true" aria-hidden="false" id="panel-1">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem ipsum maxime officia qui amet, facilis quas recusandae soluta deleniti incidunt iure cum eum, tempore quo repudiandae atque quasi sed! <a href="">lorem link</a> Perferendis, reiciendis placeat similique iusto in veniam exercitationem sapiente labore perspiciatis rem, amet quae doloremque eligendi molestiae dolore
    </div>
    <div class="tabs-panel" role="tabpanel" aria-expanded="true" aria-hidden="true" id="panel-2">
        <img	src="https://picsum.photos/id/662/200/200">
    </div>
    <div class="tabs-panel" role="tabpanel" aria-expanded="true" aria-hidden="true" id="panel-3">
        <form>
            <input type="text">
        </form>
    </div>
</div>
```

### javascript
```javascript
import scrollerHorizontal from '../../modules/tabs/tabs.js';

tabs(document.querySelector('.tabs'));
```

### css
```css
.tabs  {
	button{
		&:hover, &[aria-selected="true"]{
			background-color: aliceblue;
		}
	}
}
.tabs-panel {
	&[aria-hidden="true"] {
		display: none;
	}
}
```

## Demo
[See codepen demo](https://codepen.io/natjo/pen/yLaXMLM?editors=0010)
