import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @Get()
  getCustomers() {
    return this.customerService.getCustomers();
  }

  @Get(':id')
  getCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const costumer = this.customerService.findCustomerById(id);
    if (costumer) {
      res.send({
        status: 200,
        message: 'Customer Found',
        data: costumer,
      });
    } else {
      res.status(404).send({ msg: 'not found' });
    }
  }

  @Get('/search/:id')
  searchCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customerService.findCustomerById(id);
    if (customer) return customer;
    else throw new HttpException('Customer Not Found', HttpStatus.NOT_FOUND);
  }

  @Post('create')
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    this.customerService.createCustomer(createCustomerDto);
  }
}
