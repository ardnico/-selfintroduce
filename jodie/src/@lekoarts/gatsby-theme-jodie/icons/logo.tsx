import * as React from "react"

const Logo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="tail" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fff" stop-opacity="0" />
      <stop offset="100%" stop-color="#fff" stop-opacity="1" />
    </linearGradient>
  </defs>
  <g>
    <polygon fill="#FFC107" points="73,16 54,26 73,36" />
    <circle fill="#FFC107" cx="73" cy="26" r="6" />
  </g>
  <path d="M15,85 Q30,60 45,75 Q60,90 75,70 Q80,63 82,57 Q95,15 95,15" fill="none" stroke="#FFC107" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0 10" stroke-dashoffset="0">
    <animate attributeName="stroke-dashoffset" from="0" to="200" dur="3s" repeatCount="indefinite" />
  </path>
  <path d="M73,26 L30,68" stroke="#FFC107" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0 20" stroke-dashoffset="0" />
  <path d="M73,26 L18,81" stroke="url(#tail)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0 20" stroke-dashoffset="0">
    <animate attributeName="stroke-dashoffset" from="0" to="200" dur="3s" repeatCount="indefinite" />
  </path>
</svg>



)

export default Logo
