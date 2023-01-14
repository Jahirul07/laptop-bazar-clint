import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([])
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/booking?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log('data', data)
                    setOrders(data);
                })
        }
    }, [user?.email])
    return (
        <div>
            <h3 className="text-3xl mb-5">My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Item Name</th>
                            <th>price</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders &&
                            orders?.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.userName}</td>
                                <td>{booking.email}</td>
                                <td>{booking.phone}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;