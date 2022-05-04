import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase,faGlobe,faCode,faComment } from '@fortawesome/free-solid-svg-icons';
import { faNode,faAndroid } from '@fortawesome/free-brands-svg-icons';
import WebApi from '../img/Techs/WebApi.png';

const TechGroups = [
    { Text: "Web應用系統開發", Icon: <FontAwesomeIcon icon={faGlobe} size="7x" color="#1976d2"/>,Explanation:`匯融科技對於Web 應用系統開發，主要技術在於微軟.NET MVC 架構及Node.js上。在.NET MVC 架構上，對於.NET Framework 及.NET　Core 兩個技術，公司技術均可以支援及有多年實際開發實績。
    在WEB應用系統開發上，所需要前後端技術如HTML、CSS 和 JavaScript，C#，Node.js 公司開發團隊均可以支援。
    前端框架，目前我們熟悉:Bootstrap, React 兩個框架。
    `,Img:[]},
    { Text: "Android APP開發", Icon: <FontAwesomeIcon icon={faAndroid} size="7x" color="#1976d2"/>,Explanation:`Android APP 開發，我們提供Web APP及 原生APP 兩種不同模式，供客戶實際應用上選擇。
    在Web APP架構上，我們將APP上功能畫面，以RWD方式來設計，配合APK執行Web APP上功能畫面。
    原生APP主要是使用Java來進行。
    熟悉: Android Studio , Java
    `,Img:[]},
    { Text: "Web API服務開發", Icon: <FontAwesomeIcon icon={faComment} size="7x" color="#1976d2"/>,Explanation:`Web api 是用來作為程式間交換資料用，ASP.NET Web API 是一個可擴展的框架，用於構建基於 HTTP 的服務，這些服務可以在不同平台上的不同應用程序中訪問，例如 web、windows、移動等。它的工作方式或多或少與 ASP.NET MVC Web 應用程序相同，除了它發送數據作為響應而不是 html 視圖。它類似於 web 服務或 WCF 服務，但例外是它只支持 HTTP 協議。
    對於Web API，目前公司主要是以RestFul API 為主，資料交換格式，可為Json 及XML 格式。
    `,Img:[{Src:WebApi}]},
    { Text: "C#應用程式開發", Icon: <FontAwesomeIcon icon={faCode} size="7x" color="#1976d2"/>,Explanation:`WinForm是.Net開發平台中對Windows Form的一種稱謂。.Net 為開發WinForm的應用程式提供了豐富的Class Library（類庫）。)。
    過往C#Winform 應用程式開發主要是著眼於設備介接，測試／資料接收／設備控制程式，個人電腦端 GUI操作程式。
    設備介接方面，有支援過設備接口為：RS232，RS485，USB，MODBUS，及ETHERNET等。
    測試，資料接收，及控制程式，主要是用於Inventor，秤重機，印表機等設備測試及資料接收及控制
    `,Img:[]},
    { Text: "Node.JS開發", Icon: <FontAwesomeIcon icon={faNode} size="7x" color="#1976d2"/>,Explanation:`Node.js 是能夠在伺服器端運行 JavaScript 的開放原始碼、跨平台執行環境。Node.js 大部分基本模組都用 JavaScript 語言編寫, Node.js 的出現使 JavaScript 也能用於伺服器端編程。Node.js 含有一系列內建模組，使得程式可以脫離 Apache HTTP Server 或 IIS，作為獨立伺服器執行。
    目前公司的產品:智能看板數據管理系統，便是以Node.JS 為Server 端應用程式。智能看板系統彈性介接各種不同系統如ERP，MES，CRM ...等系統。將所介接資料即時轉入看板系統，看板系統可以將資料以各種不同表格及圖表方式呈現出來。
    `,Img:[]},
    { Text: "資料庫整合", Icon: <FontAwesomeIcon icon={faDatabase} size="7x" color="#1976d2"/>,Explanation:"多年系統開發，搭配不同資料庫應用，使我們在異質資料庫整合上，也培養出許多經驗，可以用來服務客戶。目前在異質資料庫整合上，可以提供服務內容，不同資料庫間資料轉移及一般非關連式資料移轉。在應用系統開發上，可以支援資料庫計有:Oracle，MS SQL，MySQL，PostGreg等。在資料移轉上，配合Kettle ETL 資料工具，可進一步執行不同資料庫間資料移轉。Kettle是一款國外開源的ETL工具，純java編寫，可以在Window、Linux、Unix上運行， 數據抽取高效穩定",Img:[]}
];

export default TechGroups;