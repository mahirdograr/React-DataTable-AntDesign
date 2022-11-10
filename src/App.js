import React, { useEffect } from "react";
import "antd/dist/antd.min.css";
import { Layout, Menu } from "antd";
import "./index.css";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import { baseManager } from "./network/baseManager";
import Home from "./pages/admin/home/Home";
import CategoryList from "./pages/admin/category/CategoryList";
import { Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    baseManager.getALL("/categories").then((data) => {
      console.log("DATA", data);
    });
  }, []);

  return (
    <>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={new Array(3).fill(null).map((_, index) => ({
              key: String(index + 1),
              label: `nav ${index + 1}`,
            }))}
          />
        </Header>

        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin/categories" element={<CategoryList />} />
            </Routes>
          </div>
        </Content>

        <Footer style={{ textAlign: "center" }}> Ecommer Panel Sample</Footer>
      </Layout>
    </>
  );
}

export default App;
