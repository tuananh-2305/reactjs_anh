import React, {useEffect, useState, useMemo} from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
const ListPage = () => {
    const [loading, setLoading]=useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        callApi();
    }, []);

    const callApi = async () => {
        try {
            const result = await axios.get(
                "https://624061412aeb48a9af735b00.mockapi.io/api/v1/users"
                );
                setLoading(false);
                setData(result.data);
          } catch (error) {
              setLoading(false);
              console.log(error);
          }
    };
    const deleteItem = (key) =>{
        const newData = data.splice(0, key).concat(data.slice(key + 1,data.length));
        setData(newData);
    };
    const renderItem = () =>{
    const res = data.map((value, index) =>{
        console.log(value.name);
            return (
                <tr key={index}>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.avatar}</td>
                    <td>{value.createAt}</td>
                    <td>
                        <button className="btn btn-success" onClick={() => deleteItem(index)}>Delete</button>
                    </td>
                </tr>
            );
        });
        return res;
    };
    return (
        <div className="container">
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Avatar</td>
                        <td>createAt</td>
                    </tr>
                </thead>
                <tbody>{renderItem()}</tbody>
            </Table>
            )}
        </div>
    );
};

export default ListPage;