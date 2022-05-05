import CustomHelmet from '../CustomHelmet';
import { BASE_TITLE } from '../Common';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer,SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const Index = () => { 
    return (
        <>  
            <CustomHelmet title={BASE_TITLE + "產品介紹"}/>     
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
                <div style={{border: '0.1px solid rgba(0, 0, 0, 0.1)',height: '750px'}}>
                    <Viewer fileUrl={"http://www.websoft.com.tw/pdfs/智能看板管理.pdf"} defaultScale={SpecialZoomLevel.PageFit}/>
                </div>
            </Worker>
        </>
    );

}

export default Index;