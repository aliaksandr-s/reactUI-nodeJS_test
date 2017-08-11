import {JsonController, Param, Body, Get, Post} from "routing-controllers";
import CustomerInterface from '../interfaces/Customer';
import CustomerModel from '../models/Customer';

@JsonController()
export default class Customer {
    @Get("/customers")
    getAllCustomers() {
        return CustomerModel.getAllCustomers();
    }

    @Post("/customers")
    addCustomer(@Body() customer: CustomerInterface) {
        return CustomerModel.addCustomer(customer);
    }
}