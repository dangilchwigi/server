import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MapService {
  async searchStoreByName(name: string) {
    try {
      const response = await axios.get(
        `https://dapi.kakao.com/v2/local/search/keyword.json?query=서울 ${encodeURIComponent(
          name
        )}`,
        {
          headers: {
            Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}`,
          },
        }
      );

      const result = response.data.documents.map((document) => {
        return {
          placeName: document.place_name,
          addressName: document.address_name,
          location: {
            x: document.x,
            y: document.y,
          },
        };
      });

      return { statusCode: 200, data: { placeList: result } };
    } catch (error) {
      console.log(error);
      throw new HttpException(
        '서버요청 실패.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
