<template>
  <svg
    :width="size"
    :height="size"
  >
    <g>
      <circle
        :cx="center" :cy="center"
        :r="center * 0.9"
        v-bind:style="circleStyle"
      ></circle>
    </g>
    <g>
      <line
        x1="0" y1="0"
        x2="0" :y2="center * -0.7"
        :transform="minitehandTrans"
        v-bind:style="clockhandStyle"
      ></line>
      <line
        x1="0" y1="0"
        x2="0" :y2="center * -0.45"
        :transform="hourhandTrans"
        v-bind:style="clockhandStyle"
      ></line>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'AnalogClock',
  components: {
  },
  data () {
    return {
    }
  },
  props: {
    time: {
      type: Number,
      default: function () {
        return 0
      }
    },
    size: {
      type: Number,
      default: function () {
        return 80
      }
    },
    lineWidth: {
      type: Number,
      default: function () {
        return 1
      }
    },
    lineColor: {
      type: String,
      default: function () {
        return '#000'
      }
    },
    fillColorLight: {
      type: String,
      default: function () {
        return '#fff'
      }
    },
    fillColorDark: {
      type: String,
      default: function () {
        return '#ccc'
      }
    }
  },
  computed: {
    date () {
      return new Date(this.time)
    },
    hours () {
      return this.date.getHours()
    },
    minutes () {
      return this.date.getMinutes()
    },
    center () {
      return this.size / 2
    },
    circleStyle () {
      return {
        'stroke-width': this.lineWidth,
        stroke: this.lineColor,
        fill: this.hours < 6 || this.hours >= 18 ? this.fillColorDark : this.fillColorLight
      }
    },
    clockhandStyle () {
      return {
        'stroke-width': this.lineWidth,
        stroke: this.lineColor
      }
    },
    translateCenter () {
      return `translate(${this.center} ${this.center})`
    },
    hourhandTrans () {
      return `${this.translateCenter} rotate(${(this.hours % 12 + this.minutes / 60) * 360 / 12})`
    },
    minitehandTrans () {
      return `${this.translateCenter} rotate(${this.minutes * 360 / 60})`
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
