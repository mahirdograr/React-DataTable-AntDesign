import React, { useEffect, useState } from "react";
import { baseManager } from "../../../network/baseManager";
import { Table, Button } from "antd";

const SupplierList = () => {
  const [supplier, setsupplier] = useState([]);

  useEffect(() => {
    getSupplier();
  }, []);

  const getSupplier = () => {
    baseManager.getALLsupliers("/suppliers").then((data) => {
      setsupplier(data);
    });
  };

  let columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "CompanyName",
      dataIndex: "companyName",
      sorter: (a, b) => a.companyName.localeCompare(b.companyName),
    },
    {
      title: "ContactTitle",
      dataIndex: "contactTitle",
    },
    {
      title: "Delete",
      dataIndex: "id",
      render: (id) => (
        <Button danger onClick={() => removeSupplier(id)}>
          Delete
        </Button>
      ),
    },
  ];

  const removeSupplier = (id) => {
    baseManager.delete("/suppliers/", id).then(() => {
      getSupplier();
    });
  };

  return (
    <>
      <Table dataSource={supplier} columns={columns}></Table>
    </>
  );
};

export default SupplierList;
