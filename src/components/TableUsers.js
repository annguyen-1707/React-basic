import { fetchAllUser } from '../services/UserService'
import Table from 'react-bootstrap/Table'
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ModalAddNew from './ModalAddNew';
import ModalEditUser from './ModalEditUser';


const TableUsers = (props) => {
    const [listUsers, setListUsers] = useState([]);
    const pageCount = 2;
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [isShowMOdelAddNew, setIsShowModelAddNew] = useState(false)
    const handleClose = () => {
        setIsShowModelAddNew(false)
    }

    const handleUpdateTable = (user) => {
        setListUsers((prev) => [user, ...prev]);
    }

    useEffect(() => {   // Chạy khi component render (hoặc khi dependency thay đổi)
        // call api 
        //dry ko code 1 thứ quá 2 lầnlần
        getUsers(1);
    }, [])

    const getUsers = async (page) => {
        let res = await fetchAllUser(page);
        console.log(">> check res:", res)
        if (res && res.data) {
            setListUsers(res.data)
            setTotalUsers(res.total)
            setTotalPages(res.total_pages)
        }
    }

    const handlePageClick = (event) => {
        console.log("event lib", event);
        getUsers(+event.selected + 1)
    }

    return (
        <>
            <div className="my-3 add-new d-flex align-items-center justify-content-between" >
                <span>List Users:</span>
                <button className="btn btn-success" onClick={() => setIsShowModelAddNew(true)}> Add new user</button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <tr key={`user-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>
                                        <button className='btn btn-warning mx-3'>Edit</button>
                                        <button className='btn btn-danger mx-3'>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
            <ModalAddNew
                show={isShowMOdelAddNew}
                handleClose={handleClose}
                handleUpdateTable={handleUpdateTable}
            />

            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3} // giới hạn trang bên trái 1 2 3 .... 99 100
                marginPagesDisplayed={2} // giới hạn trang bên phải 1 2 3 .... 99 100
                pageCount={pageCount}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />

        </>


    );
}

export default TableUsers;