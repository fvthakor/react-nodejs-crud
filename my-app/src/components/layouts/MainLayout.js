import Sidebar from './Sidebar';
import Header from './Header';

const MainLayout = ({children}) => {
  return (
    <div id="wrapper">
    <Sidebar></Sidebar>
    <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
            <Header></Header>
            {children}
        </div>
    </div>
    </div>
  );
}

export default MainLayout;
