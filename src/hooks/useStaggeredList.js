 import {
     useTrail
 } from "react-spring";

 export default function useStaggeredList(number) {
     const trailAnimes = useTrail(number, {
         transform: "translate3d(0,0,0)", // 結束時
         from: {
             transform: "translate3d(-50px,0,0)"
         }, // 初始
         config: {
             mass: 0.8,
             tension: 280,
             friction: 20,
         },
         delay: 200, // 每隔200ms執行下一個動畫
     });

     return trailAnimes;
 }