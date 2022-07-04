import "../index.css";
function Header() {
  return (
    <header class="header">
      <div class="header--container container">
        <div class="header--container--btn" id="btn-menuWrapper">
          <div class="header--container--btn__stripe" id="menuStripe1"></div>
          <div class="header--container--btn__stripe" id="menuStripe2"></div>
          <div class="header--container--btn__stripe" id="menuStripe3"></div>
          <span class="cross" id="cross"></span>
          <button
            class="header--container--btn__show"
            id="btnShowMenu"
          ></button>

          <button
            class="header--container--btn__show header--container--btn__hide"
            id="btnHideMenu"
          ></button>
        </div>
        <a class="header--container--logo" href="#">
          <svg
            width="78"
            height="62"
            viewBox="0 0 78 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_1_13)">
              <path
                d="M4.05208 33.8371C4.05208 31.3316 5.14583 29.2323 7.33333 27.5394C9.52083 25.8465 12.4722 25 16.1875 25C19.9375 25 22.9583 25.8295 25.25 27.4886C27.5417 29.1477 28.7569 31.4162 28.8958 34.2942H19.7812C19.6771 33.3123 19.3299 32.6521 18.7396 32.3135C18.1493 31.941 17.2639 31.7548 16.0833 31.7548C13.7569 31.7548 12.5938 32.4489 12.5938 33.8371C12.5938 35.0899 14.0174 35.9533 16.8646 36.4273C19.7465 36.9013 22.3681 37.6293 24.7292 38.6112C25.9444 39.0852 26.9514 39.8809 27.75 40.9982C28.5833 42.0817 29 43.4191 29 45.0105C29 47.6515 27.8368 49.8184 25.5104 51.5114C23.184 53.1705 20.25 54 16.7083 54C13.1667 54 10.2153 53.2212 7.85417 51.6637C5.49306 50.0724 4.20833 47.7361 4 44.655H13.1146C13.3576 46.3818 14.6076 47.2452 16.8646 47.2452C17.9063 47.2452 18.7569 47.0082 19.4167 46.5342C20.1111 46.0601 20.4583 45.4507 20.4583 44.7058C20.4583 43.9609 19.8854 43.3684 18.7396 42.9282C17.6285 42.488 16.2743 42.1156 14.6771 41.8109C13.0799 41.5061 11.4653 41.1337 9.83333 40.6935C8.23611 40.2195 6.86458 39.4238 5.71875 38.3065C4.60764 37.1553 4.05208 35.6655 4.05208 33.8371Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M57 46.4784H60.0863C61.8403 46.4784 62.7173 45.804 62.7173 44.4553V32.4207H57.0506V25.0548H62.7173V18H71.369V25.0548H74V32.4207H71.369V44.4553C71.369 47.9481 70.5089 50.4207 68.7887 51.8732C67.0347 53.2911 64.5724 54 61.4018 54H58H57H44V46.4784L57 46.5V46.4784Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M37.5513 0V13.5568C39.5249 10.5441 42.6715 9.03784 46.991 9.03784C50.5658 9.03784 53.4517 10.1333 55.6486 12.3243C57.8829 14.5153 59 17.4937 59 21.2595V25H59.05V38H59H58.9445H51.9855C51.9951 37.8346 52 37.6678 52 37.5C52 35.1475 51.0443 33.0182 49.5 31.4792V25H49.5045V22.4405C49.5045 20.5919 48.9646 19.1712 47.8847 18.1784C46.842 17.1513 45.3898 16.6378 43.5279 16.6378C41.6661 16.6378 40.1952 17.1513 39.1153 18.1784C38.0727 19.1712 37.5513 20.5919 37.5513 22.4405V25.96L37.55 25.9605V31.4298C35.9763 32.9725 35 35.1222 35 37.5C35 37.6678 35.0049 37.8346 35.0145 38H28.0555H28V25V0H37.5513Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M31.7547 49.4343C28.5849 46.3905 27 42.3835 27 37.4133C27 32.4431 28.5849 28.4746 31.7547 25.5079C34.9245 22.5026 38.8491 21 43.5283 21C48.2075 21 52.1132 22.5026 55.2453 25.5079C58.4151 28.4746 60 32.4431 60 37.4133C60 42.3835 58.434 46.3905 55.3019 49.4343C52.1698 52.4781 48.2642 54 43.5849 54C38.9057 54 34.9623 52.4781 31.7547 49.4343ZM43.5 45C47.6421 45 51 41.6421 51 37.5C51 33.3579 47.6421 30 43.5 30C39.3579 30 36 33.3579 36 37.5C36 41.6421 39.3579 45 43.5 45Z"
                fill="#DA0000"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1_13"
                x="0"
                y="0"
                width="78"
                height="62"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_13"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_13"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </a>
        <div class="header--container__buttonWrapper buttonWrapper">
          <div class="header--container__buttonWrapper__box buttonBox">
            <button class="header--container__buttonWrapper__btn btn">
              Help me to start
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
