class ContentCardGauge extends HTMLElement {
  constructor() {
    super();  
    this.canvasCreated = 0;
    this.config= {};
    this.config.min = 0;
    this.config.max = 100;
    this.config.title = "";
    this.config.state = 2;
    this.config.size = 100;

 
    
    
    this.gaugeconfig = {
         angle: 0 , // The span of the gauge arc
         lineWidth: 0.25, // The line thickness
         radiusScale: 0.50, // Relative radius
         pointer: {
           length: 0.52, // // Relative to gauge radius
           strokeWidth: 0.04, // The thickness
           color: '#000000' // Fill color
         },
         limitMax: false,     // If false, max value increases automatically if value > maxValue
         limitMin: false,     // If true, the min value of the gauge will be fixed
         colorStart: '#6F6EA0',   // Colors
         colorStop: '#C0C0DB',    // just experiment with them
         strokeColor: '#EEEEEE',  // to see which ones work best for you
         generateGradient: true,
         highDpiSupport: true,     // High resolution support
         staticLabels: {
           font: "10px sans-serif",  // Specifies font
           labels: [],  // Print labels at these values
           color: "#000000",  // Optional: Label text color
           fractionDigits: 0  // Optional: Numerical precision. 0=round off.
       
         }
    }
  }
  
  createGauge(target){
   var gauge = new Gauge(target).setOptions(this.gaugeconfig); // create sexy gauge!
   gauge.maxValue = this.config.max; // set max gauge value
   gauge.setMinValue(this.config.min);  // Prefer setter over gauge.minValue = 0
   gauge.animationSpeed = 32; // set animation speed (32 is default value)

   return gauge;

};
  
  
  set hass(hass) {
    let card;
    if (!this.content) {
      card = document.createElement('ha-card');
    //   card.header = this.config.title;
      this.content = document.createElement('div');
      this.content.style.padding = '0 16px 16px';
      card.appendChild(this.content);
      this.appendChild(card);

    }
    this._state = hass.states[this.config.entity].state;
    this._unit = hass.states[this.config.entity].attributes.unit_of_measurement
    
     
    if(this.canvasCreated < 2){
        this.content.innerHTML = `
      <div style="text-align:center; width:100%; height:${this.config.size}px; vertical-align:center;">
        <h5>${this.config.title}</h5>
        <canvas style="height:100%; margin-top:-30px;" class="myGauge"></ canvas>
      </div>
      
    `;
    this._gauge = this.createGauge(this.getElementsByClassName("myGauge")[0]);
    this.canvasCreated ++;
    }
    
    this._gauge.set(+this._state);
    
  }
  
 
  setConfig(config) {
    if (!config.entity) {
      throw new Error('You need to define an entity');
    }
    Object.assign(this.gaugeconfig, config.gaugeconfig)
    Object.assign(this.config, config)
   
  }
  getCardSize() {
    return 1;
  }
}

customElements.define('content-card-gauge', ContentCardGauge);