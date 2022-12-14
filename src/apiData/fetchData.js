import { DELAY } from "../utils/enums"

const allOutageData = [
    {
        "id": "0291a763-0152-4218-bf3e-08e7707be50c",
        "begin": "2022-12-21T20:09:18.763Z",
        "end": "2022-12-25T07:40:51.214Z"
    },
    {
        "id": "0730cde6-4a1f-48ee-905a-d6f4ea47a301",
        "begin": "2022-02-02T22:22:40.294Z",
        "end": "2022-07-24T03:22:18.935Z"
    },
    {
        "id": "073aefad-cd2e-421d-a83d-4950c70b7a8e",
        "begin": "2021-01-23T13:01:35.339Z",
        "end": "2022-03-30T11:52:33.629Z"
    },
    {
        "id": "09c0e87b-6a0a-4a2e-b2c2-d92b282ee68a",
        "begin": "2021-10-07T18:34:12.988Z",
        "end": "2022-07-17T12:20:12.470Z"
    },
    {
        "id": "0c96f30c-6478-4195-83e0-c0e878a79159",
        "begin": "2021-03-18T02:30:13.889Z",
        "end": "2021-05-14T10:41:52.201Z"
    },
    {
        "id": "0cf34655-89c9-4cb6-a464-663c5f1c4c45",
        "begin": "2021-11-02T09:53:27.196Z",
        "end": "2022-08-12T20:18:45.001Z"
    },
    {
        "id": "0df3cc1c-3974-4ab8-973d-050d87b63f9f",
        "begin": "2021-09-13T08:58:18.727Z",
        "end": "2022-12-11T07:23:23.663Z"
    },
    {
        "id": "0e4d59ba-43c7-4451-a8ac-ca628bcde417",
        "begin": "2022-02-15T11:28:26.735Z",
        "end": "2022-08-28T03:37:48.568Z"
    },
    {
        "id": "0e4d59ba-43c7-4451-a8ac-ca628bcde417",
        "begin": "2020-10-29T20:23:43.559Z",
        "end": "2023-05-29T00:59:55.313Z"
    },
    {
        "id": "0e95d84f-5e1d-4133-84a9-76758cb544fd",
        "begin": "2021-02-18T07:10:28.258Z",
        "end": "2022-08-06T15:01:38.832Z"
    },
    {
        "id": "0fc0c44f-b9a2-45c9-b298-eb3fab1f1203",
        "begin": "2022-01-19T17:03:16.353Z",
        "end": "2022-02-18T04:23:35.289Z"
    },
    {
        "id": "111183e7-fb90-436b-9951-63392b36bdd2",
        "begin": "2022-01-01T00:00:00.000Z",
        "end": "2022-09-15T19:45:10.341Z"
    },
    {
        "id": "111183e7-fb90-436b-9951-63392b36bdd2",
        "begin": "2022-02-18T01:01:20.142Z",
        "end": "2022-08-15T14:34:50.366Z"
    },
    {
        "id": "111183e7-fb90-436b-9951-63392b36bdd2",
        "begin": "2021-02-14T07:16:56.370Z",
        "end": "2022-01-08T18:41:01.238Z"
    },
    {
        "id": "115bf855-143d-4efb-9c39-140a7396eb2d",
        "begin": "2021-01-19T00:05:19.502Z",
        "end": "2021-04-21T01:37:17.397Z"
    },
    {
        "id": "136c5c31-0a3c-494c-b76c-26561fe6af50",
        "begin": "2022-10-27T23:14:12.997Z",
        "end": "2022-12-24T05:28:43.648Z"
    },
    {
        "id": "14b8ead5-6364-4aca-9769-a0678de417bf",
        "begin": "2021-02-26T09:15:28.366Z",
        "end": "2021-12-23T16:36:11.835Z"
    },
    {
        "id": "15dc3899-5398-4d01-a884-93dc152551a1",
        "begin": "2022-10-26T12:25:17.635Z",
        "end": "2022-12-29T09:07:25.924Z"
    },
    {
        "id": "20f6e664-f00e-4621-9ca4-5ec588aadeaf",
        "begin": "2022-02-15T11:28:26.965Z",
        "end": "2023-12-24T14:20:37.532Z"
    },
    {
        "id": "20f6e664-f00e-4621-9ca4-5ec588aadeaf",
        "begin": "2020-09-28T16:01:01.523Z",
        "end": "2022-02-07T13:25:05.077Z"
    },
    {
        "id": "24b7860b-430a-4a57-b9bd-6702a9a5f64b",
        "begin": "2021-12-01T21:20:26.462Z",
        "end": "2022-07-31T09:52:16.498Z"
    },
    {
        "id": "2a28ba00-8651-437a-8f5b-f7625902f7d5",
        "begin": "2021-01-15T07:21:58.764Z",
        "end": "2022-03-13T22:03:42.064Z"
    },
    {
        "id": "2a9e54a4-f5a5-4608-aa3e-9ec8f5bc935f",
        "begin": "2021-07-10T05:58:52.510Z",
        "end": "2022-04-13T22:51:53.964Z"
    },
    {
        "id": "2e328d5b-4343-49eb-85e6-dfadf58c1eda",
        "begin": "2022-01-19T19:58:24.396Z",
        "end": "2022-09-30T20:21:11.186Z"
    },
    {
        "id": "3237f49f-4fd9-40f7-97f8-6bac9b5dd580",
        "begin": "2022-10-10T09:10:12.859Z",
        "end": "2022-12-22T07:17:26.371Z"
    },
    {
        "id": "34c6b911-0d61-43ad-8710-32f158e94d9c",
        "begin": "2021-03-28T21:12:55.233Z",
        "end": "2021-09-30T06:14:31.378Z"
    },
    {
        "id": "35d3a12f-71fb-4fd9-8959-b55405e1dd00",
        "begin": "2021-05-28T16:47:24.210Z",
        "end": "2021-12-27T21:20:29.990Z"
    },
    {
        "id": "3b3b1195-9e47-4dda-8801-6e36578ca085",
        "begin": "2022-07-14T21:50:13.051Z",
        "end": "2022-11-18T13:06:26.791Z"
    },
    {
        "id": "40c7d9bd-8370-43d2-8047-cccdaab9d806",
        "begin": "2021-12-28T07:05:17.242Z",
        "end": "2022-06-15T19:57:43.640Z"
    },
    {
        "id": "43f8bbc6-ac8a-4922-85f0-a2381855499f",
        "begin": "2021-05-14T05:44:31.312Z",
        "end": "2021-05-20T22:51:53.395Z"
    },
    {
        "id": "44335ede-8b8e-4aef-9ada-20a49adac2f7",
        "begin": "2021-02-26T10:44:03.981Z",
        "end": "2021-11-21T18:32:56.370Z"
    },
    {
        "id": "468f7d38-2bf0-4403-910b-50bf7efb06bf",
        "begin": "2022-06-11T12:45:17.701Z",
        "end": "2022-09-20T19:10:16.766Z"
    },
    {
        "id": "46f48803-a4ee-44db-b996-c0e7176ae0f6",
        "begin": "2022-03-22T16:19:16.001Z",
        "end": "2022-09-17T14:51:22.048Z"
    },
    {
        "id": "48a36d1d-116e-4884-a186-1ea1ab3e7c50",
        "begin": "2022-12-14T11:47:29.754Z",
        "end": "2022-12-16T08:02:19.667Z"
    },
    {
        "id": "4e06bdb6-3ddf-4040-aa2c-3419013494b9",
        "begin": "2022-12-03T09:17:44.443Z",
        "end": "2022-12-09T05:54:21.790Z"
    },
    {
        "id": "53982139-3ab1-40f3-81b3-bc25a2fd7fe0",
        "begin": "2021-07-23T22:05:01.838Z",
        "end": "2022-06-27T11:33:03.906Z"
    },
    {
        "id": "5450956f-28c0-4757-a958-b59001ebdfe1",
        "begin": "2022-09-29T18:18:34.347Z",
        "end": "2022-10-31T04:05:57.250Z"
    },
    {
        "id": "555e9286-15d3-4617-b00c-6bf51cd0cec6",
        "begin": "2022-02-26T11:41:36.311Z",
        "end": "2022-05-14T06:13:51.141Z"
    },
    {
        "id": "5613c0c3-cba6-4259-82d6-48af7d3b8438",
        "begin": "2022-11-15T05:35:11.412Z",
        "end": "2022-12-20T20:51:26.359Z"
    },
    {
        "id": "5652b414-748b-4591-820b-dee1c99d2c9c",
        "begin": "2022-06-24T05:03:18.977Z",
        "end": "2022-10-22T08:49:35.859Z"
    },
    {
        "id": "5e3a44f9-3f13-438c-a7ae-36b279d231cb",
        "begin": "2021-09-20T17:27:50.093Z",
        "end": "2022-09-28T17:09:28.335Z"
    },
    {
        "id": "60606ab6-3323-48ae-8574-192c06385403",
        "begin": "2021-11-25T12:59:11.746Z",
        "end": "2022-08-25T17:20:54.619Z"
    },
    {
        "id": "655b03c5-5e29-4bcd-bf14-ba66b3136e70",
        "begin": "2022-03-02T09:58:32.530Z",
        "end": "2022-07-23T07:34:35.662Z"
    },
    {
        "id": "6cd27ee7-87fc-47a3-9277-c50c44fac8a6",
        "begin": "2022-02-26T07:34:51.987Z",
        "end": "2022-10-24T04:23:36.130Z"
    },
    {
        "id": "701ea7f5-eb08-46a7-9e07-86d479c6c613",
        "begin": "2022-08-05T04:34:50.646Z",
        "end": "2022-08-13T16:45:25.007Z"
    },
    {
        "id": "70656668-571e-49fa-be2e-099c67d136ab",
        "begin": "2022-04-08T16:29:22.128Z",
        "end": "2022-06-09T22:10:59.718Z"
    },
    {
        "id": "70656668-571e-49fa-be2e-099c67d136ab",
        "begin": "2020-07-30T15:05:21.037Z",
        "end": "2023-03-03T21:40:14.145Z"
    },
    {
        "id": "72c055db-f240-40f2-9a2d-bf6307bd7376",
        "begin": "2021-12-10T09:46:46.205Z",
        "end": "2022-07-21T06:09:50.243Z"
    },
    {
        "id": "7397e073-6fb9-4a26-a581-f458dbb8f9a4",
        "begin": "2021-10-29T10:18:06.306Z",
        "end": "2022-06-29T07:55:34.966Z"
    },
    {
        "id": "75e96db4-bba2-4035-8f43-df2cbd3da859",
        "begin": "2023-05-11T14:35:15.359Z",
        "end": "2023-12-27T11:19:19.393Z"
    },
    {
        "id": "75e96db4-bba2-4035-8f43-df2cbd3da859",
        "begin": "2021-03-13T23:13:48.815Z",
        "end": "2021-04-15T22:11:23.977Z"
    },
    {
        "id": "75ff7313-ea07-4a77-ba8c-44976ccd7f1a",
        "begin": "2021-06-17T22:53:04.069Z",
        "end": "2022-05-17T03:22:37.771Z"
    },
    {
        "id": "76461d45-52da-401a-bc70-f9f44500c6a6",
        "begin": "2021-07-10T19:30:01.773Z",
        "end": "2022-11-16T07:04:12.485Z"
    },
    {
        "id": "775b1968-85ea-4aca-9c06-1427d165b66c",
        "begin": "2021-06-15T05:48:40.596Z",
        "end": "2021-12-07T03:14:39.080Z"
    },
    {
        "id": "7fa6e3cb-e61d-48f9-a305-6d117f09cd86",
        "begin": "2022-01-01T19:37:51.191Z",
        "end": "2022-01-19T05:17:40.761Z"
    },
    {
        "id": "8342f548-ecad-4b57-b75b-972e3ec4f06a",
        "begin": "2022-11-23T22:00:40.103Z",
        "end": "2022-12-30T11:51:53.709Z"
    },
    {
        "id": "86b5c819-6a6c-4978-8c51-a2d810bb9318",
        "begin": "2022-02-16T07:01:50.149Z",
        "end": "2022-10-03T07:46:31.410Z"
    },
    {
        "id": "86b5c819-6a6c-4978-8c51-a2d810bb9318",
        "begin": "2022-05-09T04:47:25.211Z",
        "end": "2022-12-02T18:37:16.039Z"
    },
    {
        "id": "86b5c819-6a6c-4978-8c51-a2d810bb9318",
        "begin": "2021-10-24T02:46:52.779Z",
        "end": "2023-04-25T00:04:34.178Z"
    },
    {
        "id": "87db0b5a-21f5-429a-a19b-6ace8b8e1810",
        "begin": "2021-04-03T20:35:33.250Z",
        "end": "2022-10-16T20:35:39.524Z"
    },
    {
        "id": "87f43374-26d2-4270-8f33-9e1bbf7f1abb",
        "begin": "2022-09-30T08:13:46.615Z",
        "end": "2022-11-09T01:14:41.463Z"
    },
    {
        "id": "89aa842a-6ed8-420c-9864-3178ab502369",
        "begin": "2021-12-15T17:56:17.493Z",
        "end": "2022-01-25T22:20:42.563Z"
    },
    {
        "id": "92b3d400-9da9-43a5-a23e-c04251221779",
        "begin": "2022-07-18T17:31:53.224Z",
        "end": "2022-08-28T00:10:59.163Z"
    },
    {
        "id": "92e04023-0b80-4536-a8ad-49aa49ba81bb",
        "begin": "2021-05-26T22:16:11.832Z",
        "end": "2021-10-11T09:19:21.965Z"
    },
    {
        "id": "935e8107-bd40-48f3-9cc4-f552c8c8f130",
        "begin": "2022-09-09T01:23:59.529Z",
        "end": "2022-12-15T19:38:28.685Z"
    },
    {
        "id": "9494cda9-01c8-4d3e-b1fc-fc373b2fb598",
        "begin": "2022-04-16T22:25:13.010Z",
        "end": "2022-05-08T07:37:19.422Z"
    },
    {
        "id": "97e84b57-d9b1-4a0b-ad29-f1dd2d797ad1",
        "begin": "2022-05-16T20:15:23.438Z",
        "end": "2022-10-12T18:31:21.327Z"
    },
    {
        "id": "98fb29c2-0283-4f84-a012-0350eb515dfc",
        "begin": "2022-05-30T20:14:31.961Z",
        "end": "2022-09-09T07:29:38.949Z"
    },
    {
        "id": "9ed11921-1c5b-40f4-be66-adb4e2f016bd",
        "begin": "2022-01-12T08:11:21.333Z",
        "end": "2022-12-13T07:20:57.984Z"
    },
    {
        "id": "9ed11921-1c5b-40f4-be66-adb4e2f016bd",
        "begin": "2021-12-31T23:59:59.999Z",
        "end": "2022-07-17T11:36:59.310Z"
    },
    {
        "id": "9f23b59e-d99d-4f3b-a47b-22cc3f1582d0",
        "begin": "2022-08-27T21:26:50.807Z",
        "end": "2022-11-09T22:44:49.798Z"
    },
    {
        "id": "a0116e6e-21df-4984-9eb2-b9ddd40a499e",
        "begin": "2021-07-14T16:49:15.414Z",
        "end": "2022-12-06T11:53:32.499Z"
    },
    {
        "id": "a141ddd3-5a1b-43a3-a878-a65185d30ee9",
        "begin": "2022-10-06T13:57:41.469Z",
        "end": "2022-11-10T18:31:29.572Z"
    },
    {
        "id": "a79fe094-087b-4b1e-ae20-ac4bf7fa429b",
        "begin": "2022-02-23T11:33:58.552Z",
        "end": "2022-12-16T00:52:16.126Z"
    },
    {
        "id": "a79fe094-087b-4b1e-ae20-ac4bf7fa429b",
        "begin": "2020-03-03T23:14:30.832Z",
        "end": "2023-12-15T15:12:32.953Z"
    },
    {
        "id": "a84ce7de-27ab-410d-b3d9-fb97ee32b26f",
        "begin": "2022-07-28T11:38:22.649Z",
        "end": "2022-10-10T22:02:35.756Z"
    },
    {
        "id": "a8e26286-9dda-4d1c-ae6c-a7c535d6972c",
        "begin": "2021-05-30T14:53:19.698Z",
        "end": "2022-10-23T20:10:59.888Z"
    },
    {
        "id": "ad5b32d9-4c1b-4c69-9d4b-cc0ea7e27fff",
        "begin": "2022-06-07T08:18:29.984Z",
        "end": "2022-11-13T00:08:49.790Z"
    },
    {
        "id": "b3263cd0-8b51-4e3a-b789-81aaa7265fbc",
        "begin": "2022-08-25T00:49:24.899Z",
        "end": "2022-12-06T10:16:52.277Z"
    },
    {
        "id": "b50f36d8-e8b6-4ee1-84eb-d35cfc167139",
        "begin": "2022-06-06T02:32:05.685Z",
        "end": "2022-12-21T07:48:57.557Z"
    },
    {
        "id": "b7af41e4-9017-4477-91ed-fca02e5dc5da",
        "begin": "2021-02-03T13:24:42.475Z",
        "end": "2021-05-16T07:15:39.130Z"
    },
    {
        "id": "b7d18ede-548a-4a4e-b295-1fa2776249c6",
        "begin": "2021-02-17T03:09:33.892Z",
        "end": "2022-02-15T01:04:49.726Z"
    },
    {
        "id": "bb40e2a6-eb94-4a97-bb94-ca2f69863eca",
        "begin": "2021-01-31T05:00:35.175Z",
        "end": "2022-11-28T17:22:45.367Z"
    },
    {
        "id": "bd70b305-1cc8-457a-bf7c-c65832ab79b2",
        "begin": "2022-02-23T04:05:57.721Z",
        "end": "2022-11-10T06:39:21.752Z"
    },
    {
        "id": "bdfa026c-4833-4bce-9ccb-c8653c3b6db3",
        "begin": "2021-02-14T20:33:05.890Z",
        "end": "2021-02-17T00:28:31.492Z"
    },
    {
        "id": "beb5f583-4fa5-4e66-ad7b-977b571ff802",
        "begin": "2022-03-09T23:45:47.854Z",
        "end": "2022-03-12T12:17:32.639Z"
    },
    {
        "id": "c612e2f0-7302-4cee-8615-5b9b0269ed61",
        "begin": "2021-03-25T21:53:50.481Z",
        "end": "2022-03-25T21:05:18.001Z"
    },
    {
        "id": "cefad62a-b740-4a77-8f84-d055d606583d",
        "begin": "2022-12-27T23:36:10.789Z",
        "end": "2022-12-28T05:01:12.072Z"
    },
    {
        "id": "d4b08662-4067-430f-b4a6-432792b03c42",
        "begin": "2021-11-06T03:28:36.850Z",
        "end": "2022-11-25T00:44:48.457Z"
    },
    {
        "id": "d4d7c69d-894c-4f0a-877e-00a3c8f74d64",
        "begin": "2021-07-31T11:34:34.905Z",
        "end": "2021-09-27T01:52:42.400Z"
    },
    {
        "id": "d9ad86d0-23cf-4a18-aa96-d75d35a3ab2a",
        "begin": "2022-02-20T21:39:55.665Z",
        "end": "2022-10-05T18:31:49.017Z"
    },
    {
        "id": "d9bd0af0-5b52-4db5-b6eb-7595b294f677",
        "begin": "2022-04-02T17:08:42.717Z",
        "end": "2022-06-02T01:44:37.382Z"
    },
    {
        "id": "db8754f3-d0a0-4b9a-acba-f022ead6e379",
        "begin": "2021-10-19T15:09:45.542Z",
        "end": "2022-03-26T23:21:59.848Z"
    },
    {
        "id": "dc73f610-c996-4c02-a17b-efadc5ac6c01",
        "begin": "2021-02-03T05:40:23.798Z",
        "end": "2021-06-12T17:23:36.379Z"
    },
    {
        "id": "dc83cf55-b291-463b-ab0b-69aea0514aac",
        "begin": "2021-02-04T08:56:10.951Z",
        "end": "2022-12-02T21:12:42.951Z"
    },
    {
        "id": "e15b60d2-b17e-43c1-9c5c-71d0999cc965",
        "begin": "2022-09-14T20:46:34.998Z",
        "end": "2022-12-06T07:57:24.212Z"
    },
    {
        "id": "e22a08c6-b3f9-46c5-80e7-057b03858ddb",
        "begin": "2022-11-22T20:34:12.946Z",
        "end": "2022-12-27T11:50:53.090Z"
    },
    {
        "id": "e3b9d3d8-da73-4c94-8c11-35d63f9b8c6e",
        "begin": "2022-03-06T11:52:59.859Z",
        "end": "2022-10-15T10:20:39.920Z"
    },
    {
        "id": "e47d66ae-42a5-4eeb-8411-a1ad59819f9d",
        "begin": "2021-09-09T17:35:34.366Z",
        "end": "2022-10-29T18:29:01.809Z"
    },
    {
        "id": "e548f2c0-099d-4d79-9c79-0617a428d427",
        "begin": "2022-03-06T03:13:50.288Z",
        "end": "2022-09-05T09:44:42.395Z"
    },
    {
        "id": "ece1b590-9298-4a26-a005-9ace776daf14",
        "begin": "2022-10-22T07:11:08.769Z",
        "end": "2022-12-01T07:04:01.269Z"
    },
    {
        "id": "ee244622-3fbe-44e9-80af-61fca1c47736",
        "begin": "2022-11-21T12:49:12.320Z",
        "end": "2022-12-02T17:07:19.659Z"
    },
    {
        "id": "eeb98d1e-0fcc-462e-b0c4-d9ff376f3f33",
        "begin": "2021-12-06T15:51:12.978Z",
        "end": "2022-10-15T15:32:03.848Z"
    },
    {
        "id": "eec5c76c-03d8-490d-819b-afb9fc2cc1eb",
        "begin": "2021-02-14T21:48:43.572Z",
        "end": "2022-03-02T03:54:00.080Z"
    },
    {
        "id": "f182dbca-0731-46df-9779-5fb14d8ad325",
        "begin": "2022-10-04T00:33:43.650Z",
        "end": "2022-12-25T07:57:02.195Z"
    },
    {
        "id": "faadfe77-fc91-4f3d-8efa-cecc81e0b181",
        "begin": "2021-09-17T09:44:06.899Z",
        "end": "2022-03-09T00:46:04.981Z"
    },
    {
        "id": "fc14fe2a-493b-4192-a31c-bb29db6a26ab",
        "begin": "2021-11-29T12:07:32.464Z",
        "end": "2021-11-30T12:32:33.376Z"
    },
    {
        "id": "fcfb791f-4776-4cf2-8d80-2dcf91264f36",
        "begin": "2021-11-12T09:43:13.743Z",
        "end": "2022-08-09T04:32:38.136Z"
    }
]
const siteInfoData = [
    {
        "id": "kingfisher",
        "name": "KingFisher",
        "devices": [
            {
                "id": "002b28fc-283c-47ec-9af2-ea287336dc1b",
                "name": "Battery 1"
            },
            {
                "id": "086b0d53-b311-4441-aaf3-935646f03d4d",
                "name": "Battery 2"
            }
        ]
    },
    {
        "id": "pear-tree",
        "name": "Pear Tree",
        "devices": [
            {
                "id": "44c02564-a229-4f51-8ded-cc7bcb202566",
                "name": "Partridge"
            }
        ]
    }
]

export const fetchAllOutageData = () => new Promise((resolve, reject) => setTimeout(() => {
    if( allOutageData !== [] ) { 
        resolve(allOutageData)
    }
}, DELAY));

export const fetchSiteInfoData = (siteId) => new Promise((resolve, reject) => setTimeout(() => {
    const data = siteInfoData.find( value => value.id === siteId);
    resolve(data);
}, DELAY));

export const pushAllOutageInfoForOneSite = (siteId, bodyData) => new Promise((resolve, reject) => setTimeout(() => {
    const data = siteInfoData.find( value => value.id === siteId);
    resolve(data);
}, DELAY));