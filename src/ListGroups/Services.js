import AdbIcon from '@mui/icons-material/Adb';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import TerminalIcon from '@mui/icons-material/Terminal';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ConstructionIcon from '@mui/icons-material/Construction';

const ServiceGroups = [
    { Text: "MES 系統導入", Icon: <SettingsSuggestIcon color="primary"/>,Width:2,Href:"/Delegation" },
    { Text: "WMS 系統導入", Icon: <WarehouseIcon color="primary" />,Width:2,Href:"/WMS" },
    { Text: "企業委外軟體開發", Icon: <TerminalIcon color="primary" />,Width:3,Href:"/Delegation" },
    { Text: "Android APP", Icon: <AdbIcon color="primary" />,Width:2,Href:"/Delegation" },
    { Text: "工廠設備管理 系統導入", Icon: <ConstructionIcon color="primary" />,Width:3,Href:"/Delegation" }
];

export default ServiceGroups;