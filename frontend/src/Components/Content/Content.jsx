import React from "react";
import { Routes, Route } from "react-router";
import { Container } from "./styles"
import Sale from "../Sale/Sale";
import Register from '../User/Register/Register'
import MyItems from "../User/My Items/MyItems";
import EditItem from "../Item/Edit/EditItem";
import ItemForm from '../Item/Item Form/ItemForm'
import MyRents from "../User/My Rents/MyRents";
import Profile from "../User/Profile/Profile";
import DetailsItem from "../Item/Details/DetailsItem";
import Conclude from "../User/Conclude Rent/Conclude";
import Login from "../User/Login/Login";
import ForgotPassword from "../User/Forgot Password/ForgotPassword";
import SubscriptionMain from "../User/Subscription/Main/SubscriptionMain";
import Success from "../User/Subscription/Success/Success";

const Content = props => (

    <Container>

        <Routes>
            <Route path="/" caseSensitive={false} element={<Sale />} />
            <Route path="/login" caseSensitive={false} element={<Login />} />
            <Route path="/newitem" caseSensitive={false} element={<ItemForm />} />
            <Route path="/register" caseSensitive={false} element={<Register />} />
            <Route path="/myitems" caseSensitive={false} element={<MyItems />} />
            <Route path="/myitems/edititem/:id" caseSensitive={false} element={<EditItem />} />
            <Route path="/myitems/concluderent/:id" caseSensitive={false} element={<Conclude />} />
            <Route path="/myrents" caseSensitive={false} element={<MyRents />} />
            <Route path="/user/profile" caseSensitive={false} element={<Profile />} />
            <Route path='/item/:id' caseSensitive={false} element={<DetailsItem />} />
            <Route path='/myrents/item/:id' caseSensitive={false} element={<DetailsItem />} />
            <Route path='/forgotpassword' caseSensitive={false} element={<ForgotPassword />} />
            <Route path='/subscription' caseSensitive={false} element={<SubscriptionMain />} />
            <Route path='/subscription/success' caseSensitive={false} element={<Success />} />
        </Routes>

    </Container>


)

export default Content













