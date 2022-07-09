# NY-API

**Base URL: https://api.ny64.kr**

## Random NSFW Image

**GET `/nsfw?categorie=${IMAGE_CATEGORY}`**

### Parameter

|   Name    |  Type  | Description                                                                                                             | Required |
| :-------: | :----: | ----------------------------------------------------------------------------------------------------------------------- | :------: |
| categorie | String | 이미지 카테고리<br>다음 값 사용 가능: **waifu, neko, trap, blowjob**<br>값이 비어있거나, 올바르지 않을 시 랜덤으로 선택 |    X     |

### Response (JSON)

|    Key    |  Type  | Description                      |
| :-------: | :----: | -------------------------------- |
|  message  | String | 요청 처리 결과                   |
|   code    | String | 성공 시 Success / 실패 시 Error  |
|   time    | Number | 요청을 처리하는데 걸린 시간 (ms) |
|    url    | String | 이미지 URL                       |
| categorie | String | 이미지 카테고리                  |
| imageType | String | 이미지 타입 (png, jpg, gif)      |

```json
{
	"message": "IMAGE_LOADED_SUCCESSFULLY",
	"code": "Success",
	"time": 956,
	"url": "XXXX",
	"categorie": "waifu",
	"imageType": "png"
}
```

## TJ Japanese Song Chart

**GET `/tjJapanChart`**

### Parameter

None

### Response (JSON)

|   Key    |  Type  | Description                     |
| :------: | :----: | ------------------------------- |
| message  | String | 요청 처리 결과                  |
|   code   | String | 성공 시 Success / 실패 시 Error |
| startDay | String | 차트 범위 시작일 (YY-M-D)       |
|  endDay  | String | 차트 범위 종료일 (YY-M-D)       |

```json
{
	"message": "DATA_LOADED_SUCCESSFULLY",
	"code": "Success",
	"time": 594,
	"startDay": "2022-5-1",
	"endDay": "2022-6-1",
	"data": [
		{
			"no": "1",
			"songNumber": "28822",
			"title": "Lemon(ドラマ'アンナチュラル' OST)",
			"singer": "米津玄師"
		},
		{
			"no": "2",
			"songNumber": "68058",
			"title": "Pretender",
			"singer": "Official髭男dism"
		}
        ...
	]
}
```
