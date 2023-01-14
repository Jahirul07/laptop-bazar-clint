import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Navber from '../Pages/Shared/Navber/Navber';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [userType, setUserType] = useState(null)
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/users/role/${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data.role)
                    setUserType(data.role);
                })
        }
    }, [user?.email])
    return (
        <div>
            <Navber></Navber>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to="/dashboard">My Orders</Link></li>
                        {
                            userType === 'seller' && 
                            <>
                                <li><Link to="/dashboard/addProducts">Add A Product</Link></li>
                                <li><Link to="/dashboard/">My Products</Link></li>
                            </>
                        }
                        {
                            userType === 'admin' && 
                            <>
                                <li><Link to="/dashboard/">All Users</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;