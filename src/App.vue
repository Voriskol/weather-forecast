<template>
  <main>
    <section class="upper-block">
      <div class="main-info">
        <div class="search-wrapper">
          <input type="text" class="search" placeholder="Search for a city" />
          <img src="@/assets/img/search.svg" alt="search" class="search__icon icon">
        </div>

        <div class="weather-info">
          <img
            src="@/assets/img/weather-main/thunderstorm.png"
            alt="weather-icon"
            class="main-info__icon icon"
          />
          <h2 class="temperature">14°C</h2>
          <div class="weather-description">
            <img class="weather-description__icon icon" src="@/assets/img/weather.svg" alt="" />
            <span>Thunderstorm</span>
          </div>
        </div>
        <div class="city-date">
          <div class="city">
            <img class="city__icon icon" src="@/assets/img/location.svg" alt="city icon" />
            <p>Paris, FR</p>
          </div>
          <div class="date">
            <img class="date__icon icon" src="@/assets/img/calendar.svg" alt="date icon" />
            <p>Thu, March 16, 2023</p>
          </div>
        </div>
      </div>
      <div class="highlights">
        <h2>Today's highlights</h2>
        <div class="highlights-wrapper">
          <div class="highlights-item">
            <div class="highlights-item__main">
              <p class="highlights-item__main-text">Wind</p>
              <img
                class="highlights-item__main-icon icon"
                src="@/assets/img/equalizer (2).png"
                alt="wind"
              />
              <div class="highlights-item__main-text-wrapper">
                <p class="highlights-item__main-text">14 km/h</p>
                <p class="highlights-item__main-text">350 deg</p>
              </div>
            </div>
            <div class="highlights-item__sub">
              <p class="highlights-item__sub-text">Wind gusts</p>
              <div class="highlights-item__sub-text-wrapper">
                <p class="highlights-item__sub-text">14 m/s</p>
                <div class="highlights-item__sub-text-sub-wrapper">
                  <img src="@/assets/img/gusts.svg" alt="gusts" class="icon highlights-item__sub-icon" />
                  <p class="highlights-item__sub-text__gray">Learn more about gusts</p>
                </div>
              </div>
            </div>
          </div>
          <div class="highlights-item">
            <div class="highlights-item__main">
              <p class="highlights-item__main-text">Pressure</p>
              <img
                class="highlights-item__main-icon icon"
                src="@/assets/img/barometer.png"
                alt="pressure"
              />
              <div class="highlights-item__main-text-wrapper">
                <p class="highlights-item__main-text">765 mm</p>
              </div>
            </div>
            <div class="highlights-item__sub">
              <p class="highlights-item__sub-text">Feels like</p>
              <div class="highlights-item__sub-text-wrapper">
                <p class="highlights-item__sub-text">21°C</p>
                <div class="highlights-item__sub-text-sub-wrapper">
                  <img src="@/assets/img/humidity.svg" alt="humidity" class="icon highlights-item__sub-icon" />
                  <p class="highlights-item__sub-text__gray">How hot or cold it really feels</p>
                </div>
              </div>
            </div>
          </div>
          <div class="highlights-item">
            <div class="highlights-item__main">
              <p class="highlights-item__main-text">Sunrise and sunset</p>
              <img
                class="highlights-item__main-icon icon"
                src="@/assets/img/sun-moving.png"
                alt="sun-moving"
              />
              <div class="highlights-item__main-text-wrapper">
                <div class="sun sunrise">
                  <img class="sun__icon icon" src="@/assets/img/sun.svg" alt="sunrise" />
                  <p class="sun__text">Sunrise</p>
                  <p class="sun__time">7:31:42</p>
                </div>
                <div class="sun sunset">
                  <img class="sun__icon icon" src="@/assets/img/sun.svg" alt="sunrise" />
                  <p class="sun__text">Sunset</p>
                  <p class="sun__time">18:34:19</p>
                </div>
              </div>
            </div>
            <div class="highlights-item__sub">
              <p class="highlights-item__sub-text">Cloudiness</p>
              <div class="highlights-item__sub-text-wrapper">
                <p class="highlights-item__sub-text">80%</p>
                <div class="highlights-item__sub-text-sub-wrapper">
                  <img src="@/assets/img/cloud.svg" alt="cloud" class="icon highlights-item__sub-icon" />
                  <p class="highlights-item__sub-text__gray">The sky fraction obscured by clouds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bottom-block">
      <div class="coordinates">
        <img src="@/assets/img/compass.png" alt="compass" class="icon" />
        <div class="coordinates-info">
          <div class="longitude">
            <h2 class="longitude-title">Longitude: 2.3488</h2>
            <p class="longitude-text">Longitude measures east and west.</p>
          </div>
          <div class="latitude">
            <h2 class="latitude-title">Latitude: 48.8534</h2>
            <p class="latitude-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quia facere asperiores
              perferendis repellendus fugit impedit quas repudiandae natus minima?
            </p>
          </div>
        </div>
      </div>
      <div class="humidity">
        <img src="@/assets/img/humidity.png" alt="humidity" class="icon" />
        <div class="humidity-info">
          <h2 class="humidity-title">Humidity: 60%</h2>
          <p class="humidity-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore corrupti alias
            recusandae quo soluta mollitia ipsam laudantium, labore quod a. Commodi, reiciendis.
            Dolorum laboriosam a voluptatum tempora nesciunt! Earum, iste.
          </p>
          <p class="humidity-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </section>
  </main>
</template>
