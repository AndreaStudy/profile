"use client"
import React from "react";

import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import coding from "../../../../public/coding.json"

export default function CodingAnimation() {
  return <Lottie loop animationData={coding} play />;
}
