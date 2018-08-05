#Gauge card

*based on http://bernii.github.io/gauge.js



put js files in your www dir and add the js files to your resources in ui-lovelace.yaml
```
resources:
  - url: /local/gauge.min.js
    type: js
  - url: /local/content-card-gauge.js
    type: js
    ```

configure your gauge. example:

```
- type: "custom:content-card-gauge"
        entity: sensor.power
        title: Power (kw)
        size: 100
        min: 0
        max: 10
        gaugeconfig:
          staticLabels:
            labels:
            - 0
            - 1
            - 2
            - 3
            - 4
            - 5
            - 6
            - 7
            - 8
            - 9
            - 10
          staticZones:
          - strokeStyle: "#30B32D" # green
            min: 0
            max: 4
          - strokeStyle: "#FFDD00" # yello
            min: 4
            max: 7
          - strokeStyle: "#F03E3E" # red
            min: 7
            max: 10
```
        
 all attributes under gaugeconfig are configurable by the gauge js http://bernii.github.io/gauge.js/
