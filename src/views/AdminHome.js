import { ThemeProvider } from '@mui/material/styles';
import Theme from '../config/ThemeConfig';
import Template from '../components/Template';

const AdminHome = () => {
    return (
        <ThemeProvider theme={Theme} >
            <Template />
        </ThemeProvider>
    );
}
 
export default AdminHome;