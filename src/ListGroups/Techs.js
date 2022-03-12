import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase,faGlobe,faCode,faComment } from '@fortawesome/free-solid-svg-icons';
import { faNode,faAndroid } from '@fortawesome/free-brands-svg-icons';

const TechGroups = [
    { Text: "Web應用系統開發", Icon: <FontAwesomeIcon icon={faGlobe} size="7x" color="#1976d2"/>},
    { Text: "Android APP開發", Icon: <FontAwesomeIcon icon={faAndroid} size="7x" color="#1976d2"/>},
    { Text: "Web API服務開發", Icon: <FontAwesomeIcon icon={faComment} size="7x" color="#1976d2"/>},
    { Text: "C#應用程式開發", Icon: <FontAwesomeIcon icon={faCode} size="7x" color="#1976d2"/>},
    { Text: "Node.JS開發", Icon: <FontAwesomeIcon icon={faNode} size="7x" color="#1976d2"/>},
    { Text: "資料庫整合", Icon: <FontAwesomeIcon icon={faDatabase} size="7x" color="#1976d2"/>}
];

export default TechGroups;