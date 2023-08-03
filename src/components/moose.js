import react from "react";
import "./moose.css"

export default function Moose(){
    return(
        <div>
             <h1>Sarah's favorite animal</h1>
     <table>
      <tr>
        <th className="color">Home</th>
        <th className="color">Fun Facts</th>
      </tr>
      <tr>
        <td> <img src="https://a-z-animals.com/media/2021/09/shutterstock_790996543.jpg" alt="" height="150" width="200"/></td>
        <td><p>My name is sarah, and my favorite animal is the moose. <br/>
         They can be up to 6.5 feet tall and weight 1200 pounds. <br/>
       Surprisingly,they're really good at swimming! <br/>
<br/>if you want to learn more about the moose,check out <br/>
<a href="https://en.wikipedia.org/wiki/Moose">its wikipedia page.</a></p></td>
      </tr>

     </table>
     <h2>Moose are awesome because</h2>
     <ol type='1'>
      <li>They can swim vey well</li>
      <li>They can make</li>
      <li>They can close their nostrils</li>
     </ol>

     <h2>If i were a moose, I would</h2>
     <ul type="disc">
      <li>Eat a lot of lettuce</li>
      <li>Carry little animals on my antlers</li>
      <li>Swin to alaska</li>
     </ul>

     <h2>Moose video</h2>
     
     <iframe width="560" height="315" src="https://www.youtube.com/embed/F3yse7vTWrw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>
    )
}