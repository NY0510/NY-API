# NY-API

**Base URL: https://api.ny64.kr**

## Random NSFW Image

**GET `/nsfw?categorie=${IMAGE_CATEGORY}`**

### Parameter

| Name      | Type   | Description                                                                                                             | Required |
| --------- | ------ | ----------------------------------------------------------------------------------------------------------------------- | :------: |
| categorie | String | 이미지 카테고리<br>다음 값 사용 가능: **waifu, neko, trap, blowjob**<br>값이 비여있거나, 올바르지 않을 시 랜덤으로 선택 |    X     |
