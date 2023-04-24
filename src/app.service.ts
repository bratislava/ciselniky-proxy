import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios from 'axios';

interface Item {
  code: string;
  name: string;
}

export interface Enum {
  data: Item[];
}

const url = 'https://www.slovensko.sk/static/util/filler/lookup.aspx';

@Injectable()
export class AppService {
  async findEnum(id: string, search: string): Promise<Enum> {
    const response = await axios({
      method: 'GET',
      url: `${url}?id=${id}&sSearch=${search}`,
    }).catch((error) => {
      throw new InternalServerErrorException(error.message);
    });

    //remove rounded brackets and parse
    const responseData = JSON.parse(response.data.slice(1, -2));
    const data = responseData.aaData?.map((x: string[]) => ({
      code: x[0],
      name: x[1],
    }));

    return { data };
  }
}
