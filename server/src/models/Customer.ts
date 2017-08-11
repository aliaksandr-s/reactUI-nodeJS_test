import {MongoClient, Collection} from 'mongodb';
import config from '../config';
import CustomerInterface from '../interfaces/Customer';
import {webSocketClients} from '../app'

class Customer {
  private customers;

  constructor() {
    this.openConnection();
  }

  private async openConnection() {
    const db = await MongoClient.connect(config.get('connection'));
    this.customers = db.collection('customers');
  }

  public async getAllCustomers() {
    return await this.customers.find().toArray();
  }

  public async addCustomer(customer: CustomerInterface) {
    await this.customers.update(
      {reference: customer.reference},
      {$set: customer},
      {upsert: true}
    );

    for(var key in webSocketClients) {
      webSocketClients[key].send("New Customer has been added");
    }

    return customer;
  }
}

export default new Customer();