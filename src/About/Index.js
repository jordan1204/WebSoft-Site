import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: 'rgba(0,0,0,0.5)'
                },
            },
        },
    }
});

const Index = () => {

    return (
        <ThemeProvider theme={theme}>
            <h2>關於我們</h2>
            <Divider />
            <Box component="p" sx={{ marginBottom: "50px" }}>
            我們是由一群對科技充滿熱情，平均在軟體行業已有超過8年經驗，分別來先於各大軟體公司的成員組成的領導團隊。
曾協助國內及大陸地區大中小企業發展數十個項目，由線上購物平台，製造業MES 管理系統，製造業生產設備管理系統，ERP 及MES 系統整合，企業線上教育訓練系統，Dashboard 系統即時訊息顯示，
到物聯網APP 等應用，除了跟企業客戶作B2B的長期合作，並發展自家的B2B & 企業應用系統商品開發，我們會不斷投入資源發展能為這社會貢獻的產品。
            </Box>
            <h3>辦公室位置</h3>
            <iframe title="本公司地址" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.9899982572547!2d121.00683011447697!3d24.8300156525933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346836936a47031f%3A0x212e56fc2070b0cb!2zMzAy5paw56u557ij56u55YyX5biC5YWJ5piO5LiJ6LevNjLomZ8yZg!5e0!3m2!1szh-TW!2stw!4v1646466201729!5m2!1szh-TW!2stw" style={{ width: "100%" }} height="450"></iframe>
        </ThemeProvider>

    );
}

export default Index;