var scriptLoaded = false;
function loadScript(remote_template){
	if(scriptLoaded){
		return;
	}

	var script = document.createElement("script");
	script.src = `/local/content-card-remote-control/${remote_template}/remote-html.js`;
	script.type = "text/javascript";
	script.async = false;
	document.head.appendChild(script); 
	scriptLoaded = true;
	
}


class ContentCardRemoteControl extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  setConfig(config) {
  	loadScript(config.remote_template);
    const root = this.shadowRoot;
    if (root.lastChild) root.removeChild(root.lastChild);

    const cardConfig = Object.assign({}, config);
    this._config = cardConfig
  }

  
  set hass(hass) {
  	
    const config = this._config;
    
    loadScript(config.remote_template);
    
    try{
    	const html = getRemoteHtml(config);
        const css = getRemoteStyle(config)
        
        
        const root = this.shadowRoot;
        this._hass = hass;
        // root.lastChild.hass = hass;
   
        const card = document.createElement('ha-card');
        if(!this.content && scriptLoaded){
             this.content = document.createElement('div');
             const style = document.createElement('style');
             style.textContent = css;
             this.content.innerHTML = html;
             card.appendChild(this.content);
             card.appendChild(style);
     
             root.appendChild(card);
             
             this._bindButtons(card, this._hass, this._config);
        }
    
    } catch(err){
    	console.log('waiting for remote load');
    	loadScript(config.remote_template);
    }
    
  }
  

    
  _bindButtons(card, hass, config){
  	var buttons =  card.getElementsByClassName("myButton");
    var i;
    for (i = 0; i < buttons.length; i++) { 
    	let button = buttons[i]
        button.addEventListener('click', function(source){
        	console.log(button.id);
        	hass.callService('switch',
        	                  config.broadlink_entity, 
        	                  {packet: [getPacket(button.id, config)]}
                             );
        });
    }
  }
  
  


  getCardSize() {
    return 3;
  }
  

}

 function getPacket(buttonId, config){
  	return config.buttons[buttonId];
  }

customElements.define('content-card-remote-control', ContentCardRemoteControl);
