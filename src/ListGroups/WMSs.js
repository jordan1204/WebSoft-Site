import TechSpec from '../img/WMS/TechSpec.png';

const features = [{ Text: "多廠別多庫別功能。" },
{ Text: "系統支援電子貨架功能，可依發料規則自動生成發料指示，提昇庫房發料效率。" },
{ Text: "協助產線上料及找料，及工單補料。" },
{ Text: "系統整合 AGV 無人搬運車實現自動倉儲與智慧物流" },
{ Text: "工單發料規則支援依倉別，材料屬性，材料製造日期，數量大小，進行發料。" },
{ Text: "可依生產排程合併多張工單進行一次發料，提升備料效率。" },
{ Text: "包含物料拆併批、禁用物料管制、效期展延…等必備例外管理功能。" },
{ Text: "APP 及 響應式行動介面，可支援手機、平板、PDA…移動裝置。" }];

const TechSpecObj = {Src:TechSpec,Alt:"技術解說"};

const AppDomain = [{ Text: "電子組裝業", InstanceList: [{ Text: "電腦" }, { Text: "PCBA" }, { Text: "電子相關產品" }] },
{ Text: "其他產業", InstanceList: [{ Text: "電線電纜" }, { Text: "食品原料" }, { Text: "化工" }] }];

const ProductFunction =
    [{
        Text: "智能電子貨架倉儲管理系統",
        DetailList: [{ Text: "基本資料管理", FunctionList: [{ Text: "料捲資料轉入" }, { Text: "工單需求資料轉入" }, { Text: "採購驗收資料轉入" }, { Text: "SAP工單資料管理" }, { Text: "廠別資料設定" }, { Text: "倉庫資料設定" }, { Text: "儲位資料設定" }] },
        { Text: "工單資料管理", FunctionList: [{ Text: "工單資料管理" }, { Text: "工單合併" }, { Text: "工單退料確認" }, { Text: "工單發料過帳SAP" }, { Text: "工單發料明細列印" }] },
        { Text: "電子貨架管理", FunctionList: [{ Text: "儲位設定" }, { Text: "燈號顏色設定" }, { Text: "人員燈號顏色設定" }] },
        { Text: "盤點作業", FunctionList: [{ Text: "盤點資料生成" }] },
        { Text: "PDA 功能", FunctionList: [{ Text: "入庫上架" }, { Text: "電子貨架發料" }, { Text: "電子貨架二次發料" }, { Text: "電子貨架合併發料" }, { Text: "傳統貨架發料" }, { Text: "傳統貨架二次發料" }, { Text: "傳統貨架合併發料" }, { Text: "產線收料" }, { Text: "轉儲位" }, { Text: "產線補料" }, { Text: "找料" }, { Text: "雜項收料" }, { Text: "雜項發料" }, { Text: "SMT 備料" }, { Text: "SMT 找料接料" },{Text:"退料"},{Text:"退料入庫"},{Text:"料捲拆批"},{Text:"盤點差異"},{Text:"ERP 庫存比對查詢"}] }]
    }, {
        Text: "無人搬運倉儲管理系統",
        DetailList: [{ Text: "系統基本資料管理", FunctionList: [{ Text: "廠別資料管理" }, { Text: "生產資料管理" }, { Text: "AGV 車資料管理" }, { Text: "生產途程資料管理" }] },
        { Text: "倉庫資料管理", FunctionList: [{ Text: "倉庫資料管理" }, { Text: "區域資料管理" }, { Text: "料架資料管理" }, { Text: "儲格資料" }] },
        { Text: "生產工單管理", FunctionList: [{ Text: "工單查詢" }, { Text: "工單資料匯入" }, { Text: "料號品名資料維護" }, { Text: "物料清單維護" }, { Text: "廠別資料設定" }, { Text: "倉庫資料設定" }, { Text: "儲位資料設定" }] },
        { Text: "任務管理", FunctionList: [{ Text: "AGV 車任務管理" }] },
        { Text: "PDA 功能", FunctionList: [{ Text: "原料半成品發料" }, { Text: "半成品/成品入庫" }, { Text: "點對點搬運" }, { Text: "儲位移轉" }, { Text: "標簽列印" }] }]
    }]

export {features,TechSpecObj,AppDomain,ProductFunction};