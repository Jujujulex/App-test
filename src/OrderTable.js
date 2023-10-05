import "./OrderTable.css";
import Badgepndg from "./Badgepndg.svg";
import Dotgreen from "./Dotgreen.svg";
import Caretdown from "./caretdown.svg";
import Ellipse5 from "./Ellipse 5.svg";
import Dot3 from "./dotsthree.svg";
import Dotyellow from "./Dotyellow.svg";
import Ellipse51 from "./Ellipse 5 (1).svg";
import Prepaid from "./Prepaidbadge.svg";
import Ellipse52 from "./Ellipse 5 (2).svg";
import Master from "./Master.svg";

export default function OrderTable() {
  const data = [
    {
      name: "Bamidele dara",
      idno: "#0094348",
      date: "09/10/2022",
      amount: "₦34,800",
      ptype: "Cash",
      typeimg: "",
      pimg: <img src={Badgepndg} alt="payment type" />,
      status: "Completed",
      dotgreen: <img src={Dotgreen} alt="green dot" />,
      assigned: "Titilayo Ayebatari",
      caret: <img src={Caretdown} alt="caret down" />,
      avatar: <img src={Ellipse5} alt="avatar" />,
      dot3: <img src={Dot3} alt="dot" />,
    },
    {
      name: "Reno Omokri",
      idno: "#0094348",
      date: "09/10/2022",
      amount: "₦34,800",
      ptype: "Cash",
      typeimg: "",

      pimg: <img src={Badgepndg} alt="payment type" />,
      status: "Completed",
      dotgreen: <img src={Dotyellow} alt="green dot" />,
      assigned: "Rotimi Saheed ",
      caret: <img src={Caretdown} alt="caret down" />,
      avatar: <img src={Ellipse51} alt="avatar" />,
      dot3: <img src={Dot3} alt="dot" />,
    },
    {
      name: "Oluwasegun	Abiodun",
      idno: "#0094348",
      date: "09/10/2022",
      amount: "₦34,800",
      ptype: "Debit Card",
      typeimg: <img src={Master} alt="payment type" />,
      pimg: <img src={Prepaid} alt="payment type" />,
      status: "Completed",
      dotgreen: <img src={Dotgreen} alt="green dot" />,
      assigned: "Funmilayo Omowale",
      caret: <img src={Caretdown} alt="caret down" />,
      avatar: <img src={Ellipse52} alt="avatar" />,
      dot3: <img src={Dot3} alt="dot" />,
    },
  ];

  return (
    <table className="table">
      <thead className="thead">
        <tr className="thead-tr">
          <th className="th">CUSTOMER NAME</th>
          <th className="th">DATE</th>
          <th className="th">AMOUNT</th>
          <th className="th">PAYMENT TYPE</th>
          <th className="th">STATUS</th>
          <th className="th">ASSIGNED</th>
          <th className="th">OPTIONS</th>
        </tr>
      </thead>
      <tbody className="tbody">
        {data.map((item) => (
          <tr key={item.name} className="tbody-tr">
            <td className="td-name">
              <div className="td--name-1"> {item.name} </div>
              <div className="td--name-2"> {item.idno} </div>
            </td>
            <td className="td-date">{item.date}</td>
            <td className="td-amnt">{item.amount}</td>
            <td className="td-ptype">
              <div className="td--ptype-box">
                <div className="type-header">
                  <div className="td--ptype-1">{item.ptype}</div>
                  <div className="ptype--1-img">{item.typeimg}</div>
                </div>

                <div className="td--ptype-2">{item.pimg}</div>
              </div>
            </td>
            <td className="td-status">
              <div className="td--status-box">
                <div className="td--status-1">{item.dotgreen}</div>
                <div className="td--status-2">{item.status}</div>
              </div>
            </td>
            <td className="td-assigned">
              <div className="td--assigned-avatar">
                <div className="assigned--avatar-1">{item.avatar}</div>
                <div className="assigned--avatar-2">{item.assigned}</div>
              </div>
              <div className="td--assigned-caret">{item.caret}</div>
            </td>
            <td className="td-option">{item.dot3}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
