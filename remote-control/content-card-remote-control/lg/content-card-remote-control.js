class ContentCardRemoteControl extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    setConfig(config) {
        // if (!config.entity) {
        //   throw new Error('Please define an entity');
        // }

        const root = this.shadowRoot;
        if (root.lastChild) root.removeChild(root.lastChild);

        const cardConfig = Object.assign({}, config);
        this._config = cardConfig;


    }


    set hass(hass) {
        const config = this._config;

        const root = this.shadowRoot;
        this._hass = hass;
        // root.lastChild.hass = hass;

        const card = document.createElement('ha-card');
        if(!this.content){
            this.content = document.createElement('div');
            const style = document.createElement('style');
            style.textContent = `
    ha-card{
    	background-color:transparent;
    	box-shadow:var(--paper-material-elevation-0_-_box-shadow);
    }
    body {
	margin: 0;
	padding: 20px;
	font-family: "Helvetica Neue", Helvetica, Arial, Geneva, sans-serif
}

.container {
	width: 360px;
	margin: 0 auto
}

#remote-control {
	position: relative;
	background: url(/local/lg_remote.png) no-repeat;
	width: 158px;
	height: 596px
}

#remote-control h2,
#remote-control span {
	position: absolute;
	left: 5000px
}

#remote-control ul {
	margin: 0;
	padding: 0;
	list-style-type: none
}

#power a,
#volmin a,
#volplus a,
#mute a,
#source a,
#button1 a,
#button2 a,
#button3 a,
#button4 a,
#button5 a,
#button6 a,
#button7 a,
#button8 a,
#button9 a,
#buttonClear a,
#button0 a,
#buttonEnter a,
#exit a,
#netflix a,
#channel a,
#channeldown a,
#menu a,
#back a,
#left a,
#right a,
#top a,
#bottom a,
#ok a {
	position: absolute;
	display: block
}

#remote-control li#power a {
	left: 28px;
	top: 35px;
	width: 37px;
	height: 37px;
	background: url(/local/remote-home.png) no-repeat
}

#remote-control li#power a:hover {
	background-image: url(/local/remote-home.png);
	background-repeat: no-repeat;
	background-position: 0 -37px
}


#remote-control li#source a {
	left: 59px;
	top: 406px;
	width: 35px;
	height: 37px;
	background: url(/local/source.png) no-repeat
}

#remote-control li#source a:hover {
	background-image: url(/local/source_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control li#volmin a,
#remote-control li#volplus a,
#remote-control li#mute a,
#remote-control li#button1 a,
#remote-control li#button2 a,
#remote-control li#button3 a,
#remote-control li#button4 a,
#remote-control li#button5 a,
#remote-control li#button6 a,
#remote-control li#button7 a,
#remote-control li#button8 a,
#remote-control li#button9 a,
#remote-control li#buttonClear a,
#remote-control li#button0 a,
#remote-control li#buttonEnter a {
	width: 41px;
	height: 21px;
	background: url(/local/remote-button.png) no-repeat
}

#remote-control li#volmin a {
	left: 18px;
	top: 239px
}

#remote-control li#volplus a {
	left: 18px;
	top: 195px
}

#remote-control li#mute a {
	left: 57px;
	top: 194px
}

#remote-control li#button1 a {
	left: 24px;
	top: 82px;
}

#remote-control li#button2 a {
	left: 55px;
	top: 81px;
}

#remote-control li#button3 a {
	left: 92px;
	top: 81px
}

#remote-control li#button4 a {
	left: 21px;
	top: 108px
}

#remote-control li#button5 a {
	left: 57px;
	top: 108px
}

#remote-control li#button6 a {
	left: 90px;
	top: 107px
}

#remote-control li#button7 a {
	left: 22px;
	top: 134px
}

#remote-control li#button8 a {
	left: 56px;
	top: 134px
}

#remote-control li#button9 a {
	left: 93px;
	top: 134px
}

#remote-control li#buttonClear a {
	left: 20px;
	top: 161px
}

#remote-control li#button0 a {
	left: 56px;
	top: 161px
}

#remote-control li#buttonEnter a {
	left: 91px;
	top: 160px
}

#remote-control li#volmin a:hover,
#remote-control li#volplus a:hover,
#remote-control li#mute a:hover,
#remote-control li#button1 a:hover,
#remote-control li#button2 a:hover,
#remote-control li#button3 a:hover,
#remote-control li#button4 a:hover,
#remote-control li#button5 a:hover,
#remote-control li#button6 a:hover,
#remote-control li#button7 a:hover,
#remote-control li#button8 a:hover,
#remote-control li#button9 a:hover,
#remote-control li#buttonClear a:hover,
#remote-control li#button0 a:hover,
#remote-control li#buttonEnter a:hover {
	background-image: url(/local/remote-button.png);
	background-repeat: no-repeat;
	background-position: 0 -21px
}

#remote-control li#exit a {
	width: 20px;
	height: 12px;
	left: 22px;
	top: 408px;
	background: url(/local/exit.png) no-repeat 0 0px
}


#remote-control li#menu a {
	width: 33px;
	height: 23px;
	left: 15px;
	top: 267px;
	background: url(/local/menu.png) no-repeat 0px 0px;
}

#remote-control li#back a {
    width: 37px;
    height: 23px;
    left: 13px;
    top: 388px;
    background: url(/local/back.png) no-repeat 0px 0px;
}

#remote-control li#left a {
	width: 13px;
	height: 22px;
	left: 32px;
	top: 329px;
	background: url(/local/left.png) no-repeat 0px 0px
}

#remote-control li#right a {
	width: 13px;
	height: 22px;
	left: 114px;
	top: 329px;
	background: url(/local/right.png) no-repeat 0px 0px
}

#remote-control li#top a {
	width: 22px;
	height: 13px;
	left: 67px;
	top: 294px;
	background: url(/local/top.png) no-repeat 0px 0px
}

#remote-control li#bottom a {
	width: 22px;
	height: 13px;
	left: 68px;
	top: 374px;
	background: url(/local/bottom.png) no-repeat 0px 0px
}

#remote-control li#netflix a {
	width: 36px;
	height: 23px;
	left: 17px;
	top: 418px;
	background: url(/local/netflix.png) no-repeat 0px 0px
}

#remote-control li#channel a {
	width: 37px;
	height: 36px;
	left: 98px;
	top: 190px;
	background: url(/local/channelup.png) no-repeat 0px 0px
}

#remote-control li#channeldown a {
	width: 37px;
	height: 36px;
	left: 98px;
	top: 234px;
	background: url(/local/channeldown.png) no-repeat 0px 0px
}

#remote-control li#ok a {
	width: 20px;
	height: 47px;
	left: 68px;
	top: 317px;
	background: url(/local/ok.png) no-repeat 0px 0px
}

#remote-control li#exit a:hover {
	background: url(/local/exit.png) no-repeat 0 0px
}


#remote-control li#menu a:hover {
	background: url(/local/menu_over.png) no-repeat 0px 0px
}

#remote-control li#back a:hover {
	background: url(/local/back_over.png) no-repeat 0px 0px;
}

#remote-control li#left a:hover {
	background: url(/local/left_over.png) no-repeat 0px 0px
}

#remote-control li#right a:hover {
	background: url(/local/right_over.png) no-repeat 0px 0px
}

#remote-control li#top a:hover {
	background: url(/local/top_over.png) no-repeat 0px 0px
}

#remote-control li#bottom a:hover {
	background: url(/local/bottom_over.png) no-repeat 0px 0px
}

#remote-control li#netflix a:hover {
	background: url(/local/netflix.png) no-repeat 0px 0px
}

#remote-control li#channel a:hover {
	background: url(/local/channelup_over.png) no-repeat 0px 0px
}

#remote-control li#channeldown a:hover {
	background: url(/local/channeldown_over.png) no-repeat 0px 0px
}

#remote-control li#ok a:hover {
	background: url(/local/ok_over.png) no-repeat 0px 0px
}
    `;


            this.content.innerHTML = `
     <div class="container">
            <div style="text-align:center">
			<h1>${config.name}</h1>
			</div>
			<div id="remote-control">
				<h2>
					Main navigation
				</h2>
				<ul>
					<li id="power" class="myButton"><a href="#" title="Power"><span>Power</span></a></li>
					<li id="volmin" class="myButton"><a href="#" title="Vol Min"><span>Vol Min</span></a></li>
					<li id="volplus" class="myButton"><a href="#" title="Vol Plus"><span>Vol Plus</span></a></li>
					<li id="mute" class="myButton"><a href="#" title="Vol Mute"><span>Vol Mute</span></a></li>
					<li id="source" class="myButton"><a href="#" title="Source"><span>Source</span></a></li>
				</ul>
				<h2>
					Select a site section
				</h2>
				<ul>
					<li id="button1"      class="myButton"><a href="#" title="Section 1" ><span>Section 1</span></a></li>
					<li id="button2"      class="myButton"><a href="#" title="Section 2"><span>Section 2</span></a></li>
					<li id="button3"      class="myButton"><a href="#" title="Section 3"><span>Section 3</span></a></li>
					<li id="button4"      class="myButton"><a href="#" title="Section 4"><span>Section 4</span></a></li>
					<li id="button5"      class="myButton"><a href="#" title="Section 5"><span>Section 5</span></a></li>
					<li id="button6"      class="myButton"><a href="#" title="Section 6"><span>Section 6</span></a></li>
					<li id="button7"      class="myButton"><a href="#" title="Section 7"><span>Section 7</span></a></li>
					<li id="button8"      class="myButton"><a href="#" title="Section 8"><span>Section 8</span></a></li>
					<li id="button9"      class="myButton"><a href="#" title="Section 9"><span>Section 9</span></a></li>
					<li id="buttonClear"  class="myButton""><a href="#" title="Section 10"><span>Section 10</span></a></li>
					<li id="button0"      class="myButton""><a href="#" title="Section 11"><span>Section 11</span></a></li>
					<li id="buttonEnter"  class="myButton""><a href="#" title="Section 12"><span>Section 12</span></a></li>
				</ul>
				<h2>
					Photo gallery exiter
				</h2>
				<ul>
					<li class="myButton" id="exit"><a href="#" title="exit"><span>exit</span></a></li>
					<li class="myButton" id="netflix"><a href="#" title="netflix"><span>netflix</span></a></li>
					<li class="myButton" id="channel"><a href="#" title="channel up"><span>channel</span></a></li>
					<li class="myButton" id="channeldown"><a href="#" title="channel down"><span>channeldown</span></a></li>
					<li class="myButton" id="menu"><a href="#" title="Menu"><span>Menu</span></a></li>
					<li class="myButton" id="back"><a href="#" title="Go back to beginning"><span>back</span></a></li>
					<li class="myButton" id="left"><a href="#" title="Left"><span>Left</span></a></li>
					<li class="myButton" id="right"><a href="#" title="right"><span>right</span></a></li>
					<li class="myButton" id="top"><a href="#" title="Top of gallery"><span>Top of Gallery</span></a></li>
					<li class="myButton" id="bottom"><a href="#" title="Bottom of gallery"><span>Bottom of Gallery</span></a></li>
					<li class="myButton" id="ok"><a href="#" title="OK - start slideshow"><span>OK - start slideshow</span></a></li>
				</ul>
			</div>	
		</div>
    `;
            card.appendChild(this.content);
            card.appendChild(style);

            root.appendChild(card);

            this._bindButtons(card, this._hass, this._config);
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
