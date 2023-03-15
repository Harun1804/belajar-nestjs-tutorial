import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'harun.arrasyid1804@gmail.com',
      name: 'harun',
    },
    {
      id: 2,
      email: 'lunaTania@gmail.com',
      name: 'luna',
    },
    {
      id: 3,
      email: 'aegistar@gmail.com',
      name: 'aegis',
    },
  ];

  getCustomers() {
    return this.customers;
  }

  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }
}
