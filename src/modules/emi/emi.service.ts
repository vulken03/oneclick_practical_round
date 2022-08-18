import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEmiDto } from './dto/create-emi.dto';
import { UpdateEmiDto } from './dto/update-emi.dto';

@Injectable()
export class EmiService {
  create(createEmiDto: CreateEmiDto) {

    const d1 = new Date(createEmiDto.booking_date);
    //const d2 = new Date(createEmiDto.checkin_date).setDate(new Date(createEmiDto.checkin_date).getDate()-14)
    const d2 = new Date(createEmiDto.checkin_date);

    const Difference_In_Time = d2.getTime() - d1.getTime();

    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    if (Difference_In_Days <= 30) {
      throw new HttpException('EMI is not available', HttpStatus.FORBIDDEN)
    } else {
      const arr=[]
      const date_1 = new Date(d1.getTime());
      const date_2=new Date(d2.setDate(d2.getDate()-14)) 
      while(date_1<=date_2){
        arr.push(new Date(date_1))
      }
      //return true
    }
  }

}
