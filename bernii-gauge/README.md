# Remote Control card #



![screenshot](https://github.com/dimagoltsman/ha-custom-lovelace-cards/blob/master/remote-control/screenshot.png?raw=true)



put js and image files in your www dir and add the js files to your resources in ui-lovelace.yaml
```
resources:
  - url: /local/content-card-remote-control.js
    type: js
```

configuration is very easy. first, find your broadlink id for sending packets (can be found under HA services page),
and then just configure the broadlink codes for each button.

```
  - type: "custom:content-card-remote-control"
    broadlink_entity: 'broadlink_send_packet_192_168_1_151'
    name: Hisense
    buttons:
      power:
      source: "JgBYAAABKpITEhQQFRAVEBMSFBEUERMREzYWNBQ1FTQVNRQ1FRAVNRQREzYUEBUQFTUUERQRFBAVNRQRFDUVNBUREzYTNhQ2EwAFTgABKUcVAAxWAAEpRxQADQU="
      button1:  
      button2:  
      button3:  
      button4:  
      button5:  
      button6:  
      button7:  
      button8:  
      button9:  
      buttonClear:
      button0:
      buttonEnter:
      exit:
      info:
      menu:
      left: "JgBQAAABKpIVEBMRFRAVEBUQFBEUERQREjcUNhM2EzYUNhM2FBAVNRQ1FRAVEBQ2EzYTERYPFRAVERM2EjcUEBUREzYUNRQ2FAAFTQABKUgUAA0FAAAAAAAAAAA="
      right: "JgBQAAABKZIUERQRExIUERMRFBEVEBQREzYVNBU1FDUUNRU1FBETNhUQFBEUERQ1FTQVERMSExEUNRU1FDUUERUQFDUUNhM2FAAFTgABKEgVAA0FAAAAAAAAAAA="
      top: "JgBQAAABKJIVERQRExIVDxQRFBEUERQREzYTNhU1FTQWMxU1FBETNhQRFDUUNRUQFTUUERMSFBAUNRURExIUNRQQFTUUNRM2FQAFTgABKEgVAA0FAAAAAAAAAAA="
      bottom: "JgBQAAABKZIUERMSEhIUERUQFBEUERMSEzYUNhM2FTQUNhM2FBAUNhQ1FTQVNRQRFDUUERUQExITEhQRFBAVNBURFDUVNBU1FAAFTQABKUgVAA0FAAAAAAAAAAA="
      ok: "JgBUAAkACXEAASiTFRAUERQRFBETEhQRExEUERU1FDUUNRU1FDUUNRYPEzcTNhQQFjQTEhU0Fg8UERQRFBEVNBQRFDYSEhQ1FTQVNRQABU4AASlIFAANBQAAAAA="
      back:
      volplus: "JgCgAJSSEg8QEBIPERAPMhEyDxERDxAxEDESLxAyEREPEREQEBAQlBARDxIQEBAREi8PMhEvEhAQMRExDzIREBARDhISDhAyEBEQEQ8REi8RAAdclJMRDxAREREPEREwEi8SEBARDzIQMhAwDzESEBARERAQEBKSEg8QEBAREREPMREyDjESDhIwETESLxEQEBEREBAQETAPERERERAQMRAADQUAAAAAAAAAAA=="
      volmin: "JgDgAJGUERAREA8RERERLxAyEBEQEBAyDjMRLxMwEBEOEg8RERAOlBMPEBEQEBEQEg8REBAQETIQMBEyEDAQEBIvEjEQMBIPDxIPEhEPETASAAdclJMSDhAREBEPEw8xEi8QERARDzEPMxEwETEQEBEREBASDhGTEg8RDxASEBEOERAQERARMBIwEi8RMhAQETEOMhExEBAREBARDxIPMhEAB1yWkRAQERAQERAREDESLxEREBARMBAxEDERMBEQEREOExAQEZIQERAQEhAQEQ0TEBEQEBExEDEQMBIwERARAA0FAAAAAAAAAAA="
      mute: "JgCgAJaSEQ8RDxIPEg8SMBIvEg8SDxIvETERMBAxEg8SDxIPEQ8SkhIPEg8SDxIPETASDxIPERARLxIwEi8SDxIPEjARMBIwERASDREQEjASAAdhlJMSDxEQERARDxIvEjASDxEPETESMBEwEjARDxAQEg8SDxKSEg8REBEPEg8SMBEQEQ8REBIwEi8SLxIPEg8SLxIwEi8SDxEQEg8RMBEADQUAAAAAAAAAAA=="

```
        
 all attributes under gaugeconfig are configurable by the gauge js http://bernii.github.io/gauge.js/
