import React from "react";
import "./table.css"

export default function Table(){
    return(
        <div className="boxshadow">
            <br></br>
            <h1>TABLE</h1>
             <table className="table1" border>
        <tr className="tr1">
            <th className="th1">Teams</th>
            <th className="table1">City</th>
            <th className="table1">Home ground</th>
            <th className="table1"> Debut</th>
            <th className="table1">Owner</th>
        </tr>

        <tr className="tr1">
            <td className="table1">Chennai super kings</td>
            <td className="table1">Chennai,,Tamilnadu</td>
            <td className="table1">M.A Chindambaram Stadium</td>
            <td className="table1">2008</td>
            <td className="table1"><ul >
                  <li>N.Srinivasan</li>
            </ul>
        </td>
        </tr >

        <tr className="tr1">
            <td className="table1"> Delhi Capitals</td>
            <td className="table1">New delhi,Delhi</td>
            <td className="table1">Arun Jaitly Stadium</td>
            <td className="table1"></td>
            <td className="table1"><ul >
                  <li>Sajan Jindal</li>
                  <li>G.M Rao</li>
            </ul>
        </td>
        </tr >

        <tr className="tr1">
            <td className="table1">Gujarath Titans</td>
            <td className="table1">Ahmedabad,Gujarath</td>
            <td className="table1">Narendra Modi Stadium</td>
            <td className="table1">2022</td>
            <td className="table1"><ul>
                  <li>Steve koltes</li>
                  <li>juhi Chawla</li>
                  <li>Jay mehta</li>
            </ul>
        </td>
        </tr>

        <tr className="tr1">
            <td className="table1">Kolkata Knight Riders</td>
            <td className="table1">Kolkata,West Bengal</td>
            <td className="table1">Eden Gardens</td>
            <td className="table1">2008</td>
            <td className="table1"><ul >
                  <li>Shah Rukh khan</li>
                  <li>Juhi chawla</li>
                  <li>Jay mehta</li>
            </ul>
        </td>
        </tr>

        <tr className="tr1">
            <td className="table1">Lucknow Super Gaints</td>
            <td className="table1">Lucknow,Uttar Pradesh</td>
            <td className="table1"> BRSABV Ekana Cricket Stadium</td>
            <td className="table1">2022</td>
            <td className="table1"><ul >
                  <li>sanjiv Goenka</li>
            </ul>
        </td>
        </tr>

    </table>
    
        </div>
    )
}