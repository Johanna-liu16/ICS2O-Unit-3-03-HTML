// Copyright (c) 2020 Johanna Liu All rights reserved
//
// Created by: Johanna Liu
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates volume of a sphere.
 */
function calculate () {
  // input
  const radius = parseInt(document.getElementById("radius-of-pyramid").value)

  // process
  const volume = ( 4/3 * Math.PI * Math.pow(radius, 3)

  // output
  document.getElementById("answers").innerHTML = 'Volume is: ' + volume.toFixed(2) + ' cm³'
}