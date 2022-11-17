import React, { useEffect } from "react";
import "antd/dist/antd.min.css";
import { Badge, Layout, Menu } from "antd";
import "./index.css";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import { baseManager } from "./network/baseManager";
import Home from "./pages/admin/home/Home";
import CategoryList from "./pages/admin/category/CategoryList";
import { Link, Route, Routes } from "react-router-dom";
import AddCategory from "./pages/admin/category/AddCategory";
import SupplierList from "./pages/admin/supplier/SupplierList";
import AddSupplier from "./pages/admin/supplier/AddSupplier";
import { TodoProvider } from "./store/TodoContex";
import TodoListPage from "./pages/admin/todo/TodoListPage";
import AddTodoPage from "./pages/admin/todo/AddTodoPage";
import LoginPage from "./pages/admin/login/LoginPage";
import { AuthProvider } from "./store/AuthContext";
import ProfilePage from "./pages/admin/login/ProfilePage";

function App() {
  useEffect(() => {
    baseManager.getALL("/categories").then((data) => {
      console.log("DATA", data);
    });
  }, []);

  return (
    <>
      <AuthProvider>
        <TodoProvider>
          <Layout>
            <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
              <div className="logo" />

              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[0]}>
                <Menu.Item>
                  <Link to="/admin/categories">CategoryList</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/admin/addcategory">Add Category</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/admin/supplier">Supplier</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/admin/addsuppliers">Add Supplier</Link>
                </Menu.Item>
                <Menu.Item>
                  <Badge count={2}></Badge>
                  <Link to="/admin/todos">Todo</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/admin/addtodo">Add Todo</Link>
                </Menu.Item>

                <Menu.Item>
                  <Link to="/profile">Profile</Link>
                </Menu.Item>
              </Menu>
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
                  <Route path="/admin/addcategory" element={<AddCategory />} />
                  <Route path="/admin/supplier" element={<SupplierList />} />
                  <Route path="/admin/addsupplier" element={<AddSupplier />} />
                  <Route path="/admin/todos" element={<TodoListPage />} />
                  <Route path="/admin/addtodo" element={<AddTodoPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                </Routes>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              {" "}
              Ecommer Panel Sample
            </Footer>
          </Layout>
        </TodoProvider>
      </AuthProvider>
    </>
  );
}

export default App;
