import { useContext } from 'react';
import Link from './Link';
import User from './User';
import { Store } from '../Store';

export default function Nav() {

    const { user, pageSlug } = useContext(Store);

    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                {
                    pageSlug !== 'login'
                        ? <Link className="nav-link" to="home">Home</Link>
                        : null
                }
            </li>
            {
                user && user.role === "admin"
                    ? <li className="nav-item">
                        <Link className="nav-link" to="profile">Accounts Management</Link>
                    </li>
                    : null
            }
            {
                user && user.role !== "admin"
                    ? <li className="nav-item">
                        <Link className="nav-link" to="admin">Clients List</Link>
                    </li>
                    : null
            }

            <li>
                {
                    pageSlug !== 'login'
                        ? <User />
                        : null
                }
            </li>

        </ul>
    )
}