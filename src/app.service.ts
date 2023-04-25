import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios from 'axios';

interface Item {
  const: string;
  title: string;
}

export interface Enum {
  data: Item[];
}

const url = 'https://www.slovensko.sk/static/util/filler/lookup.aspx';

@Injectable()
export class AppService {
  async findEnum(id: string, search: string): Promise<Enum> {
    // NestJs HTTP Module can be considered
    const response = await axios({
      method: 'GET',
      url: `${url}?id=${id}&sSearch=${search}`,
    }).catch((error) => {
      throw new InternalServerErrorException(error.message);
    });

    //remove rounded brackets and parse
    const responseData = JSON.parse(response.data.slice(1, -2));
    const data = responseData.aaData?.map((x: string[]) => ({
      const: x[0],
      title: x[1],
    }));

    return { data };
  }
}
