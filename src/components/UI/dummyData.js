export const dummyCities = [
  {
    Version: 1,
    Key: "328328",
    Type: "City",
    Rank: 10,
    LocalizedName: "London",
    Country: {
      ID: "GB",
      LocalizedName: "United Kingdom",
    },
    AdministrativeArea: {
      ID: "LND",
      LocalizedName: "London",
    },
  },
  {
    Version: 1,
    Key: "55489",
    Type: "City",
    Rank: 35,
    LocalizedName: "London",
    Country: {
      ID: "CA",
      LocalizedName: "Canada",
    },
    AdministrativeArea: {
      ID: "ON",
      LocalizedName: "Ontario",
    },
  },
  {
    Version: 1,
    Key: "329139",
    Type: "City",
    Rank: 41,
    LocalizedName: "Londonderry",
    Country: {
      ID: "GB",
      LocalizedName: "United Kingdom",
    },
    AdministrativeArea: {
      ID: "DRS",
      LocalizedName: "Derry City and Strabane",
    },
  },
  {
    Version: 1,
    Key: "2174076",
    Type: "City",
    Rank: 65,
    LocalizedName: "Londonderry",
    Country: {
      ID: "US",
      LocalizedName: "United States",
    },
    AdministrativeArea: {
      ID: "NH",
      LocalizedName: "New Hampshire",
    },
  },
  {
    Version: 1,
    Key: "711822",
    Type: "City",
    Rank: 75,
    LocalizedName: "London Colney",
    Country: {
      ID: "GB",
      LocalizedName: "United Kingdom",
    },
    AdministrativeArea: {
      ID: "HRT",
      LocalizedName: "Hertfordshire",
    },
  },
  {
    Version: 1,
    Key: "333298",
    Type: "City",
    Rank: 75,
    LocalizedName: "London",
    Country: {
      ID: "US",
      LocalizedName: "United States",
    },
    AdministrativeArea: {
      ID: "KY",
      LocalizedName: "Kentucky",
    },
  },
  {
    Version: 1,
    Key: "335012",
    Type: "City",
    Rank: 75,
    LocalizedName: "London",
    Country: {
      ID: "US",
      LocalizedName: "United States",
    },
    AdministrativeArea: {
      ID: "OH",
      LocalizedName: "Ohio",
    },
  },
  {
    Version: 1,
    Key: "2523034",
    Type: "City",
    Rank: 85,
    LocalizedName: "London Apprentice",
    Country: {
      ID: "GB",
      LocalizedName: "United Kingdom",
    },
    AdministrativeArea: {
      ID: "CON",
      LocalizedName: "Cornwall",
    },
  },
  {
    Version: 1,
    Key: "2123173",
    Type: "City",
    Rank: 85,
    LocalizedName: "London",
    Country: {
      ID: "US",
      LocalizedName: "United States",
    },
    AdministrativeArea: {
      ID: "AR",
      LocalizedName: "Arkansas",
    },
  },
  {
    Version: 1,
    Key: "2154402",
    Type: "City",
    Rank: 85,
    LocalizedName: "London",
    Country: {
      ID: "US",
      LocalizedName: "United States",
    },
    AdministrativeArea: {
      ID: "CA",
      LocalizedName: "California",
    },
  },
];

export const dummyCity = [
  {
    LocalObservationDateTime: "2021-12-19T19:48:00+02:00",
    EpochTime: 1639936080,
    WeatherText: "Partly cloudy",
    WeatherIcon: 35,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: false,
    Temperature: {
      Metric: { Value: 16.8, Unit: "C", UnitType: 17 },
      Imperial: { Value: 62.0, Unit: "F", UnitType: 18 },
    },
    MobileLink:
      "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    Link: "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
  },
];


export const dummyForecasts = {
    Headline: {
      EffectiveDate: "2021-12-21T01:00:00+02:00",
      EffectiveEpochDate: 1640041200,
      Severity: 3,
      Text: "Expect rainy weather late Monday night through Wednesday morning",
      Category: "rain",
      EndDate: "2021-12-22T13:00:00+02:00",
      EndEpochDate: 1640170800,
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us",
    },
    DailyForecasts: [
      {
        Date: "2021-12-19T07:00:00+02:00",
        EpochDate: 1639890000,
        Temperature: {
          Minimum: { Value: 52.0, Unit: "F", UnitType: 18 },
          Maximum: { Value: 66.0, Unit: "F", UnitType: 18 },
        },
        Day: {
          Icon: 3,
          IconPhrase: "Partly sunny",
          HasPrecipitation: false,
        },
        Night: {
          Icon: 35,
          IconPhrase: "Partly cloudy",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
        Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
      },
      {
        Date: "2021-12-20T07:00:00+02:00",
        EpochDate: 1639976400,
        Temperature: {
          Minimum: { Value: 49.0, Unit: "F", UnitType: 18 },
          Maximum: { Value: 59.0, Unit: "F", UnitType: 18 },
        },
        Day: {
          Icon: 13,
          IconPhrase: "Mostly cloudy w/ showers",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Heavy",
        },
        Night: {
          Icon: 12,
          IconPhrase: "Showers",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Heavy",
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
        Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
      },
      {
        Date: "2021-12-21T07:00:00+02:00",
        EpochDate: 1640062800,
        Temperature: {
          Minimum: { Value: 53.0, Unit: "F", UnitType: 18 },
          Maximum: { Value: 62.0, Unit: "F", UnitType: 18 },
        },
        Day: {
          Icon: 18,
          IconPhrase: "Rain",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Moderate",
        },
        Night: {
          Icon: 18,
          IconPhrase: "Rain",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Moderate",
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
        Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
      },
      {
        Date: "2021-12-22T07:00:00+02:00",
        EpochDate: 1640149200,
        Temperature: {
          Minimum: { Value: 52.0, Unit: "F", UnitType: 18 },
          Maximum: { Value: 61.0, Unit: "F", UnitType: 18 },
        },
        Day: {
          Icon: 12,
          IconPhrase: "Showers",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Moderate",
        },
        Night: {
          Icon: 36,
          IconPhrase: "Intermittent clouds",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Light",
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
        Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
      },
      {
        Date: "2021-12-23T07:00:00+02:00",
        EpochDate: 1640235600,
        Temperature: {
          Minimum: { Value: 52.0, Unit: "F", UnitType: 18 },
          Maximum: { Value: 63.0, Unit: "F", UnitType: 18 },
        },
        Day: {
          Icon: 13,
          IconPhrase: "Mostly cloudy w/ showers",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Light",
        },
        Night: {
          Icon: 12,
          IconPhrase: "Showers",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Moderate",
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
        Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
      },
    ],
  };
