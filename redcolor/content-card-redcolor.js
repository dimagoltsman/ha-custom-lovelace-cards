
class ContentCardRedColor extends HTMLElement {
    constructor() {
        super();
    }



    set hass(hass) {

        if (!this.content) {
            this._timestamp = 0;
            let card = document.createElement('ha-card');
            this.content = document.createElement('div');

            this.content.style.height = '100%';
            this.content.style.width = '100%';

            card.appendChild(this.content);
            this.appendChild(card);
        }

        var date = new Date();
        var timestamp = date.getTime();

        if(timestamp - this._timestamp > 5000){
            this._timestamp = timestamp;

            this.content.innerHTML = `
        <iframe src="https://cumta.morhaviv.com/systems/app/chrome/showRecent.php?id=${parseInt(timestamp / 1000)}" width="100%" height="1000px"></iframe>
    `;
        }


    }


    setConfig(config) {


    }
    getCardSize() {
        return 17;
    }
}

customElements.define('content-card-redcolor', ContentCardRedColor);