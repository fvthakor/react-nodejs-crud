import { NavLink } from 'react-router-dom';
function Sidebar() {
  return (      
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <NavLink to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </NavLink>

        <hr class="sidebar-divider my-0" />

        <li class="nav-item">
            <NavLink to="/books" className="nav-link" activeClassName="active">
                <i class="fas fa-fw fa-tachometer-alt"></i><span>Books</span>
            </NavLink>
        </li>
        <hr class="sidebar-divider d-none d-md-block" />
        <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
      </ul>
  );
}
export default Sidebar;
